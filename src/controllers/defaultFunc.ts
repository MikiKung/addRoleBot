import type { Message } from "discord.js"
import { AddPermission } from "./add-permission"

export const DefaultFunc = (message: Message) => {
  const MessageContent = message.content?.split(" ")
  const FirstMessage = MessageContent[0]
  const ActionMessage = MessageContent[1]

  //   console.log(FirstMessage, MessageContent)
  if (FirstMessage === "/botrole") {
    // console.log(ActionMessage)
    switch (ActionMessage) {
      case "add":
        AddPermission
      //   case "remove":
      //     console.log("remove")
    }
  }
}
