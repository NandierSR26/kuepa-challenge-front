import { TopMenu } from "../../../shared/components"
import { Message, SendMessage } from "../../components"

export const Classroom = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu className="border-b-[1px] border-gray-200" />

      <main className="bg-[#F9F9F9] md:py-20 flex-1 flex flex-col">

        <section id="video-player" className="w-full h-auto min-h-[350px] bg-slate-800">
          <iframe src="https://player.vimeo.com/video/927224063?h={hash_parameter}" width="100%" height="400"></iframe>
        </section>

        <section id="chat" className="bg-gray-300 w-full min-h-[600px] max-h-[600px] overflow-x-scroll flex flex-col p-2 relative pb-20">

          <div className="flex flex-col gap-2 items-start bg-gray-100 w-full h-[90%] rounded-xl flex-1 pt-4">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>

        </section>

        <SendMessage />

      </main>
    </div>
  )
}
