import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eventphoto-markup';
  showSearch = false;
  languageMenuOpen = false;

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  toggleLanguageMenu(): void {
    this.languageMenuOpen = !this.languageMenuOpen;
  }
}
