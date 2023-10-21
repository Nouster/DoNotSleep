import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskFormComponent } from './create-task/create-task-form/create-task-form.component';
import { DisplayTaskComponent } from './display-task/display-task/display-task.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTaskFormComponent,
  },
  {
    path: 'task-list',
    component: DisplayTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
