import { useEffect, useRef, useState } from "react"
import { useAppContext } from "../context/app/app-context"

export default function ChangeLanguage() {
  const [show, setShow] = useState(false)
  const ref = useRef()

  const { language, changeLanguage } = useAppContext();

  useEffect(() => {
    setShow(false)
  }, [language])

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
      <a className="setted_language nav-flag dropdown-toggle flex flex-row-reverse items-center justify-center hover:cursor-pointer" onClick={() => { setShow(true) }}>
        <p>{language}</p>
      </a>
      <div ref={ref} className={`dropdown-menu text-center ${show ? 'show' : undefined}`}>
        <a className="fw-bolder hover:cursor-pointer"
          onClick={() => { changeLanguage('en') }}>
          <p className="language_options p-0.5">English</p>
        </a>
        <a className="fw-bolder hover:cursor-pointer"
          onClick={() => { changeLanguage('fa') }}>
          <p className="language_options p-0.5">فارسی</p>
        </a>
      </div>
    </div>
  )
}