// app.js


function setupFireBase(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBlHnjCKVy0EnseyvMiSNr_gK-bstGbZSk",
    authDomain: "jongwonjjang-1206f.firebaseapp.com",
    databaseURL: "https://jongwonjjang-1206f.firebaseio.com",
    projectId: "jongwonjjang-1206f",
    storageBucket: "jongwonjjang-1206f.appspot.com",
    messagingSenderId: "451307023075"
  };
  firebase.initializeApp(config);
    var ref = firebase.database().ref("balls");
    
    //when child is added
    ref.on("child_added", function(snap){
        var list = document.querySelector("#list");
        const tr = document.createElement("tr");
        const td_ballid = document.createElement("td");
        const td_ballco = document.createElement("td");
        const td_ballra = document.createElement("td");
        const td_action = document.createElement("td");
        const action = document.createElement("a");


    
        td_ballid.innerText     = snap.child("ballid").val()
        td_ballco.innerText = snap.child("ballco").val()
        td_ballra.innerText  = snap.child("ballra").val()
       

        action.innerText    = "Delete";
        action.href="#";

        action.onclick = function (){
            var Customer_id = this.parentElement.parentElement.id;
            var Customers = firebase.database().ref("balls").child(Customer_id);
            Customers.remove();
            var del_tr = document.querySelector("#" + Customer_id);
            del_tr.remove();      
        }
        td_action.appendChild(action);

        tr.appendChild(td_ballid);
        tr.appendChild(td_ballco);
        tr.appendChild(td_ballra);
        tr.appendChild(td_action);
        
        tr.id = snap.key;
        list.appendChild(tr);
    });


}