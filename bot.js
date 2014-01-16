var bot = require('n0d3')();

bot.name = 'unimate';

bot.use(
  require('n0d3-date'),
  require('n0d3-ping'),
  require('n0d3-heroku')
);

// Connect to freenode if we have the pass
if (process.env.IRCPASS) {
  bot.join({
    network: 'chat.freenode.net',
    channels: ['#mariposa'],
    userName: 'unimate',
    password: process.env.IRCPASS,
    sasl: true
  });
} 

// Run things locally if DEV is set
if (process.env.NODE_ENV == 'dev') {
  bot.join({
    network: 'localhost',
    channels: ['#test']
  });
}
