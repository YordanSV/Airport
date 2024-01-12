const originInput = document.querySelector('#origin');
const destinationInput = document.querySelector('#destination');
const departureTimeInput = document.querySelector('#departureTime');
const arrivalTimeInput = document.querySelector('#arrivalTime');
const dateInput = document.querySelector('#date');

const flights = [
  {srcImg: '', origin: 'Panama', destination: 'Brasil', price: '250', date: '2024-01-01', departureTime: '13:00', arrivalTime: '15:00'},
  {srcImg: '', origin: 'Panama', destination: 'Colombia', price: '200', date: '2024-01-11', departureTime: '17:00', arrivalTime: '19:00'},
  {srcImg: '', origin: 'Nicaragua', destination: 'Peru', price: '265', date: '2024-01-25', departureTime: '15:00', arrivalTime: '17:00'},
  {srcImg: '', origin: 'Nicaragua', destination: 'Honduras', price: '180', date: '2024-01-14', departureTime: '10:00', arrivalTime: '13:00'},
  {srcImg: '', origin: 'Costa Rica', destination: 'Ecuador', price: '300', date: '2024-01-14', departureTime: '08:00', arrivalTime: '10:00'},
  {srcImg: '', origin: 'Costa Rica', destination: 'Republica Dominicana', price: '240', date: '2024-01-05', departureTime: '15:00', arrivalTime: '18:00'},
  {srcImg: '', origin: 'Brasil', destination: 'Colombia', price: '230', date: '2024-01-05', departureTime: '14:00', arrivalTime: '18:00'},
  {srcImg: '', origin: 'Brasil', destination: 'Venezuela', price: '250', date: '2024-01-25', departureTime: '17:00', arrivalTime: '20:00'}
]
loadOptions();

function loadOptions(){
  loadSelectOption(originInput, getUniqueOptions('origin'));
  loadSelectOption(destinationInput, getUniqueOptions('destination'));
  loadSelectOption(departureTimeInput, getUniqueOptions('departureTime'));
  loadSelectOption(arrivalTimeInput, getUniqueOptions('arrivalTime'));
  loadSelectOption(dateInput, getUniqueOptions('date'));
}

function getUniqueOptions(property){
  return [... new Set(flights.map(fligth => fligth[property]))];
}

function loadSelectOption(selectElement, optionList){
  optionList.forEach( countrie => {
    const option = document.createElement('option');
    option.setAttribute('value', `${countrie}`);
    option.textContent = `${countrie}`;
    selectElement.appendChild(option);
  })
}