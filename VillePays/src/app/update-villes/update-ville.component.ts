import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pays } from '../model/Pays.model';
import { Ville } from '../model/Ville.model';
import {VilleService } from '../services/produit.service';

@Component({
  selector: 'app-update-villet',
  templateUrl: './update-ville.component.html',
  styles: [
  ]
})
export class UpdateVilleComponent implements OnInit {

  currentVille = new Ville();
  Payss! : Pays[];
  updatedpId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private VilleService: VilleService) { }

  ngOnInit(): void {
    this.VilleService.listePays().
    subscribe(ps => {this.payss = ps._embedded.payss;
    console.log(ps);
    });


    this.VilleService.consulterProduit(this.activatedRoute.snapshot.params['id']).
    subscribe( ville =>{ this.currentVille = ville; 
      this.updatedpId =   this.currentVille.pays.idp;
    
    } ) ;
    }
    

  

  updateProduit() {
    this.currentProduit.categorie = this.categories.find(cat => cat.idCat == this.updatedCatId)!;
         this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['produits']); }
      );
  }

}
