import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { villesComponent } from './Ville/villes.component';
import { AddVilleComponent } from './add-Ville/add-ville.component';
import { FormsModule } from '@angular/forms';
import { UpdateVilleComponent } from './update-villes/update-ville.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParPaysComponent } from './recherche-par-pays/recherche-par-pays.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    villesComponent,
    AddVilleComponent,
    UpdateVilleComponent,
    RechercheParPaysComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
