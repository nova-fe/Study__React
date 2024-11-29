export default function CourseItem({ item, onToggleFavorite, onItemClick }) {
  return (
    <article className="course" onClick={() => onItemClick(item.link)}>
      <img className="course__img" src={item.thumbnail} alt="강의이미지" />
      <div className="course__body">
        <div className="course__title">{item.title}</div>
        <div className="course__description">{item.description}</div>
      </div>
      <div className="course__icons">
        <button className="btn" onClick={() => onToggleFavorite(item.id, item.isFavorite)}>
          <img className="btn__image" src={item.isFavorite ? "./img/heart-fill-icon.svg" : "./img/heart-icon.svg"} />
        </button>
        {item.link && (
          <a className="btn" href={item.link} target="_blank" rel="noreferrer">
            <img className="btn__image" src="./img/link-icon.svg" alt="" />
          </a>
        )}
      </div>
    </article>
  );
}
