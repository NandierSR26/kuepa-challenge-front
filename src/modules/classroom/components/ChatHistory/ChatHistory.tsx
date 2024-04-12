import { useContext, useEffect } from "react"
import { Message } from "../Message/Message"
import { ChatContext } from "../../../../context/chat/chatContext"
import { scrollToBottom } from "../../../../utils/scroll";

export const ChatHistory = () => {

  const { chatState, getGroupChat } = useContext(ChatContext);  

  useEffect(() => {
    getGroupChat()
  }, [])


  return (
    <div className="flex flex-col gap-2 items-start bg-gray-100 w-full h-[90%] rounded-xl flex-1 pt-4">
      {
        chatState.messages.map( message => (
          <Message
            key={message.id}
            author={message.from.name}
            userId={message.from.id}
            text={message.text}
            rol={message.from.rol}
            date={message.createdAt}
            file={message.file}
          />
        ))
      }
    </div>
  )
}
