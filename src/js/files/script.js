// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

const menuBlocks = document.querySelectorAll('.filters__block');
if (menuBlocks.length) {
   menuBlocks.forEach(menuBlock => {
      const menuBlockItems = menuBlock.querySelectorAll('.filters__category').length;
      menuBlock.classList.add(`filters__category_${menuBlockItems}`);
   });
}

function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('[data-parent]')) {
      const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      if (subMenu) {
         const activeLink = document.querySelector('._sub-menu-active');
         const activeBlock = document.querySelector('._sub-menu-open');


         if (activeLink && activeLink !== targetElement) {
            activeLink.classList.remove('_sub-menu-active');
            activeBlock.classList.remove('_sub-menu-open');
            document.documentElement.classList.remove('sub-menu-open');
         }
         document.documentElement.classList.toggle('sub-menu-open');
         targetElement.classList.toggle('_sub-menu-active');
         subMenu.classList.toggle('_sub-menu-open');
      } else {
         console.log('Ой ой, нет такого подменю :(')
      }
      e.preventDefault();
   }
   if (targetElement.closest('.menu-top-header__link_catalog')) {
      document.documentElement.classList.add('catalog-open');
      e.preventDefault();
   }
}
