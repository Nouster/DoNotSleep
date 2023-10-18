import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskFormComponent } from './create-task/create-task-form/create-task-form.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTaskFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
