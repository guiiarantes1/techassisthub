import { Injectable } from '@angular/core';

const gsmarena = require('gsmarena-api');

@Injectable({
  providedIn: 'root'
})

export class PhoneServiceService {

  constructor() { }

  async listarMarcas(): Promise<any[]> {
    return await gsmarena.catalog.getBrands();
  }

  async buscarModeloPorMarca(marca: string): Promise<any[]> {
    return await gsmarena.catalog.getBrand(marca);
  }
}
