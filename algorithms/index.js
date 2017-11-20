import Hanoi from './hanoi-towers';

const theTower = new Hanoi([12, 9, 8, 7, 4, 3, 2, 1]);

theTower.tracker = (...towers) => {
  towers.forEach(tower => console.log(tower));
  console.log('----------------------------');
};

theTower.assemble();
