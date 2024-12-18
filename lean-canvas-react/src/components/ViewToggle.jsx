import { FaTh, FaList } from 'react-icons/fa';

export default function ViewToggle({ isGrid, setIsGrid }) {
  return (
    <div className="flex space-x-2">
      <button
        className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isGrid ? 'bg-blue-500 text-white' : 'bg-gray-200'
        } `}
        aria-label="Grid view"
        onClick={() => setIsGrid(true)}
      >
        <FaTh />
      </button>
      <button
        className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          !isGrid ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        aria-label="List view"
        onClick={() => setIsGrid(false)}
      >
        <FaList />
      </button>
    </div>
  );
}
