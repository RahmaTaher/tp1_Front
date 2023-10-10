import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/Pays.model';
import { Ville } from '../model/Ville.model';
import { VillesComponent } from '../Ville/villes.component';
import { VilleService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-pays',
  templateUrl: './recherche-par-pays.component.html',
  styles: [
  ]
})
export class RechercheParPaysComponent implements OnInit {
  IdPays! : number;
  payss! : Pays[];
  villes! : Ville[];


  constructor(private villeService : VilleService) { }

  ngOnInit(): void {
    this.villeService.listePays().
      subscribe(ps => {this.payss = ps._embedded.payss;
      console.log(ps);
    });

  }

  onChange() {
    this.villeService.rechercherParPays(this.IdPays).
      subscribe(villes =>{this.villes=villes});

    }

}
