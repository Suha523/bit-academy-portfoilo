const saveComment = function () {
  const comment = $("#comment-input").val();
  console.log(comment);
  $.post("/comment", {coment: comment}, function (response) {});
};

$("#comment-subment").on("click", function () {
  saveComment();
  $("#comment-input").val("");
});


