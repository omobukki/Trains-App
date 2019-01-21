$(document).ready(function(){
    
    var config = {
        apiKey: "AIzaSyA97RhlN4cqpMGdv3q3EXbzNusWRYTUXpg",
        authDomain: "anytime-train-time.firebaseapp.com",
        databaseURL: "https://anytime-train-time.firebaseio.com",
        projectId: "anytime-train-time",
        storageBucket: "anytime-train-time.appspot.com",
        messagingSenderId: "997451450748"
      };
      firebase.initializeApp(config);

      var dataRef = firebase.database();


    // look into html run a function call .on click submit btn
    $("#submit-Button").on("click" , function (event) {


        // check and grabs user input if the condition are correct
        checkTrainName = $("#trainNameInput").val().trim();
        checkDestination =$("#destinationInput").val().trim();
        checkfirstArrival =$("#firstTrainTimeInput").val().trim();
        checkFrequency =$("#frequencyInput").val().trim();

        // Creating a variable trainFirebase that hold all train data
        trainfirebase = {
            name: checkTrainName,
            destin:checkDestination,
            first:checkfirstArrival,
            frequ:checkFrequency,
        };

        // Adds newTrain to Firebase Database
        database.ref().push(newTrain);

        // clear elements before adding new text
        $("#checkTrainName").val("");
        $("checkDestination").val("");
        $("checkFirstArrival").val("");
        $("checkFrequency").val("");


        return false;

    });


    database.ref().on("child_added" ,function(childSnapshort,prevChildkey) {
        console.log(childSnapshort .val());

    // store childSanapshots in variables
        var checkTrainName = childSnapshort.val().trainName;
        var checkDestination = childSnapshort.val().Destination;
        var checkFirstArrival =childSnapshort.val().FirstArrival;
        var checkFrequency = childSnapshort.val().Frequency;


        // changes format of fristTimeTrain Variable
        var nawTimeFormat = moment(firstTimeTrain,"hh:mm").subtract(1, "years").toString();
        console.log("first time formatted" + newTimeFormat);

        // Captures current time
        var currentTime = moment(). format("hh:mm");

        //Difference between the time
        var timeDifference = moment().diff(newTimeFormat, "minutes");


        //time apart (remainder)
        var ramaingTime = timeDifference % checkFrequency;

        //minutes until arrival
        var minutesArrival = trainFrequency - remainingTime;
        
        //next arrival time
        var nextArrivalTime = moment().add(minutesArrival, "minutes").format("hh:mm");
        console.log("this is the arrival", nextArrivaltime),


        //Dynamically append user input to table in DOM
        $("#trains-schedule> tbody").append("<tr><td>" + checkTrainName + "</td><td>" + checkDestination + "</td><td>" + traninFrequency + "</td><td>" + nextArrivalTime + "</td><td>" + minutesArrival + "</td><tr");


    });

});
