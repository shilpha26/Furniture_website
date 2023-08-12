function validateForm() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var feedback = document.getElementById("feedback").value;

    if (name === "" || number === "" || feedback === "") {
      document.getElementById("error-message").textContent = "Please fill in all the fields.";
      return false;
    }
    else {
      document.getElementById("error-message").textContent = "";
    }
}