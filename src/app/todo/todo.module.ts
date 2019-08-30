import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoRoutingModule } from './todo-routing.module'
import { TodoService } from '../services/todo.service';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [NewComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  providers: [TodoService]
})
export class TodoModule { }
