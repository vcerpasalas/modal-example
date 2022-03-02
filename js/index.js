'use strict';
const documentReady = () => {
  // Start header
  const headerScroll = () => {
    const header = document.querySelector('.header');
    const headerNav = document.querySelector('.header-nav');
    const headerNavMenuIcon = document.querySelector('.header-nav__menu-icon');
    const headerNavLinks = [...document.querySelectorAll('.header-nav__link')];

    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
    headerNavMenuIcon.classList.toggle('header-nav__menu-icon--scroll', window.scrollY > 0);
    headerNavLinks.map((element) => {
      element.classList.toggle('header-nav__link--scroll', window.scrollY > 0);
    });
  };

  const openMenu = () => {
    const navLinkList = document.querySelector('.header-nav__link-list');
    navLinkList.classList.add('header-nav__link-list--open');
  };

  const closeMenu = () => {
    const navLinkList = document.querySelector('.header-nav__link-list');
    navLinkList.classList.remove('header-nav__link-list--open');
  };

  const navMenuIcon = document.querySelector('.header-nav__menu-icon');
  const navCloseIcon = document.querySelector('.header-nav__close-icon');
  const headerNavLinkItems = [...document.querySelectorAll('.header-nav__link-item')];

  window.addEventListener('scroll', headerScroll);
  navMenuIcon.addEventListener('click', openMenu);
  navCloseIcon.addEventListener('click', closeMenu);
  headerNavLinkItems.map((element) => {
    element.addEventListener('click', closeMenu);
  });
  // End header

  // Start modal
  const coverButton = document.querySelector('.cover__button');
  const modalButton = document.querySelector('.modal__button');
  const modal = document.querySelector('.modal');

  const openModal = () => {
    modal.classList.add('modal--show');
  };

  const closeModal = () => {
    modal.classList.remove('modal--show');
  };

  coverButton.addEventListener('click', openModal);

  modalButton.addEventListener('click', closeModal);
  // End modal
};

document.addEventListener('DOMContentLoaded', documentReady);
