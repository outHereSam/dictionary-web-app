import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  constructor() {}

  fonts: string[] = ['Sans Serif', 'Serif', 'Mono'];
  currentFont = this.fonts[0];

  changeFont(font: string) {
    this.currentFont = font;
  }
}
