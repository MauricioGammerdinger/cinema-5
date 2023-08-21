import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { FilmesComponent } from "./filmes/filmes.component";
import { MainComponent } from "./main/main.component";

export const ROUTES: Routes = [
    {path: '', component: MainComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'filmes/:id', component: FilmesComponent},
    {path: 'sobre', component: AboutComponent}
];