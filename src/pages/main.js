import TypeWriter from "../components/typewriter-animation.js";
import PageContainer from "../components/page-container.js";
import { Container, Row } from "react-bootstrap";

function Main() {
  const mainText = {
    fontSize: "50px",
    fontWeight: "bold",
  };
  return (
    <PageContainer>
      <Container style={{ marginTop: "75px" }}>
        <Row style={{ fontSize: "25px", marginBottom: "25px" }}>My name is</Row>
        <Row style={mainText}>
          <p> Tyler Alamo-Covert</p>
          <TypeWriter />
        </Row>
      </Container>
      <Container>
        <Row>This is where the summary of who I am is going to go</Row>
      </Container>
    </PageContainer>
  );
}

export default Main;
