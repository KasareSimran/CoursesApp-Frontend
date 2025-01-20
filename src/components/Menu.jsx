
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <ListGroup>
                <Link tag="a" to="/home" action>Home</Link>
                <Link tag="a" to="/add-course" action>Add Course</Link>
                <Link tag="a" to="/all-courses" action>View Courses</Link>
                <Link tag="a" to="#!" action>About</Link>
                <Link tag="a" to="#!" action>Contact</Link>
            </ListGroup>
        </div>
    );
}

export default Menu;