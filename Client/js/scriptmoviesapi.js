$(document).ready(function(){
    $('#confirmsearch').click(function(){
        var search = $('#searchtitle').val();

        getMovie(search);
    });
});

function getMovie(search){
    $.ajax({
        url: "http://www.omdbapi.com/?t=" + search,
            dataType: 'json',
            success: function(data){
                setData(data);
            }
    });
}

function setData(data){
    $('#title').html(data.Title);
    $('#year').html(data.Year);
    $('#director').html(data.Director)
}

