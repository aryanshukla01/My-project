document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (localStorage.getItem(username)) {
      alert("User already exists! Please login.");
      window.location.href = "login.html";
    } else {
      localStorage.setItem(username, JSON.stringify({ password }));
      alert("Sign up successful! Please log in.");
      window.location.href = "login.html";
    }
  });
  