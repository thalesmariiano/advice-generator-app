
const advice_id = document.querySelector("#advice-id")
const advice_text = document.querySelector("#advice-text")
const request_advice = document.querySelector("#request_advice")

const url = "https://api.adviceslip.com/advice"

window.onload = function(){
  	getAdvice()
 }

request_advice.addEventListener("click", getAdvice)

function getAdvice(){
	fetch(url)
	.then((resp) => resp.json())
		.then((data) => {
			let slip = data.slip
			advice_id.innerHTML = `ADVICE #${slip.id}`
			advice_text.innerHTML = `"${slip.advice}"`
		})
	.catch((error) =>{
		console.log(error)
		request_advice.style.border = "1.5px solid red"
	})	
}
