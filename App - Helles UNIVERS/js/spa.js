// lavet af Maria
"use strict";

// hide all pages 
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab 
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  console.log(pageId);
  if (pageId === "login" || pageId === "admin" || pageId === "Guide" || pageId === "profiler" || pageId === "opretOpslag" || pageId === "opretProfil" || pageId === "hellesNyheder" || pageId === "opretVideo" || pageId === "profilHelle" || pageId === "redigerProfilHelle" || pageId === "svarquestionHelle") {
    showTabbar(false);
    showHeader(false);
  } else {
    showTabbar(true);
    showHeader(true);
  }
  setActiveTab(pageId);
}

// sets active tabbar/ menu item 
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".menubar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  }
} 

// sets active tabbar/ menu item 
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".header a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  }
}

function showHeader(show) {
  let tabbar = document.querySelector('#header');
  if (show) {
    tabbar.classList.remove("hide");
  } else {
    tabbar.classList.add('hide');
  }
}

function showTabbar(show) {
  let tabbar = document.querySelector('.menuBar');
  if (show) {
    tabbar.classList.remove("hide");
  } else {
    tabbar.classList.add('hide');
  }
}

// navigate to a new view/page by changing href 
function navigateTo(pageId) {
  location.href = `#${pageId}`;
}

// set default page or given page by the hash url
// function is called 'onhashchange' 
function pageChange() {
  let page = "Guide";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

pageChange(); // called by default when the app is loaded for the first time