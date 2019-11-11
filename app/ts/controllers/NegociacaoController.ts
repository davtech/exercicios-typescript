class negociacaoController {

  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector("#data");
    this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
    this._inputValor = <HTMLInputElement>document.querySelector("#data");
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, '/')),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    this._negociacoes.adiciona(negociacao);

    // apaga o array
    this._negociacoes.paraArray().length = 0; // acabou de apagar!

    // não tem dado para iterar!
    this._negociacoes.paraArray().forEach(negociacao => {
      console.log(negociacao.data);
      console.log(negociacao.quantidade);
      console.log(negociacao.valor);
    });

    // atualiza a tabela
    this._negociacoesView.update(this._negociacoes);
  }
}