
import { useEffect, useState } from 'react'
import Course from '../components/Course.jsx'

function AllCourses(){
    const [courses,setCourses]=useState(
        [
            {title:"java", description:"this course is for begineers."},
            {title:"reactJs", description:"this course is for begineers."},
            {title:"springBoot", description:"this course is for begineers."},
            {title:"MySql", description:"this course is for begineers."}

        ]
    )

    useEffect(()=>{
        document.title="All Courses"
    },[])
    return(<div>
        <h1>All courses</h1>
        <p>List of courses are as follow:</p>
        {
            courses.length>0 ? courses.map((item)=>
                <Course course={item}/>
            ) : "No Course Available"


        }

    </div>)
}
export default AllCourses