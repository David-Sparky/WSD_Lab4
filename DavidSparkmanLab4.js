$( document ).ready(function() {
    console.log( "ready!" );
    $( "#site" ).click(function() {
  console.log( "Handler for .click() called." );
    $(coverart).parent().hide();
  $.ajax({
    url: 'playlist.json',
    type: "GET",
    dataType: "json",
    success: function(data){
    	console.log(data);
    	for (var i =0; i< data.PLAYLIST.length; i++) {
            console.log(data.PLAYLIST[i].SITE);
            $("#title").append("<li>" + data.PLAYLIST[i].SONG + "</li>");
            $("#artist").append("<li>" + data.PLAYLIST[i].ARTIST + "</li>");
            $("#album").append("<li>" + data.PLAYLIST[i].ALBUM + "</li>");
            $("#date").append("<li>" + data.PLAYLIST[i].DATE + "</li>");
            $("#genres").append("<li>" + data.PLAYLIST[i].GENRE + "</li>");
            $("#sites").append("<li><a href=\"" + data.PLAYLIST[i].SITE + "\">Site</a></li>");
            $("#covers").append("<li><img src=\"" + data.PLAYLIST[i].COVER + "\"></li>");
            };
        }
});
});
});