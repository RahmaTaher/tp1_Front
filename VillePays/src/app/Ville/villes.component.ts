import { Component, OnInit } from '@angular/core';
import { Ville} from '../model/Ville.model';
import { VilleService } from '../services/produit.service';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html'
})
export classvillesComponent implements OnInit {

    villes? : Ville[]; 

  constructor(private VilleService: VilleService) {
   //this.villes=[];
     }

  ngOnInit(): void {

    this.chargerVilles();
  }

  chargerVilles(){
    this.VilleService.listeVille().subscribe(villes => {
      console.log(villes);
      this.villes = villes;
      });
  }

supprimerVilles(v: Ville)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.VilleService.supprimerVilles(p.idVille).subscribe(() => {
        console.log("Ville supprimé");
        this.chargerVilles();     
      
});
}
 
 

}
