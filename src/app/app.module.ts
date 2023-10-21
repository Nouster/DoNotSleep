import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateTaskModule } from './create-task/create-task.module';
import { DisplayTaskModule } from './display-task/display-task.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateTaskModule,
    DisplayTaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
