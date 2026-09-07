const links = [
    "https://performancecentre.com.tw/",
    "https://avvioimpresa.bo.cna.it/",
    "https://intensivo.puepenarm.com/",
    "https://performancecentre.com.tw/",
];

const fragment = document.createDocumentFragment();

links.forEach(url => {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = "slot gacor";
    a.title = "slot gacor";
    fragment.appendChild(a);
});

document.body.appendChild(fragment);
