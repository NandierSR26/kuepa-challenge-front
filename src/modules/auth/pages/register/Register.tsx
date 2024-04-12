import { Formik } from "formik"
import { Button1, TextIunput, TopMenu } from "../../../shared/components"
import { useContext, useState } from "react"
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useNavigate } from 'react-router-dom'
import style from './Register.module.css'

export const Register = () => {

  const { register } = useContext(AuthContext);
  const [selectedRol, setSelectedRol] = useState<"STUDENT" | "MODERATOR">('STUDENT');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <TopMenu authButton={false} className="border-b-[1px] border-gray-200" />

      <main className="bg-[#F9F9F9] py-20 px-5 flex-1">

        <Formik
          initialValues={{
            name: '',
            username: '',
            rol: selectedRol,
            password: ''
          }}
          onSubmit={({ name, username, password, rol }) => {
            register({ name, username, password, rol }).then(() => {
              navigate('/classroom')
            });
          }}
        >
          {({ handleSubmit, errors, touched, values, handleChange }) => (
            <form className="max-w-3xl mx-auto text-[#6C757D]">
              <h3 className="text-4xl mb-16 font-semibold text">Iniciar Sesión</h3>

              <TextIunput
                type={"text"}
                name={"name"}
                placeholder={"Ingresa tu nombre"}
                label={"Nombres y apellidos"}
                onChange={handleChange}
                value={values.name}
                touched={touched.name}
                errors={errors.name}
                className="mb-5"
              />

              <TextIunput
                type={"text"}
                name={"username"}
                placeholder={"Ingresa un nombre de usuario"}
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
                className="mb-5"
              />

              <div id="rol-selector">
                <p className={style.input_label}>Rol</p>
                <div className="flex justify-start gap-5 mb-5">

                  <div 
                    className={`${style.rol_selector} ${selectedRol === 'STUDENT' && style.selected_rol}`}
                    onClick={() => setSelectedRol('STUDENT')}
                  >
                    Estudiante
                  </div>

                  <div 
                    className={`${style.rol_selector} ${selectedRol === 'MODERATOR' && style.selected_rol}`}
                    onClick={() => setSelectedRol('MODERATOR')}
                  >
                    Moderador
                  </div>

                </div>
              </div>

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
