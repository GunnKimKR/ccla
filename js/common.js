function openPop(){
  $(".btn_joinPop").click(function(){
    $(".join_form_area").removeClass('hide');
  });
}
function closePop(){
  $(".btn_clse").click(function(){
    $(".join_form_area").addClass('hide');
  });
}

openPop();
closePop();