


?function hideElement(id)
{
	var element = document.getElementById(id);

	if (element)
  		element.style.display='none';
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (var i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

hideElement("t_left");
hideElement("banner");
hideElement("t_left");


css("#head a img","margin-left","0");
css("#timg img","width","40px");
css("#timg img","height","40px");
css("#tsub a","font-size","30px");
css("#tcat a font","font-size","30px");
css("#tid font","font-size","30px");
css("#tdate","font-size","30px");
css("#thit","font-size","30px");
css("#r_idx_l","font-size","30px");
css("#r_idx_l a","font-size","20px");
css("#tail img","display","none");
css("#tg_box a img","display","none");



