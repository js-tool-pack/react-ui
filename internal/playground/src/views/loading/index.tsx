import { useReducer, useState } from 'react';
import {
  Loading,
  showLoading,
  useLoading,
  useLoadingHolder,
} from '@pkg/components';
import styles from './loading.module.scss';

export function LoadingPage() {
  const [globalLoading, setGlobalLoading] = useReducer((l) => !l, false);
  const [loading, setLoading] = useReducer((l) => !l, true);
  const [loading2, setLoading2] = useReducer((l) => !l, false);
  const [loading3, setLoading3] = useState(false);

  const [times, setTimes] = useState(1);
  const [{ visible, toggle }, holder] = useLoadingHolder({
    visible: false,
    closeOnClick: true,
    text: `全局useLoadingHolder(${times})，点击任意处关闭....`,
  });

  const { visible: visible2, toggle: toggle2 } = useLoading({
    visible: false,
    closeOnClick: true,
    text: `全局useLoading，点击任意处关闭....`,
  });

  return (
    <div style={{ textAlign: 'center' }}>
      {holder}
      <button onClick={() => (setTimes(times + 1), toggle())}>
        {visible ? '隐藏' : '显示'}useLoadingHolder调用loading
      </button>
      <button onClick={toggle2}>
        {visible2 ? '隐藏' : '显示'}useLoading调用loading
      </button>
      <button
        onClick={() =>
          showLoading({ text: '全局showLoading，点击任意处关闭....' })
        }>
        showLoading调用loading
      </button>
      <br />
      <br />
      <button onClick={setGlobalLoading}>
        {globalLoading ? '隐藏' : '显示'}全屏loading
      </button>
      <br />
      <br />

      <Loading
        visible={globalLoading}
        text="全屏loading，点击退出"
        closeOnClick
        onClose={setGlobalLoading}
      />

      <button onClick={setLoading}>{loading ? '隐藏' : '显示'}</button>
      <Loading visible={loading} mode="wrap">
        <div className={styles['_']} key="ref-1">
          包裹模式
        </div>
      </Loading>
      <button onClick={setLoading2}>{loading2 ? '隐藏' : '显示'}</button>
      <Loading visible={loading2} mode="insert">
        <div className={styles['_']} key="ref-2">
          插入模式
        </div>
      </Loading>
      <button onClick={() => setLoading3(!loading3)}>
        {loading3 ? '隐藏' : '显示'}
      </button>
      <Loading
        visible={loading3}
        text={<button className="loading-rotate">hello</button>}
        icon={<button className="loading-rotate">world</button>}>
        <div className={styles['_']} key="ref-2">
          替换slot
        </div>
      </Loading>
    </div>
  );
}
