const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
// BOTUN PAYLAลILMASI KESฤฐNLฤฐKLE YASAKTIR
let prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setStatus("online");
console.log('๐๐ผ๐ ๐๐ฝ๐น๐ฎ๐๐ต๐ฒ๐ป ๐๐ฎ๐ฟ๐ฎ๐ณฤฑ๐ป๐ฑ๐ฎ๐ป ๐๐ฎ๐ฝฤฑ๐น๐บฤฑล๐ฤฑ๐ฟ.๐ฃ๐ฎ๐๐น๐ฎ๐ฤฑ๐น๐บ๐ฎ๐ฤฑ ๐๐ฎ๐๐ฎ๐ธ๐ฤฑ๐ฟ.๐๐๐ฎ๐ฟ๐น๐ฎ๐ฟฤฑ ๐ฎ๐๐ฎ๐ฟ๐น๐ฎ๐ฟ.๐ท๐๐ผ๐ป ๐ฑ๐ผ๐๐๐ฎ๐ฤฑ๐ป๐ฑ๐ฎ๐ป ๐๐ฎ๐ฝ๐ฎ๐ฏ๐ถ๐น๐ถ๐ฟ๐๐ถ๐ป๐ถ๐.๐งรผ๐บ ๐ฎ๐๐ฎ๐ฟ๐น๐ฎ๐ฟฤฑ ๐ฑ๐ผ๐น๐ฑ๐๐ฟ๐บ๐ฎ๐๐๐ฎ๐ปฤฑ๐ ๐ฏ๐ฎ๐ฤฑ รถ๐๐ฒ๐น๐น๐ถ๐ธ๐น๐ฒ๐ฟ รง๐ฎ๐นฤฑล๐บ๐ฎ๐๐ฎ๐ฏ๐ถ๐น๐ถ๐ฟ.');
  console.log(
    ` \n ${client.user.username}: { Kanal : ` +
      client.channels.size +
      ` Sunucu :` +
      client.guilds.size +
      ` Kullanฤฑcฤฑ : ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` }`
  );
};
// BOTUN PAYLAลILMASI KESฤฐNLฤฐKLE YASAKTIR