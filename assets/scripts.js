var trainName
var destination
var frequency
var nextArrival
var minutesAway
var initialTime

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAdl9svYNr4uFDzQIR_uhm22v-yhK2r3gM",
    authDomain: "train-schedule-project-week-7.firebaseapp.com",
    databaseURL: "https://train-schedule-project-week-7.firebaseio.com",
    projectId: "train-schedule-project-week-7",
  };
  firebase.initializeApp(config);

$( document ).ready(function() {
    $("#submitButton").on("click", function(){
        trainName =$("#trainAdd").val().trim();
            console.log(trainName);
        destination = $("#destinationAdd").val().trim();
            console.log(destination);
        initialTime = $("#trainTimeSet").val();
            console.log(initialTime);
        frequency = $("#frequencySet").val();
            console.log(frequency);
        $(".form-control").val("");
    })
})

//pull info from server//

//display server into into table//