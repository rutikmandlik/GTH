import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import if using ngModel for forms

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent // Declare your components here
  ],
  imports: [
    BrowserModule,
    FormsModule // Include FormsModule if using forms
  ],
  providers: [TaskService], // Include your services here if needed
  bootstrap: [AppComponent]
})
export class AppModule {}
