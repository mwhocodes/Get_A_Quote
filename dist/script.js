const quoteEl = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

// function generateQuote() {
//   const config = {
//     headers: {Accept: 'application/json'}
//   }
//   fetch('http://icanhazdadjoke.com', config).then(res =>
//     res.json().then(data => (quoteEl.innerHTML = data.joke))
//   )
// }

function generateQuote() {
  const config = {
    headers: {
      'x-rapidapi-key': '5d175899b5msh547fb0011f259d1p16a602jsn3a1b51b19b99',
      'x-rapidapi-host': 'quotes15.p.rapidapi.com',
      useQueryString: true
    }
  }
  fetch('https://quotes15.p.rapidapi.com/quotes/random/', config).then(res =>
    res.json().then(data => (quoteEl.innerHTML = data.content))
  )
}
