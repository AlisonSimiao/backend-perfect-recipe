import hamburguer from '../assets/img/icons/hamburguer.svg'; // Corrected import statement
import carne from '../assets/img/icons/carne.svg';
import sorvete from '../assets/img/icons/sorverte.svg';
import milkshake from '../assets/img/icons/milkshake.svg';
import bolo from '../assets/img/icons/bolo.svg';
import bebidas from '../assets/img/icons/bebidas.svg';

export const categoriesItem = [
  {
    id: 1,
    name: 'Sorvetes',
    image: sorvete, // Corrected image reference
  },
  {
    id: 2,
    name: 'Hambúrguer', // Fixed spelling
    image: hamburguer,
  },
  {
    id: 3,
    name: 'Carne',
    image: carne, // Corrected image reference
  },
  {
    id: 4,
    name: 'Milkshake',
    image: milkshake,
  },
  {
    id: 5,
    name: 'Bolos',
    image: bolo,
  },
  {
    id: 6,
    name: 'Bebidas',
    image: bebidas,
  },
];
