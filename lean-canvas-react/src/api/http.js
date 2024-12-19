import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }), options);
  return instance;
}

export const canvases = create('http://localhost:8000/canvases/');
// export const posts = create('http://localhost:8000/post/', {time}); // => 옵션을 사용하는 경우
