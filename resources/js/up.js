const up = document.getElementById('up');
const btn = document.getElementById('back-to-top_btn');

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

const dt = deviceType();

const totalHeight = document.documentElement.scrollHeight;

const scrollFunc = () => {
    let y = window.scrollY;
    if(dt == 'desktop'){
        if (y < (totalHeight - 1100)) {
            up.hidden = true;
        } else {
            up.hidden = false;
        }
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 1);
  }
};

btn.onclick = ((e) => {
    e.preventDefault();
    scrollToTop();
})