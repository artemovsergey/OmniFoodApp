import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Step } from "./step/step";
import { Listlogos } from "./listlogos/listlogos";
import { Mealscard } from "./mealscard/mealscard";

import { IonIcon } from "@ionic/angular/standalone";
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonIcon, Header, Hero, Step, Listlogos, Mealscard, Testimonials],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'OmniFoodApp';

}
