var data = [
    {
        id: 1,
        shoeName: "NIKE AIR JORDAN 1 MID GS",
        htmlLink: "productPage1.html",
        picture2: "./pictures/jordan1midpinkquartz/2.png",
    },
    {
        id: 2,
        shoeName: "Fragment Design x sacai x LDV Waffle 'Light Smoke Grey'",
        htmlLink: "productPage2.html",
        picture2: "./pictures/FragmentSaccaiWaffle/2.png"
    },
    {
        id: 3,
        shoeName: "Dunk Low 'Black White'",
        htmlLink: "productPage3.html",
        picture2: "./pictures/DunkLowBlackWhite/2.png"
    },
    {
        id: 4,
        shoeName: "Fragment Design x Travis Scott x Air Jordan 1 Retro Low",
        htmlLink: "productPage4.html",
        picture2: "./pictures/FragmentTravisAJ1Low/2.png"
    },
    {
        id: 5,
        shoeName: "Fragment Design x Travis Scott x Air Jordan 1 Retro High",
        htmlLink: "productPage5.html",
        picture2: "./pictures/FragmentTravisAJ1High/2.png"
    },
    {
        ID: 6,
        htmlLink:"productPage6.html",
        shoeName:"Travis Scott x Air Jordan 1 Retro High OG 'Mocha'",
        picture2: "./pictures/OGTravisAJ1High/2.png",
    },
    {
        ID: 7,
        htmlLink:"productPage7.html",
        shoeName:"Travis Scott x Air Jordan 1 Low 'Mocha'",
        picture2: "./pictures/OGTravisAJ1Low/2.png",
    },
    {
        ID: 8,
        htmlLink:"productPage8.html",
        shoeName:"Off-White x Wmns Air Jordan 4 SP 'Sail'",
        picture2: "./pictures/OWAJ4sail/2.png",
    },
    {
        ID: 9,
        htmlLink:"productPage9.html",
        shoeName:"Dior x Air Jordan 1 High",
        picture2: "./pictures/DIORAJ1High/2.png",
    },
    {
        ID: 10,
        htmlLink:"productPage10.html",
        shoeName:"Space Jam x Air Force 1 07 Low 'Hare'",
        picture2: "./pictures/SpaceJamAF1Hare/2.png",
    },
]
var cardItem = document.getElementById("cardItem")
for (let i of data) {
    let html = `        
    <div class="container">
    <div class="card">
        <div class="imgBx">
            <img src="${i.picture2}" alt="">
        </div>
        <div class="contentBx">
            <h2>${i.shoeName}</h2>
            <div class="size">
                <h3> Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
            <div class="color">
            </div>
            <a href="${i.htmlLink}">Buy Now</a>
        </div>
    </div>
</div>`

    cardItem.insertAdjacentHTML('beforeend', html)
}