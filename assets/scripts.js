var trainName
var destination
var frequency
var nextArrival
var minutesAway
var initialTime
var currentTime = moment()


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAdl9svYNr4uFDzQIR_uhm22v-yhK2r3gM",
    authDomain: "train-schedule-project-week-7.firebaseapp.com",
    databaseURL: "https://train-schedule-project-week-7.firebaseio.com",
    projectId: "train-schedule-project-week-7",
  };
  firebase.initializeApp(config);

  var database = firebase.database()

$(document).ready(function() {
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
    
        database.ref().push({
            trainName:trainName,
            destination:destination,
            initialTime:initialTime,
            frequency:frequency
        })   
    })
})

//pull info from server//
database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val().trainName)
    //math to calculate times
    var diffTime = moment().diff(moment(initialTime), "minutes");
    var timeUntilNext = diffTime % frequency

    var nextArrival = moment.diff

//display server into into table//
    $("#trainTable").append('<tr><td>'+ snapshot.val().trainName +'</td><td>'+snapshot.val().destination +'</td><td>'+snapshot.val().frequency +'</td><td>'+ timeUntilNext +'</td><td>'+ nextArrival+'</td></tr>')
})