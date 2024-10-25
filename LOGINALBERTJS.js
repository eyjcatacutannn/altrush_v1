function generateCaptcha() {
    let charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lengthOtp = 6; 
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
        let index = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[index]);
    }
    return captcha.join("");
}


function displayCaptcha() {
    const captchaPreview = document.querySelector('.preview');
    const captchaText = generateCaptcha();
    captchaPreview.textContent = captchaText; 
}


function refreshCaptchaOnly() {
    
    displayCaptcha();

  
    document.querySelector('#captcha-form').value = ''; 
}


window.onload = function() {
    displayCaptcha(); 

 
    document.querySelector('.captcha-refresh').addEventListener('click', function(event) {
        event.preventDefault(); 
        refreshCaptchaOnly(); 
    });

    
    document.querySelector('#login-btn').addEventListener('click', function(event) {
        event.preventDefault(); 
        validateForm(); 
    });
};


function validateForm() {
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const userCaptchaInput = document.querySelector('#captcha-form').value.trim();
    const displayedCaptcha = document.querySelector('.preview').textContent;

  
    if (!username) {
        alert("Please enter your username.");
        return;
    }

  
    if (!password) {
        alert("Please enter your password.");
        return;
    }


    if (!userCaptchaInput) {
        alert("Please enter the CAPTCHA.");
        return;
    }

    if (userCaptchaInput !== displayedCaptcha) {
        alert("Invalid CAPTCHA. Please try again.");
        return;
    }

    
    alert("Login successful!");
}

function login() {
    // Getting input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captcha-form').value;

    // Basic validation for empty fields
    if (username && password && captchaInput) {
        // Redirecting to the homepage if everything is filled in
        window.location.href = "HOMEPAGE.html"; // Adjust the path to your homepage file
    } else {
        alert("Please fill in all the fields including the Captcha.");
    }
}
