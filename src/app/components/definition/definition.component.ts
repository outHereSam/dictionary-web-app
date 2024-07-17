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

  ngOnInit() {
    this.getCurrentWordDefinition();
  }

  getCurrentWordDefinition() {
    this.dataService
      .fetchData(this.currentWord)
      .subscribe(
        (definition: Definition[]) => (this.currentDefinition = definition)
      );
  }
}
