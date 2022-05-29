import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProcessoServece } from '../service/processo.service';




@Component({
  selector: 'processo-digesto',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public usuario: any;
  public senha = '';
  public confirmacaoSenha = '';
  public mensagemErro = '';
  public mensagemSucesso = '';
  public numeroProcesso: string = '';
  public dia = new Date().getDate();
  public mes = new Date().getMonth() + 1;
  public pagina = 1;
  public empresaParceiras: any;
  public pergunta = ''
  public tipoPagamento = '';
  public idEmpresa = null;
  public nomeEmpresa = null;
  public processo : any;



  private subscriptionDestroyer: Subject<any> = new Subject();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private processoService: ProcessoServece,
  ) { }

  ngOnInit(): void {}

  public validarCNJ(): void {
    let REGEX_CNJ = /\s*\d+\-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}\s*/;
    if (REGEX_CNJ.test(this.numeroProcesso)) {
      this.mensagemErro = '';
      this.buscarProceso();
    } else {
      this.mensagemErro = 'CNJ inválido, por favor insira no formato 0000000-00.0000.0.00.0000';
    }
  }


  /**
   * Método que busca o processo pelo número
   */
  public buscarProceso(): void {
  /* Atualmente a api esta dando erro de cors, por este motivo não está buscando na base
    this.processoService.getProcesso(this.numeroProcesso).subscribe(resp => {
        this.processor = resp;
     });
  */
   
    // Buscando processo no mock por motivo de erro de cors na api
    this.processo =  this.processoService.getProcessoMock(this.numeroProcesso);
  }
   
}
