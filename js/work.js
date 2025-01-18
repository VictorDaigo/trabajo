const Header = document.querySelector(`.Header`)
const HeaderTop = Header.querySelector(`.Header-top`)
const HeaderBottom = Header.querySelector(`.Header-bottom`)
const HeaderTopSvgWrapper=Header.querySelector(`.Header-top-svg-wrapper`)
const HeaderBottomUl = Header.querySelector(`.Header-bottom-ul`)
const Main = document.querySelector(`.Main`)
HeaderTop.addEventListener('click', ()=>{
  Header.classList.toggle('HeaderIsVisible')
  HeaderBottom.classList.toggle('headerIsActive')
  HeaderTop.classList.toggle('headerIsActive')

})
const TitleH2Span = document.querySelectorAll(`.Title-h2-span`)
console.log(TitleH2Span)
const Muestra = document.querySelector(`.Muestra`)
const Title = document.querySelector(`.Title`)
const rootStyles = getComputedStyle(document.documentElement);
const mainColor = rootStyles.getPropertyValue('--main-color').trim(); 
const secondColor = rootStyles.getPropertyValue('--secondary-color').trim();
const mainBackground = rootStyles.getPropertyValue('--main-bg-color').trim();
const HeaderTopOriginal = HeaderTopSvgWrapper.innerHTML;
const HeaderLogoYellowSVG = `<svg width="110" height="133" viewBox="0 0 110 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.2204 99.3442C32.9416 99.3985 31.5587 99.265 30.0717 98.9438C28.646 98.5559 27.589 97.8001 26.9007 96.6763C25.2182 91.7512 23.4665 86.701 21.6453 81.5256C19.8241 76.3501 18.007 71.2707 16.194 66.2871C14.1511 60.4164 11.9709 54.3274 9.65325 48.0201C7.33291 41.6488 5.15266 35.5598 3.11252 29.7531C2.66914 28.3626 2.84136 27.1382 3.62917 26.0799C4.41427 24.9575 5.56327 24.108 7.07617 23.5313C8.02445 23.2349 8.85027 23.0717 9.55364 23.0418C11.7277 22.9495 13.1806 23.9768 13.9123 26.1237L21.975 48.5539C22.7121 50.8287 23.5547 53.3232 24.5027 56.0374C25.5146 58.7489 26.5293 61.5244 27.5466 64.3638C28.564 67.2032 29.5813 70.0426 30.5987 72.882C31.6133 75.6574 32.5559 78.2438 33.4264 80.641C34.4702 76.5611 35.5965 72.1573 36.805 67.4298C38.0748 62.6356 39.3419 57.7775 40.6062 52.8555C41.9345 47.9307 43.2336 43.0712 44.5033 38.277C45.7704 33.4189 46.9551 28.8846 48.0575 24.674C48.6686 22.4701 49.9972 21.3247 52.0434 21.2379C52.8107 21.2053 53.7113 21.2952 54.7452 21.5075C58.3028 22.3173 59.7631 24.2731 59.1261 27.375C56.1483 38.7115 53.1425 50.1453 50.1089 61.6763C47.0753 73.2074 44.071 84.6731 41.0959 96.0736C40.6386 97.3742 39.7148 98.2461 38.3244 98.6895C36.9951 99.0662 35.6272 99.2845 34.2204 99.3442Z" fill="#FFD700"/>
<path d="M75.0891 75.7411C75.47 74.3192 75.309 72.8184 74.6059 71.2386C73.9194 69.597 72.2719 68.3273 69.6634 67.4296C67.3692 69.0677 64.9858 69.5554 62.513 68.8928C60.4112 68.3296 58.8172 67.1074 57.7311 65.2262C56.6449 63.345 56.3918 61.3226 56.9715 59.1589C57.5513 56.9952 58.7817 55.3703 60.663 54.2842C62.5442 53.1981 64.5357 52.9366 66.6375 53.4998C67.7503 53.798 68.7493 54.397 69.6346 55.2967C70.5817 56.2131 71.372 57.22 72.0056 58.3173C73.3822 58.6199 74.4911 58.6852 75.3323 58.513C76.1735 58.3409 76.8149 58.0489 77.2565 57.6372C77.7765 57.1802 78.1586 56.62 78.4026 55.9565C78.6466 55.2931 78.8597 54.6214 79.0419 53.9414L81.5514 44.5757C81.9656 43.0303 81.852 41.4759 81.2107 39.9127C80.6313 38.366 79.1979 37.2862 76.9106 36.6733L57.5303 31.4804L41.0388 92.6566C40.7075 93.893 39.8634 94.6938 38.5067 95.0591C37.2283 95.3791 35.9091 95.357 34.5491 94.9925C30.9017 94.0152 29.4756 92.0429 30.2707 89.0756L47.5142 24.7218C48.1106 22.4963 49.0645 21.1617 50.376 20.718C51.7493 20.2909 53.2397 20.2927 54.847 20.7234L81.7383 27.9289C83.3456 28.3596 84.9628 29.1242 86.59 30.2227C88.2789 31.3379 89.7862 32.6362 91.1119 34.1178L91.0192 34.093C92.3118 35.6982 93.0722 37.5584 93.3006 39.6736C93.5907 41.8053 93.3962 44.1385 92.7171 46.6731L89.9094 57.1514C89.2468 59.6242 88.1747 61.5235 86.6931 62.8492C85.2281 64.113 83.7841 65.0513 82.361 65.6638C83.0322 66.3737 83.6641 67.1062 84.2569 67.8614C84.8662 68.5547 85.3353 69.2767 85.6642 70.0274C86.2359 71.1083 86.5808 72.2939 86.6988 73.5844C86.8787 74.8915 86.7532 76.3487 86.3226 77.956L82.7695 91.2162C81.4112 96.2854 78.4309 99.4954 73.8284 100.846C71.5189 101.553 69.385 101.975 67.4266 102.112C65.53 102.267 63.7162 102.112 61.9853 101.648L48.2614 97.971C47.2105 97.6894 46.4919 97.0331 46.1056 96.002C45.7811 94.9874 45.8094 93.7692 46.1903 92.3474C47.0186 89.2564 48.7309 88.0588 51.3273 88.7545L64.0311 92.1585C66.3184 92.7714 68.0997 92.553 69.3748 91.5032C70.65 90.4535 71.5029 89.125 71.9335 87.5177L75.0891 75.7411Z" fill="#FFD700"/>
</svg>`
let scrollCounter = 0;

