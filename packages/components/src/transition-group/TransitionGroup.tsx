import React from 'react';
import { useFlips } from './useFlips';
import { useWrapper } from './useWrapper';
import { useChildMap } from './useChildMap';
import type { TransitionGroupProps } from './transition-group.types';
import { RequiredPart } from '@tool-pack/types';
import { useForwardRef } from '@pkg/shared';

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
  tag: 'div',
  name: 't-group',
} satisfies TransitionGroupProps;

const TransitionGroup: React.FC<TransitionGroupProps> = React.forwardRef<
  HTMLDivElement,
  TransitionGroupProps
>((props, _ref) => {
  const { name, children, ...rest } = props as RequiredPart<
    TransitionGroupProps,
    keyof typeof defaultProps
  >;

  const ref = useForwardRef(_ref);
  const childMap = useChildMap(children, name);
  const wrapper = useWrapper(childMap, rest, ref);
  useFlips(ref, childMap, name);
  return wrapper;
});

TransitionGroup.defaultProps = defaultProps;
TransitionGroup.displayName = 'TransitionGroup';

export default React.memo(TransitionGroup);
