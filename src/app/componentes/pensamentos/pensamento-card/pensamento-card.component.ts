import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.css'],
})
export class PensamentoCardComponent implements OnInit {
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Giovani',
    modelo: 'modelo3',
  };
  constructor() {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
