import { useSyncExternalStore } from 'react';

/**
 * 监听网络状态，可能没什么用，主要是看看 useSyncExternalStore 是怎么用的
 *
 */
export function useOnlineStatus(): boolean {
  return useSyncExternalStore(subscribe, () => navigator.onLine);
}
const subscribe: Parameters<typeof useSyncExternalStore>[0] = (callback) => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

/**
 * useOnlineStatus 约等于以下代码
 */
// function useOnlineStatusImpl(): boolean {
//   const [online, setOnline] = useState(() => navigator.onLine);
//   useEffect(() => {
//     const callback = (): void => setOnline(navigator.onLine);
//     window.addEventListener('online', callback);
//     window.addEventListener('offline', callback);
//     return (): void => {
//       window.removeEventListener('online', callback);
//       window.removeEventListener('offline', callback);
//     };
//   }, []);
//   return online;
// }
