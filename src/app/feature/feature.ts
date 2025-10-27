import { Component, Input } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-feature',
  imports: [IonIcon],
  standalone: true,
  templateUrl: './feature.html',
  styleUrl: './feature.scss',
})
export class Feature {
  @Input() public description?: string
  @Input() public title: string = ''
  @Input() public iconName?: string
}
