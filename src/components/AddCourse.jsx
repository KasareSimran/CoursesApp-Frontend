
import {Container, Form, FormGroup,Input,Button} from 'reactstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import main_url from '../api/bootapi'
import {toast} from 'react-toastify'

function AddCourse (){

    useEffect(()=>{
        document.title="Add Course"
    },[])


    const [addCourse,setAddCourse]=useState({
        id: '', // default value is an empty string, not 0
        title: '',
        description: ''
    });

    //form handling function
    const handleForm=(e)=>{
        console.log(addCourse);
        postDataToServer(addCourse);
        e.preventDefault();

    }


    //creating function to post data on server
    const postDataToServer =(addCourse)=>{


        if (!addCourse.id || !addCourse.title || !addCourse.description) {
            toast.error("Please fill out all fields before submitting");
            return;
        }


        axios.post(`${main_url}/courses`,addCourse).then(
            (response)=>{
                console.log(response)
                console.log("success");
                toast.success("Course added successfully");
                setAddCourse({ id: '', title: '', description: '' });
                
            },
            (error)=>{
                console.log(error)
                console.log("error")
                toast.error("Error!!!");
            }
        )

    }



    return(
        <div>
            <h1 className='text-center my-3'>Fill the Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor='userId'>Course Id</label>
                    <Input type='text' placeholder='Enter here' name='userId' id='userId' value={addCourse.id}
                    onChange={(e)=>{
                        setAddCourse({...addCourse,id:e.target.value})
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor='title'>Course Title</label>
                    <Input type='text' placeholder='Enter text here'  id='text'  value={addCourse.title}
                     onChange={(e)=>{
                        setAddCourse({...addCourse,title:e.target.value})
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor='description'>Course description</label>
                    <Input type='textarea' placeholder='Enter description here'  id='description' value={addCourse.description} style={{height: 150}}
                     onChange={(e)=>{
                        setAddCourse({...addCourse,description:e.target.value})
                    }}
                    />
                </FormGroup>

                <Container className='text-center'>
                    <Button type='submit'  color='success'>Add Course</Button>
                    <Button onClick={() => setAddCourse({ id: '', title: '', description: '' })} color='warning mx-2'>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}
export default AddCourse