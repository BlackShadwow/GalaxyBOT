const Discord = require('discord.js')
module.exports.run = (bot, message, args) => {
 
  if(!args[0]) return message.channel.send('Correct usage: **ks!reverse (text to reverse)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
   
  sreverse = `${args.join(' ')}..Ah ! Vous l'avez casser :|`
  
  }
  const reverseEmbed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('Input: ', '```' + `${args.join(' ')}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
}
module.exports.help = {
  name: "reverse"
}