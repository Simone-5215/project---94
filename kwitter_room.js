
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAHV1ySF4RUuuZ9HDHtnOkL2U9GcaNxTbw",
      authDomain: "kwitter-bc521.firebaseapp.com",
      databaseURL: "https://kwitter-bc521-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc521",
      storageBucket: "kwitter-bc521.appspot.com",
      messagingSenderId: "13391314855",
      appId: "1:13391314855:web:76a02d13f413a247290082",
      measurementId: "G-RX6K6Y2K7J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}