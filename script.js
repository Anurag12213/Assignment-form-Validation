var errors = "";
      var missingfield = "";
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
      $("#submitbtn").click(function () {
        $("#errors").css("display", "none");
        $("#errors").html("");
        if ($("#Email").val() == "") {
          errors += "<p>Email not filled</p>";
        }
        if ($("#phoneno").val() == "") {
          errors += "<p>Phone no not filled</p>";
        }
        if ($("#pass").val() == "") {
          errors += "<p>Password not filled</p>";
        }
        if ($("#cpass").val() == "") {
          errors += "<p>Confirm password not filled</p>";
        }
        if (errors == "") {
          if (!validateEmail($("#Email").val())) {
            errors += "<p>Emial is not valid</p>";
          }
          if (!validatePhoneNumber($("#phoneno").val())) {
            errors += "<p>Phone no is not valid</P>";
          }
          if ($("#pass").val() != $("#cpass").val() || !validatePassword($("#pass").val())) {
            errors += "<P>Enter Valid password!! </P>";
          }
        }
        if (errors != "") {
          $("#errors").css("display", "flex");
          $("#errors").css("justify-content", "space-evenly");
          //  $("#msg").css("display", "block");
          $.fadeIn($("#errors").html(errors));
        } else {
          $("#sucess").html("Sucessfully Registered!!");
        }
      });
