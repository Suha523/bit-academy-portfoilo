class ProgramManager {
  constructor() {}

  addProgram(program) {
    $.ajax({
      method: "post",
      url: "/saveProgram",
      data: program,
      success: (response) => {
        console.log(response);
      },
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
    $.ajax({
      method: "get",
      url: "/programs",
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
}
