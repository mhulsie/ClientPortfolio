$(document).ready(function () {
	var dateObject = new Date();
	var thisYear = dateObject.getFullYear();

	$('.this-year').html(thisYear)

    retrieveName();
});

function store(firstname, lastname, email, comment){
    localStorage.firstname = firstname;
    localStorage.lastname = lastname;

    retrieveName();
    $("form").trigger("reset");
    $('.error-email-show').removeClass("error-email-show").addClass("error-email");
    $('.error-empty-show').removeClass("error-empty-show").addClass("error-empty");
}

function check(){
    var inputFirstName = $('input[name=firstname]').val();
    var inputLastName = $('input[name=lastname]').val();
    var inputEmail = $('input[name=email]').val();
    var inputComment = $('textarea[name=comment]').val();

    var pattern =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var testEmail = pattern.test(inputEmail);

    if(inputFirstName.length === 0 || inputLastName.length === 0 ||
            inputEmail.length === 0 || inputComment.length === 0){
        $('.error-empty').removeClass("error-empty").addClass("error-empty-show")
    }
    else if(!testEmail){
        $('.error-email').removeClass("error-email").addClass("error-email-show");
    }
    else{
        store(inputFirstName, inputLastName, inputEmail, inputComment);
    }
}

function retrieveName(){
    var firstname = localStorage.firstname;
    var lastname = localStorage.lastname;
    $('#lastUser').html("<h1>Laatste gebruiker</h1>Voornaam: " + firstname + "<br>Achternaam: " + lastname);
}