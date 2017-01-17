 $(document).ready(function(){

  $.getJSON('../data/hourlypay.json', function(data1) {
    $('#hourly').text('current hourly('+data1.work.hours + 'hr) : $'+data1.work.amount);
    // paycheck(12/30/2016) : $310
  });
  $.getJSON('../data/paycheck.json', function(data2) {
    $('#paycheck').text('paycheck('+data2.paycheck.date+') : $'+data2.paycheck.pay);
  });

  $('#next-test').text("Next Test: " +moment("20170122", "YYYYMMDD").fromNow()+ " (Computing 2)");
  $('#hoursleft').text( "(" +(moment().endOf('day').fromNow()).substring(2,5).trim()+ " of 24)" );
  var hoursss=(moment().startOf('day').fromNow()).substring(0,3);
  // console.log(hoursss);
  var percentday= Math.floor((parseInt(hoursss) /24) *100);
  var bar ='<div style="width: '+percentday+'%" class="progress-bar__bar"></div><div style="left: '+percentday+'%" class="progress-bar__badge">'+percentday+'%</div>';
  $('.progress-bar').html(bar);
});
