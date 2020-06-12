$(document).ready(() => {
  const postBtn = $("button#submitBtn");

  postBtn.on("submit", event => {
    event.preventDefault();
    const userMessage = {
      message: userMessage.val().trim()
    };
    if (!userMessage.message) {
      return;
    }
    postMessage(message);
    userMessage.val("");
  });
  function postMessage(message){
    $post("api/messages", {
      message: message
    })
      .then(() => {
        window.location.replace("/messages");
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
