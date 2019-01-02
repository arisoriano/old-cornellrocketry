$(document).ready(function(){
	
	$('.rowCell').click(function(){
		$('.textBio').hide('slide',{direction:'up'},500);
		var idBio = $(this).attr('data-getBio');
		$('#'+idBio).toggle('slide',{direction:'up'},500);

	});

	$('.textBio').click(function(){
		$('.textBio').hide('slide',{direction:'up'},500);
	});

	$('.textBio').mouseover(function(){
		$('.closeButton').show();
	});

	$('.textBio').mouseout(function(){
		$('.closeButton').hide();
	});

});