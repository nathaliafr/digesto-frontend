import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';




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
  ) { }




  ngOnInit(): void {}



  public buscarProceso(): void {}
   
}
