import { useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';

export default function CanvasTitle() {
  const [isEdit, setIsEdit] = useState(false);
  const handleEditTitle = () => {
    setIsEdit(true);
  };

  const handleDoneTitle = () => {
    setTitle(editingTitle);
    setIsEdit(false);
  };

  // 수정완료
  const [title, setTitle] = useState('Lean Canvas');
  // 수정중
  const [editingTitle, setEditingTitle] = useState(title);

  const handleEditingTitleChange = e => {
    setEditingTitle(e.target.value);
  };

  return (
    <div className="flex items-center justify-center mb-10">
      {isEdit ? (
        <div className="flex items-center">
          <input
            type="text"
            className="text-4xl font-bold text-center text-blue-600 bg-transparent border-b-2 border-blue-600 focus:outline-none"
            value={editingTitle}
            onChange={handleEditingTitleChange}
          />
          <button
            className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Save title"
            onClick={handleDoneTitle}
          >
            <FaCheck />
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <h1 className="text-4xl font-bold text-center ">{title}</h1>
          <button
            className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            aria-label="Edit title"
            onClick={handleEditTitle}
          >
            <FaEdit />
          </button>
        </div>
      )}
    </div>
  );
}
