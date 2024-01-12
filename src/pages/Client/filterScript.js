// import { fligths } from './flightScript.js';

const tableFlights = document.querySelector('#tableFlights');

const flights = [
  { imageSrc: './img/brasil.jpg', origin: 'Panama', destination: 'Brasil', price: '250', date: '2024-01-01', departureTime: '13:00', arrivalTime: '15:00' },
  { imageSrc: '', origin: 'Panama', destination: 'Colombia', price: '200', date: '2024-01-11', departureTime: '17:00', arrivalTime: '19:00' },
  { imageSrc: '', origin: 'Nicaragua', destination: 'Peru', price: '265', date: '2024-01-25', departureTime: '15:00', arrivalTime: '17:00' },
  { imageSrc: '', origin: 'Nicaragua', destination: 'Honduras', price: '180', date: '2024-01-14', departureTime: '10:00', arrivalTime: '13:00' },
  { imageSrc: '', origin: 'Costa Rica', destination: 'Ecuador', price: '300', date: '2024-01-14', departureTime: '08:00', arrivalTime: '10:00' },
  { imageSrc: '', origin: 'Costa Rica', destination: 'Republica Dominicana', price: '240', date: '2024-01-05', departureTime: '15:00', arrivalTime: '18:00' },
  { imageSrc: '', origin: 'Brasil', destination: 'Colombia', price: '230', date: '2024-01-05', departureTime: '14:00', arrivalTime: '18:00' },
  { imageSrc: '', origin: 'Brasil', destination: 'Venezuela', price: '250', date: '2024-01-25', departureTime: '17:00', arrivalTime: '20:00' }
]


const searchFligth = {
  origin: '',
  destination: '',
  price: '',
  date: '',
  departureTime: '',
  arrivalTime: ''
}

showFligths(flights);

function showFligths(flightsPar) {

  const tr = document.createElement('tr');
  const headers = ['Origin', 'Destination', 'Date', 'Departure Time', 'Arrival Time', 'Price'];
  const thead = document.createElement('thead');
  thead.appendChild(tr);
  headers.forEach(headerText => {
    console.log("Paso")
    const th = document.createElement('th');
    th.textContent = headerText;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  tableFlights.appendChild(thead);
  flightsPar.forEach(flight => {

    const tbody = document.createElement('tbody');
    const tbodyTr = document.createElement('tr');

    const properties = ['origin', 'destination', 'date', 'departureTime', 'arrivalTime', 'price'];

    properties.forEach(prop => {
      const td = document.createElement('td');
      td.textContent = `${flight[prop]}`;
      tbodyTr.appendChild(td);
    });

    const imageTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = flights.imageSrc;  // Reemplaza 'imageSrc' con la propiedad real de tu objeto flight
    img.alt = 'Imagen de vuelo';
    imageTd.appendChild(img);
    tbodyTr.appendChild(imageTd);
    
    tbody.appendChild(tbodyTr);
    tableFlights.appendChild(tbody);
  });

}