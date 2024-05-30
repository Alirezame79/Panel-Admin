

const Login = () => {

  return (
    <form className="bg-slate-300 w-1/3 m-auto p-3 rounded-lg shadow-md flex flex-col">
      <div className="flex flex-col gap-1 m-3">
        <label htmlFor="username">Username</label>
        <input type="text" className="text-lg p-1 rounded" />
      </div>
      <div className="flex flex-col gap-1 m-3">
        <label htmlFor="password">Password</label>
        <input type="password" className="text-lg p-1 rounded" />
      </div>
      <button className='bg-slate-500 hover:bg-slate-400 w-1/3 mx-auto mt-8 mb-2 py-2 rounded font-bold text-lg'>Submit</button>
    </form>
  )
}

export default Login