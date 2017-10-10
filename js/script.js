$(document).ready(function(){
  $.ajax({
    beforeSend: function (xhr) {
      xhr.setRequestHeader ("authorization", "Bearer e22cba201191068a0b3e1b028a302a90");
    },
    url:"https://api.hooktheory.com/v1/trends/nodes?cp=1",
    success: function(result) {
      let list = result[0];
      //console.log(result[0]);
      $(".g").append(list.probability);
    },
  }).done(function() {});
});
