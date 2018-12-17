
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    //get address
    var streetstr = $("#street").val();//collect input value
    var citystr = $('#city').val();
    var address = streetstr +', ' + citystr;

    $greeting.text('so you want to live in ' + address);


    // load streetview
    var streetviewurl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location='+address+'google key';
   
    // YOUR CODE GOES HERE! http://lorempixel.com/350/150/animals/
    //$body.append('<img class="bgimg" src="http://lorempixel.com/350/150/animals/">');
    $body.append('<img class="bgimg" src="'+ streetviewurl + '">');

    //news part
    var newsurl = 'https://newsapi.org/v2/everything?q='+ citystr +'news key'
    $.getJSON(newsurl, function(data){
        $nytHeaderElem.text('news about ' + citystr);
        articles = data.articles;
        console.log(data);
        for( var i = 0; i < articles.length; i++){
            var article = articles[i];
            $nytElem.append('<li class = "article">'
            + '<a href="'+ article.url + '">' + article.title + '</a>'
            + '<p>' + article.description + '</p>'
            + '</li>');
        }
    }).error(function(e){
        $nytHeaderElem.test("news could not be loaded")//add error handling
    })
    //wikipedia part

    //jsonp request doesn't support error handling so use timeout
    var wikirequesttimeout = setTimeout(function(){
        $wikiElem.text("failed to get wiki data");
    }, 8000);// 8000 is 8 seconds, this is actually a timer, and will show the message after 8 s
    var wikiurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + citystr + '&format=json&callback=wikiCallback';
    $.ajax({
        url:wikiurl,
        dataType: "jsonp",
        success: function(response){
            console.log(response);
            var articlelist = response[1];//return some word related to citystr
            for(var i = 0; i < articlelist.length; i++){
                articlestr = articlelist[i];
                var url = 'http://en.wikipedia.org/wiki/' + articlestr;
                $wikiElem.append('<li><a href="' + url + '">' + articlestr + '</a></li>');
            }
            //clearTimeout(wikirequesttimeout);
        }
    })
    return false;
};

$('#form-container').submit(loadData);//hit submit them run loaddata function
