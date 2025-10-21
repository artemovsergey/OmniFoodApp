import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  imports: [],
  templateUrl: './step.html',
  styleUrl: './step.scss',
})
export class Step {
  @Input() stepNumber: String = '';
  @Input() stepImg: String = '';
  @Input() stepImgAlt: String = '';
  @Input() reverse: Boolean = false;
}
