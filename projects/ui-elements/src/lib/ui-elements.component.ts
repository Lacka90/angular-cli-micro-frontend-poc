import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-elements',
  template: `
    <p>
      ui-elements works! Data: {{ data }}
    </p>
  `,
  styles: [
  ]
})
export class UiElementsComponent  {
@Input() data = ''
}
