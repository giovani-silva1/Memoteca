import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o Componente Filho ',
      autoria: 'Componente Pai',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Minha propriedade é decorada com o componente @Input',
      autoria: 'Filho dizendo',
      modelo: 'modelo3',
    },

    {
      conteudo:
        'Vou testar agora o conteudo grande para ver o que acontece com o card , LorenIpsum LorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsumLorenIpsum',
      autoria: 'Filho dizendo',
      modelo: 'modelo3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
