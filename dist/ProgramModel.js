class ProgramManager {
  constructor() {}

  addProgram(program) {
    return $.ajax({
      method: "post",
      url: "/saveProgram",
      data: {
        name: program.name,
        price: program.price,
        deadlineSubmit: program.deadlineSubmit,
        startDate: program.startDate,
        endDate: program.endDate,
        description: program.description,
        filters: JSON.stringify(program.filters),
      },
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

  
}
