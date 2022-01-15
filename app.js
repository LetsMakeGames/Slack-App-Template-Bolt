require('dotenv').config();
const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret. 
// Update values in dotenv-example and rename to .env or set your own.
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
  });

/* Enter your code logic here. Get started with Bolt: https://slack.dev/bolt-js/tutorial/getting-started-http */
app.command('/lovebot', async ({ command, ack, respond }) => {
  await ack();
  await respond({
    "blocks": [
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Click Me",
              "emoji": true
            },
            "value": "love button clicked",
            "action_id": "love-button"
          }
        ]
      }
    ]
  });
})

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  
  console.log('⚡️ Bolt app is running!');
})();