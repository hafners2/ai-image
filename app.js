const apiKey = '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';
const submitBtn = document.querySelector('.submit');
const inputElement = document.querySelector('.input');
const imageSection = document.querySelector('.images-container');
const responseHTML = document.querySelector('.waiting-response-html');
const resetContainer = document.querySelector(".reset-container");
const resetBtn = document.createElement("button");

resetBtn.classList.add("resetBtn");
resetContainer.append(resetBtn);

const generateImage = async () => {
    responseHTML.innerHTML = "please wait for server to respond!"
    const options = {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "prompt": inputElement.value,
            "n": 4,
            "size": "512x512"
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options);
        const data = await response.json();
        console.log(data);

        

        responseHTML.innerHTML = " ";

        /*
        resetBtn.innerHTML = "reset";
        resetBtn.style.visibility = "visible";
        resetBtn.style.margin = 'auto 45.5%';
        resetBtn.style.textAlign = 'center';
        */

    } catch (error) {
        console.log(error);
    }

}

submitBtn.addEventListener('click', generateImage);

