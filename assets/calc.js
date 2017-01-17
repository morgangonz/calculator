$("#one").click(function(){
	if ($("#mathSigns").text().length==0){
		console.log("it's empty")
		$("#screen").append(1)
	} else {
		$("#screen2").append(1)
	}	
	});

$("#two").click(function(){
	$("#screen").append(2)
});

$("#three").click(function(){
	$("#screen").append(3)
});

$("#four").click(function(){
	$("#screen").append(4)
});

$("#five").click(function(){
	$("#screen").append(5)
});

$("#six").click(function(){
	$("#screen").append(6)
});

$("#seven").click(function(){
	$("#screen").append(7)
});

$("#eight").click(function(){
	$("#screen").append(8)
});

$("#nine").click(function(){
	$("#screen").append(9)
});

$("#zero").click(function(){
	$("#screen").append(0)
});
///end of numbers (misc top buttoms)

$("#clear").click(function(){
	$("#screen").empty()
	$("#screen2").empty()
	$("#mathSigns").empty()
	$("#total").empty();
});


$("#percent").click(function(){
	$("#mathSigns").append("%")
})
//////signs
$("#add").click(function(){
	$("#mathSigns").append("+")
});

$("#times").click(function(){
	$("#mathSigns").append("x")

});

$("#divide").click(function(){
	$("#mathSigns").append("/")
});

$("#subtract").click(function(){
	$("#mathSigns").append("-")
});
////

$("#equal").click(function(){
	var num1= parseFloat($("#screen").text())
	var num2= parseFloat($("#screen2").text())
	var mathSigns= $("#mathSigns").text()
		if ($("#mathSigns").text()==="+") {
			$("#total").text(num1+num2)
		} else if ($("#mathSigns").text()==="x"){
			$("#total").text(num1*num2)
		} else if ($("#mathSigns").text()==="/"){
			$("#total").text(num1/num2)
		} else if ($("#mathSigns").text()==="-"){
			$("#total").text(num1-num2)
		} else if ($("#mathSigns").text()==="%"){
			$("#total").text(num1%num2)
		}
});

//// decimal

$("#dec").click(function(){
	if($("#mathSigns").text() ===""){
		$("#screen").append(".")
	} else {
		$("#screen2").append(".")
	}
});
////negative

$("#negative").click(function(){
	if($("#mathSigns").text()===""){
		$("#screen").prepend("-")
	}	else {
		$("#screen2").prepend("-")
	}

});


