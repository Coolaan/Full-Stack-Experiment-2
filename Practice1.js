const textArea= document.getElementById("inputBox");
const counter = document.getElementById("counter");

textArea.addEventListener("input", ()=>{
    counter.textContent = textArea.value.length;
})
