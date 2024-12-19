import { useEffect, useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { getCanvases } from '../api/canvas';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  // async 함수의 리턴값은 무조건 'Promise'
  async function fetchData(params) {
    // await 은 async 함수 안에서만 동작
    // const data = await fetch('http://localhost:8000/canvases')
    //   .then(res => res.json())
    //   .catch(console.error);
    // setData(data);

    const response = await getCanvases(params);
    setData(response.data);
  }

  // useEffect: 마운트 된 이후 1번만 호출
  useEffect(() => {
    // async await *함수*를 만들어서 호출해야함
    // => useEffect 에서는 콜백함수가 *동기*적으로 실행되기를 기대함
    fetchData({ title_like: searchText });
  }, [searchText]);

  const handleDeleteItem = id => {
    setData(data.filter(item => item.id !== id));
  };

  // * 직접 해보기
  // toLowerCase 하는 이유: 대소문자 구분 없이 검색하기 위해서
  // const filteredData = data.filter(item =>
  //   item.title.toLowerCase().includes(searchText.toLowerCase()),
  // );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>

      <CanvasList
        filteredData={data}
        isGrid={isGrid}
        searchText={searchText}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default Home;
