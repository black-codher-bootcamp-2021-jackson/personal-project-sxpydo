import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Activate Chatterbot by typing 'hello' :)")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#6f48eb",
    },
    chatButton: {
      backgroundColor: "#6f48eb",
    },
  },
}

export default config