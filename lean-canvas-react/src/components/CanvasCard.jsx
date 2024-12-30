import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';
import Note from './Note';
export default function CanvasCard({
  title,
  isSubtitle = false,
  notes = [],
  onNotesChange,
}) {
  // Note 추가
  const handleAddNote = () => {
    const newNote = {
      id: uuidv4(),
      content: '',
      color: '',
    };
    onNotesChange([...notes, newNote]);
  };

  // Note 삭제
  const handleRemoveNote = id => {
    // 인자로 들어온 id가 아닌 것들만 filter 해서 onNotesChange에 전달
    onNotesChange(notes.filter(note => note.id !== id));
  };

  const handleUpdateNote = (id, content, color) => {
    onNotesChange(
      notes.map(note =>
        // note의 id가 수정하려는 id와 같으면
        // 기존 note의 정보에 수정된 content, color 전달
        note.id === id ? { ...note, content, color } : note,
      ),
    );
  };

  return (
    <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
      <div
        className={`${
          isSubtitle === false && 'bg-gray-100 border-b border-b-gray-300 '
        } flex items-start justify-between px-3 py-2`}
      >
        <h3 className={`${isSubtitle === false && 'font-bold'}`}>{title}</h3>
        <button
          className="bg-blue-400  text-white p-1.5 text-xs rounded-md"
          onClick={() => {
            handleAddNote();
          }}
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-3 min-h-32 p-3">
        {notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            content={note.content}
            color={note.color}
            onRemoveNote={handleRemoveNote}
            onUpdateNote={handleUpdateNote}
          />
        ))}
      </div>
    </div>
  );
}
