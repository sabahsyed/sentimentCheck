$(document).ready(() => {
  newTitle(); //TEST
  const messageInput = $("#userMessage");
  const userNameInput = $("#userName");
  console.log("HELLO inside message_js.js");
  const postBtn = $("#submitBtn");

  postBtn.on("click", event => {
    event.preventDefault();
    console.log("Inside Post Button");
    const userMessage = {
      name: userNameInput.val().trim(),
      message: messageInput.val().trim()
    };
    if (!userMessage.message) {
      return;
    }
    console.log("This is the user name :" + userMessage.name);
    console.log("This is the message entered  :" + userMessage.message);
    postMessage(userMessage.name, userMessage.message);
    //userMessage.val("");
  });

  function postMessage(name, message) {
    $.post("/api/messages", {
      name: name,
      message: message
    }).then(response => {
      console.log(response);
      displayMessage(response);
    }, handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  function displayMessage(message) {
    console.log("**************");
    console.log(message);
    //document.getElementById('messageTemp').innerHTML = renderPost(message);
    const row = $("<div>");
    row.addClass("messageBody");
    row.append("<ul>");
    row.append("<li>");
    row.append("<p>" + message.username + "</p>");
    row.append("<p>" + message.message + "</p>");
    row.append("</li>");
    row.append("</ul>");
    row.append("</div>");
    $(".message-body").prepend(row);
  }

  // TEST CODE , WORKS
  // const target = document.getElementById("target");
  function newTitle() {
    const titles = [""];
    const i = (Math.random() * titles.length) | 0;
    document.getElementById("target").innerHTML = "" + titles[i];
  }
});
