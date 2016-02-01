$(document).ready(function(){
/*	$.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=hello",function(data) {
		showResult(data)
	})
*/
	$.ajax({
  url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=hello",
  data: {format: 'json' },
  dataType: 'jsonp',
  success: function (x) {
  	console.log(x)
    showResult(x)
  }
});
})

function showResult(data) {
	$(".search-result").html("")
	var pages = data.query.pages
	console.log(pages)
	resultFrame(pages)
	resultFillIn(pages)
	$(".result-page").click(function(){
   console.log(this.id.toString())
   window.open("http://"+this.id)
 })
}

/*
  <div class="result-page row" id="123456">
       <div class="result-highlight"></div>
       <div class="result-main">
       <div class="result-title">Hello</div>
       <div class="result-content">What is Hello</div>
       </div>
     </div>
*/

function resultFrame(pages) {
	for (var page in pages) {
		console.log(page)
		var res = '<div class="result-page row" id="'+page+'">"'
		res+='<div class="result-main"><div class="result-title">Hello</div><div class="result-content">What is Hello</div></div></div>'
	//	console.log(page.pageid.toString())
		$(".search-results").append(res)
	}

}

function resultFillIn(pages) {

}

