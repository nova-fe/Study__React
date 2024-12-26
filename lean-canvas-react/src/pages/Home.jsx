import { useEffect, useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { createCanvases, getCanvases } from '../api/canvas';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Button from '../components/Button';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // async 함수의 리턴값은 무조건 'Promise'
  async function fetchData(params) {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise(resolver => setTimeout(resolver, 1000));

      const response = await getCanvases(params);
      setData(response.data);

      // await 은 async 함수 안에서만 동작
      // const data = await fetch('http://localhost:8000/canvases')
      //   .then(res => res.json())
      //   .catch(console.error);
      // setData(data);
    } catch (err) {
      setError(err);
    } finally {
      // 네트워크 통신이 끝날을 경우
      setIsLoading(false);
    }
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

  const [isLoadingCreate, setIsLoadingCreate] = useState(false);

  const handleCreateCanvas = async () => {
    try {
      setIsLoadingCreate(true);
      await new Promise(resolver => setTimeout(resolver, 1000));
      await createCanvases();
      fetchData({ title_like: searchText });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoadingCreate(false);
    }
  };

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>
      <div className="flex justify-end mb-6">
        <Button onClick={handleCreateCanvas} loading={isLoadingCreate}>
          등록하기
        </Button>
      </div>
      {isLoading && <Loading />}
      {error && (
        <Error
          message={error.message}
          onRetry={() => fetchData({ title_like: searchText })}
        />
      )}
      {!isLoading && !error && (
        <CanvasList
          filteredData={data}
          isGrid={isGrid}
          searchText={searchText}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </>
  );
}

export default Home;
