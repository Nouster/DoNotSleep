import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateTaskFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CreateTaskModule {}
