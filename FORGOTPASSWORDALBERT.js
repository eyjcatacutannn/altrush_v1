document.querySelector('#reset-password-btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const username = document.querySelector('#username').value.trim();
    const newPassword = document.querySelector('#new-password').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();

    if (!username) {
        alert("Please enter your username.");
        return;
    }

  
    if (!newPassword) {
        alert("Please enter a new password.");
        return;
    }

   
    if (!confirmPassword) {
        alert("Please confirm your new password.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        //para maclear yung textfield
        document.querySelector('#new-password').value = '';
        document.querySelector('#confirm-password').value = '';
        return;
    }

   
    alert("Password reset successfully!");
   
    
    window.location.href = "LOGINALBERT.html";
});
