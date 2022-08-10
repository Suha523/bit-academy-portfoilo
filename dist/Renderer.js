class Renderer {
  constructor() {}
  renderData(data) {
    let source = $("#data-template").html();
    let template = Handlebars.compile(source);
    let html = template({ results: results });
    $(".results").empty().append(html);
  }

  renderCompany(companies) {
    const source = $("#company-template").html();
    const template = Handlebars.compile(source);
    const newhtml = template({ companies });
    $(".companies-container").empty().append(newhtml);
  }
}
