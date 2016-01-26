$(document).ready(function() {
  var arr = []
  $.getJSON("http://www.freecodecamp.com/news/hot", function(data) {
    arr = data.concat()
    console.log(arr.length)
    for (var i = 0; i < arr.length; i++) {
      addPostFrame(arr[i])
      addPostInfo(arr[i])
    }
    /* JSON data sample
{
"id":"56a5b41a75e7c0365353b144",
"headline":"Web Development as a career - the realities ",
"timePosted":1453700122131,
"link":"https://docs.google.com/document/d/1rU5-t09tEBym1wD3NUr7s9mMgFBmfGJNBz3F8TGzDsU/edit",
"metaDescription":"",
"description":"undefined",
"rank":6,
"upVotes":[
  {"upVotedBy":"5619cf33fd70d5b75185dd56","upVotedByUsername":"elp1987"},
  {"upVotedBy":"5561e898911c13ba6d3ce2dc","upVotedByUsername":"evaristoc"},
  {"upVotedBy":"5561e898911c13ba6d3ce2dc","upVotedByUsername":"evaristoc"},
  {"upVotedBy":"55b74709e3cb6e392c5a7a6a","upVotedByUsername":"marko2502"},
  {"upVotedBy":"55114a9da811fa0b00be49ce","upVotedByUsername":"eelsie"},
  {"upVotedBy":"569ddc5dac00012348ae15ee","upVotedByUsername":"shaunyap"}],
"author":{
  "picture":"https://avatars.githubusercontent.com/u/16160548?v=3",
  "userId":"5619cf33fd70d5b75185dd56",
  "username":"elp1987"},
"image":"https://lh5.googleusercontent.com/SuxGpGbMWlkSLi307vKnqVaFaDqb8BX3xjyL6yRC17IPRFjjB_MjvAHFQhtPtbr_B0DZDA=w1200-h630-p",
"storyLink":"web development as a career the realities"}
  */
  })
})

/* post HTML sample 
      <div class="post" id="56a5b41a75e7c0365353b144">
        <a class="post-img-link" href="http://google.com"><img class ="post-img" src="https://avatars.githubusercontent.com/u/16160548?v=3" /></a>
        <div class="post-data">
        <div class="post-title"><a class="post-title-link" href="http://twitter.com">Web Development as a career - the realities</a></div>
        <div class="author"><a class="post-author-link" href="">by elp1987</a></div>
        <div class="rate"><i class="fa fa-heart"></i>31</div>
        <div class="post-time">Post on: 1453700122131</div>
        </div>
      </div>

*/

function addPostFrame(postInfo) {
  //  console.log("addPostFrame id: "+postInfo.id)
  var res = ""
  res += '<div class="post" id="' + postInfo.id + '">'
  res += '<a class="post-img-link" href=""><img class ="post-img" src="" /></a>'
  res += '<div class="post-data">'
  res += '<div class="post-title"><a class="post-title-link" href=""></a></div>'
  res += '<div class="author"><a class="post-author-link" href=""></a></div>'
  res += '<div class="rate"><i class="fa fa-heart"></i></div>'
  res += '<div class="post-time"></div>'
    //  console.log('html: '+res)
  $('.main-post').append(res)
}

function addPostInfo(postInfo) {
  var id = "#" + postInfo.id
    //  console.log("addPostInfo id: "+postInfo.id)
  $(id).children(".post-img-link").attr("href", postInfo.link)
  $(id).children(".post-img-link").children(".post-img").attr("src", postInfo.author.picture)
  var idPostDataElm = $(id).children(".post-data")
  idPostDataElm.children(".post-title").children(".post-title-link").attr("href", postInfo.link)
  idPostDataElm.children(".post-title").children(".post-title-link").text(postInfo.headline)
  idPostDataElm.children(".author").children(".post-author-link").attr("href", "http://www.freecodecamp.com/" + postInfo.author.username)
  idPostDataElm.children(".author").children(".post-author-link").text("by - " + postInfo.author.username)
  idPostDataElm.children(".rate").append(" " + postInfo.rank)
  var postDate = new Date(postInfo.timePosted)
    //  console.log(postDate.toDateString())
  idPostDataElm.children(".post-time").text("Post on: " + postDate.toDateString())

}