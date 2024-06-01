import type { TransitionGroupProps } from './transition-group.types';
import { useChildMap, useWrapper, useFlips } from './hooks';
import { RequiredPart } from '@tool-pack/types';
import { forwardRef, memo } from 'react';
import type { FC } from 'react';

/**
 * v1 版有部分 bug 不好解决。
 *
 * v2版参考了 {@link https://github.com/peoplesing1832/react-transition/blob/npm/src/v4/TransitionGroup.tsx} 该实现。
 *
 * 相比 v1 版， v2 需要元素外部套 Transition 组件，可随机插入(v1不行)，动画更流畅。
 *
 * 目前还是不够完美，以后需要再次优化。。。
 */

const defaultProps = {
  name: 't-group',
  tag: 'div',
} satisfies TransitionGroupProps;

const TransitionGroup: FC<TransitionGroupProps> = forwardRef<
  HTMLDivElement,
  TransitionGroupProps
>((props, ref) => {
  const { children, name, ...rest } = props as RequiredPart<
    TransitionGroupProps,
    keyof typeof defaultProps
  >;
  const childMap = useChildMap(children, name);
  const wrapper = useWrapper(childMap, rest, ref);
  useFlips(childMap, name);
  return wrapper;
});

TransitionGroup.defaultProps = defaultProps;
TransitionGroup.displayName = 'TransitionGroup';

export default memo(TransitionGroup);
