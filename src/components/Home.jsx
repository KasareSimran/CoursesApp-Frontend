import { Container,Button} from 'reactstrap'
import { useEffect } from 'react'


function Home(){
    useEffect(( )=>{
            document.title="Home || Courses App"
        },[])
    return(<div>
        <Container className="text-center p-5 my-2 bg-light border rounded shadow">
        <h1 className="display-3">Welcome to Course App</h1>
        <p className="lead">
          Your one-stop platform to explore, manage, and learn from a variety of courses!
        </p>
        <Button color="primary" outline size="lg">
          Explore Courses
        </Button>
      </Container>


      {/* Testimonials Section */}
      <Container className="mt-5">
        <h2 className="text-center">What Our Users Say</h2>
        <blockquote className="blockquote text-center mt-4">
          <p>"This app has transformed the way I learn. Highly recommended!"</p>
          <footer className="blockquote-footer">Simran Kasare, Software Engineer</footer>
        </blockquote>
      </Container>


    </div>)
}
export default Home