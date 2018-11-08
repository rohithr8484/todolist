// Check Off Specific Todos By Clicking
//on will add listeners to all future elements
//add a listener to the entire ul
//when a li is clicked inside a ul
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed"); //toggle the specified class
});

//Click on X to delete Todo
//on will add listeners to all future elements
//add a listener to the entire ul
//when a span is clicked inside a ul
$("ul").on("click", "span", function(event){ //click span of ul

$(this).parent().fadeOut(500,function(){// refers to li   //parent here is li of span
		$(this).remove(); //
	});
	event.stopPropagation(); //stop event from bubbling up to other elements
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){  //13 is codeword of enter

		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");

		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});


//TO TOGGLE THE INPUT
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});