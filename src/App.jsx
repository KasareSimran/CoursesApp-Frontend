
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import { Container,Row,Col} from 'reactstrap'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import AllCourses from './components/AllCourses.jsx'
import AddCourses from './components/AddCourse.jsx'

function App() {
  return (
    <div>
      <Router>
    <ToastContainer/>
    <Container>
      <Header/>
      <Row>
        <Col md={4}>
        <Menu/>
        </Col>

        <Col md={8}>
        <Routes>
        <Route path='/' Component={Home} exact/>
        <Route path='/home' Component={Home} exact/>
        <Route path='/add-course' Component={AddCourses} exact/>
        <Route path='/all-courses' Component={AllCourses} exact/>
        </Routes>
        </Col>

      </Row>
    </Container>
    </Router>
    </div>
  )
}

export default App
