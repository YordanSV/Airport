// import { fligths } from './flightScript.js';
const originInput = document.querySelector('#origin');
const destinationInput = document.querySelector('#destination');
const departureTimeInput = document.querySelector('#departureTime');
const arrivalTimeInput = document.querySelector('#arrivalTime');
const dateInput = document.querySelector('#date');


const flights = [
  { imageSrc: './img/brasil.jpg', origin: 'Panama', destination: 'Brasil', price: '250', date: '2024-01-01', departureTime: '13:00', arrivalTime: '15:00' },
  { imageSrc: './img/colombia.jpg', origin: 'Panama', destination: 'Colombia', price: '200', date: '2024-01-11', departureTime: '17:00', arrivalTime: '19:00' },
  { imageSrc: './img/peru.jpg', origin: 'Nicaragua', destination: 'Peru', price: '265', date: '2024-01-25', departureTime: '15:00', arrivalTime: '17:00' },
  { imageSrc: './img/honduras.jpg', origin: 'Nicaragua', destination: 'Honduras', price: '180', date: '2024-01-14', departureTime: '10:00', arrivalTime: '13:00' },
  { imageSrc: './img/ecuador.jpeg', origin: 'Costa Rica', destination: 'Ecuador', price: '300', date: '2024-01-14', departureTime: '08:00', arrivalTime: '10:00' },
  { imageSrc: './img/republica_dominicana.jpg', origin: 'Costa Rica', destination: 'Republica Dominicana', price: '240', date: '2024-01-05', departureTime: '15:00', arrivalTime: '18:00' },
  { imageSrc: './img/colombia.jpg', origin: 'Brasil', destination: 'Colombia', price: '230', date: '2024-01-05', departureTime: '14:00', arrivalTime: '18:00' },
  { imageSrc: './img/venezuela.jpg', origin: 'Brasil', destination: 'Venezuela', price: '250', date: '2024-01-25', departureTime: '17:00', arrivalTime: '20:00' }
]


const searchFligth = {
  origin: '',
  destination: '',
  price: '',
  date: '',
  departureTime: '',
  arrivalTime: ''
}


document.addEventListener('DOMContentLoaded', () => {
  renderFlightCards(flights); //Muestra los vuelos al cargar
})



function generateFlightCard(flight) {
  return `
      <div class="col-md-4 mb-4">
          <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${flight.imageSrc}" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${flight.origin} - ${flight.destination}</h5>
                  <p class="card-text">
                      <strong>Date:</strong> ${flight.date}<br>
                      <strong>Departure Time:</strong> ${flight.departureTime}<br>
                      <strong>Arrival Time:</strong> ${flight.arrivalTime}<br>
                      <strong>Price:</strong> $${flight.price}
                  </p>
                  <a href="#" class="btn btn-primary">Book Now</a>
              </div>
          </div>
      </div>
  `;
}

function renderFlightCards(flights) {
  // Obtener el contenedor de filas de tarjetas de vuelo
  const flightCardRow = document.getElementById('flightCardRow');

  // Generar las tarjetas de vuelo y agregarlas al contenedor en filas
  flights.forEach(flight => {
    const flightCard = generateFlightCard(flight);
    flightCardRow.innerHTML += flightCard;
  });
}

