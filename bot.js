var bot = require('n0d3')();
var irc = require('n0d3-client-irc');

bot.name = 'unimate';

bot.use(
  require('n0d3-ping'),
  require('n0d3-heroku')
);

// Connect to freenode if we have the pass
if (process.env.IRCPASS) {
  bot.join(
    irc({
      network: 'chat.freenode.net',
      channels: ['#mariposa'],
      userName: 'unimate',
      password: process.env.IRCPASS,
      sasl: true
    })
  );
} 

// Run things locally if DEV is set
if (process.env.DEV) {
  bot.join(
    irc({
      network: 'localhost',
      channels: ['#test']
    })
  );
}
