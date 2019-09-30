$(document).ready(function() {
 
  $('#newQuote').click(function(){  
  
    
$.getJSON("https://favqs.com/api/qotd",function(json){
  
 //when newQuote is clicked... 


//to retrieve random quotes from JSON
//var randomQuoteIndex = Math.floor((Math.random() * 29) + 0);


// random number generator for RGB values and string. 
 var colorChoice = ["#F7115Em", "#556E37","#356957", "#5A5469", "#B55151", "#3B7FA1", "#C46A1B", "#579668", "#AD94B0", "#BD37BD"];
  
  var colorIndex = Math.floor((Math.random() * 10) + 0);
    
  var fullColor = colorChoice[colorIndex];
  
var quote =  json.quote.body + "</p>";
var footer = json.quote.author;
 
// animate blockquote text color.
 $(".blockquote").animate({opacity:0.5}, 500, function() {
       $(this).animate({
            opacity: 1
          }, 500);
          $(this).html(quote);
          
          $(this).css("background-color", fullColor);
        });  
// animate footer text color.
$("footer").animate({opacity:0.5}, 500, function() {
          $(this).animate({
            opacity: 1
          }, 500);
         $(this).html("--"+footer);
         $(this).css("background-color", fullColor);
});
  
//animate body and btn bckgrnd color  
$(".btn, body").animate({ opacity:0.4}, 500, 
     function() {
  $(this).animate({opacity:1},500);
    $(this).css("background-color",fullColor);
  //nested mouseenter and leave functions inside(so  effects won't occur before animation)
   $(".btn").mouseenter(function(){
    $(this).css("background-color", "#D6D6D6")
    $(this).css("color", "black")
   }
    );
  $(".btn").mouseleave(function(){
    $(this).css("background-color", fullColor)
    $(this).css("color", "#D6D6D6")
   }
    );
});
  

  
 //tweet the quote
 var tweetLink='https://twitter.com/intent/tweet?text=' + '"' + encodeURIComponent(quote) + '"' + footer;
      
 $("a").attr('href',tweetLink).attr('target', '_blank')
});
    
});
  });


  /*
  
*/
