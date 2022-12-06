import { Component, VERSION } from '@angular/core';
import { CpItem } from './cp-item';
import { CpItemService } from './cp-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private cpItemService: CpItemService) {}

  ngOnInit(): void {
    this.getCpItems();
  }

  cpItems: CpItem[] = [];

  /* getCpItems(): void {
    this.cpItems = this.cpItemService.getCpItems();
  }*/

  getCpItems(): void {
    this.cpItemService
      .getCpItems()
      .subscribe((cpItems) => (this.cpItems = cpItems));
  }
}
