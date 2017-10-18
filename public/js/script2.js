$(document).ready(function(){
  $(".submit").click(function(){
    var intervalClicked = $(".options").val();
    var intervalClicked2 = $(".options2").val();
    $.ajax({
          beforeSend: function (xhr) {
            xhr.setRequestHeader ("authorization", "Bearer e22cba201191068a0b3e1b028a302a90");
          },
          url:"https://api.hooktheory.com/v1/trends/songs?cp="+intervalClicked+","+intervalClicked2,
          success: function(artistList) {
            var artist = artistList[0]['artist'];
            var song = artistList[0]['song'];
            var section = artistList[0]['section'];

            $('.artist').empty();
            $('.song').empty();
            $('.section').empty();

            $('.artist').append('Artist: '+artist);
            $('.song').append('Song: '+song);
            $('.section').append('Section: '+section);
          },
        }).done(function() {});
      })
    });
