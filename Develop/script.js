
var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format("dddd MMMM Do"));

function timeBlockColor() {
  //shows current hour in 24-hour format
  var currentHour = moment().hours();
  //console.log(currentHour)

  
  for (var i = 9; i <= 21; i++) {
    if (i < currentHour) {
      $("#" + i).addClass("past");
    } else if (i === parseInt(currentHour)) {
      $("#" + i).addClass("present");
    } else {
      $("#" + i).addClass("future");
    }
    var hourValue = localStorage.getItem("hour " + i);
    console.log(hourValue);
    if (hourValue) {
      $("#" + i).val(hourValue);
    }
  }
}


saveBtn.on("click", function () {
  var input = $(this).attr("id").split("-")[1];
  console.log(input)
  var value = $("#" + input).val().trim();
  console.log(value)

  if(value.length){
      localStorage.setItem("hour" + input, value);
  }
});

timeBlockColor();

