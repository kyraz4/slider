const radOne = document.querySelector('.label1'); 
const radTwo = document.querySelector('.label2'); 
const radThree = document.querySelector('.label3'); 

const BEFORE = 0;
const AFTER = 1;

const slideOne = document.querySelector('.slide-1');
const slideTwo = document.querySelector('.slide-2');
const slideThree = document.querySelector('.slide-3');


const iceUpper = document.querySelector('.ice-upper');
const iceLower = document.querySelector('.ice-lower');
const iceTrhee = document.querySelector('.ice-3');

const goDown = document.querySelector('.go-down');

const state = {
    slideOneOppened: true,
    slideTwoOppened: false,
    slideThreeOppened: false
};

const direction = [];
const startup = () => {
    console.log(state);
    radOne.style.background = '#f78b1f';
    iceUpper.style.transform = 'translateY(100px)';
    iceLower.style.transform = 'translateY(100px)';
    goDown.addEventListener("touchstart", handleStart, false);
    goDown.addEventListener("touchend", handleEnd, false);
  }

  const handleStart = (e) => {
    e.preventDefault();
    const touches = e.changedTouches;
    direction[BEFORE] = touches[0].clientY;
};

const updateRadio = (state) => {
  if (state.slideOneOppened) {
      radOne.style.background = '#f78b1f';
      radTwo.style.background = '#ffffff';
      radThree.style.background = '#ffffff';
      iceUpper.style.transform = 'translateY(200px)';
      iceLower.style.transform = 'translateY(200px)';
  } else if (state.slideTwoOppened) {
    radOne.style.background = '#ffffff';
    radThree.style.background = '#ffffff';
    radTwo.style.background = '#f78b1f';
    iceUpper.style.transform = 'translateY(0px)';
    iceLower.style.transform = 'translateY(0px)';
    goDown.style.animation = 'appearence 1s ease-in-out forwards';
  } else if (state.slideThreeOppened) {
    radOne.style.background = '#ffffff';
    radTwo.style.background = '#ffffff';
    radThree.style.background = '#f78b1f';
    iceUpper.style.transform = 'translateY(-200px)';
    iceLower.style.transform = 'translateY(-200px)';
    goDown.style.animation = 'disappearence 1s ease-in-out forwards';
  }
};


  const handleEnd = (e) => { 
    e.preventDefault();
    let swipeUp;
    const touches = e.changedTouches;
    direction[AFTER] = touches[0].clientY;
    direction[AFTER] > direction[BEFORE] ? swipeUp = true : swipeUp = false;
    if (swipeUp) {
        if (state.slideTwoOppened === true) {
                state.slideTwoOppened = !state.slideTwoOppened;
                state.slideOneOppened = !state.slideTwoOppened;
                slideOne.style.animation = 'expanding 1s ease-in-out forwards';
                updateRadio(state);
        } else if(state.slideThreeOppened === true) {
            state.slideThreeOppened = !state.slideThreeOppened;
                state.slideTwoOppened = !state.slideThreeOppened;
                slideTwo.style.animation = 'expanding 1s ease-in-out forwards';
                updateRadio(state);
        }
    } else {
         if (state.slideOneOppened === true) {
             slideOne.style.animation = 'comprassion 1s ease-in-out forwards';
            state.slideOneOppened = !state.slideOneOppened;
            state.slideTwoOppened = !state.slideOneOppened;  
            updateRadio(state);
        } else if(state.slideTwoOppened === true) {
                state.slideTwoOppened = !state.slideTwoOppened;
                state.slideThreeOppened = !state.slideTwoOppened;
                slideTwo.style.animation = 'comprassion 1s ease-in-out forwards';
                updateRadio(state);
    }
  }
  console.log(state);
};


