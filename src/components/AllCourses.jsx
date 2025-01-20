
import { useEffect, useState,useRef } from 'react'
import Course from '../components/Course.jsx'
import main_url from './../api/bootapi.jsx'
import axios from 'axios'
import {toast} from 'react-toastify'

function AllCourses(){
    const [courses,setCourses]=useState([])

    const isMounted = useRef(false);  

    useEffect(()=>{
        document.title="All Courses"
    },[])

    //function to call server:
    const getAllCoursesFromServer = () =>{
        axios.get(`${main_url}/courses`).then(
            (response)=>{
                //for success
                console.log(response.data)
                
                toast.success("Course has been loaded")
                setCourses(response.data);
                

            },
            (error)=>{
                //for error
                console.log(error)
                toast.error("Course has been loaded")
            }
        )
    }

    //calling ,loading course function
    useEffect(() => {
        if (!isMounted.current) {
            getAllCoursesFromServer();
            isMounted.current = true; // Set it to true after the first render
        }
    }, []);



    return(<div>
        <h1>All courses</h1>
        <p>List of courses are as follow:</p>
        {
            courses.length>0 ? courses.map((item)=>
                <Course key={item.id} course={item}/>
            ) : "No Course Available"


        }

    </div>)
}
export default AllCourses