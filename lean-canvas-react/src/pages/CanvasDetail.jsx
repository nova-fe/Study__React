import { useParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import { useEffect, useState } from 'react';
import { getCanvasById, updateTitle, updateCanvas } from '../api/canvas';

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

  const handleCanvasChange = async updatedCanvas => {
    try {
      // 업데이트된 캔버스를 인자로 받아서(updatedCanvas) 업데이트
      await updateCanvas(id, updatedCanvas);
      // 업데이트된 캔버스로 캔버스 설정(set)
      setCanvas(updatedCanvas);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <CanvasTitle value={canvas?.title} onChange={handleTitleChange} />
      {canvas && (
        <LeanCanvas canvas={canvas} onCanvasChange={handleCanvasChange} />
      )}
    </div>
  );
}
