import { Component } from '@angular/core';
import { FontSwitcherComponent } from '../font-switcher/font-switcher.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontSwitcherComponent, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {}
