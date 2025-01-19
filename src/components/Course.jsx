import { Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container } from "reactstrap";

function Course({course}){
    return(<div>
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" >Delete</Button>
                    <Button color="warning ms-3"  >Update</Button>
                </Container>
            </CardBody>
        </Card>
    </div>)
}
export default Course