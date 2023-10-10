import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVilleComponent } from './add-Ville/add-ville.component';
import { villesComponent } from './Ville/villes.component';
import { RechercheParPaysComponent } from './recherche-par-pays/recherche-par-pays.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateVilleComponent } from './update-villes/update-ville.component';



const routes: Routes = [
  {path: "villes", component : VillesComponent},
  {path: "add-ville", component : AddVilleComponent},
  {path: "updateville/:id", component: UpdateVilleComponent},
  {path: "rechercheParPays", component : RechercheParPaysComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "", redirectTo: "villes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
