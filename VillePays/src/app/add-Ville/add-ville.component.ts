import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from '../model/Pays.model';
import { Ville } from '../model/Ville.model';
import { VilleService } from '../services/ville.service';

@Component({
  selector: 'app-add-Ville',
  templateUrl: './add-ville.component.html'
})
export class AddVilleComponent implements OnInit {

  newVille = new Ville();
  pays! : Pays[];
  newIdp! : number;
  newPays! : Pays;
  
  constructor(private VilleService: VilleService,
              private router : Router) { }

  ngOnInit(): void {

    this.VilleService.listePays().
          subscribe(ps => {this.pays = ps._embedded.pays;
            console.log(ps);
        });
 
  }

 
  addVille(){
    this.newVille.pays= this.payss.find(p => p.idPays == this.newIdPays)!;
    this.VilleService.ajouterVille(this.newVille)
                      .subscribe(ville => {
                      console.log(ville);
                      this.router.navigate(['villes']);
                      }); 
    }




}
