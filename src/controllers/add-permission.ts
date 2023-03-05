export const AddPermission = (message: any) => {
  const data = message.guild.roles.cache.get("857674758895042640")
  //   const allRole = data.guild.roles.cache.forEach((role) => console.log(role.id, role.name))
  //   console.log(allRole)

  if (message.content.split(" ")[0] === "test") {
    const userId = message.content.split(" ")[1].replace("@", "").replace("<", "").replace(">", "")
    const userData = message.guild.members.cache.get(userId)

    if (message.content.split(" ")[2] === "role") {
      const roleId = message.content.split(" ")[3].replace("@", "").replace("<", "").replace(">", "").replace("&", "")
      userData.roles.add(roleId).then((res) => {
        message.reply("Added!!!")
      })
    }
  }
}
