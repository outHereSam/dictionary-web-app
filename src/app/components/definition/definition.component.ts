import { ChangeDetectorRef, Component } from '@angular/core';
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
  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef
  ) {}

  currentWord = '';
  currentDefinition: Definition[] = [];
  phonetics: string[] = [];

  ngOnInit() {
    this.getCurrentWordDefinition();
    this.currentWord = this.dataService.currentWord;
  }

  ngDoCheck() {
    if (this.currentWord !== this.dataService.currentWord) {
      this.currentWord = this.dataService.currentWord;
      this.getCurrentWordDefinition();
      this.cd.detectChanges();
    }
  }

  getCurrentWordDefinition() {
    this.dataService
      .fetchData(this.currentWord)
      ?.subscribe((definition: Definition[]) => {
        this.currentDefinition = definition;
      });
  }

  playAudio() {
    console.log(this.currentDefinition[0].phonetics);

    this.currentDefinition[0].phonetics.forEach((sound) => {
      if (sound.audio !== '') {
        this.phonetics.push(sound.audio);
      }
      let audio = new Audio(this.phonetics[0]);

      audio.play();
    });
    this.phonetics = [];
  }
}