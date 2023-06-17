import { useCallback, useEffect, useState } from 'react';

export function useTimeDown(duration: number, interval = 1000) {
  const [stop, _setStop] = useState(false);
  const setStop = useCallback((stop: boolean) => _setStop(stop), []);
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (stop) return;

    const startTime = Date.now();

    const timer = setInterval(() => {
      // time未加入依赖，会保持启动时的状态
      const t = time - (Date.now() - startTime);
      setTime(t);
      if (t <= 0) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [duration, stop, interval]);

  return [time, setStop] as const;
}
