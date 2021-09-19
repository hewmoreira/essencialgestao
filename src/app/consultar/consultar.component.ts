import { Component, OnInit } from '@angular/core';
import { ProcessosService } from './processos.service';
import { ResponseProcessos } from './consultar.model';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  responseProcessos: ResponseProcessos;

  numero: any;
  protocolo: any;
  mostrarTodos: any;

  pesquisar(){
    this.protocolo = this.responseProcessos.data[this.numero];
    this.mostrarTodos = false;
  };

  pesquisarTodos(){
    this.mostrarTodos = true;
    this.protocolo = false;
  }

  constructor(private processosService: ProcessosService) { }

  ngOnInit(): void {
    this.processosService.getProcessos()
      .subscribe(res => this.responseProcessos = res)
  }

}
