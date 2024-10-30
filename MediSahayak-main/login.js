const validUsername = 'admin';  // Replace with your username
const validPassword = '12345'; 
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('admin').value;
    const password = document.getElementById('12345').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation (you can replace this with your authentication logic)
    if (username === 'admin' && password === '12345') {
        alert('Login successful!');
        // Redirect to another page or perform any other action
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMessage = document.getElementById('error-message');

//     // Check if the entered username and password match the predefined values
//     if (username === validUsername && password === validPassword) {
//         alert('Login successful!');
//         // Redirect to another page or perform any other action
//         // window.location.href = 'dashboard.html'; // Uncomment to redirect
//     } else {
//         errorMessage.textContent = 'Invalid username or password.';
//     }
// });