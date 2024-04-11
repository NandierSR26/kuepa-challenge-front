import { Button1, TextIunput, TopMenu } from "../../../shared/components"

export const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopMenu authButton={false} className="border-b-[1px] border-gray-200" />

      <main className="bg-[#F9F9F9] py-20 flex-1">

        <form className="max-w-3xl mx-auto text-[#6C757D]">
          <h3 className="text-4xl mb-16 font-semibold text">Iniciar Sesión</h3>

          <TextIunput
            type={"text"}
            name={"username"}
            placeholder={"Ingresa tu nombre se usuario"}
            label={"Nombre de usuario"}
            className="mb-5"
            value={undefined}
          />

          <TextIunput
            type={"text"}
            name={"password"}
            placeholder={"Ingresa tu contraseña"}
            label={"Contraseña"}
            value={undefined}
          />

          <Button1 text="INICIAR SESIÓN" className="text-2xl w-fit text-center mt-10 ml-auto" />
        </form>

      </main>

    </div>
  )
}
