import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { ClassDetailComponent } from './classes/class-detail/class-detail.component';
import { DataService } from './services/data-service.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'class-list', component: ClassListComponent },
  { path: 'class-detail', component: ClassDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    ClassListComponent,
    ClassDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
