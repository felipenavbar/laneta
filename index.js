const axios = require('axios');

const apiKey = ""
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
