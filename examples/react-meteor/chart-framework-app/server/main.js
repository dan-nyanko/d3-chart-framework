import { Meteor } from 'meteor/meteor';
import { Incidents } from '../imports/api/incidents';

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

Meteor.startup(() => {
  // generate 25 random incidents
  Incidents.remove({});
  const types = ['success', 'info'];
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setMonth(endDate.getMonth() - 12);
  for (let i = 0; i < 25; i++) {
    const x1 = randomDate(startDate, endDate);
    const x2 = new Date(x1);
    x2.setDate(x1.getDate() + (Math.floor(Math.random() * 45)));
    Incidents.insert({
      x1: x1.getTime(),
      x2: x2.getTime(),
      y1: (Math.floor(Math.random() * 99)),
      type: types[(Math.floor(Math.random() * 2))]
    });
  }

});
