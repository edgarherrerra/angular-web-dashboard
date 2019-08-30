import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  model: any = {};
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  newTodo(form): void {
    this.todoService.newTodo(form.value).subscribe(res => {
      this.router.navigateByUrl('/dashboard');
    });
  }
}
