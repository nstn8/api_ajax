var noteName = ["C","D","E","F","G","A","B"];
$(document).ready(function(){
  $('.options li').click(function(){
    var intervalClicked = $(this).attr('class');
    $.ajax({
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("authorization", "Bearer e22cba201191068a0b3e1b028a302a90");
      },
      url:"https://api.hooktheory.com/v1/trends/nodes?cp="+ intervalClicked,
      success: function(probabilities) {
        console.log(probabilities)
        var highest = 0;
        var lowest = 0;
        for (var key in probabilities) {
          var probability = probabilities[key]['probability'];
          if(probability > highest){
            highest = probability;
          }else if(probability < lowest){
            lowest = probability;
          }
          if(lowest == 0) {
            lowest = probability;
          }
          $('.likely'+intervalClicked).append(highest);
          $('.un'+intervalClicked).append(lowest);

        //  console.log('highest '+highest);
        //  console.log('lowest '+lowest);
        }
      },
    }).done(function() {});
  })
});
