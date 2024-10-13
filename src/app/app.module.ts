import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import if using ngModel
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task.service';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TaskListComponent, // Ensure this is declared
    TaskFormComponent  // Ensure this is declared
  ],
  imports: [
    BrowserModule,
    FormsModule // Include FormsModule if using forms
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
