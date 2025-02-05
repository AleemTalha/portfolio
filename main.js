window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.querySelector("nav").style.background = " #034f84";
  } else {
    document.querySelector("nav").style.background = "transparent";
  }
});

function customAlert(txt,heading) {
    var d = document;
    document.querySelector("body").style.overflow = "hidden"
    if (d.getElementById("modalContainer")) return;
    var mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    var alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.style.background = "white"
    alertObj.id = "alertBox";
    if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    alertObj.style.visibility = "visible";
    var h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(heading))
    var msg = alertObj.appendChild(d.createElement("p"));
    msg.innerHTML = txt;
    var btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode("OK"));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() {
        removeCustomAlert();
        document.querySelector("body").style.overflow = "auto";
        return false;
    };
    alertObj.style.display = "block";
}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
window.addEventListener("copy", (e) => {
    customAlert("Access denied... you've been hacked!","Copying Disabled");
    e.preventDefault()
    if(e.clipboardData)
    {
        e.clipboardData.setData("text/plain","Access denied... you've been hacked!")
    }
});


// window.addEventListener("contextmenu", function (event) {
//   // customAlert(`<i class="bi bi-x-circle-fill"></i> Right Click is disabled at the moment` ,  "Access Denied")
//   // event.preventDefault();
// });

