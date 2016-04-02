$(document).ready(function () {
	var dateObject = new Date();
	var thisYear = dateObject.getFullYear();

	$('.this-year').html(thisYear)
});