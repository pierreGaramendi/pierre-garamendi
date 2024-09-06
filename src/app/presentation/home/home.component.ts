import { Component } from '@angular/core';
import { StreamsbycontextComponent } from '../components/streamsbycontext/streamsbycontext.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StreamsbycontextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
