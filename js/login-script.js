const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");
const loader = document.getElementById("loader");
const submitBtn = document.getElementById("submitBtn");
const userInfo = document.getElementById("userInfo");

function fillLogin(username, password) {
     document.getElementById("username").value = username;
     document.getElementById("password").value = password;
     showMessage("Credentials filled - Click Login", "success");
}

function showMessage(text, type) {
     messageDiv.textContent = text;
     messageDiv.className = `message ${type}`;
     messageDiv.style.display = 'block';
}

function displayUserInfo(data) {
     userInfo.innerHTML = `
                <h3>Welcome ${data.firstName}!</h3>
                ${data.image ? `<img src="${data.image}" alt="User">` : ''}
                <p><strong>Full Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong>User ID:</strong> ${data.id}</p>
                <p><strong>Username:</strong> ${data.username}</p>
                
                <button onclick="logout()" style="margin-top: 15px; background: #dc3545;">Logout</button>
            `;
     userInfo.style.display = 'block';
     loginForm.style.display = 'none';
}

function logout() {
     localStorage.removeItem('userData');
     localStorage.removeItem('authToken');
     location.reload();
}

// Check if user is already logged in on page load
window.addEventListener('DOMContentLoaded', function () {
     const savedUserData = localStorage.getItem('userData');
     if (savedUserData) {
          const userData = JSON.parse(savedUserData);
          displayUserInfo(userData);
     }
});

loginForm.addEventListener("submit", async function (e) {
     e.preventDefault();

     const username = document.getElementById("username").value.trim();
     const password = document.getElementById("password").value.trim();

     loader.style.display = 'block';
     submitBtn.disabled = true;
     messageDiv.style.display = 'none';

     try {
          const response = await fetch("https://dummyjson.com/auth/login", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({
                    username: username,
                    password: password
               })
          });

          const data = await response.json();

          loader.style.display = 'none';
          submitBtn.disabled = false;

          if (response.ok) {
               showMessage("Login successful!", "success");

               // Save user data to localStorage
               localStorage.setItem('userData', JSON.stringify(data));
               localStorage.setItem('authToken', data.token);

               displayUserInfo(data);
          } else {
               const errorMsg = data.message || "Invalid username or password";
               showMessage(`${errorMsg}`, "error");
          }

     } catch (error) {
          loader.style.display = 'none';
          submitBtn.disabled = false;
          showMessage("Connection error occurred", "error");
          console.error("Error:", error);
     }
});