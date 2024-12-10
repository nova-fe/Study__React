import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // https://reactrouter.com/6.28.0/start/tutorial
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import CanvasDetail from './pages/CanvasDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', // 아무것도 없을 때는 Home 렌더링
        element: <Home />,
      },
      // App컴포넌트의 Outlet 위치에 렌더링이 됨)
      {
        // children에 있는 path 는 상위 컴포넌트의 path에 이어지기 때문에 상대경로로 설정을 해야함.
        // 예시: /about 이 아닌 about으로 설정
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'canvases/:id',
        element: <CanvasDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
