import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';



const pagesRoutes: Routes = [
    { path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
        { path: 'dashboard', component: DashboardComponent,
        data: { titulo: 'Dashboard', meta: {name: 'descripcion',
        content: 'Pagina principal donde se puede apreciar los valores' }} },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress',
        meta: {name: 'descripcion',
        content: 'Pagina donde se muestra el progresso de una barra' }} },
        { path: 'graficas1', component: Graficas1Component,
        data: { titulo: 'Graficas', meta: {name: 'descripcion',
        content: 'Pagina de graficas' }} },
        { path: 'account-settings', component: AccountSettingsComponent,
        data: { titulo: 'Configuracion', meta: {name: 'descripcion',
        content: 'Pagina de configuracion' }} },
        { path: 'promesas', component: PromesasComponent,
        data: { titulo: 'Promesas', meta: {name: 'descripcion',
        content: 'Pagina de promesas' }} },
        { path: 'rxjs', component: RxjsComponent,
        data: { titulo: 'Rxjs', meta: {name: 'descripcion',
        content: 'Pagina de observables' }} },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ] }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
