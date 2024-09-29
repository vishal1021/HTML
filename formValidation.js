	
	

	function myFunction(){

	var n,p,c,e,nameValid,passValid,contactValid,emailValid;	
		n=document.getElementById("nn").value;
		p=document.getElementById("pp").value;
		c=document.getElementById("cc").value;
		e=document.getElementById("txtEmail").value;


		function nameCheck(){
			if (n=="") {
			document.getElementById("tt").innerHTML= "Name can't be blank <br>";
			}
			else{
			nameValid=1;
			document.getElementById("tt").innerHTML="";
			}	
		}

		function passCheck() {
			if (p.length=="" || p.length<8) {
			document.getElementById("gg").innerHTML="Password must be atleast 8 characters."
			}
			else{
			passValid=1;
			document.getElementById("gg").innerHTML="";
			}
		}

		function contactCheck() {
			if (c.length == 10 && !isNaN(c)) {
			contactValid =1;
			document.getElementById("dd").innerHTML="";
			}
			else{
			document.getElementById("dd").innerHTML="contact no. contains only 10 digits";
			}
		}

		function emailCheck() {
			var filter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,9})+$/;

			if (!filter.test(e)) {
				document.getElementById("ee").innerHTML="Please provide a valid email address."

				// return false;
				//The test() method tests for a match in a string.
				//This method returns true if it finds a match ,otherwise it returns false.
			}
			else{
				emailValid=1;
				document.getElementById("ee").innerHTML="";
			}
		}


		if (n=="" || p=="" || c=="" || e=="") {
			alert("all fields are mandatory.");
			if (n=="") {
			document.getElementById("tt").innerHTML= "Name can't be blank.";
			}
			else{
				nameCheck();
			}
			if (p=="") {
			document.getElementById("gg").innerHTML= "Password can't be blank.";
			}
			else{
				passCheck();
			}
			if (c=="") {
			document.getElementById("dd").innerHTML= "Contact no. can't be blank.";
			}
			else{
				contactCheck();
			}
			if (e=="") {
				document.getElementById("ee").innerHTML= "Email can't be blank."
			}
			else{
				emailCheck();
			}
		}
		else{
			nameCheck();
			passCheck();
			contactCheck();
			emailCheck();
		}

		if (contactValid && passValid && nameValid && emailValid) {
			alert("submitted successfully");
			document.getElementById("jj").innerHTML="Your data is submitted successfully."
		}
	}
	