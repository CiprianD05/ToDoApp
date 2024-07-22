import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  
})
export class FetchDataComponent {
  public toDoItems: ToDoItem[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ToDoItem[]>(baseUrl + 'todo').subscribe(result => {
      this.toDoItems = result;
    }, error => console.error(error));
  }

  toggleDone(toDo: ToDoItem) {
    toDo.done = !toDo.done;
  }

  deleteToDo(toDo: ToDoItem) {
    const index = this.toDoItems.indexOf(toDo);
    if (index > -1) {
      this.toDoItems.splice(index, 1);
    }
  }
}

interface ToDoItem {
  name: string;
  done: boolean;
}
