var firebaseConfig = {
    apiKey: "AIzaSyD8yn-s0cl6D6YrcczQmmKWqiuTLBV2448",
    authDomain: "kwitter-29bbe.firebaseapp.com",
    databaseURL: "https://kwitter-29bbe-default-rtdb.firebaseio.com",
    projectId: "kwitter-29bbe",
    storageBucket: "kwitter-29bbe.appspot.com",
    messagingSenderId: "413921234043",
    appId: "1:413921234043:web:87ea6fd1e19be652b126de",
    measurementId: "G-B6EHW2PR2Z"
  };
  firebase.initializeApp(firebaseConfig);

  function getData() { firebase.database().ref("/"+room_name).on('value', 
function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+ name+ "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class= message_h4>"+ message+"</h4>";
    } });  }); }
getData();

function send()
{
    msg : document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message : msg,
          like:0

    });
    document.getElementById("msg").value=" ";
}
