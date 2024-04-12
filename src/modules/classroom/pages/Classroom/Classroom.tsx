import { useEffect } from "react"
import { TopMenu } from "../../../shared/components"
import { ChatHistory, SendMessage } from "../../components"
import { scrollToBottom, scrollToBottomAnimated } from "../../../../utils/scroll"

export const Classroom = () => {

  useEffect(() => {
    scrollToBottomAnimated();
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu className="border-b-[1px] border-gray-200" />

      <main className="bg-[#F9F9F9] md:py-20 flex-1 flex flex-col">

        <section id="video-player" className="w-full h-auto min-h-[350px] bg-slate-800">
          <iframe src="https://player.vimeo.com/video/927224063?h={hash_parameter}" width="100%" height="400"></iframe>
        </section>

        <section
          id="chat-history"
          className="bg-gray-300 w-full min-h-[600px] max-h-[600px] overflow-x-scroll flex flex-col p-2 relative pb-20"
        >
          {
            <ChatHistory />
          }
        </section>

        <SendMessage />

      </main>
    </div>
  )
}
