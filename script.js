$(document).ready(function() {
              $('#cshowpass').on('click', function() {
              var passwordField = $('#cpass'); // Select the input field with ID 'pass'
              var type = passwordField.attr('type') === 'password' ? 'text' : 'password'; // Determine the new type
                 passwordField.attr('type', type); // Set the new type
              $(this).text(type === 'password' ?   'Show':'Hide' ); // Update button text
            });
          });
            $(document).ready(function() {
              $('#showpass').on('click', function() {
              var passwordField = $('#pass'); // Select the input field with ID 'pass'
              var type = passwordField.attr('type') === 'password' ? 'text' : 'password'; // Determine the new type
                 passwordField.attr('type', type); // Set the new type
              $(this).text(type === 'password' ?   'Hide' :'Show'); // Update button text
            });
          });

            function validatePassword(password) {
              // Regular expression for:
              // Minimum 8 characters, at least 1 uppercase, 1 lowercase, and 1 digit
              var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
              return passwordReg.test(password);
            }
            function validatePhoneNumber(phone) {
              // Regular expression: exactly 10 digits (0-9), no other characters
              var phoneReg = /^\d{10}$/;
              return phoneReg.test(phone);
            }
            function validateEmail($email) {
              var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              return emailReg.test($email);
            }
            $(document).ready(function() {
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
                  $("#sucess").html("<p>Successfully Registered!!</p>").fadeIn();
              }
          });
      });
