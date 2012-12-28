var bot = require('n0d3')();

bot.name = 'unimate';

bot.use(
  require('n0d3-ping')
);

bot.join(
  require('n0d3-client-irc')({
    network: 'chat.freenode.net',
    channels: ['#mariposa'],
    userName: 'unimate',
    password: process.env.IRCPASS,
    sasl: true
  })
);
