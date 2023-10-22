import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { task } from 'src/app/interface/task-interface';
import { TaskService } from 'src/app/service/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css'],
})
export class CreateTaskFormComponent implements OnInit {
  createTask: FormGroup;
  tasks: task[] = [];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private toast: ToastrService
  ) {
    this.createTask = this.fb.group({
      newTask: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.createTask.invalid) {
      this.toast.error('Missing field');
    }

    if (this.createTask.valid) {
      const newTaskControl = this.createTask.get('newTask');

      if (newTaskControl) {
        const newTaskName = newTaskControl.value;
        this.taskService.addTask({ name: newTaskName, done: false });
        this.toast.success(
          `Your task "${newTaskControl.value}" was successfully added`
        );
        this.createTask.reset();
      } else {
        console.error('object is null');
      }
    }
  }
}
