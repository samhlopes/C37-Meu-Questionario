class Quiz {
  constructor() {
    this.question = new Question();
    this.titulo = createElement('h1')
    this.legenda = createElement('h3')
  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      this.contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        this.contestant.getCount();
      }
      this.question = new Question()
      this.question.display();
    }
  }

  play() {
    console.log(question);
    // escreva aqui o código para ocultar os elementos da questão
    // question.hide();
    // button.hide();
    //title.hide();
    this.question.esconderQuestion();

    // escreva o código aqui para mudar a cor de fundo
    background("yellow")

    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    this.titulo.html("Resultado do Questionario");
    this.titulo.position(350, 0);

    // chame getContestantInfo () aqui
    if (allcontestants !== undefined) {

    }




    // escreva a condição para verificar se contestantInfor não é indefinido

    // escreva aqui o código para adicionar uma nota
    if (allcontestants !== undefined) {
      fill("Blue");
    }

    // escreva o código para destacar o competidor que respondeu corretamente
    for (var plr in allContestants) {
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer) {
        fill("Green")
      } else {
        fill("red");
      }

    }

  }

}
