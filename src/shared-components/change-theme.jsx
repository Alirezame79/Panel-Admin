import { useAppContext } from "../context/app/app-context"

export default function ChangeTheme() {

  const { theme, changeTheme } = useAppContext()

  return (
    <>
      {theme === 'light' ?
        <svg viewBox="0 0 256 256" className="w-8 h-8 hover:cursor-pointer hover:opacity-85" xmlns="http://www.w3.org/2000/svg"
          onClick={() => { changeTheme('dark') }}>
          <rect fill="none" height="256" width="256" />
          <circle cx="128" cy="128" r="68" />
          <path d="M128,44a8,8,0,0,0,8-8V28a8,8,0,0,0-16,0v8A8,8,0,0,0,128,44Z" />
          <path d="M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3l-5.7-5.7A8,8,0,0,0,51.6,62.9Z" />
          <path d="M36,120H28a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" />
          <path d="M57.3,187.4l-5.7,5.7a8,8,0,0,0,0,11.3,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3l5.7-5.7a8,8,0,0,0-11.3-11.3Z" />
          <path d="M128,212a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,212Z" />
          <path d="M198.7,187.4a8,8,0,0,0-11.3,11.3l5.7,5.7a8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3,8,8,0,0,0,0-11.3Z" />
          <path d="M228,120h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" />
          <path d="M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l5.7-5.7a8,8,0,1,0-11.3-11.3l-5.7,5.7a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z" />
        </svg> :
        <svg viewBox="0 0 256 256" className="bg-white rounded-full w-8 h-8 hover:cursor-pointer hover:opacity-85" xmlns="http://www.w3.org/2000/svg"
          onClick={() => { changeTheme('light') }}>
          <rect fill="none" height="256" width="256" />
          <path d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
        </svg>}
    </>
  )
}