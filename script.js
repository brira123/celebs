let celebrities = [
    {
        name: "Abdul Sattar Edhi",
        title: "Founder, Edhi Foundation",
        readMoreURL: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        imgURL: "edhi.jpg",
        quote: "No religion is higher than humanity"
    }, 
    {
        name: "Malala Yousufzai",
        title: "Female Education Activist",
        readMoreURL: "https://en.wikipedia.org/wiki/Malala_Yousafzai",
        imgURL: "malala.jpg",
        quote: "One child, one teacher, one book, one pen can change the world."
    },
    {
        name: "Abdul Qadir Khan",
        title: "Nuclear Physicist",
        readMoreURL: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
        imgURL: "qadeer.jpg",
        quote: "I am proud of my work for my country."
    } 
]

function initialize() {
    let celebritiesGroupEl = document.querySelector("#celebs-list");
    for(let i = 0 ; i < celebrities.length; i++) {
        celebritiesGroupEl.innerHTML += 
        `<div class='celebrity-img-div' 
        style="background-image: url('images/${celebrities[i].imgURL} ')" 
        onclick= "changeCeleb(${i})">
        <p class= "celeb-img-txt">${celebrities[i].name}</p>
        </div>`
    }
}

function changeCeleb(celebIndex) {
    document.querySelector("#celeb-name").innerHTML = celebrities[celebIndex].name;
    document.querySelector("#celeb-title").innerHTML = celebrities[celebIndex].title;
    document.querySelector("#celeb-img").style["background-image"] = `url(images/${celebrities[celebIndex].imgURL});`;
    document.querySelector("#celeb-quote").innerHTML = celebrities[celebIndex].quote;
    document.querySelector("#celeb-link a").href= celebrities[celebIndex].readMoreURL;

}