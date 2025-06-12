function signUp() {
  window.location.href = "log in.html";
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = `  ` ;
  const passwordRegex = /^.{6,}$/;

  
  if (!firstName || !lastName || !email || !password) {
      showToast("Haba now, fill in the inputs joor", "red");
      return;
  }

  
  if (!nameRegex.test(firstName)) {
      showToast("First name should contain only letters", "orange");
      return;
  }

  if (!nameRegex.test(lastName)) {
      showToast("Last name should contain only letters", "orange");
      return;
  }

  
  if (!emailRegex.test(email)) {
      showToast("Invalid email address", "orange");
      return;
  }

  
  if (!passwordRegex.test(password)) {
      showToast("Password must be at least 6 characters", "orange");
      return;
  }

  
  showToast("Sign-up successful!", "blue");
  
}

function showToast(message, color) {
  Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: color,
      close: true
  }).showToast();
}

const user = {
  firstName,
  lastName,
  email,
  password 
};

localStorage.setItem("user", JSON.stringify(user ));
showToast("Sign-up successful! Data saved.", "green");

// Optionally clear inputs
document.getElementById("firstName").value = "";
document.getElementById("lastName").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";

