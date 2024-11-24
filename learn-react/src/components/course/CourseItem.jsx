function FavoriteBtn({ isFavorite }) {
  return (
    <button className="btn">
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

export default function CourseItem({ title, description, thumbnail, isFavorite, link }) {
  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <FavoriteBtn isFavorite={isFavorite} />
        {
          // && 연산자: 앞의 것이 true 면 뒤의 값 반환, false 면 앞의 값 반환
          // 여기선 link의 값이 없으면 아무것도 보여주지 않고, 값이 있으면 뒤의 link를 보여줄 수 있도록 함.
          link && <LinkIconBtn link={link} />
        }
      </div>
    </article>
  );
}
