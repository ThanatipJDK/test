import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { ErrorComponent } from './pages/error/error.component';


import { AntDesignModule } from './modules/ant-design/ant-design.module';
import { LayoutComponent } from './pages/layout/layout.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InformationComponent } from './pages/information/information.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { BackupComponent } from './pages/backup/backup.component';
import { SettingComponent } from './pages/setting/setting.component';
import { RecomnendedComponent } from './pages/recomnended/recomnended.component';
import { AboutComponent } from './pages/about/about.component';
import { UpdateComponent } from './pages/update/update.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    LayoutComponent,
    SidebarComponent,
    InformationComponent,
    TransferComponent,
    BackupComponent,
    SettingComponent,
    RecomnendedComponent,
    AboutComponent,
    UpdateComponent,
   
    // ChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntDesignModule,
    // ChartComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
