

const btn = document.getElementById("jokeBtn")
const para = document.getElementById("jokePara")
const emo = document.getElementById("emoji")
const jbb = document.getElementsByClassName("jbb")
function coffee(){
    alert("Buy me a coffee!!")
}
setTimeout(coffee,3000)
function emoji(){
    console.log(Math.floor(Math.random() *10))
    if(Math.floor(Math.random() *10) == 0){
        emo.classList.add("animate__flip")
        emo.innerHTML = "🤣"
    }
    else if(Math.floor(Math.random() *10) == 1){
        emo.innerHTML = "😊"
    }
    else if(Math.floor(Math.random() *10) == 2){
        emo.innerHTML = "😝"
    }else if(Math.floor(Math.random() *10) == 3){
        emo.innerHTML = "😆"
    }else if(Math.floor(Math.random() *10) == 4){
        emo.innerHTML = "🙂"
    }else if(Math.floor(Math.random() *10) == 5){
        emo.innerHTML = "🙄"
    }else if(Math.floor(Math.random() *10) == 6){
        emo.innerHTML = "😑"
    }else if(Math.floor(Math.random() *10) == 7){
        emo.innerHTML = "😜"
    }else if(Math.floor(Math.random() *10) == 8){
        emo.innerHTML = "😭"
    }
    else if(Math.floor(Math.random() *10) == 9){
        emo.innerHTML = "😱"
    }
}

async function fetchData(){
    const response = await fetch('https://v2.jokeapi.dev/joke/Dark,Pun?blacklistFlags=political&type=single',{
        method: "GET",
            // headers: {
            //     'content-type': 'application/json',
            // 'X-RapidAPI-Key': 'ada64c7e39msh095a63bc737a0c8p1262c2jsn3c258e0398a8',
            // 'X-RapidAPI-Host': 'std.p.rapidapi.com'
            // },
            // body: JSON.stringify({
            //     search: 'siliguri'
            // })
    })
    const data = await response.json()
    console.log(data.joke);
    para.innerHTML = `${data.joke}`
    emoji()
}

fetchData()

btn.addEventListener('click', fetchData)
// const url = 'https://std.p.rapidapi.com/';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'ada64c7e39msh095a63bc737a0c8p1262c2jsn3c258e0398a8',
// 		'X-RapidAPI-Host': 'std.p.rapidapi.com'
// 	},
// 	body: {search: 'siliguri'}
// };

// try {
// 	const response =  fetch(url, options);
// 	const result =  response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
