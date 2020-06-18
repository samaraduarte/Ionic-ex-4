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

  model: Sintoma;
  key: string;

  constructor(private router: Router, private saudeService: SaudeService) { }

  ngOnInit() {
    this.model = new Sintoma();
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
