import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  static REPO_CLIENTES = "_CLIENTES"

  constructor() { }
  salvar(cliente: Cliente){
    console.log(cliente)
  }
  obterStorage() : Cliente[] {
    const repositorClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorClientes){
      const clientes: Cliente[] = JSON.parse(repositorClientes);
      return clientes;
    }
    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;


  }

}

