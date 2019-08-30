import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  model: any = {};
  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit() {
  }

  newCard(form): void {
    this.cardService.newCard(form.value).subscribe(res => {
      this.router.navigateByUrl('/dashboard');
    });
  }
}
