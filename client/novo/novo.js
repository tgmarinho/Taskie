Template.novo.events({

  "submit #adicionaTarefa" : function(e, template){
    e.preventDefault();

    var input = $("#tarefa");
    var nome = input.val();

    //Tarefas.insert({nome: nome, data: new Date()}); // não seguro devido o autopublishing q estava ativado
    Meteor.call("adiciona", {nome: nome});
    
    input.val("");
    intput.focus();

  }


});
