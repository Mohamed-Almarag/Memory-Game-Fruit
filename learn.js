
//    //   The Start Of Game    ******** Start Fruit Game           ********* *

// to write your name in span 
let buttonControlsSpan = document.querySelector('.button-controls span'),
    // question about your name to put it in span 
    yourName,
    // to write the name 
    infoContainer = document.querySelector(".info-container .name span");

// function to start game and the name
buttonControlsSpan.onclick = _ => {

    // propmpt to ask you about your name 
    yourName = prompt("What Is Your Name ?");

    // check if you write your name or no and do somthing in two cases
    if(yourName == null || yourName  == "")  {

        // if you don't write your name 
        infoContainer.textContent = "Un Known";

    } else {

        // if you don't write your name
        infoContainer.textContent = yourName;
    }

    // remove div and span after starting game
    document.querySelector('.button-controls').remove();
}

// duration time to calculate the time and this time is div comeback to the normal case
let duration = 1000;

// select the main div , it is container to all divs 
let blocksContainer = document.querySelector('.memory-game-blocks'),

    // all children in container div in Array 
    blocks = Array.from(blocksContainer.children);

// Range to get the all numbers and indexes in Array 
//let orderRange  = [...Array(blocks.length).keys()];
// Another way to do Range
let orderRange  = Array.from(Array(blocks.length).keys());


// Triger shuffle Function
shuffle(orderRange);



// Add css porperity is => order => in css3 from flex prperities
blocks.forEach((block, index) => {

    // add order properity on all divs == blocks
    block.style.order =  orderRange[index];

    // add event click on block to trigger function flipBlock 
    block.addEventListener('click', () => flipBlock(block));

});


// function to add class is-flipped
function flipBlock(selectedBlock) {

    // choose cards and add class is-flipped when you click on any blok== card
    selectedBlock.classList.add('is-flipped');

    // collect all flipped cards
    let allFlippedBlocks = blocks.filter(FlippedBlock => FlippedBlock.classList.contains('is-flipped'));

    // if there are two cards opened
    if(allFlippedBlocks.length === 2) {
        
        // trigger no-clicking function
        noclicking();

        //trigger matched block
        matchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

    }
}

// Function  No-Clicking to prevent any click on any cards
function noclicking() {

    // add no-clicking event on the main continer
    blocksContainer.classList.add('no-clicking');

    // function set Time Out to remove class no-clicking after the duration time
    setTimeout(() => {
        
        blocksContainer.classList.remove('no-clicking');

    }, duration);
}


// Function matched block
function matchedBlocks(firstBlock, secondBlock) {

    triesWrong = document.querySelector('.tries span');

    // check if two blocks are similar == (firstBlock is like secondBlock)
    if(firstBlock.dataset.fruit === secondBlock.dataset.fruit) {

        // remove class is-flipped and replace with a new class has-matched
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        // add new class has-matched
        firstBlock.classList.add('has-matched');
        secondBlock.classList.add('has-matched');

    } else {

        triesWrong.textContent = parseInt(triesWrong.textContent) + 1;
        // wait the duration time(1000) mean 1s and remove class is-flipped
        setTimeout(() => {
            
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');

        }, duration);

    }
}

// shuffle Function
function shuffle(array) {

    // array => order range (1---19) **-- 
    let current = array.length,

        // to put the number in it
        temp,

        // to generate random number
        random;

    // loop to generate random number 
    while(current > 0) {

        // to generate random number from(1) to the length(19)
        random = Math.floor(Math.random() * current);

        // to decrease current from (19) to (0)
        current--;

        // [1]-- to put normal number from array in temp
        temp = array[current];

        // [2]-- to make normal number from array in temp equal random number generated
        array[current] = array[random];

        // [2]-- to make normal number from random array equal  temp number puted in it
        array[random] = temp;

    }

    // to return arrary == array meaning from (0) to (19)
    return array;

}

//    //     The End Of Game      ********     End Fruit Game           ********* *

