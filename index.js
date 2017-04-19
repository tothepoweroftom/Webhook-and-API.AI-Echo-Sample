'use strict';

const ApiAiAssistant = require('actions-on-google').ApiAiAssistant;

exports.themostinterestingman = (req, res) => {
  const assistant = new ApiAiAssistant({request: request, response: response});

  const WELCOME_INTENT = 'custom.welcome';  // the action name from the API.AI intent

  let actionMap = new Map();
  actionMap.set(WELCOME_INTENT, welcomeIntent);
  // Create functions to handle requests here


  function saySSML(assistant) {
  let text_to_speech = '<speak>'
    + 'Here are <say-as interpret-as="characters">SSML</say-as> samples. '
    + 'I can pause <break time="3"/>. '
    + 'I can play a sound <audio src="https://www.example.com/MY_WAVE_FILE.wav">your wave file</audio>. '
    + 'I can speak in cardinals. Your position is <say-as interpret-as="cardinal">10</say-as> in line. '
    + 'Or I can speak in ordinals. You are <say-as interpret-as="ordinal">10</say-as> in line. '
    + 'Or I can even speak in digits. Your position in line is <say-as interpret-as="digits">10</say-as>. '
    + 'I can also substitute phrases, like the <sub alias="World Wide Web Consortium">W3C</sub>. '
    + 'Finally, I can speak a paragraph with two sentences. '
    + '<p><s>This is sentence one.</s><s>This is sentence two.</s></p>'
    + '</speak>'
  assistant.tell(text_to_speech);
};
}
