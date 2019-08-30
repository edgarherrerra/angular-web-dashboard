import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  todo;
  constructor(private todoService: TodoService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.todoService.getTodo(this.route.snapshot.params['id']).subscribe(res => {
      this.todo = res
    });
  }

  editTodo(form): void {
    this.todoService.editTodo(form.value, this.route.snapshot.params['id']).subscribe(res => {
      this.router.navigateByUrl('/dashboard');
    });
  }

}
