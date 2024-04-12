import { Formik } from "formik"
import { Button1, TextIunput, TopMenu } from "../../../shared/components"
import { useContext } from "react"
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

export const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <TopMenu authButton={false} className="border-b-[1px] border-gray-200" />

      <main className="bg-[#F9F9F9] py-20 px-5 flex-1">

        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          onSubmit={({ username, password }) => {
            // console.log({username, password})
            login({ username, password }).then(({data, message, success}) => {
              navigate('/classroom')
            });
          }}
        >
          {({ handleSubmit, errors, touched, values, handleChange }) => (
            <form className="max-w-3xl mx-auto text-[#6C757D]">
              <h3 className="text-4xl mb-16 font-semibold text">Iniciar Sesión</h3>

              <TextIunput
                type={"text"}
                name={"username"}
                placeholder={"Ingresa tu nombre se usuario"}
                label={"Nombre de usuario"}
                onChange={handleChange}
                value={values.username}
                touched={touched.username}
                errors={errors.username}
                className="mb-5"
              />

              <TextIunput
                type={"password"}
                name={"password"}
                placeholder={"Ingresa tu contraseña"}
                label={"Contraseña"}
                onChange={handleChange}
                value={values.password}
                errors={errors.password}
                touched={touched.password}
              />

              <Button1
                text="INICIAR SESIÓN"
                className="block text-xl w-full text-center mt-10 ml-auto px-12 md:w-fit"
                type="submit"
                onClick={handleSubmit}
              />

            </form>
          )}
        </Formik>



      </main>

    </div>
  )
}
