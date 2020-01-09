let imgTag = document.getElementById("comicImg");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Here");

    fetch("https://c.xkcd.com/random/comic/").then(r => {
        let pageLink = r.url;
        let str = "";
        fetch(r.url).then(r => r.text()).then(x => {
            let parser = new DOMParser();
            let imgDOM = parser.parseFromString(x, "text/html");
            let imgLink = "https://" + imgDOM.getElementById("comic").childNodes[1].src.substr(16);
            console.log(imgLink);
            imgTag.setAttribute("src", imgLink);
            
        });
        
    }).catch(e => console.log(e));
});
