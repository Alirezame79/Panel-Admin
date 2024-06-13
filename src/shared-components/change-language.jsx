import { useEffect, useRef, useState } from "react"
import { useAppContext } from "../context/app/app-context"

export default function ChangeLanguage() {
  const [show, setShow] = useState(false)
  const ref = useRef()

  const { language, changeLanguage } = useAppContext();

  useEffect(() => {

    function checkIfClickOutside(e) {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickOutside)

    return () => {
      document.addEventListener('mousedown', checkIfClickOutside)
    }
  }, [show])

  return (
    <div className="dropdown mx-2">
      <a className="nav-flag dropdown-toggle flex flex-row-reverse items-center justify-center hover:cursor-pointer" onClick={() => { setShow(true) }}>
        <p>{language}</p>
      </a>
      <div ref={ref} className={`dropdown-menu dropdown-menu-end ${show ? 'show' : undefined}`}>
        <a className="dropdown-item fw-bolder hover:cursor-pointer"
          onClick={() => { changeLanguage('en') }}>
          <p>English</p>
        </a>
        <a className="dropdown-item fw-bolder hover:cursor-pointer"
          onClick={() => { changeLanguage('fa') }}>
          <p>فارسی</p>
        </a>
      </div>
    </div>
  )
}