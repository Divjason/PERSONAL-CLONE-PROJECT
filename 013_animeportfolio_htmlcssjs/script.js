// navigation
const Body = document.querySelector('body');
const Nav_btn = document.querySelector('#nav_icon');

Nav_btn.addEventListener('click', () => {
  Body.classList.toggle('nav_active');
});

// section 2 slider
const s_Icons = document.querySelectorAll('.slide_icons li');
const s_Left = document.querySelector('.slide_btn.left');
const s_Right = document.querySelector('.slide_btn.right');
const Bg = document.querySelector('#sec2');
const s_Slider = document.querySelectorAll('.sec2_slider li');

const s_reset = () => {
  s_Slider.forEach((elem, idx) => {
    s_Slider[idx].classList.remove('on');
    s_Icons[idx].classList.remove('active');
  });
};

s_Icons.forEach((li) => {
  li.addEventListener('click', (e) => {
    let target = e.target.dataset.index;
    s_reset();
    if (li.tagName === 'LI') {
      for (let i = 0; i < s_Icons.length; i++) {
        if (target == i) {
          s_Slider[i].classList.add('on');
          s_Icons[i].classList.add('active');
          Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
        }
      }
    }
  });
});

const next = (e) => {
  // 이벤트 버블링을 차단하기 위한 목적
  e.preventDefault();
  // 현재 선택된 슬라이드 번호를 알기위한 목적
  let crtSlide = document.querySelector('.sec2_slider li.on');
  let i = crtSlide.dataset.index;
  // 새로운 슬라이드로 넘어가게 될 때마다 새롭게 리셋해주기 위한 목적
  s_reset();
  // 새로운 슬라이드로 갈 수 있도록 해주기 위한 목적
  i++;
  // 그래서 마지막으로 조치!
  if (i >= s_Slider.length) {
    i = 0;
  }
  // 우선 먼저 입력해서 테스트 하지만 마지막에서 처리불가능!
  s_Slider[i].classList.add('on');
  s_Icons[i].classList.add('active');
  Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
};

s_Right.addEventListener('click', next);

const prev = (e) => {
  // 이벤트 버블링을 차단하기 위한 목적
  e.preventDefault();
  // 현재 선택된 슬라이드 번호를 알기위한 목적
  let crtSlide = document.querySelector('.sec2_slider li.on');
  let i = crtSlide.dataset.index;
  // 새로운 슬라이드로 넘어가게 될 때마다 새롭게 리셋해주기 위한 목적
  s_reset();
  // 새로운 슬라이드로 갈 수 있도록 해주기 위한 목적
  i--;
  // 그래서 마지막으로 조치!
  if (i < 0) {
    i = s_Slider.length - 1;
  }
  // 우선 먼저 입력해서 테스트 하지만 마지막에서 처리불가능!
  s_Slider[i].classList.add('on');
  s_Icons[i].classList.add('active');
  Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
};

s_Left.addEventListener('click', prev);

const sec0 = () => {
  anime({
    targets: '.svg1 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 4000,
    delay: function (el, i) {
      return i * 400;
    },
    direction: 'alternate',
    loop: true,
  });
};
const sec1 = () => {
  let tl = anime.timeline({
    easing: 'linear',
    duration: 500,
  });
  tl.add({
    targets: '.g01',
    height: '80%',
  })
    .add({
      targets: '.g02',
      height: '70%',
    })
    .add({
      targets: '.g03',
      height: '80%',
    })
    .add({
      targets: '.g04',
      height: '85%',
    });
};
const sec1_reset = () => {
  anime({
    targets: '.gage_in',
    height: '0%',
  });
};
const sec2 = () => {
  let tl = anime.timeline({
    duration: 500,
    easing: 'linear',
  });
  tl.add({
    targets: '#sec2 h1',
    opacity: 1,
    translateY: 50,
  }).add({
    targets: '.slider_wrap',
    opacity: 1,
    translateY: 50,
  });
};
const sec3 = () => {
  const d0 =
    'M453 100C283.5 11.5 184 0.499989 0.5 0.5V772H1921V63C1753.5 144 1381.5 288 1146 288C825 288 726.67 242.89 453 100Z';
  const d1 =
    'M570 10C308.5 -26.5 135 62 0.5 95V730H1921V95C1753.5 176 1579.5 209 1344 209C1028.11 209 875.763 52.6782 570 10Z';
  const d2 =
    'M585.5 276C367.959 243.273 245 160.5 0.5 20V729H1921V20C1693 -24 1501 6.78688 1312 147.287C1070.85 326.558 758.5 302.027 585.5 276Z';

  anime({
    targets: '.sec3_svg path',
    d: [{ value: d0 }, { value: d1 }, { value: d2 }],
    fill: [{ value: '#667eea' }, { value: '#764ba2' }, { value: '#66a6ff' }],
    duration: 3000,
    easing: 'easeInOutQuart',
    loop: true,
    direction: 'alternate',
  });

  anime({
    targets: '#sec3 h1 span',
    delay: anime.stagger(100),
    opacity: 1,
    translateX: 100,
    easing: 'easeOutSine',
  });
};
const sec4 = () => {
  console.log('sec4');
};

new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ['Num0', 'Num1', 'Num2', 'Num3', 'Num4'],
  //신규추가
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (old_elem.index === 1) {
      sec1_reset();
    }
    if (new_elem.index === 2) {
      sec2();
    }
    if (new_elem.index === 3) {
      sec3();
    }
    if (new_elem.index === 4) {
      sec4();
    }
  },
});
