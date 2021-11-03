$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  items: 1,
  dots: false,
  navText: [
    `
    <svg class="custom-arrow custom-left-arrow" width="50" height="176" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857861C15.3611 0.0768126 14.0948 0.0768125 13.3137 0.857861L0.585785 13.5858ZM50 13L2 13L2 17L50 17L50 13Z" fill="white"/>
    </svg>`,
    `<svg class="custom-arrow custom-right-arrow" width="50" height="176" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49.4142 16.4142C50.1953 15.6332 50.1953 14.3668 49.4142 13.5858L36.6863 0.857864C35.9052 0.0768156 34.6389 0.0768156 33.8579 0.857864C33.0768 1.63891 33.0768 2.90524 33.8579 3.68629L45.1716 15L33.8579 26.3137C33.0768 27.0948 33.0768 28.3611 33.8579 29.1421C34.6389 29.9232 35.9052 29.9232 36.6863 29.1421L49.4142 16.4142ZM0 17H48V13H0V17Z" fill="white"/>
        </svg>
    `,
  ],
});

$(document).ready(function () {
  $("button").click(function () {
    alert($("div").scrollTop() + " px");
  });
});

//distancia das arrows 696
