const quotes = [
    {
        quote:"F.E.A.R. has two meanings: “Forget everything and rise” or “Face everything and rise” The choice is yours.",
        author:'Zig Ziglar',
    },
    {
        quote:"And, when you want something, all the universe conspires in helping you to achieve it",
        author:'Paulo Coelho',
    },
    {
        quote:"Synergy is the very essence of the family. Every family member contributes a different flavor to the mix",
        author:'Stephen Covey',
    },
    {
        quote:"I can give you a six-word formula for success: Think things through, then follow through.",
        author:'Captain Edward V. Rickenbacker',
    },
    {
        quote:"Imperfection is beauty; madness is genius. And it’s better to be absolutely ridiculous than absolutely boring.",
        author:'Marilyn Monroe',
    },
    {
        quote:"If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.",
        author:'Vincent Van Gogh',
    },
    {
        quote:"The true wealth of a nation lies not in it’s gold or silver but in it’s learning, wisdom and in the uprightness of its sons.",
        author:'Kahlil Gibran',
    },
    {
        quote:"I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it.",
        author:'Muhammad Ali',
    },
    {
        quote:"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        author:'Neil Gaiman',
    },
    {
        quote:"Everyone has inside them a piece of good news. The good news is you don’t know how great you can be!… And what your potential is",
        author:'Anne Frank',
    },
    {
        quote:"Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
        author:'Barack Obama',
    },
];
const quoteDisplay = document.querySelector('.quotes span');
const authorDisplay = document.querySelector('.author');
const btn = document.querySelector('.btn');


btn.addEventListener('click',function(){
    let item = quotes[randomNumber()];
    quoteDisplay.textContent = item.quote;
    authorDisplay.textContent = item.author;
    
});

function randomNumber(){
    return Math.floor(Math.random() * quotes.length);
}