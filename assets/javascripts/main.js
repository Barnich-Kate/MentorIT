document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 2,
      }
    }
  });

  

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// Get references to the chat window, the toggle button, and the close button
  const chatWindow = document.getElementById('chat1');
  const chatToggleBtn = document.getElementById('chatToggleBtn');
  const closeChatBtn = document.getElementById('closeChatBtn');

  // Function to toggle the chat window's visibility
  function toggleChatWindow() {
    if (chatWindow.style.display === 'none') {
      chatWindow.style.display = 'block';
    } else {
      chatWindow.style.display = 'none';
    }
  }

  // Add click event listener to the toggle button
  chatToggleBtn.addEventListener('click', toggleChatWindow);

  // Add click event listener to the close button
  closeChatBtn.addEventListener('click', toggleChatWindow);

// ================================================================



document.addEventListener("DOMContentLoaded", function () {
      const searchInput = document.getElementById("search-input");
      const searchButton = document.getElementById("search-button");
      const filterCheckboxes = document.querySelectorAll(".icheck");

      searchButton.addEventListener("click", function () {
        applyFilters();
      });

      searchInput.addEventListener("input", function () {
        applyFilters();
      });

      filterCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          applyFilters();
        });
      });

      function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const filterHTML = document.querySelector("input[data-category='html']").checked;
        const filterJS = document.querySelector("input[data-category='js']").checked;
        const filterPHP = document.querySelector("input[data-category='php']").checked;
        const filterCPP = document.querySelector("input[data-category='cpp']").checked;
        const filterPython = document.querySelector("input[data-category='python']").checked;
        const filterJava = document.querySelector("input[data-category='java']").checked;

        const filterGoogle = document.querySelector("input[data-company='google']").checked;
        const filterAmazon = document.querySelector("input[data-company='amazon']").checked;
        const filterRIA = document.querySelector("input[data-company='ria']").checked;
        const filterFacebook = document.querySelector("input[data-company='facebook']").checked;
        const filterMicrosoft = document.querySelector("input[data-company='microsoft']").checked;
        const filterOpenAI = document.querySelector("input[data-company='openai']").checked;

        const filterFrontend= document.querySelector("input[data-specialization='frontend']").checked;
        const filterBackend= document.querySelector("input[data-specialization='backend']").checked;
        const filterJavadev= document.querySelector("input[data-specialization='javadev']").checked;
        const filterCppdev= document.querySelector("input[data-specialization='cppdev']").checked;
        const filterPythondev = document.querySelector("input[data-specialization='pythondev']").checked;

        const tableRows = document.querySelectorAll("#search-results tbody tr");
        tableRows.forEach(function (row) {
          const category = row.getAttribute("data-category").toLowerCase();
          const company = row.getAttribute("data-company").toLowerCase();
          const spec = row.getAttribute("data-specialization").toLowerCase();
          const productName = row.querySelector(".product strong").innerText.toLowerCase();

          const hideRow =
            (filterHTML && category !== "html") ||
            (filterJS && category !== "js") ||
            (filterPHP && category !== "php") ||
            (filterCPP && category !== "cpp") ||
            (filterPython && category !== "python") ||
            (filterJava && category !== "java") ||
            (filterGoogle && company !== "google") ||
            (filterAmazon && company !== "amazon") ||
            (filterRIA && company !== "ria") ||
            (filterFacebook && company !== "facebook") ||
            (filterMicrosoft && company !== "microsoft") ||
            (filterOpenAI && company !== "openai") ||
            (filterFrontend && spec !== "frontend") ||
            (filterBackend && spec !== "backend") ||
            (filterJavadev && spec !== "javadev") ||
            (filterCppdev && spec !== "cppdev") ||
            (filterPythondev && spec !== "pythondev") ||
            (!productName.includes(searchTerm));

          if (hideRow) {
            row.style.display = "none";
          } else {
            row.style.display = "";
          }
        });
      }
    });

