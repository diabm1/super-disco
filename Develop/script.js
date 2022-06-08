// const timeNow = moment().format("dddd, MMMM Do");
// console.log(timeNow)
// console.log(Date(Date.now()).toString())
// const timeArr = [
// //   "9am",
// //   "10am",
// //   "11am",
// //   "12pm",
// //   "1pm",
// //   "2pm",
// //   "3pm",
// //   "4pm",
// //   "5pm"

// // 9,
// // 10,
// // 11,
// // 12
// ];
// const hourNow = moment().format('LT');
// // const hourNow = new Date()
// console.log(Date.parse(timeNow))
// // if (hourNow >= 9) {
// //     console.log("time")
// // }

// if(hourNow == 0){

// }

// function putInsideContainer() {
//   const container = document.querySelector(".container");
//   for (let i = 0; i < timeArr.length; i++) {
//     const newDiv = document.createElement("div");
//     const innerDiv = document.createElement("div");
//     innerDiv.classList.add("hour");
//     innerDiv.textContent = timeArr[i];
//     newDiv.appendChild(innerDiv);

//     const inputText = document.createElement("textarea");
//     newDiv.appendChild(inputText);

//     const saveBtn = document.createElement("button");
//     saveBtn.classList.add("saveBtn")
//     saveBtn.textContent = "Save";
//     newDiv.appendChild(saveBtn);

//     newDiv.classList.add("row");

//     container.appendChild(newDiv);

//   }
// }

// putInsideContainer();

// document.querySelector("#currentDay").innerHTML = timeNow;

var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format("dddd MMMM Do"));

function timeBlockColor() {
  //shows current hour in 24-hour format
  var currentHour = moment().hours();
//   console.log(currentHour)

//   $(".time-block").each(function () {
    //converts id string to int
    var hour = parseInt($(this).attr("id"));
    //console.log(hour)
    //this references each time block
    // console.log(this)

    // if (hour > currentHour) {
    //    $("this").addClass("past");
    // } else if (currentHour === hour) {
    //    $("this").addClass("present");
    // } else {
    //    $("this").addClass("future");
    // }
    for(var i = 9; i < 20; i++){
        if(i < hour){
            $('#' + i).addClass("past");
        } else if(i === parseInt(hour)){
            $('#' + i).addClass("present");
        } else {
            $('#' + i).addClass("future");
        }
    }
  };
// }

saveBtn.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();

  //text is saved to local storage
  localStorage.setItem(time, plan);
});

//function to keep events
function usePlanner(){
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour)

    if(currentPlan != null){
        $(this).siblings(".plan").val(currPlan);
    }
}

timeBlockColor();
usePlanner();

//how do I keep the text displayed in each 
