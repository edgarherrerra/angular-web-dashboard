import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  SERVER: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  newTodo(todo: Todo) {
    return this.httpClient.post(`${this.SERVER}/todo/new`, todo, {
      withCredentials: true
    })
  }

  getTodo(id) {
    return this.httpClient.get(`${this.SERVER}/todo/${id}`, {
      withCredentials: true
    })
  }

  editTodo(todo: Todo, id) {
    return this.httpClient.post(`${this.SERVER}/todo/update/${id}`, todo, {
      withCredentials: true
    })
  }

}