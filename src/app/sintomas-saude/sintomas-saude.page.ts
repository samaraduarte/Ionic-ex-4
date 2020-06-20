import { SaudeService } from './../services/saude.service';
import { Component, OnInit } from '@angular/core';
import { ListaSintomas } from './../models/ListaSintomas.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sintomas-saude',
  templateUrl: './sintomas-saude.page.html',
  styleUrls: ['./sintomas-saude.page.scss'],
})
export class SintomasSaudePage implements OnInit {

  sintomas: ListaSintomas[] = [];


  constructor(private toast: ToastController, private router: Router, private saudeService: SaudeService) { }

  async ionViewDidEnter(){
    this.sintomas = await this.saudeService.getAll();
  }
  ngOnInit() {  }

  addSintoma(){
    this.router.navigate(['/editar-sintomas']);
  }

  editarSintoma(sintomaKey: ListaSintomas){
    this.router.navigate(['/editar-sintomas', {key: sintomaKey.key}]);
  }

  async removerSintoma(sintomaKey: ListaSintomas){
   await this.saudeService.delete(sintomaKey.key);
   const indice = this.sintomas.indexOf(sintomaKey);
   this.sintomas.splice(indice, 1);

   this.toast.create({
     message: 'Sintoma removido',
     duration: 3000,
     position: 'bottom',
   }).then(
     response => {
       response.present();
     }
   );
  }
}
