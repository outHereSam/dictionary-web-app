import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme: boolean = false;

  constructor() {
    const savedTheme = localStorage.getItem('dark-theme');
    this.darkTheme = savedTheme === 'true';
    this.applyTheme();
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    localStorage.setItem('dark-theme', this.darkTheme.toString());
    this.applyTheme();
  }

  private applyTheme() {
    if (this.darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
