const logo = document.querySelector('.header__logo-link')
const navigation = document.querySelector('.header__navigation')
const navContainer = document.querySelector('.header__navigation-container')
const header = document.querySelector('.header')
const navButton = document.querySelector('.navigation-button')
const navButtonItem = document.querySelector('.navigation-button__item')
const footerNav = document.querySelector('.footer__top-navigation')
const footerContact = document.querySelector('.footer__top-contact')
const footerSocialMedia = document.querySelector('.footer__top-wrap')
const footer = document.querySelector('.footer__top')
const footerNavContainer = document.querySelector('.accordion__container-navigation')
const footerContactContainer = document.querySelector('.accordion__container-contact')
const footerSociaContainer = document.querySelector('.accordion__container-social')
const item = document.querySelectorAll('.accordion__item')
const accordion = document.querySelector('.accordion')
const accordionContainer = document.querySelectorAll('.accordion__container')
const columns = document.querySelectorAll('.footer__top-col')
function resize()
{
    if (window.matchMedia("(max-width: 768px)").matches) {
        navContainer.appendChild(logo);
        navContainer.appendChild(navigation); 
        footerNavContainer.appendChild(footerNav);
        footerContactContainer.appendChild(footerContact);
        footerSociaContainer.appendChild(footerSocialMedia);
        document.querySelector('.header__logo').setAttribute('src','./assets/images/logo_white.png')
        document.querySelector('.header__logo').setAttribute('srcset','./assets/images/logo_white@2x.png 2x, ./assets/images/logo_white@3x.png 3x')
    } 
    else {
        for (let i = 0; i < navContainer.children.length; i++) {
            header.appendChild(navContainer.children[i]);
        }
        columns[1].appendChild(footerNav);
        columns[2].appendChild(footerContact);
        columns[3].appendChild(footerSocialMedia);

        document.querySelector('.header__logo').setAttribute('src','./assets/images/logo.png')
        document.querySelector('.header__logo').setAttribute('srcset','./assets/images/logo@2x.png 2x, ./assets/images/logo@3x.png 3x')
        navContainer.classList.remove('header__navigation-container--active')
        navButtonItem.classList.remove('navigation-button__item--active')
    }
}
navButton.onclick = (()=>{
    if(!navContainer.classList.contains('header__navigation-container--active'))
    {
        navContainer.classList.add('header__navigation-container--active')
        navButtonItem.classList.add('navigation-button__item--active')
    }
    else
    {
        navContainer.classList.remove('header__navigation-container--active')
        navButtonItem.classList.remove('navigation-button__item--active')
    }
})

window.addEventListener('load', resize)
window.addEventListener('resize', resize)


function showAccordion(e)
{
    let target = e.target;
    for(let i = 0;i < item.length;i++)
    {
      if(item[i] === target)
      {
          for(let j = 0;j < accordionContainer.length;j++)
          {
            if(i === j)
            {
            accordionContainer[j].classList.toggle('accordion__container--active')  
            }
            else{
            accordionContainer[j].classList.remove('accordion__container--active')      
            }  
      
          }
      }
      else {
        item[i].classList.remove('accordion__container--active')        
      }
  }
}
function hideAccordion(e){
    if (!e.target.classList.contains('accordion__item') 
    && !e.target.classList.contains('footer__top-contact')) {
        for(let j = 0;j < accordionContainer.length;j++)
        {
            accordionContainer[j].classList.remove('accordion__container--active');
        }
      
    }
}

document.addEventListener('click', hideAccordion);
accordion.addEventListener('click', showAccordion)