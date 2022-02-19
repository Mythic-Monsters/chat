const firebaseConfig = {
      apiKey: "AIzaSyCNPKWkDIi3PV9rg5uMAMUvCxh-NPrP8i8",
      authDomain: "kwitter-6d1c3.firebaseapp.com",
      databaseURL: "https://kwitter-6d1c3-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d1c3",
      storageBucket: "kwitter-6d1c3.appspot.com",
      messagingSenderId: "190897184377",
      appId: "1:190897184377:web:59a7e99628ccf625f0bea8"
    };
    firebase.initializeApp(firebaseConfig);
    room_name = localStorage.getItem("room_name")
    user_name = localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);

username = message_data['name']
likes_count = message_data['like']
message_count = message_data['message']

name_user = "<h4>" + username + "<img class='user_tick' src='tick.png'> </h4>"
message_tag = "<h4 class='message_h4'>" + message_count + "</h4>";
like_button = "<button class='btn btn-primary' id=" + firebase_message_id + " value=" + likes_count + " onclick='UpdateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + likes_count + "</span></button>" + "<hr>";

row = name_user + message_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row

      } });  }); }

function UpdateLike(message_id)
{
      console.log("Message id is" + message_id)
      old_likes = document.getElementById(message_id).value
      updated_likes = Number(old_likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      })
}

function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location = "kwitter.html";
}

getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
