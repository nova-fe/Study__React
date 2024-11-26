import "./AppCourse.css";
import CourseListCard from "./components/course/CourseListCard";

function App() {
  const items = [
    {
      id: 0,
      title: "입문자를 위한, HTML&CSS 웹 개발 입문",
      description: "웹 개발에 필요한 기본 지식을 배웁니다.",
      thumbnail: "/img/htmlcss.png",
      isFavorite: true,
    },
    {
      id: 1,
      title: "입문자를 위한, ES6+ 최신 자바스크립트 입문",
      description: "쉽고! 알찬! 내용을 준비했습니다.",
      thumbnail: "/img/js.png",
      isFavorite: false,
      link: "https://inf.run/Kpnd",
    },
    {
      id: 2,
      title: "포트폴리오 사이트 만들고 배포까지!",
      description: "포트폴리오 사이트를 만들고 배포해 보세요.",
      thumbnail: "/img/portfolio.png",
      isFavorite: true,
      link: "https://inf.run/YkAN",
    },
  ];

  // 관심 강의만 표시하기
  const favoriteCourse = items.filter((item) => {
    return item.isFavorite; // item.isFavorite 가 true인 것만 return
  });

  return (
    <>
      <main style={{ flexDirection: "column", gap: "1rem" }}>
        <CourseForm />
        <CourseListCard title="강의 목록" items={items} />
        {/* <CourseListCard title="관심 강의 목록" items={favoriteCourse} /> */}
      </main>
    </>
  );
}

export default App;
