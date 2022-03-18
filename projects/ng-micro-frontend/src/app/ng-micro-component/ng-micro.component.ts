import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-micro',
  templateUrl: './ng-micro.component.html',
  styleUrls: ['./ng-micro.component.scss']
})
export class NgMicroComponent {
  @Input() authToken: string = '';

  @Input() backendUrl: string = '';
}
