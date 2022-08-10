class Renderer {

  renderPrograms(programs) {
    let programsContainer = $("#programsContainer");  
    programsContainer.empty()
    const source = $("#programs-visitors-template").html();  
    let template = Handlebars.compile(source);
    let programHtml = template({ "programs": programs });
    programsContainer.append(programHtml);
    
  }
}
