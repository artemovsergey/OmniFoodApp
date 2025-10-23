import { Component, Input } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-mealscard',
  imports: [IonIcon],
  templateUrl: './mealscard.html',
  styleUrl: './mealscard.scss'
})

export class Mealscard {
  @Input() mealImage: string = '';
  @Input() mealTitle: string = '';
  @Input() mealCategory: string = '';
  @Input() mealDetails: string[] = [];
}
