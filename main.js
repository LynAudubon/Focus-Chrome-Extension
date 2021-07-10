const content = document.getElementById('content');
const contentParent = content.parentNode;

console.log("contentParents",contentParent)
content.parentNode.removeChild(content);

const header = document.createElement('HEADER');
header.innerHTML = 'Get back to achieving your coding dreams';
header.classList.add('beautText');
contentParent.appendChild(header);

$.ajax({
    method : 'GET',
    url :'https://unsplash.it/',//must use HTTPs (secured) instead of HTTP
    success : function(result){
      return result;
    },
    error:function(err){
      return err;
    }
  });

  //function to generate a random number
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;//math.random generates a number from 0-(max - min); then add 3 to offest numbers less than min; and use math.floor to get whole integers
  }

const image = document.createElement('img');
let randomNum = getRandomArbitrary(1, 100);
image.src = `https://unsplash.it/1200/800?image=${randomNum}`; //random number serves as random image id from the source array/object
contentParent.appendChild(image);

contentParent.onclick = function() {
    const arr = [];
    arr[0] = 'It\'s not what you think you are that holds you back, it\'s what you think you are not. Denis Waitely'
    arr[1] = `You don\'t have to have it all figured out to move forward. Unknown Author`
    arr[2] = 'The one who falls and gets up is so much stronger than the one who never fell. Unknown Author'
    arr[3] = 'Judge each day not by the harvest you reap but by the seeds you plant. Robert Louis Stevenson'
    arr[4] = 'If you don\'t build your dreams, someone else will hire you to build theirs. Unknown Author'
    arr[5] = 'Procrastination is the thief of time. Edward Young'
    arr[6] = 'I am not a procrastinator, I\'m just extremely productive at unimportant things. Unknown Author'
    arr[7] = 'I try to procrastinate, if I can, productively, like I’ll work on something else as procrastination. Or I take a walk. Because often I find, if you get out, more things come to you. Noah Baumbach'
    arr[8] = 'Successful people know the difference between patience and procrastination. Unknown Author'
    arr[9] = 'Procrastination is your body telling you: you need to back off a bit and think more about what you are doing. James Altucher'
    arr[10] = 'Procrastination is like a credit card: it’s a lot of fun until you get the bill. Christopher Parker'
    arr[11] = 'Procrastination makes easy things hard, hard things harder. Mason Cooley'
    arr[12] = 'Sometimes the thing you dread doing is the very thing you should do, just so you can stop thinking about it. Marci Shimoff'
    arr[13] = 'The distance between your Dreams and Reality is inversely proportional to your Efforts. Vineet Raj Kapoor'
    arr[14] = 'You cannot plough a field by turning it over in your mind. Author Unknown'
    arr[15] = 'When there is a hill to climb, don’t think that waiting will make it smaller. Author Unknown'
    arr[16] = 'You don’t have to see the whole staircase, just take the first step. Martin Luther King, Jr.'
    arr[17] = 'The more time you have to do things, the less you are able to get done. Joyce Rachelle'
    arr[18] = 'Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all. Byron Pulsifer'
    arr[19] = 'There is nothing so fatal to character as half finished tasks. David Lloyd George'
    arr[20] = 'The man who waits to know everything is the man who never does anything. Craig D. Lounsbrough'

    for (let i = 0; arr.length; i++) {
        if (i < arr.length) {
        let click = confirm(arr[i]);
            if(!click) {
                return false;
            }
        }
    }
};

