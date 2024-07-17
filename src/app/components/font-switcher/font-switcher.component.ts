import { Component } from '@angular/core';

@Component({
  selector: 'app-font-switcher',
  standalone: true,
  imports: [],
  templateUrl: './font-switcher.component.html',
  styleUrl: './font-switcher.component.sass',
})
export class FontSwitcherComponent {
  fonts: string[] = ['Sans Serif', 'Serif', 'Mono'];
  currentFont = this.fonts[0];
  isOpened = false;

  toggleSwitcher() {
    this.isOpened ? (this.isOpened = false) : (this.isOpened = true);
  }

  changeFont(event: any) {
    this.currentFont = event.target.innerText;
  }
}
