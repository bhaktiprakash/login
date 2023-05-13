$(function() {
    $("#confirm_password").keyup(function() {
        var password = $("#password").val();
        $("#confirm_password").html(password == $(this).val()
            ? "Passwords match."
            : "Passwords do not match!"
        );
    });
});
