function FavoriteBtn({ onLikeClick, isFavorite }) {
  return (
    <button className="btn" onClick={onLikeClick}>
      <img className="btn__image" src={isFavorite ? "./img/heart-fill-icon.svg" : "./img/heart-icon.svg"} />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__image" src="./img/link-icon.svg" alt="" />
    </a>
  );
}

export default function CourseItem({ title, description, thumbnail, isFavorite, link, id, onToggleFavorite }) {
  function handleFavorite() {
    onToggleFavorite(id, !isFavorite);
  }

  function handleItemClick() {
    alert("Item Click!");
    window.open(link, "_blank");
  }

  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <FavoriteBtn isFavorite={isFavorite} onLikeClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}
