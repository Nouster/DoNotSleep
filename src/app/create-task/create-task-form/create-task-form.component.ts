import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css'],
})
export class CreateTaskFormComponent {
  createTask = this.fb.group({
    newTask: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  addTask() {
    if (this.createTask.invalid) {
      console.error('missing field');
    }
    console.log('success');
  }
}
