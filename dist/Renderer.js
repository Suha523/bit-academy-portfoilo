class Renderer {
  renderData(data) {
    let source = $("#data-template").html();
    let template = Handlebars.compile(source);
    let html = template({ results: results });
    $(".results").empty().append(html);
  }

  renderComment(comment) {
    $("#display-comment").empty();
    const source = $("#comment-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ comment });
    $("#display-comment").append(newHTML);
  }

  //   renderCommentAdmin(comment) {
  //     $("#display-comment-admin").empty();
  //     const source = $("#comment-admin-template").html();
  //     const template = Handlebars.compile(source);
  //     let newHTML = template({ comment });
  //     $("#display-comment-admin").append(newHTML);
  //   }
}
