//

let textarea = document.getElementById("textarea");

let wordcount = document.querySelector(".wordCount");


function count() {
    let text = textarea.value;
    let splitText = text.split(" ");
    let numOfWords = splitText.length;
    wordcount.innerHTML = numOfWords;


}