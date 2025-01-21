import { Container, Row} from 'reactstrap';

function About() {
  return (
    <div>

      <Container className="text-center p-5 my-2 bg-light border rounded shadow">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Discover our story, mission, and the vision behind Course App.
        </p>
      </Container>

    
      <Container className="mt-5">
        <h2 className="text-center">Our Mission</h2>
        <p className="text-center">
          To empower individuals with knowledge by providing easy access to quality educational content.
        </p>
        <h2 className="text-center mt-4">Our Vision</h2>
        <p className="text-center">
          To create a world where learning is accessible to everyone, everywhere, at any time.
        </p>
      </Container>

      {/* Features */}
      <Container className="mt-5">
        <h2 className="text-center">What We Offer</h2>
        <ul className="list-unstyled text-center mt-4">
          <li className="mb-3">
            <h4>📚 High-Quality Courses</h4>
            <p>Handpicked courses curated by industry experts.</p>
          </li>
          <li className="mb-3">
            <h4>💻 Seamless Experience</h4>
            <p>A user-friendly platform designed for all devices.</p>
          </li>

        </ul>
      </Container>


      <Container className="mt-5">
        <h2 className="text-center">Meet the Developer</h2>
        <Row className="text-center mt-4">
          
            <h4>Simran Kasare</h4>
            <p>Software Engineer</p>
          
        </Row>
      </Container>
      <Container className="text-center mt-5 bg-success text-white p-4 rounded">
        <h2>Join Us in Our Journey!</h2>
        <p>Be a part of our mission to make learning accessible to everyone.</p>
      </Container>
    </div>
  );
}

export default About;
