import PageContainer from "../components/page-container";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <PageContainer>
      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          width: "75%",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        {/* First Half Of The Page*/}
        <div style={{ padding: "25px" }}>
          <Container>
            <Row>Contact Me!</Row>
            <Row>tyleralamo15@gmail.com</Row>
          </Container>
        </div>
        {/* First Half Of The Page*/}
        <div>
          <h2>Contact Form Will Be Here</h2>
        </div>
      </div>
    </PageContainer>
  );
}

export default Contact;
