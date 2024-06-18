import { Await, defer, useLoaderData } from "react-router-dom";
import { httpInterceptedService } from "../core/http-services"
import { Suspense } from "react";
import CoursesList from "../features/course/CourseList";

export default function Courses() {
  const courseList = useLoaderData()

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl fw-bolder">Course List</h2>
      <div className="row m-4">
        <Suspense fallback={<p className="text-info">Loading...</p>}>
          <Await resolve={courseList.courses}>
            {(loadedCourses) => <CoursesList courses={loadedCourses} />}
          </Await>
        </Suspense>
      </div>
    </div >
  )
}

export async function coursesLoader() {
  return defer({
    courses: loadCourses()
  })
}

async function loadCourses() {
  const response = await httpInterceptedService.get('courses');
  return response.data;
}