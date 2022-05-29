# DigestoFrontend

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Instalação

Primeiro passo instalar o [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) em sua máquina com o comando `nvm install 16`;
Segundo passo rodar o comando `npm i -g @angular/cli@13.0.2` para instalar a versão correta do angular cli;
Terceiro passo rode o comando `npm install`;
E por último rode a aplicação.

## Development server

Rode o comando `ng serve` para dev server. Navegue por `http://localhost:4200/`. A aplicação irá atualizar automaticamente se fizer alguma alteração.

## Build

Rode o comando `ng build` para buildar o projeto. Os atefatos do bild serão armazenados no diretório `dist/`.

## Rodar tests unitários

Rode o comando `ng test` para executar os testes via [Karma](https://karma-runner.github.io).


## Observação

Desenvolvido na branch develop e feito merge na branch main.

Durante o desenvolvimento foi constatado um erro de cors ao tentar acessar as urls passadas, por este motivo foi desenvolvido com mocks e sem mocks porém as partes que acessariam a api está comentada.
