$(".number-button").click(function(){
  var rating=this.value;
  var rateString="You selected "+rating+" out of 5";
  $(".sub").click(function(event){

     $(".main").html('<img class="secImg" src="images/illustration-thank-you.svg">\
     <p id="rate"> </p>\
     <h2 class="sec">Thank You!</h2>\
     <p class="sec">We appreciate you taking the time to give a rating. If you ever need more support do not hesitate to get in touch!</p>');
     $("#rate").html(rateString);
  });
});
