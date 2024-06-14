import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpService } from "@core/http-services";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [situation, setSituation] = useState(0);
  const { t } = useTranslation()

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = t('login.emailEmptyError');
          } else if (values.email.length < 4) {
            errors.email = t('login.emailLengthError');
          }

          if (!values.password) {
            errors.password = t('login.passwordEmptyError');
          } else if (values.password.length < 4) {
            errors.password = t('login.passwordLengthError');
          }

          return errors;
        }}
        onSubmit={(values) => {
          setLoading(true)
          console.log(values)
          httpService.get("/users")
            .then((response) => {
              console.log(response)
              response.data.map((user) => {
                if ((user.email === values.email) && (user.password === values.password)) {
                  setSituation(200)
                  localStorage.setItem('token', 'abcdefghijklmnopqrstuvwxyz')
                  navigate('/')
                } else {
                  setSituation(404)
                }
              })
              setLoading(false)
              return response;
            }).catch((error) => {
              console.log(error)
              setLoading(false)
              return error
            })
        }}
      >
        <Form className="login_form w-1/2 m-auto p-3 pb-2 rounded-lg shadow-md flex flex-col">
          <div className="flex flex-col gap-1 m-3">
            <label className="form_label" htmlFor="Email">{t('login.emailLabel')}</label>
            <Field className="text-lg p-1 rounded" type="email" name="email" />
            <ErrorMessage className="form_alert mt-1" name="email" component="p" />
          </div>
          <div className="flex flex-col gap-1 m-3">
            <label className="form_label" htmlFor="Password">{t('login.passwordLabel')}</label>
            <Field className="text-lg p-1 rounded" type="text" name="password" />
            <ErrorMessage className="form_alert mt-1" name="password" component="p" />
          </div>
          <button disabled={loading} className='submit_btn w-1/3 mx-auto mt-8 mb-2 py-2 rounded font-bold text-lg' type="submit" >
            {loading ? t('login.loadingBtn') : t('login.submitBtn')}
          </button>
          {situation === 404 &&
            <div className="alert alert-danger text-danger p-2 mt-2">{t('login.alertWrongUser')}</div>}
        </Form>
      </Formik>
    </>
  )
}

export default Login