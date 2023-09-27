import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LavoraConNoiComponent } from './lavora-con-noi/lavora-con-noi.component';
import { RimborsoComponent } from './rimborso/rimborso.component';
import { ContattiComponent } from './contatti/contatti.component';
import { RitardiECancellazioneComponent } from './ritardi-ecancellazione/ritardi-ecancellazione.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrasileComponent } from './paesi/brasile/brasile.component';
import { ItaliaComponent } from './paesi/italia/italia.component';
import { FranciaComponent } from './paesi/francia/francia.component';
import { StatiunitiComponent } from './paesi/statiuniti/statiuniti.component';
import { PortogalloComponent } from './paesi/portogallo/portogallo.component';
import { RegnounitoComponent } from './paesi/regnounito/regnounito.component';
import { CubaComponent } from './paesi/cuba/cuba.component';
import { EgittoComponent } from './paesi/egitto/egitto.component';
import { GiordaniaComponent } from './paesi/giordania/giordania.component';
import { GreciaComponent } from './paesi/grecia/grecia.component';
import { KenyaComponent } from './paesi/kenya/kenya.component';
import { MaldiveComponent } from './paesi/maldive/maldive.component';
import { MaroccoComponent } from './paesi/marocco/marocco.component';
import { MessicoComponent } from './paesi/messico/messico.component';
import { SpagnaComponent } from './paesi/spagna/spagna.component';
import { TunisiaComponent } from './paesi/tunisia/tunisia.component';
import { CanadaComponent } from './paesi/canada/canada.component';
import { PrenotaComponent } from './prenota/prenota.component';
import { Login2Component } from './auth/login2/login2.component';
import { HttpClientModule } from '@angular/common/http';
import { BagaglioComponent } from './bagaglio/bagaglio.component';
import { SpecialiComponent } from './speciali/speciali.component';





const rotte: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    component: FooterComponent
  },
  {
    path: 'lavora',
    component: LavoraConNoiComponent
  },
  {
    path: 'rimborso',
    component: RimborsoComponent
  },
  {
    path: 'ritardi',
    component: RitardiECancellazioneComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
  },
  {
    path: 'siamo',
    component: ChiSiamoComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'pagamento',
    component: PagamentoComponent
  },
  {
    path: 'brasile',
    component: BrasileComponent
  },
  {
    path: 'francia',
    component: FranciaComponent
  },
  {
    path: 'italia',
    component: ItaliaComponent
  },
  {
    path: 'portogallo',
    component: PortogalloComponent
  },
  {
    path: 'regnounito',
    component: RegnounitoComponent
  },
  {
    path: 'statiuniti',
    component: StatiunitiComponent
  },
  {
    path: 'cuba',
    component: CubaComponent
  },
  {
    path: 'egitto',
    component: EgittoComponent
  },
  {
    path: 'giordania',
    component: GiordaniaComponent
  },
  {
    path: 'grecia',
    component: GreciaComponent
  },
  {
    path: 'kenya',
    component: KenyaComponent
  },
  {
    path: 'maldive',
    component: MaldiveComponent
  },
  {
    path: 'marocco',
    component: MaroccoComponent
  },
  {
    path: 'messico',
    component: MessicoComponent
  },
  {
    path: 'spagna',
    component: SpagnaComponent
  },
  {
    path: 'tunisia',
    component: TunisiaComponent
  },
  {
    path: 'prenota',
    component: PrenotaComponent
  },
  {
    path: 'login2',
    component: Login2Component
  },
  {
    path: 'canada',
    component: CanadaComponent
  },
  {
    path: 'bagaglio',
    component: BagaglioComponent
  },
  {
    path: 'speciali',
    component: SpecialiComponent
  },


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LavoraConNoiComponent,
    RimborsoComponent,
    ContattiComponent,
    RitardiECancellazioneComponent,
    PagamentoComponent,
    ChiSiamoComponent,
    RegisterComponent,
    BrasileComponent,
    ItaliaComponent,
    FranciaComponent,
    StatiunitiComponent,
    PortogalloComponent,
    RegnounitoComponent,
    CubaComponent,
    EgittoComponent,
    GiordaniaComponent,
    GreciaComponent,
    KenyaComponent,
    MaldiveComponent,
    MaroccoComponent,
    MessicoComponent,
    SpagnaComponent,
    TunisiaComponent,
    CanadaComponent,
    PrenotaComponent,
    Login2Component,
    BagaglioComponent,
    SpecialiComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
