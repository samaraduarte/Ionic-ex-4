import { SaudeService } from './../services/saude.service';
import { Component, OnInit } from '@angular/core';
import { ListaSintomas } from './../models/ListaSintomas.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sintomas-saude',
  templateUrl: './sintomas-saude.page.html',
  styleUrls: ['./sintomas-saude.page.scss'],
})
export class SintomasSaudePage implements OnInit {

  sintomas: ListaSintomas[] = [];

  constructor(private router: Router, private saudeService: SaudeService) { }

  async ionViewDidEnter(){
    this.sintomas = await this.saudeService.getAll();
  }

  ngOnInit() {
  }

  addSintoma(){
    this.router.navigate(['/editar-sintomas']);
  }
}
