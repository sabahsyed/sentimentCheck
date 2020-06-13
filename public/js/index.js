$(document).ready(() => {
  $.get("/api/").then(data => {
    console.log(data);
  });
});
