
let  shoe = {
    'model': 'Sacai x Nike LDV Waffle',
    'colour': 'Varsity Blue/Del Sol/Varsity Red',
    'code': 'BV0073-400',
    'avaliable': '07/03/19',
    'price': '180$'
};

let raffles = {
    'Antonia Milano': {
        'logo': 'https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg',
        'country': 'Italy',
        'purchase': 'Online Raffle',
        'collection': 'Postage Available',
        'Sizes': '4 to 12 US',
        'Opens': 'live',
        'Closes': '06/03 @ 11AM CET',
        'url': 'https://www.antonia.it/164-shoes'
    },

    'END': {
        'logo': 'https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg',
        'country': 'UK',
        'purchase': 'Online Raffle',
        'collection': 'Postage Available',
        'Sizes': '5 to 12 UK',
        'Opens': 'live',
        'Closes': '07/03 @ 12AM GMT',
        'url': 'https://launches.endclothing.com/'
    },

    'Foot Patrol': {
        'logo': 'https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png',
        'country': 'France',
        'purchase': 'Online Raffle',
        'collection': 'Collection Only',
        'Sizes': '36.5 to 47.5 EU',
        'Opens': 'live',
        'Closes': '04/02 @ 10AM CET',
        'url': 'https://www.footpatrol.com/customer-service/raffle-fr/'
    },

    'Holypop': {
        'logo': 'https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png',
        'country': 'Italy',
        'purchase': 'Online FCFS',
        'collection': 'Postage Available',
        'Sizes': 'TBC',
        'Opens': 'announced',
        'Closes': '07/02 @ 12AM CET',
        'url': 'https://www.holypopstore.com/en/footwear'
    },

    'Offspring': {
        'logo': 'https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg',
        'country': 'UK',
        'purchase': 'Online Raffle',
        'collection': 'Collection Only',
        'Sizes': '3.5 to 7 UK',
        'Opens': 'live',
        'Closes': 'closed',
        'url': 'https://www.offspring.co.uk/release-dates'
    },

    'SNS': {
        'logo': 'https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg',
        'country': 'Swe, UK, Ger, Fr',
        'purchase': 'Online Raffle',
        'collection': 'Post and Collect',
        'Sizes': '4 to 13 US',
        'Opens': 'live',
        'Closes': '06/03 @ 11AM CET',
        'url': 'https://www.sneakersnstuff.com/en/937/sns-raffles'
    },

    'Solebox': {
        'logo': 'https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg',
        'country': 'Germany',
        'purchase': 'In-Store/Online',
        'collection': 'Post and Collect',
        'Sizes': '41 to 46 EU',
        'Opens': 'announced',
        'Closes': 'When sold out',
        'url': 'https://www.solebox.com/en/Footwear/'
    },

};
window.onload = function(){

    function cargarZapatilla(shoe){
        document.getElementById('titulo').innerHTML = shoe.model;
        document.getElementById('subtitulo').innerHTML = shoe.colour;
        document.getElementById('codigo').innerHTML = shoe.code;
        document.getElementById('disponibilidad').innerHTML = shoe.available;
        document.getElementById('precio').innerHTML = shoe.price;
    }
    cargarZapatilla(shoe);

    function cargarRifas(raffles){
        let names = Object.getOwnPropertyNames(raffles);
        for(let i = 0; i < names.length; i++){
            let container = document.createElement('div');
            container.id = names[i] + i.toString();
            let image = document.createElement('img');
            image.src = raffles[names[i]].logo;
            image.className = 'logos';
            container.appendChild(image);
            let name = document.createElement('p');
            name.className = 'names';
            name.innerHTML = names[i];
            container.appendChild(name);
            let boton = document.createElement('button');
            boton.onclick = function(){
                location.href = raffles[names[i]].url;
            };
            boton.onmouseover = function(){
                boton.style.position = 'relative';
                boton.style.top = '-5px';
            };
            boton.onmouseout = function(){
                boton.style.position = 'initial';
                boton.style.top = '0';
            };
            boton.className = raffles[names[i]].Opens;
            switch (raffles[names[i]].Opens){
                case 'live':
                boton.innerHTML = 'ENTRAR RAFFLE';
                if (raffles[names[i]].Closes === 'closed'){
                    boton.innerHTML = 'CLOSED';
                    boton.className =' closed';
                }
                break;
                case 'announced':
                boton.innerHTML = 'ANNOUNCED';
                break;
            }

            let raffleNames = Object.getOwnPropertyNames(raffles[names[i]]);
            for (let j=0; j<raffleNames.length;j++ ){
                if (raffleNames[j] !== 'logo' && raffleNames[j] !== 'url' ){
                    let data = document.createElement('p');
                    data.className= raffleNames[j];
                    data.innerHTML = raffles[names[i]][raffleNames[j]];
                    container.appendChild(data);
                }
            }
            container.appendChild(boton);
            let mark = document.createElement('div');
            let icon = document.createElement('i');
            icon.id ='icon' + container.id;
            mark.style.fontWeight = 'bold';
            if (window.localStorage.getItem(container.id) === null ||
                window.localStorage.getItem(container.id) === 'false') {
                mark.innerHTML = 'Mark as entered';
                icon.className ='sf-icon-star-empty';
            } else {
                mark.innerHTML = 'Entered';
                icon.className ='sf-icon-star';
            }
            container.appendChild(icon);
            mark.onclick = guardarMarcado;
            mark.onmouseover = function() {
                mark.style.cursor = 'pointer';
            };
            container.appendChild(mark);
            document.getElementById('rifas').appendChild(container);
        }
    }
    cargarRifas(raffles);

    function guardarMarcado(event){
        console.log('icon'+event.target.parentNode.id);
        let icon = document.createElement('i');
        if (window.localStorage.getItem(event.target.parentNode.id) === null ||
        window.localStorage.getItem(event.target.parentNode.id) === 'false') {
            window.localStorage.setItem(event.target.parentNode.id, 'true');
            event.target.innerHTML = 'Entered';
            document.getElementById('icon' + event.target.parentNode.id).className ='sf-icon-star';
        } else{
            window.localStorage.setItem(event.target.parentNode.id, 'false');
            event.target.innerHTML = 'Mark as entered';
            document.getElementById('icon' + event.target.parentNode.id).className ='sf-icon-star-empty';
        }
    }
};
