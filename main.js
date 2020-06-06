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
        title: "Popcorn",
        date: "Fredagen den 5:e Juni, 2020",
        description: "O-händer, framåtriktade och uppåtvända, förs kort uppåt växelvis samtidigt som de förändras till klohänder, upprepas",
        link: "https://teckensprakslexikon.su.se/ord/09662",
        video: "https://teckensprakslexikon.su.se/movies/09/popcorn-09662-tecken.mp4"
    },
    {
        title: "Shoppa",
        date: "Måndagen den 2:e Juni, 2020",
        description: "Tumhänder, nedåtriktade och inåtvända, förs kort nedåt, upprepas",
        link: "https://teckensprakslexikon.su.se/ord/08883",
        video: "https://teckensprakslexikon.su.se/movies/08/shoppa-08883-tecken.mp4"
    },
    {
        title: "Panik",
        date: "Lördagen den 30:e Maj, 2020",
        description: "Knutna händer, uppåtriktade och den vänstra inåtvänd och den högra framåtvänd, förs fram och in växelvis ett par gånger samtidigt som de vrids fram och in framför övre delen av ansiktet",
        link: "https://teckensprakslexikon.su.se/ord/09968",
        video: "https://teckensprakslexikon.su.se/movies/09/panik-09968-tecken.mp4"
    },
    {
        title: "Dejt",
        date: "Fredagen den 29:e Maj, 2020",
        description: "Pekfingrar, uppåtriktade och vända mot varandra, upprepade kontakter bredvid varandra",
        link: "https://teckensprakslexikon.su.se/ord/07291",
        video: "https://teckensprakslexikon.su.se/movies/07/date-07291-tecken.mp4"
    },
    {
        title: "Tälta/Tält",
        date: "Fredagen den 22:e Maj, 2020",
        description: "Flata händer, framåtriktade och nedåtvända, vinkelkontakt, förs sedan från varandra och nedåt",
        link: "https://teckensprakslexikon.su.se/ord/00694",
        video: "https://teckensprakslexikon.su.se/movies/00/talta-00694-tecken.mp4"
    },
    {
        title: "Hålla tyst",
        date: "Torsdagen den 21:e Maj, 2020",
        description: "Hållhanden, uppåtriktad och vänstervänd, vrids inåt med bibehållen kontakt med munnen",
        link: "https://teckensprakslexikon.su.se/ord/03796",
        video: "https://teckensprakslexikon.su.se/movies/03/halla-tyst-03796-tecken.mp4"
    },
    {
        title: "Tyst",
        date: "Torsdagen den 21:e Maj, 2020",
        description: "Pekfingret, uppåtriktat och vänstervänt, kontakt med munnen",
        link: "https://teckensprakslexikon.su.se/ord/01867",
        video: "https://teckensprakslexikon.su.se/movies/01/tyst-01867-tecken.mp4"
    },
    {
        title: "Student",
        date: "Lördagen den 16:e Maj, 2020",
        description: "Hållhanden, framåtriktad och vänstervänd, förs kort inåt mot pannan samtidigt som den slås uppåt",
        link: "https://teckensprakslexikon.su.se/ord/03770",
        video: "https://teckensprakslexikon.su.se/movies/03/student-03770-tecken.mp4"
    },
    {
        title: "Fågel",
        date: "Lördagen den 9:e Maj, 2020",
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
