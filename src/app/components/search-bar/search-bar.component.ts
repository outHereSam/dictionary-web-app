import { ChangeDetectorRef, Component } from '@angular/core';
import { FontService } from '../../services/font.service';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.sass',
})
export class SearchBarComponent {
  constructor(
    private fontService: FontService,
    private dataService: DataService,
    private cd: ChangeDetectorRef
  ) {}
  fontFamily = this.fontService.currentFont;
  searchWord = '';

  ngOnInit() {
    this.fontFamily = this.fontService.currentFont;
  }

  ngDoCheck() {
    if (this.fontFamily !== this.fontService.currentFont) {
      this.fontFamily = this.fontService.currentFont;
      this.cd.detectChanges();
    }
  }

  setSearchWord() {
    if (this.searchWord) {
      this.dataService.currentWord = this.searchWord;
      this.dataService.fetchData(this.searchWord);
    }
  }
}
