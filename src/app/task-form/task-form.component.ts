import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = { id: 0, name: '' };
  isEdit = false;

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (this.isEdit) {
      this.taskService.editTask(this.task);
    } else {
      this.taskService.addTask(this.task);
    }
    this.task = { id: 0, name: '' }; // Reset the form
  }
}

