import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-price-card',
  imports: [IonIcon, CommonModule],
  templateUrl: './price-card.html',
  styleUrl: './price-card.scss',
})

export class PriceCard {

  @Input() title: string = '';
  @Input() price: string = '';
  @Input() currency: string = '$';
  @Input() details: string = '';
  @Input() features: string[] = [];
  @Input() sale: boolean = false;

}
