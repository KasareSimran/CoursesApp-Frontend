
import {Container, Form, FormGroup,Input,Button} from 'reactstrap'

function AddCourse (){
    return(
        <div>
            <h1 className='text-center my-3'>Fill the Detail</h1>
            <Form>
                <FormGroup>
                    <label htmlFor='userId'>Course Id</label>
                    <Input type='text' placeholder='Enter here' name='userId' id='userId'
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor='title'>Course Title</label>
                    <Input type='text' placeholder='Enter text here'  id='text'
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor='description'>Course description</label>
                    <Input type='textarea' placeholder='Enter description here'  id='description' style={{height: 150}}
                    />
                </FormGroup>

                <Container className='text-center'>
                    <Button color='success'>Add Course</Button>
                    <Button color='warning mx-2'>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}
export default AddCourse