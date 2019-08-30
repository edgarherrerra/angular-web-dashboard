import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardRoutingModule } from './card-routing.module'
import { CardService } from '../services/card.service';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [NewComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CardRoutingModule
  ],
  providers: [CardService]
})
export class CardModule { }