const handleWheelScroll = ({ deltaY }) => {
  if (deltaY > 0) {
    scrollCounter++;
    TitleH2Span.forEach(span => span.classList.remove('TitleH2IsVisible'));
  } else if (deltaY < 0) {
    scrollCounter--;
    if (scrollCounter <= 0) {
      TitleH2Span.forEach(span => span.classList.add('TitleH2IsVisible'));
      scrollCounter = 0;
    }
  }

  console.log(scrollCounter);

  if (scrollCounter >= 1) {
    Muestra.style.transform = `translateX(-${33.333 * (scrollCounter - 1)}%)`;
  }

  updateMainAndHeader(scrollCounter);
};

const updateMainAndHeader = (counter) => {
  if (counter >= 6) {
    Main.classList.remove('MainIsFixed');
    HeaderTopSvgWrapper.innerHTML = HeaderLogoYellowSVG;
    HeaderTopSvgWrapper.style.backgroundColor = secondColor;
    HeaderBottomUl.style.backgroundColor = mainColor;
  } else {
    Main.classList.add('MainIsFixed');
    HeaderTopSvgWrapper.innerHTML = HeaderTopOriginal;
    HeaderTopSvgWrapper.style.backgroundColor = mainBackground;
    HeaderBottomUl.style.backgroundColor = mainBackground;
  }
};

window.addEventListener('wheel', handleWheelScroll);

const observerElements = document.querySelectorAll('.Observer');

const observerOptions = {
  threshold: 0.5
};

const handleIntersection = (entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) target.classList.add('elementoIsVisible');
  });
};

const observerInstance = new IntersectionObserver(handleIntersection, observerOptions);

observerElements.forEach(element => observerInstance.observe(element));

const PhotoGallery = document.querySelector(`.PhotoGallery`)
const PhotoGalleryLi = document.querySelectorAll(`.PhotoGallery-li`)
const FlechaIzquierda = document.querySelector(`.Flecha--izquierda`)
const FlechaDerecha = document.querySelector(`.Flecha--derecha`)
PhotoGallery.style.width = `calc(100% * ${PhotoGalleryLi.length})`
let Slider = 0
let anchoGalleryLi = 100 / PhotoGalleryLi.length
function moverPhotoGallery (){
  PhotoGallery.style.transform = `translateX(-${anchoGalleryLi * Slider}%)`
}
const anadirSlider =()=>{
  Slider++
  if( Slider >=PhotoGalleryLi.length ){
    Slider = 0
  }
  moverPhotoGallery()

}

const quitarSlider =()=>{
  Slider--
  if(Slider <=-1){
    Slider = PhotoGalleryLi.length - 1
  }
  moverPhotoGallery()
}
FlechaDerecha.addEventListener('click' , anadirSlider)

FlechaIzquierda.addEventListener('click' , quitarSlider )
const photoGalleryImages = document.querySelectorAll('.PhotoGallery-img');

const handleMouseEnter = (event) => {
  photoGalleryImages.forEach(img => img.style.filter = 'brightness(40%)');
  event.currentTarget.classList.add('PhotoIsActive');
  event.currentTarget.style.filter = 'brightness(100%)';
};

const handleMouseLeave = (event) => {
  photoGalleryImages.forEach(img => img.style.filter = 'brightness(100%)');
  event.currentTarget.classList.remove('PhotoIsActive');
};

photoGalleryImages.forEach(img => {
  img.addEventListener('mouseenter', handleMouseEnter);
  img.addEventListener('mouseleave', handleMouseLeave);
});


const Button = document.querySelectorAll('.Button');

const botonMouseEnter = (button, buttonBackground, buttonSpans) => {
  buttonBackground?.classList.add('buttonBackgroundIsActive');
  buttonSpans.forEach(span => span.classList.add('buttonSpanIsActive'));
};

const botonMouseLeave = (button, buttonBackground, buttonSpans) => {
  buttonBackground?.classList.remove('buttonBackgroundIsActive');
  buttonSpans.forEach(span => span.classList.remove('buttonSpanIsActive'));
};

Button.forEach(button => {
  const buttonBackground = button.querySelector('.Button-background');
  const buttonSpans = button.querySelectorAll('.Button-span');

  button.addEventListener('mouseenter', () => botonMouseEnter(button, buttonBackground, buttonSpans));
  button.addEventListener('mouseleave', () => botonMouseLeave(button, buttonBackground, buttonSpans));
});

const contactCuadros = document.querySelectorAll('.Contact-cuadro');
const contactCuadroPrimero = document.querySelector('.Contact-cuadro--Primero');

const contactoMouseEnter = () => {
  contactCuadros.forEach(cuadro => cuadro.classList.add('contactCuadroIsActive'));
};

const contactoMouseLeave = () => {
  contactCuadros.forEach(cuadro => cuadro.classList.remove('contactCuadroIsActive'));
};

contactCuadroPrimero.addEventListener('mouseenter', contactoMouseEnter);
contactCuadroPrimero.addEventListener('mouseleave', contactoMouseLeave);
