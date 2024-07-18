import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FontService } from './services/font.service';
import { DefinitionComponent } from './components/definition/definition.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchBarComponent,
    DefinitionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  fontService = inject(FontService);
  themeService = inject(ThemeService);
  title = 'dictionary-web-app';
  fontFamily = this.fontService.currentFont;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.fontFamily = this.fontService.currentFont;
  }

  ngDoCheck() {
    if (this.fontFamily !== this.fontService.currentFont) {
      this.fontFamily = this.fontService.currentFont;
      this.cd.detectChanges();
    }
  }
}
