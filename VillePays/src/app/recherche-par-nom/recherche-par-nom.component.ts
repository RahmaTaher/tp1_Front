import { Component, OnInit } from '@angular/core';
import { Ville } from '../model/Ville.model';
import { VilleService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomProduit! : string;
  villes!: Ville[];
  allVilles!: Ville[];
  searchTerm!: string;
  
  constructor(private villeService : VilleService) { }

  ngOnInit(): void {
    this.villeService.listeVilles().subscribe(this.villes => {
      console.log(this.villes);
      this.Villes = villes;
      });
      
  }

  rechercherVilles(){
    this.villeService.rechercherParNom(this.nom).
    subscribe(Villes => {
      console.log(villes);
      this.villes=villes;});
  }

  onKeyUp(filterText : string){
    this.villes = this.allVilles.filter(item =>
    item.nom.toLowerCase().includes(filterText));
    }
    

}
