import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Step } from "./step/step";
import { Listlogos } from "./listlogos/listlogos";
import { Mealscard } from "./mealscard/mealscard";

import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  imports: [IonIcon, Header, Hero, Step, Listlogos, Mealscard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'OmniFoodApp';

}
