import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CategoriasService } from './categorias/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmeComponent } from './filmes/filme/filme.component';
import { FilmesService } from './filmes/filmes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    CategoriasComponent,
    CategoriaComponent,
    FilmesComponent,
    FilmeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [CategoriasService, FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
