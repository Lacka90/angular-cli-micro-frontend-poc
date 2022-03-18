import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-other-micro',
  templateUrl: './ng-other-micro.component.html',
  styleUrls: ['./ng-other-micro.component.scss']
})
export class NgOtherMicroComponent {
  @Input() authToken: string = '';

  @Input() backendUrl: string = '';
}
