/* eslint-disable react/prop-types */
import Course from "./Course"

export default function CoursesList({ courses }) {

  return (
    <>
      {courses.map((course) => (
        <div className="col-4" key={course.id}>
          <Course {...course} />
        </div>
      ))}
    </>
  )
}