import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }), options);
  return instance;
}

export const canvases = create('http://localhost:8000/canvases/');
// export const posts = create('http://localhost:8000/post/', {time}); // => 옵션을 사용하는 경우
// 검색을 할 때 예시: http://localhost:8000/canvases/?title=검색어
// 검색을 할 때 예시(한글자라도 맞도록): http://localhost:8000/canvases/?title_like=검색어
