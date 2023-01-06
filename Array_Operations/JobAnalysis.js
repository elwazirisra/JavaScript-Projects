const jobs = require('./upwork_jobs.json');

let times=[];
jobs.forEach(element=> times.push(element.Posted));
//console.log(times);
let timeInHours= times.filter(x=> x.includes("hours") || x.includes("hour") );
//onsole.log(timeInHours);
let convertedHours= timeInHours.map(e => e[0]*60);
//console.log(convertedHours);

let timeInMinutes= times.filter(e => e.includes("minutes")|| e.includes("minute"))
let minutes= timeInMinutes.map(e => e[0]*1)

for(let i of convertedHours){
  minutes.push(i);
}
console.log(minutes);

let biggest= minutes.reduce((a,b)=>{
  return a > b ?a: b;
})
let biggestofAll= biggest/60;

console.log(biggestofAll);

let title=[];
let postedTimes=timeInHours.filter(x=> x.includes(biggestofAll));
console.log(postedTimes);

jobs.forEach(x=> {if(x.Posted==postedTimes[0]) title.push(x.Title)});
console.log(title);









  





