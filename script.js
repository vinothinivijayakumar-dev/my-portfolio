//  PRELOADER 
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Keep preloader visible for 3 seconds (3000 ms)
  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600); // fade-out transition time
  }, 500); 
});

// Add shadow when scrolling
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Navbar Scroll Shadow 
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//Tying effect
  const typingElement = document.querySelector(".typing-text");
  const text = "Frontend Developer | Aspiring Full Stack Developer";
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // typing speed
    }
  }

  type();

 const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

//Home image animation
window.addEventListener("load", () => {
    const heroImg = document.querySelector(".hero-img");
    if (heroImg) {
        heroImg.classList.add("show");
    }
});
 



