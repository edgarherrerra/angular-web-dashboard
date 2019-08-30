import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  card;
  constructor(private cardService: CardService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.cardService.getCard(this.route.snapshot.params['id']).subscribe(res => {
      this.card = res
    });
  }

  editCard(form): void {
    this.cardService.editCard(form.value, this.route.snapshot.params['id']).subscribe(res => {
      this.router.navigateByUrl('/dashboard');
    });
  }

}
