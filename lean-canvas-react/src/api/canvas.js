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

// 저장
export function createCanvases() {
  const newCanvas = {
    title: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    lastModified: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    category: '신규',
  };
  return canvases.post('/', newCanvas);
}

// 삭제
export async function deletCanvases(id) {
  await canvases.delete(`/${id}`);
}

// 조회
export async function getCanvasById(id) {
  const { data } = await canvases.get(`/${id}`);
  return data;
}

export async function updateTitle(id, title) {
  /**
   * <http 메서드>
   * post - 새로운 자원 생성
   * put - 기존 자원 전체 업데이트 또는 새 자원 생성
   * patch - 일부 수정
   */

  await canvases.patch(`/${id}`, { title });
}
