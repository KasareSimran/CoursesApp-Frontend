import { Container, Row, Col } from "reactstrap";
import emailImg from "../assets/emailIcon.png";
import linkedinImg from "../assets/linkedinIcon.png";
import githubImg from "../assets/githubIcon.png";

const Contact = () => {
  return (
    <Container className="p-5 my-3 bg-light border rounded shadow">
    <h1 className="text-center display-5">Contact Us</h1>
    <p className="text-center text-muted mt-3">
      Feel free to reach out to us through the following channels.
    </p>
    <Row className="mt-4 text-center">
      <Col md={4}>
        <img
          src={emailImg}
          alt="Email icon"
          style={{ width: "50px", height: "50px" }}
        />
        <p className="mt-2">
          <a href="mailto:simrankasare5@gmail.com">simrankasare5@gmail.com</a>
        </p>
      </Col>
      <Col md={4}>
        <img
          src={linkedinImg}
          alt="LinkedIn icon"
          style={{ width: "50px", height: "50px" }}
        />
        <p className="mt-2">
          <a href="https://www.linkedin.com/in/simran-kasare-46a221220/">
            linkedin.com/simrankasare
          </a>
        </p>
      </Col>
      <Col md={4}>
        <img
          src={githubImg}
          alt="Github icon"
          style={{ width: "50px", height: "50px" }}
        />
        <p className="mt-2">
          <a href="https://github.com/KasareSimran">
            github.com/simrankasare
          </a>
        </p>
      </Col>
    </Row>
  </Container>
  );
};

export default Contact;
