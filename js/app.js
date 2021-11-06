const badgeListener = () => {
  const badgesCount =
    document.getElementById('badges-container').children.length;

  for (let i = 1; i <= badgesCount; i++) {
    let badge = document.getElementById(`badge_${i}`);
    let badgeChild = badge.lastElementChild;
    badge.addEventListener('mouseenter', () => {
      badgeChild.classList.remove('visible');
    });
    badge.addEventListener('mouseleave', () => {
      badgeChild.classList.add('visible');
    });
  }
};

badgeListener();
