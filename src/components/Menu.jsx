
import { ListGroup,ListGroupItem } from "reactstrap";

function Menu(){
    return(
        <ListGroup>
            <ListGroupItem tag='a' href="/home" action>Home</ListGroupItem>
            <ListGroupItem tag='a' href="/add-course" action>Add course</ListGroupItem>
            <ListGroupItem tag='a' href="/all-courses" action>View Courses</ListGroupItem>
            <ListGroupItem tag='a' href="#!" action>About</ListGroupItem>
            <ListGroupItem tag='a' href="#!" action>Contact</ListGroupItem>
        </ListGroup>
    );
}
export default Menu