var ran;
function setup(){
  createCanvas(600, 400);
  loadJSON('data.json',useData);
}
function useData(data) {
 fill(155, 30, 180, 180);
 ellipse(250,200,data.paycheck.pay *5,data.paycheck.pay *5);
 fill(255);
 text("Next Paycheck amount: $"+data.paycheck.pay,10,370);
 text("Next Paycheck: "+data.paycheck.date,10,390);
}

function draw(){


}
