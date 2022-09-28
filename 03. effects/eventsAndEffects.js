
const func3=()=>{
    //paragraph elements presenrt into the div tags
    $('div>p').fadeToggle();
    $("p:first").fadeToggle(); //This will target the first paragrph element from the page or documnt 
}

const func2=function(){
    // //$(element name).action()
    // const div1=document.getElementById('div1');
    // console.log(div1);

    // $('#p1').css('background-color','red');
    $('#img1,#div1,#div2').show(1000);
}

const func1=function(){
    // alert("hello");   
    $("#img1").fadeToggle(1000); //in the perameter we are setting us time interval
}

$('.first-paragraph').on({ 
    mouseenter:function(){
        $(this).hide(1000);
    },
    mouseleave:function(){
        $(this).show(1000);
    }
});

$('#img1,#div1,#div2').click(function(){
    $(this).hide(1000);
}); 

$('#btn').click(func4);
function func4(){
    $('#img1').css('width','50%');
}

//ready function is called when html are fully loaded
$("document").ready(function(){
   console.log('document is ready');
});

$('#btn').dblclick(function(){
    $('#img1').css('width','100%');
});

$('#img1').hover(func5,func6);

function func5(){
    $('#img1').css('width','90%');
}
function func6(){
    $('#img1').css('width','100%');
}


$("#btn4").click(function(){
    $('#img2').slideUp(2000);
});
$("#btn5").click(function(){
    $('#img2').slideDown(2000);
});
$("#btn6").click(function(){
    $('#img2').slideToggle(2000);
});

$("#btn7").click(function(){
    $('#img2').stop();
});


//animate can have three peremeter first css property we want to change second is timestamp and thired is callback function 

$('#btn10').click(function(){
    $('#img3').animate({
        left:'150px',
        opacity:1,
        hight:"400px",
        width:"400",
        
    },200,);
});


$('#btn10').dblclick(function(){
    $('#img3').animate({
        right:'150px',
        height: "250px",
        width: "250px",
        opacity: 0.4,      
    },200,);
});

