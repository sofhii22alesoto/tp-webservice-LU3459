import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { PortalNoticiasComponent } from './components/portal-noticias/portal-noticias.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CotizacionComponent,
    PortalNoticiasComponent,
    HoroscopoComponent,
    EstadisticaComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
