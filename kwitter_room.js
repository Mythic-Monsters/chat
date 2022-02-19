const firebaseConfig = {
      apiKey: "AIzaSyCNPKWkDIi3PV9rg5uMAMUvCxh-NPrP8i8",
      authDomain: "kwitter-6d1c3.firebaseapp.com",
      databaseURL: "https://kwitter-6d1c3-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d1c3",
      storageBucket: "kwitter-6d1c3.appspot.com",
      messagingSenderId: "190897184377",
      appId: "1:190897184377:web:59a7e99628ccf625f0bea8"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE


username = localStorage.getItem("user_name")
document.getElementById("h3username").innerHTML = "Hello," + username + "!"

function AddaRoom()
{
room2 = document.getElementById("room_name").value
localStorage.setItem("room_name",room2);
firebase.database().ref("/").child(room2).update({
T : "stop looking through the files"
});
window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectTORoom(this.id)' > " + "#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectTORoom(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location = "kwitter.html";
}

