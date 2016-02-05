$(document).ready(function(){
	$("#icon-search").click(function(event){
		$("#icon-search-div").addClass("no-display")
		$("#search-suggestion").addClass("no-display")
		$("#search-form").removeClass("no-display")
	})




})
// onkeydown = "if (event.keyCode == 13) searchText()"  

function searchText() {
	
    var sTextContent=document.getElementById("js-search-box-text").value
    console.log(sTextContent)
    

event.preventDefault()

    	$.ajax({
  url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+sTextContent,
  data: {format: 'json' },
  dataType: 'jsonp',
  success: function (x) {
  	console.log(x)
    showResult(x)
  }
}) 

}

function showResult(data) {
	$(".search-results").html("")
	var pages = data.query.pages
	moveSearchbox()
	console.log(pages)
	resultFrame(pages)
	resultFillIn(pages)
	$(".result-page").click(function(){
   console.log(this.id.toString())
   window.open("http://en.wikipedia.org/?curid="+this.id)
 })
}

/* HTML sample
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
		var res = '<div class="result-page row" id="'+page+'">'
		res+='<div class="result-highlight"></div><div class="result-main"><div class="result-title"></div><div class="result-content"></div></div></div>'
		$(".search-results").append(res)
	}

}

function resultFillIn(pages) {
	for (var page in pages) {
		var pageCell=$("#"+page).children(".result-main")
		pageCell.children(".result-title").text(pages[page].title)
		pageCell.children(".result-content").text(pages[page].extract)
	}
}

function moveSearchbox() {
	$("#js-content-panel").removeClass("vertical-middle");
}