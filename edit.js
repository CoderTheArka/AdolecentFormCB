const firebaseConfig = {
    apiKey: "AIzaSyARiREVh3N4tsEeJhqNzMB70R1ZA9IiRtc",
    authDomain: "clinicbrain-b1215.firebaseapp.com",
    databaseURL: "https://clinicbrain-b1215-default-rtdb.firebaseio.com",
    projectId: "clinicbrain-b1215",
    storageBucket: "clinicbrain-b1215.appspot.com",
    messagingSenderId: "142661610441",
    appId: "1:142661610441:web:4572c6354e428a6823d618"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  if(localStorage.getItem('verify') != "yes"){
    window.location = 'index.html';
}
  var get_name = "";
  var get = "";

  function getData() { firebase.database().ref("AdolecentName/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    var firebase_message_id = childKey;
    var message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['Name'];
visit = message_data['Visit']
firebase.database
profile_Container= '<div id="card-container" ><img class="round" src="https://www.shutterstock.com/image-vector/doctor-white-medical-uniform-talk-600nw-2161420833.jpg" alt="user" height="150px"/><h3 id="'+firebase_message_id+'69">'+name1+'</h3><p>Visit Number: '+visit+'<br/> Form Of Dr Gautam Saha </p><div class="buttons"><button class="primary" id="'+name1+visit+'" onclick="manage(this.id)">Manage</button><button class="primary ghost" id="'+firebase_message_id+'" onclick="delete1(this.id)">Delete</button><br><br></div></div><br><hr><br>'


setTimeout(function(){
    if (get_name == 'Delete'){
return false
    }else{
        row = profile_Container
        document.getElementById("output").innerHTML += row;
    }
    function dh(){
        if(document.getElementById('output').innerHTML == ""){
            get = "<h3>No Form Was Filled Till Now :< </h3>"
            document.getElementById('output').innerHTML = get;
        }else{
            return false
        }
      }

},1000);
dh()

//End code
 } });  }); }
 getData();

 function delete1(get_name){

 get = get_name;
firebase.database().ref(document.getElementById(get_name+'69').innerHTML+'/').remove();
firebase.database().ref('AdolecentName/').child(get).remove();
 }
 function manage(get){
    localStorage.setItem('patient',get);
    window.location = 'editmain.html'
 }
 