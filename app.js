const apiKey = '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';
const submitBtn = document.querySelector('.submit');
const inputElement = document.querySelector('.input');
const imageSection = document.querySelector('.images-container');
const responseContainer = document.querySelector('.waiting-response-html');
const resetContainer = document.querySelector(".reset-container");
const resetBtn = document.createElement("button");
const loadingGif = document.createElement('div');

resetBtn.classList.add("resetBtn");
resetContainer.append(resetBtn);

loadingGif.classList.add("loading");
responseContainer.append(loadingGif);

const generateImage = async () => {
    
    const options = {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + apiKey,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5500",
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

