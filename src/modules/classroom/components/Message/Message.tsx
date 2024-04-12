
import { useContext } from 'react';
import style from './Message.module.css'
import { AuthContext } from '../../../../context/auth/AuthContext';

interface MessageProps {
  author: string;
  userId: string;
  rol: string;
  date: string;
  text: string;
  file?: string;
}

const incomingMessage = "rounded-br-xl rounded-tr-xl rounded-bl-xl bg-slate-300";
const outcomingMessage = "bg-sky-200 rounded-tl-xl rounded-tr-none rounded-br-xl rounded-bl-xl self-end";

export const Message = ({ author, rol, date, text, file, userId }: MessageProps) => {

  const { user } = useContext(AuthContext);

  return (
    <div
      id="message"
      className={`w-[80%] p-2 mx-4 my-2 relative ${user!.id === userId ? outcomingMessage : incomingMessage} `}
    >

      <div className="flex items-center justify-between gap-3 font-semibold mb-[2px]">
        <p id="author" className="text-base">
          {author}
        </p>

        <p className="px-5 h-[25px] bg-red-600 opacity-70 text-white rounded-full text-xs grid place-items-center">{rol}</p>
      </div>

      <p id="text-content" className="text-base font-normal leading-4 mb-3">
        {text}
      </p>

      <p className="text-sm font-semibold text-gray-400">{date}</p>

      {
        user?.id !== userId ? (
          <div id="poligon" className={style.polygon}></div>
        ) : (
          <div id="poligon" className={style.polygon_2}></div>
        )
      }
    </div>
  )
}
