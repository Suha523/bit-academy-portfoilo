class DataModel {
  constructor() {
    this.companies = [];
  }
  saveCompany = (company) => {
    $.post("/company", company, function (company) {
      console.log("Add new company ");
      console.log(company);
    });
  };
  getCompanies = () => {
    $.get("/companies", function (companies) {
      console.log(companiess);
      this.companies = companiess;
    });
  };
}
