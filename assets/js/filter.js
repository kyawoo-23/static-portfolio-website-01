const filters = document.querySelectorAll('.filter');
const all = document.getElementById("all-btn");
const web = document.getElementById("web-btn");
const mob = document.getElementById("mob-btn");

filters.forEach(filter => {

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'All') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
      all.classList.add("active");
      web.classList.remove("active");
      mob.classList.remove("active");
    } 
    else if (selectedFilter == 'Web') {
      all.classList.remove("active");
      web.classList.add("active");
      mob.classList.remove("active");
    }
    else if (selectedFilter == 'Mob') {
      all.classList.remove("active");
      web.classList.remove("active");
      mob.classList.add("active");
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
      // el.style.display = "none";
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show');
      // el.style.display = "block";
    });

  });
});