import { Container,Button} from 'reactstrap'

function Home(){
    return(<div>
        <Container className='text-center   p-5 my-2 bg-light border rounded shadow' style={{ backgroundColor: '#f8f9fa' }}>
            <h1 className='display-3'>Hello world</h1>
            <p  className="lead">We are here to learn the basics of React js and also how to connect React js to backend server.</p>
       
            <Button color='primary' outline>
                Start using
            </Button>
        </Container>

    </div>)
}
export default Home