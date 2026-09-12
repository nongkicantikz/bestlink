const links = [
    "https://untz.ba/",
    "https://avvioimpresa.bo.cna.it/",
    "https://www.gpisrl.com/",
    "https://husfarm.it/",
    "https://medycznapolska.eu/",
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
