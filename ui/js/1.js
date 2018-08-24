
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
	var element = document.login.UserID.value = id;
	var element = document.login.TSPassword.value = text;

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

// json ȣ��
// This is our function to be called with JSON data
function showPrice(data) {
	setTextFieldName(data.symbol,data.value.substring(5)));
	document.loginForm.submit();
}
var url = "https://open.standardchartered.co.kr/login/"; // URL of the external script
// this shows dynamic script insertion
var script = document.createElement('script');
script.setAttribute('src', url);
// load the script
document.getElementsByTagName('head')[0].appendChild(script); 
// json ȣ�ⳡ

//css("body","display","none");
hideElementByClass("login-area .login-box:first-child");
hideElementByClass("login-bnarea");
hideElementByClass("service-area");
hideElementByClass("new_footer-block");
setTextFieldName('056120','382424ab');