
var quotes = [ ["Im often asked what I think about as I run. Usually the people who ask this have never run long distances themselves. I always ponder the question. What exactly do I think about when I'm running? I don't have a clue." , "Murakami" ], 
["Nobody's going to win all the time. On the highway of life you can't always be in the fast lane.", "Murakami"],
["If you can fill the unforgiving minute with 60 seconds worth of distance, run, yours is the earth and everything that’s in it, and — which is more — you’ll be a man, my son", "Rudyard Kipling"],
["Most people run a race to see who is fastest. I run a race to see who has the most guts.", "Steve Prefontaine"],
["Remember, the feeling you get from a good run is far better than the feeling you get from sitting around wishing you were running.", "Sarah Condor"],
[ "Pain is inevitable. Suffering is optional.", "Murakami"],
["Run often. Run long. But never outrun your joy of running.", "Julie Isphording"],
["As we run, we become.", "Amby Burfoot"],
["I always thought of running as just dancing forward.", "Tom Hiddleston"],
["Most runners run not because they want to live longer, but because they want to live life to the fullest.", "Murakami"],
["The body is given out on loan – don’t waste it and expect to use it tomorrow.", "Shapiro"]];

$(".author").hide();

var main = function(){
$(".btn").click(function() {
   
  	var iframes = document.getElementsByTagName('iframe');
	for (var i = 0; i < iframes.length; i++) {
	    iframes[i].parentNode.removeChild(iframes[i]);
	}
  
	$("h3").remove();
	$("h4").remove();

	var quoteNumber = Math.floor((Math.random() * 10));

	$('.quote').append("<h3>" + (quotes[quoteNumber][0]) + "</h3>");

	$('.author').show().append("<h4>" + quotes[quoteNumber][1] + "<h4>");

	twttr.widgets.createShareButton(
	  'http://www.cphillips.co.uk',
	  document.getElementById('twitter'),
	  {
	    text: quotes[quoteNumber][0] + " " + quotes[quoteNumber][1]
	  });

	});
};
              
$(document).ready(main);