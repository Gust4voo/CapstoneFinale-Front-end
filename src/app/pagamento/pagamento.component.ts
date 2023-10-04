import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent {

  constructor(private router: Router) { }

  processPayment() {

    const paymentSuccess = true;

    if (paymentSuccess) {
      console.log('Pagamento effettuato con successo');
      alert('Pagamento effettuato con successo');
      this.router.navigate(['']);
    } else {
      console.error('Errore durante il pagamento');
      alert('Errore durante il pagamento');
      this.router.navigate(['/checkout']);
    }
  }
}
