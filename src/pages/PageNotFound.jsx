import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  translate: 0 100%;
`;
function PageNotFound() {
  return (
    <Wrap>
      <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" />
      <p>無法瀏覽這個頁面。不便之處，敬請見諒。</p>
    </Wrap>
  );
}

export default PageNotFound;
