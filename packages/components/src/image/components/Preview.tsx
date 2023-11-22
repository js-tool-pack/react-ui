import React, {
  useReducer,
  useContext,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import {
  ImagePreviewToolbarActions,
  ImagePreviewToolbar,
} from './Preview.Toolbar';
import { ImagePreviewGroupContext } from '~/image/components/Preview.Group';
import { downloadImgByFetch, onDragEvent } from '@tool-pack/dom';
import type { ImagePreviewProps } from '~/image/image.types';
import { useScrollLock, getClasses } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { createPortal } from 'react-dom';

const cls = getClasses(
  'image-preview',
  ['images', 'img', 'toolbar-wrapper', 'progress'],
  ['visible'],
);
const defaultProps = {} satisfies Partial<ImagePreviewProps>;

export const ImagePreview: React.FC<ImagePreviewProps> = React.forwardRef<
  HTMLDivElement,
  ImagePreviewProps
>((props, ref) => {
  const {
    attrs = {},
    onHide,
    images,
  } = props as RequiredPart<ImagePreviewProps, keyof typeof defaultProps>;

  useScrollLock(true);
  const [index, setIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const [move, setMove] = useState<[number, number]>([0, 0]);

  const groupImages = useContext(ImagePreviewGroupContext);
  const imageList = useMemo(() => {
    if (groupImages?.length) return groupImages;
    return images;
  }, [groupImages, images]);

  const currentImageUrl = imageList[index] as string;

  // 拖动图片
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    onDragEvent(
      ({ onDown, onMove, onUp }) => {
        let transition = '';
        onDown(() => {
          const style = getComputedStyle(img);
          transition = style.transition;
          img.style.transition = '0s';
        });
        onMove((_e, currentXY, _lastXY, downXY) => {
          setMove([currentXY.x - downXY.x, currentXY.y - downXY.y]);
        });
        onUp(() => {
          img.style.transition = transition;
          setMove([0, 0]);
        });
      },
      { el: img },
    );
  }, []);

  // 点击图片显示预览图时，显示当前图片
  useEffect(() => {
    const currentUrl = images[0];
    const index = imageList.indexOf(currentUrl);
    setIndex(index === -1 ? 0 : index);
  }, [imageList, images]);

  const [state, dispatch] = useReducer(
    (
      prevState: {
        flip: [number, number];
        rotate: number;
        zoom: number;
      },
      action: (typeof ImagePreviewToolbarActions)[number],
    ) => {
      const steps = {
        rotate: 90,
        zoom: 0.25,
      };

      // 注意：在严格模式下一定要先复制再赋值，不要去改变原值，否则严格模式执行两次的时候多操作一次会改为错误的值
      const nextState: typeof prevState = {
        ...prevState,
        flip: [...prevState.flip],
      };

      const map: Partial<Record<typeof action, () => void>> = {
        reset: () =>
          Object.assign(nextState, {
            flip: [1, 1],
            rotate: 0,
            zoom: 1,
          } as typeof nextState),
        'zoom-out': () => {
          nextState.zoom = Math.max(nextState.zoom - steps.zoom, 0.1);
        },
        'rotate-right': () => (nextState.rotate += steps.rotate),
        'rotate-left': () => (nextState.rotate -= steps.rotate),
        'flip-horizontal': () => (nextState.flip[0] *= -1),
        'flip-vertically': () => (nextState.flip[1] *= -1),
        'zoom-in': () => (nextState.zoom += steps.zoom),
      };

      map[action]?.();

      return nextState;
    },
    { flip: [1, 1], rotate: 0, zoom: 1 },
  );

  const imgStyle = useMemo((): React.CSSProperties => {
    const { zoom, flip } = state;

    let rt = state.rotate;
    while (rt < 0) rt += 360;
    rt %= 360;

    if (rt !== 0)
      if (rt % 270 === 0) {
        [move[0], move[1]] = [-move[1], move[0]];
      } else if (rt % 180 === 0) {
        move[0] *= -1;
        move[1] *= -1;
      } else if (rt % 90 === 0) {
        [move[0], move[1]] = [move[1], -move[0]];
      }

    const scale = `scale(${zoom * flip[0]}, ${zoom * flip[1]})`;
    const rotate = `rotate(${state.rotate}deg)`;
    const translate = `translate(${move[0] * flip[0]}px,${
      move[1] * flip[1]
    }px)`;

    return {
      transform: `${scale} ${rotate} ${translate}`,
    };
  }, [state, move]);

  return createPortal(
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className, {})}
      ref={ref}
    >
      <img
        className={cls.__.img}
        src={currentImageUrl}
        draggable={false}
        style={imgStyle}
        ref={imgRef}
        alt=""
      />

      <div className={cls.__['toolbar-wrapper']}>
        <div className={cls.__.progress}>
          {index + 1} / {imageList.length}
        </div>
        <ImagePreviewToolbar onTrigger={onTrigger} />
      </div>
    </div>,
    document.body,
  );
  function onTrigger(
    action: (typeof ImagePreviewToolbarActions)[number],
  ): void {
    switch (action) {
      case 'prev':
        if (imageList.length <= 1) return;
        dispatch('reset');
        setIndex((index) => (index === 0 ? imageList.length - 1 : index - 1));
        break;
      case 'next':
        if (imageList.length <= 1) return;
        dispatch('reset');
        setIndex((index) => (index >= imageList.length - 1 ? 0 : index + 1));
        break;
      case 'close':
        dispatch('reset');
        onHide?.();
        break;
      case 'download':
        downloadImgByFetch(currentImageUrl, '');
        break;
      default:
        dispatch(action);
        break;
    }
  }
});

ImagePreview.defaultProps = defaultProps;
ImagePreview.displayName = 'ImagePreview';
