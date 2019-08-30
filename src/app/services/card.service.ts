import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  SERVER: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  newCard(card: Card) {
    return this.httpClient.post(`${this.SERVER}/card/new`, card, {
      withCredentials: true
    })
  }

  getCard(id) {
    return this.httpClient.get(`${this.SERVER}/card/${id}`, {
      withCredentials: true
    })
  }

  editCard(card: Card, id) {
    return this.httpClient.post(`${this.SERVER}/card/update/${id}`, card, {
      withCredentials: true
    })
  }

}