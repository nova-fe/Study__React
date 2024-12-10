import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      Home Page!!!
      <ul>
        <li>
          <Link to={`/canvases/1`}>1번 게시글</Link>
        </li>
        <li>
          <Link to={`/canvases/2?keyword=canvas2#helloword2`}>2번 게시글</Link>
        </li>
        <li>
          <Link to={`/canvases/3`}>3번 게시글</Link>
        </li>
      </ul>
    </div>
  );
}
