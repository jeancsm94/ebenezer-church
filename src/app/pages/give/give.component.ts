import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-give',
  standalone: true,
  imports: [],
  templateUrl: './give.component.html',
  styleUrl: './give.component.scss'
})
export class GiveComponent {
  pixKey = '[EMAIL_ADDRESS]'; // CNPJ ou Chave PIX da Igreja
  copied = signal(false);

  copyPix() {
    navigator.clipboard.writeText(this.pixKey);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 3000);
  }
}