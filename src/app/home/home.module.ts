import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { CreateTaskModule } from '../create-task/create-task.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
})
export class HomeModule {}
