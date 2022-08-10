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
  renderCompany(companies) {
    const source = $("#company-template").html();
    const template = Handlebars.compile(source);
    const newhtml = template({ companies });
    $(".companies-container").empty().append(newhtml);
  }
  renderProgramsUsers(programs) {
    let programsContainer = $("#programsContainer");
    programsContainer.empty();
    let source = $("#programs-visitors-template").html();
    let template = Handlebars.compile(source);
    let programHtmlElem = template({programs});
    programsContainer.append(programHtmlElem);

  }
}
