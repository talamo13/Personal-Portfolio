import TypeWriter from "../components/typewriter-animation.js";
import PageContainer from "../components/page-container.js";
import ProjectsButton from "../components/projects-button.js";
import { Container, Row } from "react-bootstrap";

function Main() {
  const mainText = {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#aeb2c9",
    height: "80px",
  };
  return (
    <PageContainer>
      <Container style={{ marginTop: "75px" }}>
        <Row
          style={{
            fontSize: "20px",
            marginBottom: "10px",
            fontWeight: "bold",
            marginLeft: "2px",
            fontWeight: "bold",
            color: "#d6d8e4",
          }}
        >
          {"       "}
          My name is
        </Row>
        <Row style={mainText}>
          <p> Tyler Alamo-Covert</p>
        </Row>
        <Row>
          <TypeWriter />
        </Row>
      </Container>
      <Container>
        <Row
          style={{
            fontSize: "20px",
            color: "#d6d8e4",
            backgroundColor: "#394b7b",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          I am a Computer Science student at CSULB, specializing in languages
          and technologies like JavaScript, Python, C++, React, and Python
          Pandas. Currently, I am immersed in a NASA internship where I serve as
          the software specialist in my team. My primary role involves
          contributing to the development of a prototype for an autonomous rover
          set to land on the Moon as part of the NASA Artemis mission. This
          experience showcases my diverse skill set and hands-on involvement in
          the exciting intersection of computer science and space exploration.
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <ProjectsButton />
        </Row>
      </Container>
    </PageContainer>
  );
}

export default Main;
