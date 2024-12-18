import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');

  const list = [
    {
      id: 1,
      title: '친환경 도시 농업 플랫폼',
      lastModified: '최근 수정일: 2023-06-15',
      tag: '농업',
    },
    {
      id: 2,
      title: 'AI 기반 건강 관리 앱',
      lastModified: '최근 수정일: 2023-06-10',
      tag: '헬스케어',
    },
    {
      id: 3,
      title: '온디맨드 물류 서비스',
      lastModified: '최근 수정일: 2023-06-05',
      tag: '물류',
    },
    {
      id: 4,
      title: 'VR 가상 여행 서비스',
      lastModified: '최근 수정일: 2023-06-01',
      tag: '여행',
    },
  ];

  // * 직접 해보기
  // toLowerCase 하는 이유: 대소문자 구분 없이 검색하기 위해서
  const filteredData = list.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>

      <CanvasList
        filteredData={filteredData}
        isGrid={isGrid}
        searchText={searchText}
      />
    </div>
  );
}

export default Home;
