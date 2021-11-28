var date = new Date();
var todaysDate = date.getDate();
console.log(todaysDate);

$(".card").click(function () {
  // set date header for card
  let id = $(this).attr("id");
  let content = cardContent[id - 1];
  let date2 = id + ". joulukuuta";

  $("#kalender-date").text(date2);

  // set card text content
  if (id > todaysDate) {
    let i = Math.floor(Math.random() * 2.5);
    let content = cheatContent[i];
    $("#modal-text").addClass("cheat-text").removeClass("secret-code");
    $("#modal-img").attr("src", content[1]);
    $("#modal-text1").text(content[0]);
    $("#modal-vid").hide();
  } else {
    if (id == 24) {
      $("#modal-text").removeClass("cheat-text").addClass("secret-code");
      $("#modal-img").hide();
      $("#modal-text1").hide();
      $("#modal-vid").show();
    } else {
      $("#modal-text").removeClass("cheat-text").addClass("secret-code");
      $("#modal-img").attr("src", content[1]);
      $("#modal-img").show();
      $("#modal-text1").hide();
      $("#modal-vid").hide();
    }
  }

  $("#modal").modal("show");
});

cardContent = [
  [
    " ",
    "assets/img/day-1.jpg",
  ],
  [
    " ",
    "assets/img/day-2.jpg",
  ],
  [
    " ",
    "assets/img/day-3.jpg",
  ],
  [
    " ",
    "assets/img/day-4.jpg",
  ],
  [
    " ",
    "assets/img/day-5.jpg",
  ],
  [
    " ",
    "assets/img/day-6.jpg",
  ],
  [
    " ",
    "assets/img/day-7.jpg",
  ],
  [
    " ",
    "assets/img/day-8.jpg",
  ],
  [
    " ",
    "assets/img/day-9.jpg",
  ],
  [
    " ",
    "assets/img/day-10.jpg",
  ],
  [
    " ",
    "assets/img/day-11.jpg",
  ],
  [
    " ",
    "assets/img/day-12.jpg",
  ],
  [
    " ",
    "assets/img/day-13.jpg",
  ],
  [
    " ",
    "assets/img/day-14.jpg",
  ],
  [
    " ",
    "assets/img/day-15.jpg",
  ],
  [
    " ",
    "assets/img/day-16.jpg",
  ],
  [
    " ",
    "assets/img/day-17.jpg",
  ],
  [
    " ",
    "assets/img/day-18.jpg",
  ],
  [
    " ",
    "assets/img/day-19.jpg",
  ],
  [
    " ",
    "assets/img/day-20.jpg",
  ],
  [
    " ",
    "assets/img/day-21.jpg",
  ],
  [
    " ",
    "assets/img/day-22.jpg",
  ],
  [
    " ",
    "assets/img/day-23.jpg",
  ],
  [
    " ",
    " "
  ],
];

cheatContent = [
  ["Ehei, tämä päivä ei ole vielä!", "assets/img/cheat-1.png"],
  ["Malta vielä hetki...", "assets/img/cheat-2.png"],
  ["Eipäs huijata!", "assets/img/cheat-3.png"],
];
