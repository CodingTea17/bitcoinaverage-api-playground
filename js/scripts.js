var url = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
var btcData;

/***********************************/
/** How we should change the text **/
/***********************************/
/* span = document.getElementById("myspan");
/* txt = document.createTextNode("your cool text");
/* span.innerText = txt.textContent;
************************************/
// fetch(url)
//   .then((response) => response.json())
//   .then(data => {
//     btcData = data;
//     document.getElementById('price').textContent = btcData.last;
// })
// .catch(function(error) {
//   console.log(error);
// });
// // alert(btcData)
var getBtcData = function() {
  $.getJSON("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(data) {
    btcData = data;
    $("#price").text(btcData.last.toFixed(2));
  })
};


//
// var priceAlert = function(){
//   alert("BUY NOW! ONLY " + btcData.last);
// };


$(document).ready(function() {
  getBtcData();
  // alert(btcData);

  $("#click-me").click(function(){
    alert(btcData.last);
  });

});
