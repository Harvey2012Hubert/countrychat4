
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBBXu0X7UPiMadeLnkIj2CdfrqKSz3TVGY",
      authDomain: "kwitter-bb83d.firebaseapp.com",
      databaseURL: "https://kwitter-bb83d-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "kwitter-bb83d",
      storageBucket: "kwitter-bb83d.appspot.com",
      messagingSenderId: "485010601657",
      appId: "1:485010601657:web:c7dc10dc8d758cbef48d68"
};

firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("user_name")
//document.getElementById("name").innerHTML= "Welcome " +user_name+ " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room name- "+ Room_names)
      row= "<div class='room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)' > #"+ Room_names+ "</div><hr>"
      document.getElementById("output").innerHTML=row


      //End code
      });});}
getData();



function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding new room"
      })
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
          
      })
  
      document.getElementById("msg").value=""
  
  }