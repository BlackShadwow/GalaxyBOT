const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
 
  if (!message.guild.member(bot.user).hasPermission("SEND_MESSAGES")) return message.author.send('I don\'t have permission to Send Messages. Please enable send messages for my role!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.MessageEmbed()
            .setFooter("GAGNER", aicon)
            .setTitle(':slot_machine:Casino:slot_machine:')
            .addField('RESULTAT:', `${slots[result1]} ${slots[result2]} ${slots[result3]}`, true)
            .setColor("#01FE12");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter('PERDU', aicon)
            .setTitle(':slot_machine:Casino:slot_machine:')
            .addField('RESULTAT', `${slots[result1]} ${slots[result2]} ${slots[result3]}`, true)
            .setColor("#FE2301");
        message.channel.send(embed);
    }
}
module.exports.help = {
  name: "casino"
}