var firebaseConfig = {
    apiKey: "AIzaSyCk2sHvc2ZyRgP-ZCQA2WXXQUPvkgrBf7w",
    authDomain: "lets-chat-web-app-a7ea4.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-a7ea4-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-a7ea4",
    storageBucket: "lets-chat-web-app-a7ea4.appspot.com",
    messagingSenderId: "819895066013",
    appId: "1:819895066013:web:c8c22cb6123c5e56172374",
    measurementId: "G-G2TY37NWJ3"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig)


function Log_in() {
    user_name = document.getElementById("room_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
} 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();