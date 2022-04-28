function getn_f_ff_trade(y, m) { "use strict";
	var a = new Date(y, m+1, 0);
	if(a.getDay() < 4) {
		a.setDate(a.getDate() - 7);
	}
	a.setDate(a.getDate() - (a.getDay() -4));
	return a;
}


var currentTime = new Date()
//enter custom date here for testing if you want. using 6 params. I've tested it though. 
var month = currentTime.getMonth()
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var finalobj = {}
  

	for(var i=0, flag = 0;i<4;i+=1) {
		var ans = getn_f_ff_trade(year, month + i)
		if(i===0)
		{
		  if(day < ans.getDate())
		    {
		      finalobj["N"] = ans.getDay() + ans;
		      flag = 1;
		    }
		}
		else
		{
		  if(flag === 1)
		  {
		    if(i===1) finalobj["F"] = ans.getDay() + ans;
		    if(i===2) finalobj["FF"] = ans.getDay() + ans;
		  }
		  else
		  {
		    if(i===1) finalobj["N"] = ans.getDay() + ans;
		    if(i===2) finalobj["F"] = ans.getDay() + ans;
		    else finalobj["FF"] = ans.getDay() + ans;
		  }
		}
  }
  console.log(finalobj)
