import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./Options";
import LinkList from "./LinkList";

const config = {
initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you like to do?", {
      widget: "HelpOptions",
    }),
  ],
 
 widgets: [
     {
     	widgetName: "HelpOptions",
    	widgetFunc: (props) => <Options {...props} />,
     },
     {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
      },
 ],
}

export default config