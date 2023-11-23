<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="manifest" href="manifest.json">
  <script src="https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"></script>
  <script>
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      // ...
    };

    firebase.initializeApp(firebaseConfig);

    function registerUser() {
      const emailInput = document.getElementById('email-input').value;
      const passwordInput = document.getElementById('password-input').value;

      firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput)
        .then((userCredential) => {
          alert('Registration successful!');
          console.log('User registered:', userCredential.user);
        })
        .catch((error) => {
          alert('Registration failed. Error: ' + error.message);
          console.error('Error registering user:', error);
        });
    }

    function loginUser() {
      const emailInput = document.getElementById('email-input').value;
      const passwordInput = document.getElementById('password-input').value;

      firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
        .then((userCredential) => {
          alert('Login successful!');
          console.log('User logged in:', userCredential.user);
        })
        .catch((error) => {
          alert('Login failed. Error: ' + error.message);
          console.error('Error logging in:', error);
        });
    }
  </script>
</head>
<body>
  <div id="registration-form">
    <h2>Registration</h2>
    <input type="email" id="email-input" placeholder="Email" required>
    <input type="password" id="password-input" placeholder="Password" required>
    <button onclick="registerUser()">Register</button>
  </div>

  <div id="login-form">
    <h2>Login</h2>
    <input type="email" id="email-input" placeholder="Email" required>
    <input type="password" id="password-input" placeholder="Password" required>
    <button onclick="loginUser()">Log In</button>
  </div>

  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
          console.error('Service Worker registration failed:', error);
        });
    }
  </script>
</body>
</html>