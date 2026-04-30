document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let destination = document.getElementById("destination").value;

    if(name === "" || email === "" || destination === ""){
        alert("Please fill all required fields!");
        return;
    }

    document.getElementById("popup").style.display = "flex";
    this.reset();
});

function closePopup(){
    document.getElementById("popup").style.display = "none";
}