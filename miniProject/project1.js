const prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = []
let idticket = 1;

let annule = 0; 


munu();
function munu() {
    console.log(`=================================
       RAILWAY MANAGER
=================================
1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter`)
let n = parseInt(prompt("votre choix : "))

switch (n) {
    case 1:
        Afficher();
        munu();
        break;
    case 2:
        Acheter();
        munu();
        break;
    case 3:
        Affichertikets();
        munu();
        break;
    case 4:
        Annuler();
        munu();
        break;
    case 5:
        Rechercher();
        munu();
        break;
    case 6:
        Filtrer();
        munu();
        break;
    case 7:
        
        break;

    default:
        break;
}

}







function Afficher() {
    console.log(`=== TRAJETS DISPONIBLES ===`)
    console.log(trips);
}
function Acheter() {
    let g = prompt("Nom du passager : ")
    let j = parseInt(prompt("Identifiant du trajet : "))
    
    
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === j) {
            if (trips[i].availableSeats>0) {
                var a = (trips[i].departure + " -> " + trips[i].destination)
                var b = (trips[i].price + "DH");

                let nump = 1;
                for(let ticket of tickets){
                    if(ticket.tripId === trips[i].id){
                            nump++;  
                    }
                }
                
                if(annule === 0){
                    const ticket = {
                       id : idticket,
                       nom : g,
                       tripId : j,
                       trip : a,
                       price : b,
                       place : nump 
                   }
                   tickets.push(ticket);
                   idticket++;
                   trips[i].availableSeats--;
                }
                else{
                    
                    const ticket = {
                       id : idticket,
                       nom : g,
                       tripId : j,
                       trip : a,
                       price : b,
                       place : annule
                   }
                   tickets.push(ticket);
                   idticket++;
                   trips[i].availableSeats--;
                   annule = 0;
                    }
                
                 
               
               
               
                
                           
            } 
        } 
            
    }
    
} 
function Affichertikets() {
    console.log("=== TICKETS ===");
    for (let t = 0; t < tickets.length; t++) {
        console.log(`ticket #${t}
                -Passager : ${tickets[t].nom}
                -Trajet : ${tickets[t].trip}
                -Place : ${tickets[t].place}
                -price : ${tickets[t].price}`)
        
    }
    
}
function Annuler() {
    let anul = parseInt(prompt("Identifiant du ticket : "))
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === anul) {
            f =  annule
            annule = tickets[i].place
            tickets[i].place = f
            tickets.splice(i, 1)
            for(let trajet of trips){
                trajet.availableSeats++;
            }
            break;
        }
        
    }
}
function Rechercher() {
    let Recherch = prompt("Nom du passager : ")
    trouve = false;
    for (var i = 0; i < tickets.length; i++) {
        if (Recherch === tickets[i].nom) {
                trouve = true
                break;
        } if (Recherch !== tickets[i].nom) {
            trouve = false
        }
        
    } if (trouve === true) {
        console.log(`ticket #${i}
                -Passager : ${tickets[i].nom}
                -Trajet : ${tickets[i].trip}
                -Place : ${tickets[i].place}
                -price : ${tickets[i].price}`)
    } else {
        console.log("not found");
    }
} 
function Filtrer() {
    let depar = prompt("Ville de départ : ")
    for (let j = 0; j < trips.length; j++) {
        if (trips[j].departure === depar) {
            console.log(trips[j].departure + " -> " + trips[j].destination + " : " + trips[j].price + " DH")
        }
    }
}