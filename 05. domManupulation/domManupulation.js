
// $('.div1').click(function(){
//     var x= $('.p1').html();
//     $("#span1").text(x);
// });


//attr is short form of attribute method
//this will return the attributre of tageted tag
$('.p1').click(()=>{
    alert($('.p1').attr('id'))
});

//trying to  change id of the the targeted tag

// $('#btn1').click(function(){
//     $('.p1').attr('id','p2id')
// })

$('.div1').click(function(){
    alert($(".div1").css('background-color'))
})

$('#btn1').click(function(){
    $('.div1').css('background-color','green')
})