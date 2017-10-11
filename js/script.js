var noteName = ["C","D","E","F","G","A","B"];
$(document).ready(function(){
  $('.options li').click(function(){
    var intervalClicked = $(this).attr('class');
    $.ajax({
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("authorization", "Bearer e22cba201191068a0b3e1b028a302a90");
      },
      url:"https://api.hooktheory.com/v1/trends/nodes?cp="+ intervalClicked,
      success: function(result) {
        let list = result[0];
        let chord = noteName[list.chord_ID-1];
        let unList = result[4];
        let unChord = noteName[unList.chord_ID-1];
        console.log(result);
        $(".likely"+intervalClicked).append(chord);
        $(".un"+intervalClicked).append(unChord);
      },
    }).done(function() {});
  })
});
