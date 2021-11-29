const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
 
const addFotoRow = foto => {
 return `
 <li class="item__task3" >
 <img class="img__task3" src="${foto.url}" alt="${foto.alt}"  />
 </li> `
}
const galaryListEL = document.querySelector(`.gallery`);
const makeGalaryFoto = images.map(addFotoRow).join('');
galaryListEL.insertAdjacentHTML("afterbegin", makeGalaryFoto)
