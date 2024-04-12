import { useContext, useState } from "react";
import { SocketContext } from "../../../../context/sockets/socketContext";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { ChatContext } from "../../../../context/chat/chatContext";
import { DestinationTypes } from "../../../../types/types";
import { scrollToBottom, scrollToBottomAnimated } from "../../../../utils/scroll";

export const SendMessage = () => {

  const [messageText, setMessageText] = useState<string>('');

  const { socket } = useContext(SocketContext);
  const { user } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const textHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessageText( e.target.value )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if( messageText.trim().length === 0 ) return;
    setMessageText('');

    
    socket?.emit('message-to-group', {
      from: user?.id,
      to: chatState.users.map(user => user.id ).filter(id => id !== user?.id ),
      text: messageText,
      file: '',
      destination_type: DestinationTypes.group
    })
    
    scrollToBottomAnimated()
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex bg-gray-100 w-full h-[60px] border-[1px] border-gray-400 mt-2 overflow-hidden fixed bottom-0"
    >
      <textarea
        className="w-[75%] border-gray-300 px-2 outline-none resize-none h-full text-base py-[15px]"
        placeholder="Escribe un mensaje"
        style={{
          height: '100%'
        }}
        onChange={textHandleChange}
        value={messageText}
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

      <button className="flex-1 p-2 bg-slate-800" type="submit">
        <img
          src="/assets/send-icon.svg"
          alt="send"
          className="w-10 h-10 mx-auto"
        />
      </button>
    </form>
  )
}
