var katzDeliLine = [];
function takeANumber (katzDeliLine, newPersonName) {
var placeInLine = 1;
	for (var i = 0; i < katzDeliLine.length; i++) {
	  placeInLine = katzDeliLine[i]; // does it need a +=
	  katzDeliLine.push(placeInLine);
	}
	return `Welcome, ${newPersonName}. You are number ${placeInLine} in line.`;
}