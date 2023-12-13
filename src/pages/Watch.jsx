import { useWatch } from '../features/Watch/useWatch';

function Watch() {
  return <div>Watch page</div>;
  const { isLoading, videos, error } = useWatch();

}

export default Watch;
