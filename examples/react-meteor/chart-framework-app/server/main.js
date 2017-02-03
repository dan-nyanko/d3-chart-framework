import { Meteor } from 'meteor/meteor';
import { Incidents } from '../imports/api/incidents';
import { Prices } from '../imports/api/prices';


/*
* Returns a random date
* @param [Date] start, the start Date
* @param [Date] end, the end Date
* @return [Date] date, a random date between start and end date
*/
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/*
* Returns a random float
* @return [Number] number - a random number between 0.0 < x < 1.0
*/
function randomNumber() {
  return Math.random();
}

/*
* Return a random price based on the previous price and volatility
* @param [Number] oldPrice, the previous price
* @param [Number] volatility, the current volatility
* @return [Number] newPrice, the new price
*/
function randomPrice(oldPrice, volatility) {
  const rnd = randomNumber();
  let changePercent = 2 * volatility * rnd;
  if (changePercent > volatility) {
    changePercent -= (2 * volatility);
  }
  const changeAmount = oldPrice * changePercent;
  const newPrice = oldPrice + changeAmount;
  return newPrice;
}

/*
* Insert a random incident into a collection
* @param [Array] types, the types of incidents ['info', 'success']
* @param [Date] start, the start Date
* @param [Date] end, the end Date
* @return None
*/
function randomIncident(types, start, end) {
  const x1 = randomDate(start, end);
  const x2 = new Date(x1);
  x2.setDate(x1.getDate() + (Math.floor(Math.random() * 45)));
  Incidents.insert({
    x1: x1.getTime(),
    x2: x2.getTime(),
    y1: (Math.floor(Math.random() * 99)),
    type: types[(Math.floor(Math.random() * 2))],
  });
}


Meteor.startup(() => {
  const types = ['success', 'info'];
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setMonth(endDate.getMonth() - 12);

  // generate 25 random incidents
  Incidents.remove({});
  for (let i = 0; i < 25; i++) {
    randomIncident(types, startDate, endDate);
  }

  // generate 365 random prices for each type
  Prices.remove({});
  for (let t = 0; t <= 1; t++) {
    const startPrice = (Math.random() * 50) + 10;
    const prices = [startPrice];
    for (let i = 1; i <= 365; i++) {
      const x1 = new Date(startDate);
      x1.setDate(x1.getDate() + i);
      let vol = 0.0;
      if (t == 0) {
        vol = (Math.floor(Math.random() * 10) + 1) / 100;
      } else {
        vol = (Math.floor(Math.random() * 30) + 1) / 100;
      }
      const y1 = randomPrice(prices[i-1], vol);
      prices.push(y1);
      Prices.insert({
        x1: x1.getTime(),
        y1: y1,
        type: types[t],
        volatility: vol,
      });
    }
  }

});
