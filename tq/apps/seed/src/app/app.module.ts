import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@tq/ui';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountModule } from './account/account.module';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'dashboard' 
  }
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule, UiModule, DashboardModule, AccountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
