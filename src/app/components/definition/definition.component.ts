import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import Definition from '../../interfaces/definition-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-definition',
  standalone: true,
  imports: [],
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.sass',
})
export class DefinitionComponent {
  constructor(private dataService: DataService, private http: HttpClient) {}

  currentWord = 'keyboard';
  currentDefinition: Definition[] = [];
  phonetics: string[] = [];

  ngOnInit() {
    this.getCurrentWordDefinition();
  }

  getCurrentWordDefinition() {
    this.dataService
      .fetchData(this.currentWord)
      .subscribe((definition: Definition[]) => {
        this.currentDefinition = definition;
        this.currentDefinition[0].phonetics.forEach((phonetic) =>
          this.phonetics.push(phonetic.audio)
        );
      });
  }

  playAudio() {
    if (this.phonetics.length > 0) {
      this.phonetics.forEach((sound) => {
        let audio = new Audio(sound);
        audio.play();
      });
    }
  }
}
