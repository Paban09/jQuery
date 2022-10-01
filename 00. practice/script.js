//jquery sob kaj function diye korbe
//html() tag soho anbe
//vitorer content newar jnno text() use korte hoy



// $("#btn").click(function(){
//     alert('Hello');
// });




// $("#btn").click(function(){
//    var h1=$('#h1').text();
//    alert(h1);
// });




//to change the content inside of a tag
$("#btn").click(function(){
    $('#h1').text('Hello Wrold');
    $('#h1').css({
        'background-color':'red',
        'color':'green',
        'font-size':'80px'
    })
});



//work while click the buttomn 
// $('#btn1').click(function () {
//     var text = $('#input').val();
//     $("#h11").text(text);
// });


//work while writing
$('#input').keyup(function () {
    var text = $(this).val();
    $("#h11").text(text);
});