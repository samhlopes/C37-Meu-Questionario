class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Informe Seu Nome Aqui....");
    this.input2 = createInput("Informe o Número da Opção Correta..");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Jogo MeuQuestionário");
    this.title.position(350, 0);

    this.question.html("Como se diz 'Eu caminhei durante cinco horas' em frances? ");
    this.question.position(150, 80);
    this.option1.html("1: J'ai couru pendant cinq heures " );
    this.option1.position(150, 100);
    this.option2.html("2: J'ai marché pendant cinq heures" );
    this.option2.position(150, 120);
    this.option3.html("3: J'ai mangé cinq heures " );
    this.option3.position(150, 140);
    this.option4.html("4: J'ai aimé les cinq heures" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }

  // esconderQuestion(){
  //   this.title.hide();
  // }
}
