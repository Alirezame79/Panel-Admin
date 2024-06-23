/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Course({ id, title, cover, description, duration, rating }) {

  return (
    <div className="card m-2 p-2">
      <img className="card-img-top" src={cover} style={{ height: '250px' }} alt={`${title} cover`} />
      <div className="card-header p-2">
        <h3 className="text-2xl font-bold m-2">
          <Link to={`/course/${id}/`}>{title}</Link>
        </h3>
      </div>
      <div className="card-body">
        <p className="text-truncate-2">{description}</p>
      </div>
      <div className="card-footer flex justify-between m-1">
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
            <g fill="#787878" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
              <g transform="scale(8,8)">
                <path d="M16,4c-6.61719,0 -12,5.38281 -12,12c0,6.61719 5.38281,12 12,12c6.61719,0 12,-5.38281 12,-12c0,-6.61719 -5.38281,-12 -12,-12zM16,6c5.53516,0 10,4.46484 10,10c0,5.53516 -4.46484,10 -10,10c-5.53516,0 -10,-4.46484 -10,-10c0,-5.53516 4.46484,-10 10,-10zM15,8v9h7v-2h-5v-7z">
                </path></g></g>
          </svg>
          <p>{`${duration} minutes`}</p>
        </div>
        <div className="flex items-center gap-1">
          <p>{rating}</p>
          <img width="25" height="25" src="https://img.icons8.com/ios/50/facebook-like--v1.png" alt="facebook-like--v1" />
        </div>
      </div>
    </div>
  )
}