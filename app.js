const text = document.getElementById('input');

const speak = ()=>{
    const toSpeak = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(toSpeak);
}

const lowerCase = ()=>{
     let capText = text.value.toLowerCase();
     console.log(capText);
     text.value = capText;
}

const upperCase = ()=>{
    let capText = text.value.toUpperCase();
    console.log(capText);
    text.value = capText;
}

document.getElementById('copy').addEventListener("click", () =>{navigator.clipboard.writeText(text.value) ; alert('Text copied to your clipboard')})