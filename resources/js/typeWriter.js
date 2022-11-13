const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['Data Scientist','Web Developer','Fellow @ CUNY Tech Prep'];
const ele = document.getElementById('typewriter');
let sleepTime = 100;
let curPhrasesIndex = 0;

const writeLoop = async () => {
    while(true) {
        let curWord = phrases[curPhrasesIndex];

        for(let i=0; i < curWord.length; i++) {
            ele.innerText = curWord.substring(0, i+1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for(let i = curWord.length; i > 0; i--){
            ele.innerText = curWord.substring(0, i-1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if(curPhrasesIndex === phrases.length - 1){
            curPhrasesIndex = 0;
        } else{
            curPhrasesIndex++;
        }
    }
};

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice){
    document.getElementById('typewriter-container').hidden = true;
    document.getElementById('mobile-head').hidden = false;
} else{
    writeLoop(); 
}