"use strict";

////////////////////////////////////////
// Select Elements

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnsOpenModal = document.querySelectorAll(`.open-modal`);
const btnCloseModal = document.querySelector(`.modal__btn--close`);
const btnNavMobileOpen = document.querySelector(`.nav__mobile--open`);
const btnNavMobileClose = document.querySelector(`.nav__mobile--close`);
const mobileNav = document.querySelector(`.nav__mobile`);
const btnHero = document.querySelector(`.hero__btn`);
const section1 = document.querySelector(`#section--1`);
const nav = document.querySelector(`.nav`);
const header = document.querySelector(`.hero`);
const main = document.querySelector(`.main`);

////////////////////////////////////////
// Mobile Navigation

const openNav = function (e) {
  mobileNav.classList.remove(`hide--nav`);
  overlay.classList.remove(`hide`);
};

const closeNav = function (e) {
  if (!modal.classList.contains(`hide`)) {
    mobileNav.classList.add(`hide--nav`);
  } else {
    overlay.classList.add(`hide`);
    mobileNav.classList.add(`hide--nav`);
  }
};

btnNavMobileOpen.addEventListener(`click`, openNav);

btnNavMobileClose.addEventListener(`click`, closeNav);

overlay.addEventListener(`click`, closeNav);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hide`)) {
    closeNav();
  }
});

////////////////////////////////////////
// Modal Window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove(`hide`);
  overlay.classList.remove(`hide`);
};

const closeModal = function (e) {
  if (!mobileNav.classList.contains(`hide--nav`)) {
    modal.classList.add(`hide`);
  } else {
    overlay.classList.add(`hide`);
    modal.classList.add(`hide`);
  }
};

btnsOpenModal.forEach((modal) => modal.addEventListener(`click`, openModal));

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hide`)) {
    closeModal();
  }
});

////////////////////////////////////////
// Let's Begin Button

btnHero.addEventListener(`click`, function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: `smooth` });
});

////////////////////////////////////////
// PC Navigation

const goToSection = function (event) {
  if (event.target.classList.contains(`nav__item`)) {
    const id = event.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
};

document.querySelector(`.nav__navigation`).addEventListener(`click`, function (e) {
  e.preventDefault();
  goToSection(e);
});

////////////////////////////////////////
// Mobile Navigation

document.querySelector(`.nav__mobile--navigation`).addEventListener(`click`, function (e) {
  e.preventDefault();
  closeNav();
  goToSection(e);
});

////////////////////////////////////////
// Copyright Year

const year = new Date().getFullYear();
document.querySelector(`.year`).textContent = year;

////////////////////////////////////////
// Sticky Navigation

const navHeight = nav.getBoundingClientRect().height;

const navObserverOptions = {
  root: null,
  rootMargin: `-${navHeight}px`,
  tresholthreshold: 0,
};

const navObserverCallback = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting === false) {
    nav.classList.add(`sticky__nav`);
  } else {
    nav.classList.remove(`sticky__nav`);
  }
};

const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);
navObserver.observe(header);
