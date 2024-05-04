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

////////////////////////////////////////
// Mobile Navigation

const openNav = function (e) {
  mobileNav.classList.remove(`hide--nav`);
  overlay.classList.remove(`hide`);
};

const closeNav = function (e) {
  mobileNav.classList.add(`hide--nav`);
  overlay.classList.add(`hide`);
  closeModal();
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
