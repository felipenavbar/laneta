const axios = require('axios');

const apiKey = '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';

axios.post('https://api.openai.com/v1/completions', {
  model: "text-davinci-003",
  prompt: "Hola, ¿cómo estás?",
  max_tokens: 100,
  temperature: 0.7
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }
})
  .then(response => {
    console.log(response.data.choices[0].text);
  })
  .catch(error => {
    console.error('Error:', error);
  });
