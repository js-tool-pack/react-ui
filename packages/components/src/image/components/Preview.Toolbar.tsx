import {
  RotateRight,
  RotateLeft,
  Download,
  ZoomOut,
  ZoomIn,
  Right,
  Close,
  Reset,
  FlipV,
  FlipH,
  Left,
} from '@pkg/icons';
import { getClasses } from '@pkg/shared';
import { Icon } from '~/icon';
import React from 'react';

export const ImagePreviewToolbarActions = [
  'prev',
  'next',
  'rotate-left',
  'rotate-right',
  'zoom-out',
  'zoom-in',
  'reset',
  'flip-horizontal',
  'flip-vertically',
  'download',
  'close',
] as const;

const Actions = ImagePreviewToolbarActions;

const IconMap: Record<(typeof Actions)[number], React.ReactNode> = {
  'rotate-right': <RotateRight />,
  'rotate-left': <RotateLeft />,
  'flip-horizontal': <FlipH />,
  'flip-vertically': <FlipV />,
  'zoom-out': <ZoomOut />,
  download: <Download />,
  'zoom-in': <ZoomIn />,
  close: <Close />,
  reset: <Reset />,
  next: <Right />,
  prev: <Left />,
};

const cls = getClasses('image-preview-toolbar', Actions, ['visible']);

interface Props {
  onTrigger(action: (typeof Actions)[number]): void;
}

export const ImagePreviewToolbar: React.FC<Props> = (props) => {
  return (
    <div className={cls.root}>
      {Actions.map((a) => {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div onClick={() => props.onTrigger(a)} className={cls.__[a]} key={a}>
            <Icon size={22}>{IconMap[a]}</Icon>
          </div>
        );
      })}
    </div>
  );
};
