import TypeWriter from "../components/typewriter-animation.js";
import PageContainer from "../components/page-container.js";

function Main() {
  return (
    <PageContainer>
      <div
        style={{
          fontSize: "45px",
          fontWeight: "bolder",
          margin: "40px",
        }}
      >
        <TypeWriter />
      </div>
    </PageContainer>
  );
}

export default Main;
