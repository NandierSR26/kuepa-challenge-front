
export const scrollToBottomAnimated = () => {
    const lastMessage = document.getElementById('last-message');

    if (!lastMessage) return
    lastMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

}

export const scrollToBottom = () => {
  const chatContainer = document.getElementById('last-message');

  if (!chatContainer) return
  chatContainer.scrollIntoView({ behavior: 'instant', block: 'start' });

}