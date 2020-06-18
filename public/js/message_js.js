  
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
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
    // console.log("**************");
    // console.log(message);
    //document.getElementById('messageTemp').innerHTML = renderPost(message);
    if (message.sentiment > 0.5) {
      var emoji = "<i class='fas fa-laugh fa-lg'></i>";
    } else if (message.sentiment < -0.6) {
      var emoji = "<i class='fas fa-sad-cry fa-lg'></i>";
    } else if (message.sentiment < -0.4) {
      var emoji = "<i class='fas fa-frown fa-lg'></i>";
    } else if (message.sentiment > 0) {
      var emoji = "<i class='fas fa-smile fa-lg'></i>";
    } else if (message.sentiment <= 0) {
      var emoji = "<i class='fas fa-meh fa-lg'></i>";
    }

    const row = $("<div>");
    row.addClass("messageBody");
    row.append("<div class='card'>");
    row.append("<div class='card-header'>");
    row.append(
      "<h4><span class='label'>Username:</span>" + message.username + "</h4>"
    );
    row.append("<p>" + emoji + "</p>");
    row.append("</div>");
    row.append("<div class='card-body'>");
    row.append("<blockquote class='blockquote mb-0'>");
    row.append(
      "<p><span class='label'>Message:</span>" + message.message + "</p>"
    );
    row.append(
      "<footer class='blockquote-footer'>Created At:<cite title='Source Title'>" +
        message.createdAt +
        "</cite></footer>"
    );
    row.append(
      "<a href='#' class='btn btn-primary'><i class='fas fa-grin'></i>&nbsp<i class='fas fa-grin-hearts'></i>&nbsp<i class='fas fa-grin-squint-tears'></i>&nbsp<i class='fas fa-angry'></i></a>"
    );
    row.append("</blockquote>");
    row.append("</div>");
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
