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

  constructor(private processosService: ProcessosService) { }

  ngOnInit(): void {
    this.processosService.getProcessos()
      .subscribe(res => this.responseProcessos = res)
  }

}
