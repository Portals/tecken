window.addEventListener('load', (event) => {
    const mainEl = document.querySelector("main");

    tecken.forEach((teck, i) => {
        const articleEl = document.createElement("article");
        articleEl.classList.add("article-" + (i % 3)); 

        const articleHeaderEl = document.createElement("div");        

        const titleEl = document.createElement("h2");   
        titleEl.innerHTML = teck.title;

        const subtitleEl = document.createElement("h3");
        subtitleEl.innerHTML = teck.date;

        articleHeaderEl.appendChild(titleEl);
        articleHeaderEl.appendChild(subtitleEl);

        const descriptionEl = document.createElement("p");
        descriptionEl.innerHTML = teck.description;

        const linkEl = document.createElement("a");
        linkEl.href = teck.link;
        linkEl.target = "_blank";
        linkEl.innerHTML = "Öppna i Teckenspråkslexikon.su.se";

        const videoEl = document.createElement("video"); 
        videoEl.controls = true;
        videoEl.loop = true;

        const sourceEl = document.createElement("source");
        sourceEl.src = teck.video;
        sourceEl.type = "video/mp4"

        videoEl.appendChild(sourceEl);

        articleEl.appendChild(articleHeaderEl);
        articleEl.appendChild(descriptionEl);
        articleEl.appendChild(videoEl);
        articleEl.appendChild(linkEl);

        mainEl.appendChild(articleEl);
    });
});

const tecken = [
    {
        title: "Fågel",
        date: "Lördagen den 10:e Maj, 2020",
        description: "Raka måtthanden, uppåtriktad och framåtvänd, förändras till nyphand ett par gånger med bibehållen kontakt med munnen",
        link: "https://teckensprakslexikon.su.se/ord/03275",
        video: "https://teckensprakslexikon.su.se/movies/03/fagel-03275-tecken.mp4"
    },
    {
        title: "Brista ut i gråt",
        date: "Onsdagen den 6:e Maj, 2020",
        description: "Krokfingrar, uppåtriktade och framåtvända, kontakt vid ögonen, förs framåt och nedåt samtidigt som de slås framåt",
        link: "https://teckensprakslexikon.su.se/ord/03560",
        video: "https://teckensprakslexikon.su.se/movies/03/brista-ut-i-grat-03560-tecken.mp4"
    }
]