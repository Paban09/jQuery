

//animate can have three peremeter first css property we want to change second is timestamp and thired is callback function 

// $('#id).animate({},1000,function(){})

$('#btn1').click(function(){
    $('#img3').animate({
        left:'150px',
        opacity:1,
        hight:"400px",
        width:"400",
        
    },2000,function(){
        alert("Animate")
    });
    
});


$('#btn2').click(function(){
    $('#img3').animate({
        left:'150px',
        opacity:1,
        height: "250px",
        width: "250px",
        opacity: 0.4
        
    },2000,function(){
        alert("Animate Redone")
    });
    
});

$('#img3').hover(function(){
    $(this).slideUp(2000).css("opacity",'1').slideDown(2000).hide(2000).show(2000)
    
});

