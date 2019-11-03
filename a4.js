function Validate()   
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phoneno = /^\d{10}$/;
	if(!document.form1.telno.value.match(phoneno) )
		{  
			alert("You have entered an invalid  phoneno!")	;
			return (false) ;
		}
	else if (!document.form1.Email.value.match(mailformat))	
	{
		
		alert("You have entered an invalid email address ")	;
			return (false) ;
	}
	else 
	{		
			alert("Your form has been submitted!");
			return (true) ;
			
	}	
		
  
}  