document.addEventListener("DOMContentLoaded", function () {
const productsData = [
  {
    name: "Frontend Developer",
    category: "html",
    company: "google",
    description: "Test Assignment from abz.studio.",
    imageUrl: "assets/images/filters/html.png",
    fileUrl: "https://example.com/file1.pdf",
    specializations: "frontend",
  },
  {
    name: "Fullstack Developer",
    category: "html",
    company: "ria",
    description: "RIA test assignment for fullstack.",
    imageUrl: "assets/images/filters/html.png",
    fileUrl: "https://example.com/file2.pdf",
    specializations: "fullstack",
  },
  {
    name: "Python Developer",
    category: "python",
    company: "microsoft",
    description: "Python test assignment",
    imageUrl: "assets/images/filters/python.png",
    fileUrl: "https://example.com/file2.pdf",
    specializations: "pythondev",
  },
  {
    name: "JS by Amazon",
    category: "js",
    company: "amazon",
    description: "This is an JS example by Amazon.",
    imageUrl: "assets/images/filters/js.png",
    fileUrl: "https://example.com/file2.pdf",
    specializations: "frontend",
  },
  {
    name: "C++Test by OpenAI",
    category: "cpp",
    company: "openai",
    description: "This is an C++ test for OpenAI.",
    imageUrl: "assets/images/filters/cpp.png",
    fileUrl: "https://example.com/file2.pdf",
    specializations: "cppdev",
  },
  {
    name: "Java assignment by Facebook",
    category: "java",
    company: "ria",
    description: "This is an Java test for Facebook.",
    imageUrl: "assets/images/filters/java.png",
    fileUrl: "https://example.com/file2.pdf",
    specializations: "javadev",
  },
  {
    name: "PHP assignment by RIA",
    category: "php",
    company: "ria",
    description: "This is an PHP test for RIA.",
    imageUrl: "assets/images/filters/php.png",
    fileUrl: "https://example.com/file2.pdf",
    specializations: "backend",
  },
];

  const productsTableBody = document.getElementById("products-table-body");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const closeModalButton = document.querySelector(".close");
    const downloadButton = document.getElementById("download-button");

    // Генерация строк таблицы из массива productsData
    productsData.forEach(function (product, index) {
      const row = document.createElement("tr");
      row.classList.add("product-row");
      row.setAttribute("data-category", product.category);
      row.setAttribute("data-company", product.company);
      row.setAttribute("data-specialization", product.specializations);
      row.setAttribute("data-product-index", index);
      row.addEventListener("click", function () {
        modalTitle.textContent = product.name;
        modalDesc.textContent = product.description;
        downloadButton.href = product.fileUrl;
        modal.style.display = "block"; // Отображение модального окна
      });

      const imageCell = document.createElement("td");
      imageCell.classList.add("image");
      const image = document.createElement("img");
      image.src = product.imageUrl; // Используем свойство imageUrl
      image.alt = product.name;
      imageCell.appendChild(image);
      row.appendChild(imageCell);

      const productCell = document.createElement("td");
      productCell.classList.add("product");
      const productInfo = document.createElement("strong");
      productInfo.textContent = product.name;
      const description = document.createElement("br");
      description.textContent = product.description;
      productCell.appendChild(productInfo);
      productCell.appendChild(description);
      row.appendChild(productCell);

      const descriptionCell = document.createElement("td"); // Создаем ячейку для описания
      descriptionCell.classList.add("description");
      descriptionCell.textContent = product.description; // Добавляем описание к продукту
      row.appendChild(descriptionCell); // Добавляем ячейку с описанием в строку

      productsTableBody.appendChild(row);
    });

// Остальной JavaScript-код для генерации таблицы и работы с модальным окном

        function openModal() {
          modal.style.display = "block";
          document.body.style.overflow = "hidden"; // Заблокировать скролл
        }

      function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Разблокировать скролл
      }

      // Обработчики событий для открытия и закрытия модального окна
      document.querySelectorAll(".product-row").forEach(function (row) {
        row.addEventListener("click", openModal);
      });

      closeModalButton.addEventListener("click", closeModal);

      // Закрытие модального окна при клике вне его контента
      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          closeModal();
        }
      });
    });