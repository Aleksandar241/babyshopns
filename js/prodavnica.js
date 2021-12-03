const addListener = () => {
  const cardElements = document.querySelectorAll('.product-container');

  cardElements.forEach(e => {
    e.addEventListener('click', () =>
      alert('Proizvod je uspesno dodat u korpu')
    );
  });
};

addListener();
