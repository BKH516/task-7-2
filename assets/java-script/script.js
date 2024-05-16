// task-1
document.addEventListener("DOMContentLoaded", function () {
      const section = document.querySelector(".section-1");
      const heroImage = document.getElementById("hero");

      document.querySelectorAll(".img-all img").forEach((img) => {
            img.addEventListener("click", function () {
                  let bgColor = "";
                  let textColor = "";
                  switch (this.id) {
                        case "phone-black":
                              bgColor = "linear-gradient(to right, #434343, #000000)";
                              textColor = "white";
                              break;
                        case "phone-darkslateblue":
                              bgColor = "linear-gradient(to right, #434343, #595cc5)";
                              textColor = "white";
                              break;
                        case "phone-green":
                              bgColor = "linear-gradient(to right, #434343, #00715c)";
                              textColor = "white";
                              break;
                        case "phone-darkcyan":
                              bgColor = "linear-gradient(to right, #434343, #49739d)";
                              textColor = "white";
                              break;
                        case "phone-white":
                              bgColor = "linear-gradient(to right, #000000, #ffffff)";
                              textColor = "black";
                              break;
                  }

                  section.style.backgroundImage = bgColor;
                  section.style.color = textColor;

                  const clone = img.cloneNode();
                  clone.classList.add("moving-image");
                  clone.style.position = "absolute";
                  clone.style.left = `${img.offsetLeft}px`;
                  clone.style.top = `${img.offsetTop}px`;
                  clone.style.width = `${img.offsetWidth}px`;
                  clone.style.height = `${img.offsetHeight}px`;
                  document.body.appendChild(clone);

                  const heroRect = heroImage.getBoundingClientRect();
                  clone.style.transform = `translate(${heroRect.left - img.offsetLeft}px, ${heroRect.top - img.offsetTop}px)`;
                  clone.style.width = `${heroRect.width}px`;
                  clone.style.height = `${heroRect.height}px`;

                  clone.addEventListener("transitionend", () => {
                        heroImage.src = clone.src;
                        clone.remove();
                  });
            });
      });
      // task-2
      document.getElementById('phone-moon').addEventListener('click', function () {
            const section = document.querySelector('.section-task-2');
            section.classList.toggle('dark-mode');
      });
      // task-3
      const accordionHeaders = document.querySelectorAll('.accordion-header');

      accordionHeaders.forEach(header => {
            header.addEventListener('click', function () {
                  // Toggle the active class on the header
                  this.classList.toggle('active');

                  // Toggle the display of the content
                  const content = this.nextElementSibling;
                  if (content.style.display === "block") {
                        content.style.display = "none";
                  } else {
                        content.style.display = "block";
                  }
            });
      });
});

//task-4

document.addEventListener('DOMContentLoaded', () => {
      const stars = document.querySelectorAll('.star');
      const ratingText = document.querySelector('.rating-text');

      stars.forEach(star => {
            star.addEventListener('click', () => {
                  const rating = star.getAttribute('data-value');
                  updateRating(rating);
            });
      });

      function updateRating(rating) {
            stars.forEach(star => {
                  if (star.getAttribute('data-value') <= rating) {
                        star.style.color = '#f1c40f';
                  } else {
                        star.style.color = '#000';
                  }
            });

            switch (rating) {
                  case '1':
                        ratingText.textContent = 'It is terrible';
                        break;
                  case '2':
                        ratingText.textContent = 'It is bad';
                        break;
                  case '3':
                        ratingText.textContent = 'It is okay';
                        break;
                  case '4':
                        ratingText.textContent = 'It is good';
                        break;
                  case '5':
                        ratingText.textContent = 'It is awesome';
                        break;
            }
      }
});