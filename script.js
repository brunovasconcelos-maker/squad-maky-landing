(function () {
  var track = document.querySelector('.timeline-grid');
  var prevBtn = document.querySelector('.timeline-arrow-prev');
  var nextBtn = document.querySelector('.timeline-arrow-next');

  if (!track || !prevBtn || !nextBtn) return;

  var SCROLL_STEP = 340;

  function updateArrows() {
    // scroll-snap-align + the track's own inset padding keep scrollLeft from
    // ever reaching exactly 0, so the resting start position is the padding.
    var startOffset = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    var maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= startOffset;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 1;
  }

  prevBtn.addEventListener('click', function () {
    track.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', function () {
    track.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
})();
