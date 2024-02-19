//must utilize own generated openai api key 
const apiKey = '';
const submitBtn = document.querySelector('.submit');
const inputElement = document.querySelector('.input');
const imageSection = document.querySelector('.images-container');
const responseContainer = document.querySelector('.waiting-response-html');
const resetContainer = document.querySelector(".reset-container");
const resetBtn = document.createElement("button");

resetBtn.classList.add("resetBtn");
resetContainer.append(resetBtn);

const generateImage = async () => {

    responseContainer.classList.add('loading');
    
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

        data?.data.forEach(imageObject => {
            const ImageContainer = document.createElement('div');
            ImageContainer.classList.add('image-container');
            const ImageElement = document.createElement('img');
            ImageElement.setAttribute('src', imageObject.url);
            ImageContainer.append(ImageElement);
            imageSection.append(ImageContainer);
        })

        responseContainer.classList.remove('loading');

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

