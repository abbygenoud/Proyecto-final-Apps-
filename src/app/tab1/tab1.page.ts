import { Component, inject } from '@angular/core';
import { PerfilService } from '../core/services/perfil.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  
  cambiarDias(dias:number): void {
  this.perfilService.cambiarDias(dias);
}



  constructor() {
  }

  perfilService = inject(PerfilService);


}
