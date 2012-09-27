var bot = require('n0d3')();

bot.use(require('n0d3-ping'));

bot.join({
  campfire: {
    ssl: true,
    token: process.env.CF_TOKEN,
    account: process.env.CF_ACCOUNT,
    room: process.env.CF_ROOM
  }
})
