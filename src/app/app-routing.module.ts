import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { InformationComponent } from './pages/information/information.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { BackupComponent } from './pages/backup/backup.component';
import { SettingComponent } from './pages/setting/setting.component';
import { RecomnendedComponent } from './pages/recomnended/recomnended.component';
import { AboutComponent } from './pages/about/about.component';
import { UpdateComponent } from './pages/update/update.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'information', component: InformationComponent},
      { path: 'transfer', component: TransferComponent},
      { path: 'backup', component: BackupComponent},
      { path: 'setting', component: SettingComponent},
      { path: 'recommended', component: RecomnendedComponent},
      { path: 'about', component: AboutComponent},
      { path: 'update', component: UpdateComponent},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
