import type { TransitionGroupProps } from './transition-group.types';
import { useChildMap, useWrapper, useFlips } from './hooks';
import { mergeReactDefaultProps } from '@pkg/shared';
import { forwardRef, memo } from 'react';

/**
 * v1 版有部分 bug 不好解决。
 *
 * v2版参考了 {@link https://github.com/peoplesing1832/react-transition/blob/npm/src/v4/TransitionGroup.tsx} 该实现。
 *
 * 相比 v1 版， v2 需要元素外部套 Transition 组件，可随机插入(v1不行)，动画更流畅。
 * v3版已移除在外部套 Transition 组件的方式
 *
 * 目前 v3 还是跟 vue 的有差距，还是不够完美，以后需要再次优化。。。
 */

const defaultProps = {
  name: 't-group',
  tag: 'div',
} satisfies TransitionGroupProps;

const TransitionGroup = forwardRef<HTMLDivElement, TransitionGroupProps>(
  (props, ref) => {
    const { children, name, ...rest } = mergeReactDefaultProps(
      props,
      defaultProps,
    );
    const childMap = useChildMap(children, name);
    const wrapper = useWrapper(childMap, rest, ref);
    useFlips(childMap, name);
    return wrapper;
  },
);

TransitionGroup.displayName = 'TransitionGroup';

export default memo(TransitionGroup);
