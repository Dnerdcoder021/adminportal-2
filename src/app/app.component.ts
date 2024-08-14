import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FixNavComponent } from './portal/fix-nav/fix-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-portal';
}
