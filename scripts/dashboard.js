const $ = document;
const leftArrowBtn = $.querySelector(".btn__holder");
const sideBarMenu = $.querySelector(".sidebar__menu");
const profileText = $.querySelector(".profile__text");
const imgProfile = $.querySelector(".user__profile-img");
const chartElem = $.querySelector(".chart__box");

leftArrowBtn.addEventListener("click",function(){
  sideBarMenu.classList.toggle("open-sidebar");
});


let liElems = $.querySelectorAll(".user-profile__item");
liElems.forEach(function (item) {
  item.addEventListener("click",function(){
   $.querySelector(".active").classList.remove("active");
   $.querySelector(".user__details--show").classList.remove("user__details--show");
   item.classList.add("active");
   let dataId = item.getAttribute("data-content-id");
   $.querySelector(dataId).classList.add("user__details--show");
  });
});


// function getData () {
//    let get = JSON.parse(localStorage.getItem("Users"));
//    let loggedUsers = [];
//    loggedUsers = get;
//    loggedUsers.forEach(function(user){
//       const {name} = user;
//       console.log(user);
//       profileText.innerHTML = name;
//    });
// }

// window.addEventListener("load",getData);