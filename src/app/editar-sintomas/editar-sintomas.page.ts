import { Component, OnInit } from '@angular/core';
import { SaudeService } from './../services/saude.service';
import { ListaSintomas } from './../models/ListaSintomas.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Sintoma } from './../models/Sintoma.model';
@Component({
  selector: 'app-editar-sintomas',
  templateUrl: './editar-sintomas.page.html',
  styleUrls: ['./editar-sintomas.page.scss'],
})
export class EditarSintomasPage implements OnInit {

  titulo: string;
  model: Sintoma;
  key: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private saudeService: SaudeService) { }

  async ngOnInit() {
    this.titulo = 'Adicionar sintoma';
    this.model = new Sintoma();
    this.activatedRoute.params.subscribe( (data) => {
      if (Object.keys(data).length >= 1){
        this.saudeService.get(data.key).then( dataObject => {
          this.model.data = dataObject.data;
          this.model.descricao = dataObject.descricao;
          this.model.intensidade = dataObject.intensidade;
          this.key = data.key;
        });
      }
    });

  }

  ionViewDidLeave(){
    delete this.model;
  }

  async save(){
    await this.saveSintoma();
    this.router.navigate(['/sintomas-saude']);
  }
  async saveSintoma(){
    if (this.key){
      return await this.saudeService.update(this.key, this.model);
    } else{
      return await this.saudeService.insert(this.model);
    }
  }

}
