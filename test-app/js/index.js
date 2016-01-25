$(document).ready(function(){
  var arr=[]
  $.getJSON("http://www.freecodecamp.com/news/hot",function(data){
    console.log('get JSON')
    arr = data.concat()
    console.log(arr.length)
    console.log(arr[2])
    /*
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
 
