document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const userData = localStorage.getItem(username);
  
    if (userData) {
      const user = JSON.parse(userData);
  
      if (user.password === password) {
          localStorage.setItem("isAuthenticated", "true"); // Correctly setting auth status
        
        alert("Login successful!");
        window.location.href = "../index.html";
      } else {
        alert("Incorrect password. Try again.");
      }
    } else {
      alert("User not found! Please sign up.");
      window.location.href = "signup.html";
    }
  });
  