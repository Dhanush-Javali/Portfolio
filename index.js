const data = document.querySelector("textarea");
const send = document.querySelector(".btn-send");
const clear = document.querySelector(".btn-reset");
const pop = document.querySelector(".pop");

send.addEventListener('click', function(e){
    e.preventDefault();

     if(data.value != ""){
    alert("Enquiry Sent Successfuly..")
    }
    else{
        confirm("Enquiry field required!")
    }

    data.value = "";
},false);


clear.addEventListener('click', function(e){
    data.value = "";
})