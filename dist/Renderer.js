class Renderer {
  constructor() {}
  renderProgramsUsers(programs) {
    let programsContainer = $("#programsContainer");
    programsContainer.empty();
    let source = $("#programs-visitors-template").html();
    let template = Handlebars.compile(source);
    let programHtmlElem = template({programs});
    programsContainer.append(programHtmlElem);
  }
}
