import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Step } from "./step/step";
import { Listlogos } from "./listlogos/listlogos";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Step, Listlogos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'OmniFoodApp';
}
