// Cursor Animation

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

$(document).ready(function() {
    setInterval ('cursorAnimation()', 700);
});

// Typing Effect

function changeText(cont1,cont2,speed){
	var Otext=cont1.html();
	var Ocontent=Otext.split("");
	var i=0;
	function show(){
		if(i<Ocontent.length) {  
			cont2.append(Ocontent[i]);
			i=i+1;
		};
	};
	var Otimer = setInterval(show,speed);
};

$(document).on('click','button',function(){
	if($(this).hasClass('noIntro')){
		changeText($("p#game").last(),$(".p2"),0.1);
		$(changeText).promise().done(function(){
			$("#reallog").append("<br># ")
			$('html,body').animate({scrollTop:$(document).height()},5000);
		});
		clearInterval(Otimer);
	} else if($(this).hasClass('startOver')){
		
	} else {
		changeText($("p#game").last(),$(".p2"),50);
		$(changeText).promise().done(function(){
			$("#reallog").append("<br># ")
			$('.fight-log').animate({scrollTop:$('.fight-log').height()},7000);
		});
		clearInterval(Otimer);
	}
});
	
