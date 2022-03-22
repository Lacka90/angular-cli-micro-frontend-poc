import { Component, Input } from '@angular/core';

@Component({
  selector: 'tax-tax-button',
  templateUrl: './tax-button.component.html',
  styleUrls: ['./tax-button.component.scss']
})
export class TaxButtonComponent {

  @Input() primary: boolean = false
  @Input() size: string = 'normal'
  @Input() label: string = ''

}
