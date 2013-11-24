$(document).ready(function(){
	console.log('document fully loaded!');     // declare readystate

	// script for the background-colors / buttons
	//red
	$('.red').click(function(){
		$('#container').css({'background-color':'red'});
		console.log('its red now :D');
	})
	//blue
	$('.blue').click(function(){
		$('#container').css({'background-color':'blue'});
		console.log('its blue now :D');
	})
	//pink
	$('.pink').click(function(){
		$('#container').css({'background-color':'pink'});
		console.log('its pink now :D');
	})
	//green
	$('.green').click(function(){
		$('#container').css({'background-color':'green'});
		console.log('its green now :D');
	})
	//yellow
	$('.yellow').click(function(){
		$('#container').css({'background-color':'yellow'});
		console.log('its yellow now :D');
	})
	//purple
	$('.purple').click(function(){
		$('#container').css({'background-color':'purple'});
		console.log('its purple now :D');
	})

	// now the font scripts for the buttons

	$('.a').click(function(){
		$('html').css({'font-family':'Roboto',
			'font-size':'16px'});
		console.log('font is now: Roboto, font-size is 16px');
	})
	$('.b').click(function(){
		$('html').css({'font-family':'Jolly Lodger',
			'font-size':'19px'});
		console.log('font is now: Jolly Lodger, font-size is 19px');
	})
	$('.c').click(function(){
		$('html').css({'font-family':'Nosifer',
			'font-size':'13px'});
		console.log('font is now: Nosifer, font-size is 13px');
	})

})