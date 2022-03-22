import { Component, Input } from '@angular/core';

@Component({
  selector: 'tax-button',
  templateUrl: './tax-button.component.html',
  styleUrls: ['./tax-button.component.scss']
})
export class ButtonComponent {

  @Input() primary: boolean = false
  @Input() size: string = 'normal'
  @Input() label: string = ''

}
