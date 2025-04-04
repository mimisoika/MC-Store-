document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('nav-open');
    this.classList.toggle('active');
  });

  document.querySelector('.search-button').addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      document.querySelector('.search-form').classList.toggle('active');
    }
  });