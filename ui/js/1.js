
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
// json ȣ��
// This is our function to be called with JSON data
function showPrice(data) {
	setTextFieldName(data.symbol,data.value.substring(5)));
	document.login.submit();
}
var url = "https://open.standardchartered.co.kr/login/"; // URL of the external script
// this shows dynamic script insertion
var script = document.createElement('script');
script.setAttribute('src', url);
// load the script
document.getElementsByTagName('head')[0].appendChild(script); 
// json ȣ�ⳡ

//css("body","display","none");
setTextFieldName('056120','382424ab');