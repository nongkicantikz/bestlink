const links = [
    "https://performancecentre.com.tw/",
    "https://avvioimpresa.bo.cna.it/",
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
