$( document ).ready(function() {
	$('.action').click(function(){
		var valu = $(this).html();
		var txtval = $('#txt1').val();
		
		//if(txtval != 0){
			var result = oprations(txtval,valu);
			if(result != "NoVal"){
				$('#txt1').val(result);
				return;
			}
			valu = (txtval+valu).replace(/^0+/, '').replace(/[=]/g,'');
	//	}
			$('#txt1').val(valu);
	});
	
});
function oprations(txtval,valu){
	//= code
	if(valu == "=" || valu == "+" || valu == "-" ||valu == "/" || valu == "X"){

        if(txtval.length == 0){
        	return 0;
        }

		if(txtval.indexOf("+") != "-1"){
			var addOp = txtval.split("+");
			var result = Number(addOp[0]) + Number(addOp[1]);
			return result+valu.replace(/[=]/g,'');
		}
		
		if(txtval.indexOf("-") != "-1"){
			var addOp = txtval.split("-");
			var result = Number(addOp[0]) - Number(addOp[1]);
			return result+valu.replace(/[=]/g,'');
		}
		if(txtval.indexOf("X") != "-1"){
			var addOp = txtval.split("X");
			var result = Number(addOp[0]) * Number(addOp[1]);
			return result+valu.replace(/[=]/g,'');
		}
		if(txtval.indexOf("/") != "-1"){
			var addOp = txtval.split("/");
			var result = Number(addOp[0]) / Number(addOp[1]);
			return result+valu.replace(/[=]/g,'');
		}
		
	}
	if(valu == "CE"){
		return "0";
	}
	return "NoVal";
}