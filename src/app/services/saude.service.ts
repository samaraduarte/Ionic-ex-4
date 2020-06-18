import { Sintoma } from './../models/Sintoma.model';
import { ListaSintomas } from './../models/ListaSintomas.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SaudeService {

  constructor(private storage: Storage, private datePipe: DatePipe) { }

  public insert(sintoma: Sintoma){
    const key = this.datePipe.transform(new Date(), 'ddMMyyyyhhmm');
    return this.save(key, sintoma);
  }

  public update(key: string, sintoma: Sintoma){
    return this.save(key, sintoma);
  }

  public save(key: string, sintoma: Sintoma){
    this.storage.set(key, sintoma);
  }

  public delete(key: string){
    return this.storage.remove(key);
  }

  public getAll(){
    const sintomas: ListaSintomas[] = [];

    return this.storage.forEach(
      // tslint:disable-next-line: ban-types
      (value: Sintoma, key: string, iterationNumber: Number) => {
        const sintoma = new ListaSintomas();
        sintoma.key = key;
        sintoma.sintoma = value;
        sintomas.push(sintoma);
      }
    ).then( () => {
      return Promise.resolve(sintomas);
    }).catch( (error) => {
      return Promise.reject(error);
    });
  }

  public get(key: string){
    return this.storage.get(key);
  }



}
