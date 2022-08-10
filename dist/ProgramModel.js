class ProgramManager{
    constructor(){
        
    }

    addProgram(program){
       $.ajax({
           method: 'post',
           url: '/saveProgram',
           data: program,
           success: (response) => {
              console.log(response);
           },
           error: function(error){
             console.log(error);
           }
       })
    }

    updateProgram(program){
        $.ajax({
            method: 'put',
            url: `/updateProgram/${program.id}`,
            data: program,
            success: function(response){
                console.log(response);
            },
            error: function(error){
                console.log(error);
            }
        })
    }

    deleteProgram(programId){

    }

    getProgram(programName){

    }

    getAllPrograms(){
        $.ajax({
            method: 'get',
            url: '/programs',
            success: function(response){
                console.log(response);
            },
            error: function(error){
                console.log(error);
            }
        })
    }
}

let programManager = new ProgramManager()

let program = {
    id: '62f2dfb730ea0b10f415806a',
    name: "program2",
    price: 130,
    deadlineSubmit:  moment('2022-07-7').format(("YYYY-MM-DD")),
    startDate:  moment('2022-08-7').format(("YYYY-MM-DD")),
    endDate:  moment('2022-09-7').format(("YYYY-MM-DD")),
    description: "description2",
    filters: [{"EnglishLevel": "Intermediat"}]
}
$('#test-btn').on('click', function(){
    programManager.updateProgram(program)
})