import { useParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import { useEffect, useState } from 'react';
import { getCanvasById, updateTitle } from '../api/canvas';

export default function CanvasDetail() {
  // url에서 파라미터 가져오기: useParams
  const { id } = useParams();
  const [canvas, setCanvas] = useState();

  // 조회
  useEffect(() => {
    const fetchCanvas = async () => {
      const data = await getCanvasById(id);
      setCanvas(data);
    };
    fetchCanvas();
  }, [id]);

  // 수정
  const handleTitleChange = async title => {
    try {
      await updateTitle(id, title);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      {JSON.stringify(canvas)}
      <CanvasTitle value={canvas?.title} onChange={handleTitleChange} />
      <LeanCanvas />
    </div>
  );
}
