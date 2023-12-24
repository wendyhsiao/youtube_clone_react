import { useEffect, useRef } from 'react';

const useLoadMore = ({ fetchApi }) => {
  const didMount = useRef(false);
  const domRef = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // 因 load dom 旋轉的關係，值為 1 會導致重複觸發
    };

    const callback = (entries) => {
      if (didMount.current) {
        if (entries[0].isIntersecting) fetchApi();
      } else {
        didMount.current = true;
      }
    };
    let observer = new IntersectionObserver(callback, options);

    const target = domRef.current;
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [fetchApi]);

  return { domRef };
};

export default useLoadMore;
