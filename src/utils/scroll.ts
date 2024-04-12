

export const scrollToBottomAnimated = () => {

    const chatContainer = document.getElementById('chat-history');

    if (!chatContainer) return

    let heightContainer = chatContainer.scrollHeight;
    chatContainer.scrollTo({
      top: heightContainer,
      behavior: 'smooth'
    })

}

export const scrollToBottom = () => {
  

}