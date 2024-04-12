import { useEffect } from "react"
import { TopMenu } from "../../../shared/components"
import { ChatHistory, SendMessage } from "../../components"
import useScreenSize from "../../../../hooks/useScreenSize"

export const Classroom = () => {

  const { width } = useScreenSize();

  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu className="border-b-[1px] border-gray-200" />

      <main className="bg-[#F9F9F9] md:py-20 lg:py-10 flex-1 flex flex-col lg:flex-row">

        <section id="video-player" className="w-full h-auto min-h-[300px] sm:min-h-[350px] bg-slate-800 flex items-center">
          <iframe src="https://player.vimeo.com/video/927224063?h={hash_parameter}" width="100%" height="400"></iframe>
        </section>

        <section
          id="chat-history"
          className="bg-gray-100 w-full h-[600px] lg:h-[650px] overflow-hidden flex flex-col p-2 lg:p-0 relative lg:bg-gray-100 border-t-[1px] border-gray-300"
        >
          {
            <ChatHistory />
          }

          {
            width > 1024 && (
              <SendMessage />
            )
          }
        </section>

        {
          width < 1024 && (
            <SendMessage />
          )
        }

      </main>
    </div>
  )
}
