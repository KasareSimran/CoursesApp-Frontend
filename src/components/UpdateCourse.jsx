import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import main_url from "../api/bootapi";
import { toast } from "react-toastify";

function UpdateCourse() {
    const location = useLocation();
    const navigate = useNavigate();
    const courseToEdit = location.state?.course; // Get the course data passed via state
    const [course, setCourse] = useState({
        id: '',
        title: '',
        description: ''
    });

    useEffect(() => {
        if (courseToEdit) {
            setCourse(courseToEdit); // Pre-fill the form with the existing course data
        }
    }, [courseToEdit]);

    const handleForm = (e) => {
        e.preventDefault();
        updateCourseOnServer(course);
    };

    const updateCourseOnServer = (course) => {
        axios.put(`${main_url}/courses`, course).then(
            (response) => {
                console.log("Course updated successfully:", response);
                toast.success("Course updated successfully!");
                navigate("/all-courses"); // Redirect back to the course list
            },
            (error) => {
                console.error("Error updating course:", error);
                toast.error("Failed to update course.");
            }
        );
    };

    return (
        <div>
            <h1 className="text-center my-3">Update Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="id">Course ID</label>
                    <Input
                        type="text"
                        id="id"
                        value={course.id}
                        disabled // ID should not be editable
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="title">Course Title</label>
                    <Input
                        type="text"
                        id="title"
                        value={course.title}
                        onChange={(e) => setCourse({ ...course, title: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Course Description</label>
                    <Input
                        type="textarea"
                        id="description"
                        value={course.description}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">
                        Update Course
                    </Button>
                    <Button
                        color="warning mx-2"
                        onClick={() => navigate("/all-courses")}
                    >
                        Cancel
                    </Button>
                </Container>
            </Form>
        </div>
    );
}

export default UpdateCourse;
