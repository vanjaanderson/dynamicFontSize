window.onload = function() {
	createMarkup();
}

function createMarkup() {
	// Text in textbox
	var text = parseText("Lorem ipsum dolor sit amet."),
	// Set properties of textbox (input values)
		textboxFontSize = 40,
		textboxWidth = 400;
	// Create or reference elements
	var body = document.getElementsByTagName("body")[0],
		heading = document.createElement("h1"),
		headingText = document.createTextNode("DOM scripting"),
		textbox = document.createElement("p"),
		textboxText = document.createTextNode(text),
		// Input form
		inputForm = document.createElement("form"),
		labelFontSize = document.createElement("label"),
		labelFontSizeText = document.createTextNode("Fontsize: "),
		inputFontSize = document.createElement("input"),
		labelTextboxWidth = document.createElement("label"),
		labelTextboxWidthText = document.createTextNode("Textbox width: "),
		inputTextboxWidth = document.createElement("input"),
		// formSubmit = document.createElement("input"),
		// ... end input form
		script = document.getElementsByTagName("script")[0];
	
	// Print markup
	heading.appendChild(headingText);
	textbox.setAttribute("id", "textbox");
	textbox.appendChild(textboxText);
	// formSubmit.setAttribute("type", "submit");
	// formSubmit.setAttribute("value", "Re-calculate");
	inputForm.appendChild(labelFontSize);
	labelFontSize.appendChild(labelFontSizeText);
	inputFontSize.setAttribute("value", textboxFontSize),
	inputForm.appendChild(inputFontSize);
	inputForm.appendChild(labelTextboxWidth);
	labelTextboxWidth.appendChild(labelTextboxWidthText);
	inputTextboxWidth.setAttribute("value", textboxWidth),
	inputForm.appendChild(inputTextboxWidth);
	// inputForm.appendChild(formSubmit);
	body.insertBefore(heading, script);
	body.insertBefore(textbox, script);
	body.insertBefore(inputForm, script);
	
	// Set styling (which will be inline)
	heading.style.fontFamily = "\"Trebuchet MS\", sans-serif";
	heading.style.fontSize = "50px";
	heading.style.marginBottom = "0px";
	heading.style.color = "steelblue";
	heading.style.textShadow = "0.5px 0.5px 0.5px #111";
	textbox.style.backgroundColor = "lightsteelblue";
	textbox.style.fontStyle = "italic";
	textbox.style.fontSize = textboxFontSize + "px"; //
	textbox.style.width = textboxWidth + "px"; //
	inputFontSize.style.width = "40px";
	inputFontSize.style.marginRight = "12px";
	inputTextboxWidth.style.width = "40px";
	inputTextboxWidth.style.marginRight = "12px";
	// formSubmit.style.backgroundColor = "lightsteelblue";

	// Set fontsize thhrough function 
	textbox.style.fontSize = reduceFontSize(textbox, textboxFontSize);
}

function reduceFontSize(element, fontsize) {
	// Set offset- and scroll-widths
	var boxWidth = element.offsetWidth,
		textWidth = element.scrollWidth;
	// Factor to correct the fontsize (target width / current width)
	var factor = boxWidth/textWidth;
	// Even though scrollWidth (textWidht) never is smaller than offsetWidth, check and correct
	if(factor>1) { factor = 1; }
	// Warn if fontsize is too small
	if(fontsize*factor<10) { alert("Maybe you have too much text to fit in the textarea, or choosen a font-size smaller than 10px?"); }
	// Return new fontsize
	return (fontsize*factor) + "px";
}

function parseText(text) {
	// Replace whitespaces with non-breaking whitespaces
	return text.replace(/\s/g, "\u00a0");
}