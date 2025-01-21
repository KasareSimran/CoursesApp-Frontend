import {Card,CardBody} from 'reactstrap'

function Header(){
    return(
    <div>
        <Card className='my-2 bg-info'>
            <CardBody>
                <h1 className='text-center my-2'>Course App</h1>
            </CardBody>

        </Card>
    </div>)
}
export default Header