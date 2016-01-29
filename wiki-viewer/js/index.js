$(document).ready(function(){
	$.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=hello",function(data) {
		showResult(data)
	})
})

function showResult(data) {
	$(".search-result").html("")
	var pages = data.query.pages
	resultFrame(pages)
	resultFillIn(pages)
}






function resultFrame(data) {

}