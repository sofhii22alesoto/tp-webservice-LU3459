import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { PortalNoticiasComponent } from './components/portal-noticias/portal-noticias.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';



const routes: Routes = [
  {path: 'home',component : HomeComponent},
  {path: 'cotizacion',component: CotizacionComponent},
  {path: 'portal',component: PortalNoticiasComponent },
  {path :'signo', component: HoroscopoComponent},
  {path : 'covid',component: EstadisticaComponent},
 
  { path: '**', pathMatch:'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
