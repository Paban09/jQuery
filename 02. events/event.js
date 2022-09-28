$('#btn').click(function(){
    $('#pra').hide();           
});

$('#btn').dblclick(function(){
    $(this).hide();           
});


$('#colored-div').mouseenter(function(){
    $(this).hide();           
});

$('#colored-div').mouseleave(function(){
    $(this).show();           
});


// hover work as mouse enter and leave together, we have to make two anonomyous function
$('#pra').hover(function(){
    $(this).hide();       
},
function(){
    $(this).show(); 
});

// if we want to use multiple events in one element we have to use on event
$('#btn').on({
    click:function(){
        $('#pra').hide(); 
    },
    dblclick:function(){
        $(this).hide();
    }
});

$('#colored-div2').on({

    mouseenter:function(){$(this).css("background-color","black")},
    mouseleave:function(){$(this).css("background-color","green")},
    click:function(){$(this).css("background-color","yellow")},
    dblclick:function(){$(this).css("color","white")},
    
});