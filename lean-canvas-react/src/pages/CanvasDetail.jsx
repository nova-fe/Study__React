import { useLocation, useParams, useSearchParams } from 'react-router-dom';

export default function CanvasDetail() {
  const { id } = useParams(); // 경로로 설정한 id를 가져옴

  const [searchParams] = useSearchParams(); // 쿼리스트링을 가져옴
  console.log('searchParams: ', searchParams.get('keyword'));

  const location = useLocation(); // hash값을 가져옴

  console.log(location);

  return (
    <div>
      CanvasDetail
      <p>id: {id}</p>
      <p>keyword: {searchParams.get('keyword')}</p>
      {/* http://localhost:5173/canvases/2?keyword=canvas */}
      <p>hash: {location.hash}</p>
    </div>
  );
}
