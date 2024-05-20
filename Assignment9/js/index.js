var quote=[
        '"Be yourself; everyone else is already taken.Oscar Wilde"',
        '"So many books, so little time."Frank Zappa',
        '"A room without books is like a body without a soul." Marcus Tullius Cicero',
        '"You only live once, but if you do it right, once is enough." Mae West',
    ]
function getquote() {
    
   var quoteNum = Math.floor(Math.random()*quote.length);
   document.getElementById('quote').innerHTML=`<h4>${quote[quoteNum]}</h4>`
console.log(quoteNum);
}


