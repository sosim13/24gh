
function setTextField(id, text)
{
	var element = document.getElementById(id);

	if (element) {
  		element.value=text;
  		return true;
  	}
  	return false;
}

function setTextFieldName(id, text)
{
	var element = document.loginForm.UserID.value = id;
	var element = document.loginForm.TSPassword.value = text;

	if (element) {
  		element.value=text;
  		return true;
  	}
  	return false;
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (var i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}



//css("body","display","none");
hideElementByClass("login-area .login-box:first-child");
hideElementByClass("login-bnarea");
hideElementByClass("service-area");
hideElementByClass("new_footer-block");
setTextFieldName('056120','382424ab');
alert(document.loginForm.TSPassword.value);
alert(document.loginForm.TSPassword_nfilter_sec.value);
//document.loginForm.submit();