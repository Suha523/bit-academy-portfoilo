class ProgramManager {
  constructor() {}

  addProgram(program) {
    return $.ajax({
      method: "post",
      url: "/saveProgram",
      data: program,
      success: (response) => {},
      error: function (error) {
        console.log(error);
      },
    });
  }

  updateProgram(program) {
    $.ajax({
      method: "put",
      url: `/updateProgram/${program.id}`,
      data: program,
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  deleteProgram(programId) {
    $.ajax({
      method: "delete",
      url: `/deleteProgram/${programId}`,
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  getProgram(programName) {
    $.ajax({
      method: "get",
      url: `/program/${programName}`,
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  getAllPrograms() {
    return $.ajax({
      method: "get",
      url: "/programs",
      success: function (response) {},
      error: function (error) {},
    });
  }

  addProgramTest() {
    return $.ajax({
      method: "post",
      url: "/saveProgram",
      data: {
        name: "finalTest",
        price: 100,
        deadlineSubmit: "2022-07-22",
        startDate: "2022-08-22",
        endDate: "2022-10-22",
        description: "this is a android training program",
        filters: JSON.stringify([{ EnglishLevel: "Advance" }, { gpa: 60 }]),
      },
      success: (res) => {
        console.log(res);
      },
    });
  }
}
