// creat map
const map = L.map('mapid').setView([-23.5593253,-46.6362725], 14);

//creat and tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// VERDE // 
//creat icon
const verde = L.icon({
    iconUrl: "./public/images/verde.png",
    iconSize: [40, 49],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})
//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('<h1 class="restaurante-name">Nakka Jardins</h1> <p class="star-txt"> 4.6 </p><img src="../public/images/star.png" class="star-img"> <p class="endereco">R. Padre João Manuel, 811 - Cerqueira César, São Paulo - SP, 01411-001</p>  <p class="icon-seta"><img src="../public/images/arrow-white.svg"></p>')

//create and add marker
L.marker([-23.563971286718786, -46.664830229369656], { icon: verde})
    .addTo(map)
    .bindPopup(popup)

// AMARELO // 

const amarelo = L.icon({
    iconUrl: './public/images/amarelo.png',
    iconSize: [40, 49],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

const popup1 = L.popup({
    closeButton: false,
    className: 'map-popup1',
    minWidth: 240,
    minHeight: 240
}).setContent('<h1 class="restaurante-name">Restaurante Aoyama - Jardins</h1> <p class="star-txt"> 4.4 </p><img src="../public/images/star.png" class="star-img"> <p class="endereco">R. Padre João Manuel, 1069 - Jardins, São Paulo - SP, 01411-000</p>  <p class="icon-seta"><img src="../public/images/arrow-white.svg"></p>')
    
L.marker([-23.565761099711754, -46.6663537241264], { icon: amarelo})
    .addTo(map)
    .bindPopup(popup1)
 
// LARANJA // 
const laranja= L.icon({
    iconUrl: "./public/images/laranja.png",
    iconSize: [40, 49],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

const popup2 = L.popup({
    closeButton: false,
    className: 'map-popup2',
    minWidth: 240,
    minHeight: 240
}).setContent('<h1 class="restaurante-name">Fogo de Chão Jardins</h1> <p class="star-txt"> 4.5 </p><img src="../public/images/star.png" class="star-img"> <p class="endereco">R. Augusta, 2077 - Cerqueira César, São Paulo - SP, 01413-100</p>  <p class="icon-seta"><img src="../public/images/arrow-white.svg"></p>')
    
L.marker([-23.56014225960508, -46.662561534210795], { icon: laranja})
    .addTo(map)
    .bindPopup(popup2)

    // VERMELHO // 
const vermelho = L.icon({
    iconUrl: "./public/images/vermelho.png",
    iconSize: [40, 49],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

const popup3 = L.popup({
    closeButton: false,
    className: 'map-popup3',
    minWidth: 240,
    minHeight: 240
}).setContent('<h1 class="restaurante-name">Bistrô Paris 6 Vaudeville</h1> <p class="star-txt"> 4.5 </p><img src="../public/images/star.png" class="star-img"> <p class="endereco">Rua Haddock Lobo, 1159 - Cerqueira César, São Paulo - SP, 01414-002</p>  <p class="icon-seta"><img src="../public/images/arrow-white.svg"></p>')
    
L.marker([-23.561263386788188, -46.66528665863484], { icon: vermelho})
    .addTo(map)
    .bindPopup(popup3)
