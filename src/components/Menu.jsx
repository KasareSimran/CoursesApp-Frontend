
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <ListGroup>
                <Link className='list-group-item list-group-item-action' tag="a" to="/home" action>Home</Link>
                <Link className='list-group-item list-group-item-action' tag="a" to="/add-course" action>Add Course</Link>
                <Link className='list-group-item list-group-item-action' tag="a" to="/all-courses" action>View Courses</Link>
                <Link className='list-group-item list-group-item-action' tag="a" to="#!" action>About</Link>
                <Link className='list-group-item list-group-item-action' tag="a" to="#!" action>Contact</Link>
            </ListGroup>
        </div>
    );
}

export default Menu;