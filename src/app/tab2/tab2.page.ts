import { Component, inject } from '@angular/core';
import { PerfilService } from '../core/services/perfil.service';
import { Perfil } from '../core/interfaces/perfil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {


perfilService = inject(PerfilService);


}

//el ngmodel es un two way banding porque tiene dos sentidos: escribimos en html y se modifica el ts y al reves