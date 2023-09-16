// FETCH API

function fetchData(){
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            renderAdvice(data);
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    function renderAdvice(data){
        const adviceNum = document.getElementById('advice-num');
        const adviceWords = document.getElementById('advice-words');

        adviceNum.innerHTML = data.slip.id;
        adviceWords.innerHTML = `"${data.slip.advice}"`;
    }
}
fetchData();

// event listener
const button = document.getElementById('button');
button.addEventListener('click', fetchData);