import { canvases } from './http';
import { v4 as uuidv4 } from 'uuid'; // 고유키 생성
import dayjs from 'dayjs';

// 목록 조회
export function getCanvases(params) {
  const payload = Object.assign(
    {
      _sort: 'lastModified', // 정렬
      _order: 'desc',
    },
    params,
  );
  return canvases.get('/', { params: payload });
}

// 저장, 수정
export function createCanvases() {
  const newCanvas = {
    title: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    lastModified: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    tag: '신규',
  };
  return canvases.post('/', newCanvas);
}

// 삭제
export async function deletCanvases(id) {
  await canvases.delete(`/${id}`);
}
