class DataModel {
  constructor() {
    this.companies = [];
  }

  saveMessage() {
    let name = $("#nameinput").val();
    let email = $("#email").val();
    let message = $("#message").val();

    $.post(
      "/postcontact",
      { name: name, email: email, message: message },
      function (response) {}
    );
  }

  saveCompany = (company) => {
    $.post("/company", company, function (company) {
      console.log("Add new company ");
      console.log(company);
    });
  };
  getCompanies = () => {
    $.get("/companies", function (companies) {
      this.companies = companiess;
    });
  };
  updateCompany = (companyName) => {
    $.ajax({
      url: "/company/:" + companyName,
      type: "PUT",
      success: function (data) {
        $("#para").html(data);
      },
    });
  };
  deleteCompany = (companyName) => {
    $.ajax({
      url: "/company/:" + companyName,
      type: "DELETE",
      success: function (data) {
        console.log("delete company" + data.companyName);
      },
    });
  };
}
