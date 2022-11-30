var firebaseConfig = {
      apiKey: "AIzaSyDVAROa83KUsmmfCQYC7AugpRfQ5KcdxBU",
      authDomain: "kwitter-6329e.firebaseapp.com",
      databaseURL: "https://kwitter-6329e-default-rtdb.firebaseio.com",
      projectId: "kwitter-6329e",
      storageBucket: "kwitter-6329e.appspot.com",
      messagingSenderId: "514539795203",
      appId: "1:514539795203:web:8d92938cf9e6dcbc75af36",
      measurementId: "G-XBB54QT383"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
