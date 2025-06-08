$(document).ready(function() {
    // Show/Hide Password Functionality
    $('#showpass').on('click', function() {
        var passwordField = $('#pass');
        var type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'password' ? 'Show' : 'Hide');
    });

    $('#cshowpass').on('click', function() {
        var passwordField = $('#cpass');
        var type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'password' ? 'Show' : 'Hide');
    });

    // Phone Number Validation
    $('#phoneno').on('input', function() {
        var input = $(this).val();
        // Allow only digits and limit to 10 characters
        var sanitizedInput = input.replace(/[^0-9]/g, '').slice(0, 10);
        $(this).val(sanitizedInput);
    });

    // Form Submission Validation
    $("#submitbtn").click(function () {
        var errors = "";
        var missingfield = "";

        // Capture values on button click
        const email = $("#Email").val();
        const phoneNo = $("#phoneno").val();
        const pass = $("#pass").val();
        const cpass = $("#cpass").val();

        // Validation checks
        if (email == "") {
            missingfield += "<p>Email not filled</p>";
        }
        if (phoneNo == "") {
            missingfield += "<p>Phone no not filled</p>";
        }
        if (pass == "") {
            missingfield += "<p>Password not filled</p>";
        }
        if (cpass == "") {
            missingfield += "<p>Confirm password not filled</p>";
        }
        if (!validateEmail(email)) {
            errors += "<p>Email Invalid</p>";
        }
        if (!validatePhoneNumber(phoneNo)) {
            errors += "<p>Phone no Invalid</p>";
        }
        if (!validatePassword(pass) || pass !== cpass) {
            errors += "<p>Password Invalid or does not match!</p>";
        }

        // Display errors or success
        if (errors) {
            $("#errors").html(errors + missingfield).fadeIn();
        } else {
            $("#errors").html("").fadeIn();
            $("#success").html("<p>Successfully Registered!!</p>").fadeIn();
        }
    });

    // Validation Functions
    function validatePassword(password) {
        var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordReg.test(password);
    }

    function validatePhoneNumber(phone) {
        var phoneReg = /^\d{10}$/;
        return phoneReg.test(phone);
    }

    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }
});
