    const body = document.querySelector('body');
    body.appendChild(popUpContainer2);
    const popUpPage = document.querySelector('.wrapper');
    popUpPage.innerHTML = popupElement;
    const closePopUp4 = document.querySelectorAll('.close_popup')
    const closePopUp5 = document.querySelectorAll('.bg-popup-btn');
    const closePopUp6 = document.querySelectorAll('.bg_color');
    closePopup.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
    closePopup2.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove;
      });
    });
    closePopup3.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
});
