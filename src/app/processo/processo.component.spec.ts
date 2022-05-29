import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProcessoComponent } from './processo.component';



describe('ProcessoComponent', () => {
  let component: ProcessoComponent;
  let fixture: ComponentFixture<ProcessoComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should valid CNJ ', () => {
    component.numeroProcesso = '5001682-88.2020.8.13.0672';
    const buscarProcesoSpy = spyOn<any>(component, 'buscarProceso');
    component.validarCNJ();
    expect(buscarProcesoSpy).toHaveBeenCalled();
    expect(component.mensagemErro).toEqual('');
  });

  it('should invalid CNJ ', () => {
    component.numeroProcesso = '5';
    component.validarCNJ();
    expect(component.mensagemErro).toEqual('CNJ inválido, por favor insira no formato 0000000-00.0000.0.00.0000');
  });

  it('should buscar CNJ mock', () => {
    component.buscarProceso();
    expect(component.processo).not.toBeNull();
  });

  /*Não funciona pois a api esta com erro de cors */
  xit('should buscar CNJ ', () => {
    component.buscarProceso();
    expect(component.processo).not.toBeNull();
  });
});
