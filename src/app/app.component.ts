import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayTasksComponent } from './pages/display-tasks/display-tasks.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayTasksComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toDoList_angular';
}
