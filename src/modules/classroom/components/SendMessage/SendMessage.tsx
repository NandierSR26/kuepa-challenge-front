
export const SendMessage = () => {
  return (
    <div className="flex bg-gray-100 w-full h-[60px] border-[1px] border-gray-400 mt-2 overflow-hidden fixed bottom-0">
      <textarea
        className="w-[75%] border-gray-300 px-2 outline-none resize-none h-full text-xl py-[15px]"
        placeholder="Escribe un mensaje"
        style={{
          height: '100%'
        }}
      />

      <figure className="relative w-[10%] p-1 pr-2 bg-white cursor-pointer">
        <img
          src="/assets/clip-icon.svg"
          alt="archivos"
          className="w-full h-full cursor-pointer"
        />

        <input
          type="file"
          className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
        />
      </figure>

      <button className="flex-1 p-2 bg-slate-800">
        <img
          src="/assets/send-icon.svg"
          alt="send"
          className="w-10 h-10 mx-auto"
        />
      </button>
    </div>
  )
}
