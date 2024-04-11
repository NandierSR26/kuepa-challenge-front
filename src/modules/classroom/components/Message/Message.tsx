
import style from './Message.module.css'

export const Message = () => {
  return (
    <div className="w-[80%] p-2 mx-4 my-2 bg-slate-300 rounded-br-xl rounded-tr-xl rounded-bl-xl relative">

      <div className="flex items-center justify-between gap-3 font-semibold mb-3 text-[20px]">
        <p id="author">
          Nandier Ruiz
        </p>

        <div className="px-5 h-[25px] bg-red-600 opacity-70 text-white rounded-full text-[12px] grid place-items-center">Moderador</div>
      </div>

      <p id="text-content" className="text-sm font-normal leading-4 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, impedit sint fuga optio.</p>

      <p className="text-sm font-semibold text-gray-400">Hora</p>

      <div id="poligon" className={style.polygon}>
      </div>
    </div>
  )
}
