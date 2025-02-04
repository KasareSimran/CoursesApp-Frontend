import { Card,CardBody,CardSubtitle,CardText,Button,Container } from "reactstrap";
import axios from 'axios'
import main_url from "../api/bootapi";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

function Course({course}){

    const navigate = useNavigate();
    const deleteCourse=(id)=>{

        axios.delete(`${main_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Deleted successfully")
            },
            (error)=>{
                toast.error("Something went Wrong!!")
            }
        )

    }

    const handleUpdate = () => {
        // Navigate to the update form, passing the course data as state
        navigate("/updateCourse", { state: { course } });
    };

    return(<div>
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
                <CardText>{course.description }</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }} >Delete</Button>


                    <Button color="warning ms-3"  onClick={handleUpdate} >Update</Button>
                </Container>
            </CardBody>
        </Card>
    </div>)
}
export default Course