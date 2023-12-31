// Código JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Navbar
    var navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-lg navbar-light bg-dark";
  
    var container = document.createElement("div");
    container.className = "container bg-dark";
  
    var logo = document.createElement("img");
    logo.src = "../static/img/Logo.png";
    logo.alt = "";
  
    container.appendChild(logo);
  
    var collapse = document.createElement("div");
    collapse.className = "collapse navbar-collapse justify-content-end";
    collapse.id = "navbarSupportedContent";
  
    var ul = document.createElement("ul");
    ul.className = "navbar-nav";
  
    var items = [
      { href: "../layouts/home.html", text: "Home" },
      { href: "../layouts/Registre.html", text: "Registro" },
    ];
  
    items.forEach(function (item) {
      var li = document.createElement("li");
      li.className = "nav-item";
  
      var a = document.createElement("a");
      a.className = "nav-link navbar-link text-white";
      a.href = item.href;
  
      var b = document.createElement("b");
      b.textContent = item.text;
  
      a.appendChild(b);
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    collapse.appendChild(ul);
    container.appendChild(collapse);
    navbar.appendChild(container);
  
    var body = document.getElementsByTagName("body")[0];
    body.insertBefore(navbar, body.firstChild);
  
    // Footer
    var footer = document.createElement("footer");
    footer.className = "bg-dark py-4";
  
    var footerContainer = document.createElement("div");
    footerContainer.className = "container text-center";
  
    var footerHeading = document.createElement("h5");
    footerHeading.className = "text-white";
    footerHeading.textContent = "Síguenos en redes sociales:";
  
    var socialIcons = document.createElement("div");
    socialIcons.className = "mt-3";
  
    var socialLinks = [
      {
        href: "https://www.facebook.com/profile.php?id=100006290192633",
        iconClass: "fab fa-facebook-f",
      },
      { href: "https://twitter.com/?lang=es", iconClass: "fab fa-twitter" },
      {
        href: "https://www.instagram.com/sebas_lz1/",
        iconClass: "fab fa-instagram",
      },
    ];
  
    socialLinks.forEach(function (link) {
      var anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.className = "social-icon mx-2";
  
      var icon = document.createElement("i");
      icon.className = link.iconClass;
  
      anchor.appendChild(icon);
      socialIcons.appendChild(anchor);
    });
  
    footerContainer.appendChild(footerHeading);
    footerContainer.appendChild(socialIcons);
    footer.appendChild(footerContainer);
  
    body.appendChild(footer);
  });