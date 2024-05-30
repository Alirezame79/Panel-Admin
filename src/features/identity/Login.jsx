import { ErrorMessage, Field, Form, Formik } from "formik";

const Login = () => {

  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username can't be empty.";
          } else if (values.username.length < 4) {
            errors.username = "Minimum length is 4.";
          }

          if (!values.password) {
            errors.password = "Password can't be empty.";
          } else if (values.password.length < 4) {
            errors.password = "Minimum length is 4.";
          }

          return errors;
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form className="bg-slate-300 w-1/3 m-auto p-3 rounded-lg shadow-md flex flex-col">
          <div className="flex flex-col gap-1 m-3">
            <label htmlFor="Email">Username</label>
            <Field className="text-lg p-1 rounded" type="username" name="username" />
            <ErrorMessage className="text-red-700" name="username" component="p" />
          </div>
          <div className="flex flex-col gap-1 m-3">
            <label htmlFor="Password">Password</label>
            <Field className="text-lg p-1 rounded" type="password" name="password" />
            <ErrorMessage className="text-red-700" name="password" component="p" />
          </div>
          <button className='bg-slate-500 hover:bg-slate-400 w-1/3 mx-auto mt-8 mb-2 py-2 rounded font-bold text-lg' type="submit" >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default Login