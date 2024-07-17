import { Component, inject } from '@angular/core';
import { FontService } from '../../services/font.service';

@Component({
  selector: 'app-font-switcher',
  standalone: true,
  imports: [],
  templateUrl: './font-switcher.component.html',
  styleUrl: './font-switcher.component.sass',
})
export class FontSwitcherComponent {
  fontService = inject(FontService);
  isOpened = false;

  toggleSwitcher() {
    this.isOpened ? (this.isOpened = false) : (this.isOpened = true);
  }

  changeFont(event: any) {
    this.fontService.changeFont(event.target.innerText);
    this.isOpened = false;
  }
}
