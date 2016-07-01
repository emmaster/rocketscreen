$(function(){
	colors = ['#641E16','#78281F','#512E5F','#4A235A','#154360','#1B4F72','#0B5345','#6E2C00','#1B2631','#17202A','black']
	setInterval(function(){
		randomElement = Math.floor(Math.random()*colors.length)
		$('.fullhd').css('background',colors[randomElement])
	}, 6000)	
})


