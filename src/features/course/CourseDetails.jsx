import { useLoaderData } from "react-router-dom"
import { httpInterceptedService } from "../../core/http-services"

export default function CourseDetails() {
  const course = useLoaderData();

  return (
    <div className="min-h-screen">
      <div className="card m-5">
        <div className="card-header">
          <img className="card-img-top w-1/3 rounded mx-auto my-3" src={course.cover} alt={`${course.title} img`} />
          <h1 className="text-4xl font-bold text-center p-3">{course.title}</h1>
        </div>
        <div className="card-body">
          <p className="text-base px-10 py-2">{course.description}</p>
        </div>
        <div className="card-footer flex justify-around items-center">
          <div className="card p-3">{course.duration} minutes</div>
          <div className="card p-3">rating {course.rating}</div>
        </div>
      </div>
    </div>
  )
}

export async function courseDetailsLoader({ params }) {
  const response = await httpInterceptedService.get(`courses/${params.id}`)
  return response.data
}