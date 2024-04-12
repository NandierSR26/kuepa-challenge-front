import { useContext, useEffect, useMemo, useRef, useState } from "react"
import { Message } from "../Message/Message"
import { ChatContext } from "../../../../context/chat/chatContext"
import { scrollToBottom } from "../../../../utils/scroll";

export const ChatHistory = () => {

  const { chatState, getGroupChat } = useContext(ChatContext);
  const messagesContainer = useRef<HTMLDivElement>(null);


  useEffect(() => {
    getGroupChat();
  }, [])

  useEffect(() => {
    // getGroupChat();
    scrollToBottom();
  }, [chatState.messages])

  return (
    <div
      id="messages"
      className="flex flex-col gap-2 items-start bg-gray-100 w-full h-[90%] lg:h-full rounded-xl flex-1 pt-4 overflow-y-scroll min-h-[700px] pb-[100px] lg:pb-[70px]"
      ref={messagesContainer}
    >
      {
        chatState.messages.map(message => (
          <Message
            key={message.id}
            author={message.from.username}
            userId={message.from.id}
            text={message.text}
            rol={message.from.rol}
            date={message.createdAt}
            file={message.file}
          />
        ))
      }
      <div id="last-message"></div>
    </div>
  )
}
