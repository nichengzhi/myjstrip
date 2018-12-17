var articlelist, h1, kids, parents;
articlelist = $('.article-list');
h1 = articlelist.siblines('h1');
kids = articlelist.find('*');//select all the elements
parents = articleslist.parents('div');
console.log(h1, kids, parents)

//change element attribute
var navlist, firstItem, link;
navlist = $('.nav-list');
firstItem = navlist.children().first();
link = firstItem.find('a');
link.attr('href', '#1');
//change css
var articleitems;
articleitems = $('.article-item');
articleitems.css('font-size', '20px')
//event listener
$( 'a' ).on( 'click', function( evt ) {
    evt.preventDefault();//prevent default action the page will not rediect
    console.log( 'You clicked a link!' );
});

//event delegation listen element event that haven't create
$( 'article' ).on( 'click','article', function() {
    $( 'body' ).addClass( 'selected' );   
});

$( 'body' ).append( '<article> <h1>Appended Article</h1> <p>Content for the new article </p> </article>' );