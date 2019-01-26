const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'data_bot_0',
    password: 'oauth:1ezdnt2swne66zi51s8c75lfh21rn2' // data_bot_0
  },
  channels: [
    'data_prime'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();


// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
////  

////
  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
      // SEND MESSAGE TO DEFINE INTENT
var watson = require('watson-developer-cloud');

var assistant = new watson.AssistantV1({
  iam_apikey: 'BD8jSy5yuP5XhKCwJ4Min6uj6GrxPh_vhQhrT0YG-k0w',
//  iam_apikey: 'J-FjvLvTCX3w4j1pNpbFfmBg1Tmf4kjpK32Vhj_PdmQi',
  version: '2018-09-20',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

assistant.message({
  workspace_id: 'cb2aa3d1-9628-4a2c-a952-2655fb7e0773',
	//  workspace_id: 'cebd2b40-c971-40ba-b28c-00dcdc8b328b',
  input: {'text': msg}
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
//    console.log(JSON.stringify(response, null, 2)
    console.log(response.output.text[0]);
    client.say(target, response.output.text[0]);	
});
  // RETURN INTENT AND ANALYZE BELOW 
  }
}

// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

