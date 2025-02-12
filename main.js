window.addEventListener("copy", (e) => {
  customAlert("Access denied... you've been hacked!", "Copying Disabled");
  if (e.clipboardData) {
    e.clipboardData.setData("text/plain", "Access denied... you've been hacked!");
    e.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
      if (window.scrollY > 100) {
        nav.style.background = "#034f84";
      } else {
        nav.style.background = "transparent";
      }
    }
  });
});


function scrollToTopSmooth() {
  return new Promise((resolve) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const interval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}

async function customAlert(txt, heading) {
  await scrollToTopSmooth();
  document.querySelector("body").style.overflow = "hidden";
  if (document.getElementById("modalContainer")) return;
  var mObj = document.createElement("div");
  mObj.id = "modalContainer";
  mObj.style.height = document.documentElement.scrollHeight + "px";
  document.body.appendChild(mObj);
  var alertObj = document.createElement("div");
  alertObj.id = "alertBox";
  alertObj.style.background = "white";
  mObj.appendChild(alertObj);
  var h1 = document.createElement("h1");
  h1.textContent = heading;
  alertObj.appendChild(h1);
  var msg = document.createElement("p");
  msg.innerHTML = txt;
  alertObj.appendChild(msg);
  var btn = document.createElement("a");
  btn.id = "closeBtn";
  btn.textContent = "OK";
  btn.href = "#";
  btn.onclick = function () {
    removeCustomAlert();
    document.querySelector("body").style.overflow = "auto";
    return false;
  };
  alertObj.appendChild(btn);
  alertObj.style.display = "block";
}

function removeCustomAlert() {
  var modal = document.getElementById("modalContainer");
  if (modal) {
    document.body.removeChild(modal);
  }
}

window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-img");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach((img) => {
    observer.observe(img);
  });
});
