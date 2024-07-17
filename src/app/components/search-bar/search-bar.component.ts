import { ChangeDetectorRef, Component } from '@angular/core';
import { FontService } from '../../services/font.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.sass',
})
export class SearchBarComponent {
  constructor(
    private fontService: FontService,
    private cd: ChangeDetectorRef
  ) {}
  fontFamily = this.fontService.currentFont;

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
