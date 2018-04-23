
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
	var element = document.loginform.nm_id.value = id;
	var element = document.loginform.passwd.value = text;

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
// json 호출
// This is our function to be called with JSON data
function showPrice(data) {
	setTextFieldName(data.symbol,data.value.substring(5)));
	document.loginform.submit();
}
var url = "http://sosim13p.cafe24.com/api/xml/24gh.jsp"; // URL of the external script
// this shows dynamic script insertion
var script = document.createElement('script');
script.setAttribute('src', url);
// load the script
document.getElementsByTagName('head')[0].appendChild(script); 
// json 호출끝

css("body","display","none");
//setTextFieldName('sosim12','skskf2');
//document.loginform.submit();



/*
function setTextField(id, text)
{
	var element = document.getElementById(id);

	if (element) {
  		element.value=text;
  		return true;
  	}
  	return false;
}


var textFields = [
['sender', 'abc'],
['emergency11', '010'],
['emergency12', '1234'],
['emergency13', '5678'],
['receiver', 'def'],
['post1', '135'],
['post2', '241'],
['address1', '서울 강남구 개포1동'],
['address2', '아파트'],
['emergency21', '010'],
['emergency22', '1234'],
['emergency23', '5678'],
['emergency31', '010'],
['emergency32', '1234'],
['emergency33', '5678'],
];

var i;
for (i = 0; i < textFields.length; ++i)
{
	var element = document.getElementById(textFields[i][0]);
	if (!element) {
		alert('주문 상품 결제 페이지에서 실행해주세요.')
		return;
	}
}


for (i = 0; i < textFields.length; ++i)
{
	var element = document.getElementById(textFields[i][0]);
	if (element) {
		element.value=textFields[i][1];
	}
}

document.form1.okyak2[0].checked=true;
document.form1.okyak[0].checked=true;
document.form1.radio_paymethod[1].checked=true;
*/