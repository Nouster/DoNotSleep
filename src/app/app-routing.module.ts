import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskFormComponent } from './create-task/create-task-form/create-task-form.component';
import { DisplayTaskComponent } from './display-task/display-task/display-task.component';
import { TaskManagerComponent } from './task-manager/task-manager/task-manager.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'create',
    component: CreateTaskFormComponent,
  },
  {
    path: 'task-list',
    component: DisplayTaskComponent,
  },
  { path: 'task-manager', component: TaskManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
