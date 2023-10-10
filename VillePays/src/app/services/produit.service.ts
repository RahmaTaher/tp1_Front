import { Injectable } from '@angular/core';
import { Categorie } from '../model/Pays.model';
import { Produit, Ville } from '../model/Ville.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaysWrapper } from '../model/PaysWrapped.model';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class VilleService {
  apiURL: string = 'http://localhost:8080/ville/api';
  apiURLCat: string = 'http://localhost:8080/ville/p';

  villes : Ville[]; 
  
 

  constructor(private http : HttpClient) { 
    
    
    this.villes = [{idVille : 1, NumV : 12, nomV : "Paris", codePostal : 75000 , dateCreation : new Date("01/14/2011"),
                      pays : {idPays : 1, nomPays : "France", capital:"Paris"} },
                     {idVille : 2, NumV : 14, nomV : "London", codePostal : 90000 , dateCreation : new Date("12/12/2010"),
                     pays : {idPays : 1, nomPays : "EtatUnis", capital:"Washington"} },
                     {idVille : 3, NumV : 14, nomV : "nabeul", codePostal : 8000 , dateCreation : new Date("02/14/2000"),
                     pays : {idPays : 1, nomPays : "Tunisie", capital:"Tunis"} },
                    ];
    
  }

  listeVilles(): Observable<Ville[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }

    ajouterVilles( v: Ville):Observable<Ville>{
      return this.http.post<Ville>(this.apiURL, v, httpOptions);
      }

      supprimerVille(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        
        consulterVille(id: number): Observable<Ville> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Ville>(url);
          }

          trierVilles(){
            this.villes = this.villes.sort((n1,n2) => {
              if (n1.idVille > n2.idVille) {
                  return 1;
              }
             if (n1.idVille < n2.idVille) {
                  return -1;
              }
            return 0;
          });
          }
      

          updateProduit(v :Ville) : Observable<Ville>
            {
                return this.http.put<Ville>(this.apiURL, v, httpOptions);
            }

         
         
       listePays():Observable<PaysWrapper>{
            return this.http.get<PaysWrapper>(this.apiURLCat);
            }     

  rechercherParPays(idp: number): Observable<Ville[]> {
    const url = `${this.apiURL}/vp/${idp}`;
    return this.http.get<Ville[]>(url);
  } 

  rechercherParNom(nom: string):Observable< Ville[]> {
    const url = `${this.apiURL}/vByName/${nom}`;
    return this.http.get<Ville[]>(url);
    }

 
}
