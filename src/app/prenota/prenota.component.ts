import { Component } from '@angular/core';
import { JsonService } from '../services/json.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.scss']
})
export class PrenotaComponent {
    dataPartenza: Date = new Date();
    dataRitorno: Date = new Date();
    numeroPersone: number = 1;

    constructor(private jsonService: JsonService, private router: Router) {}

    ngOnInit(): void {
    }

    prenotaViaggio() {
        const payload = {
          dataPartenza: this.dataPartenza,
          dataRitorno: this.dataRitorno,
          numeroPersone: this.numeroPersone
        };

        this.jsonService.prenotaViaggio(payload, 'idGastronomiaDesiderato').subscribe(
          (response) => {
            console.log('Prenotazione di viaggio effettuata:', response);
            this.router.navigate(['/pagamento']);
            alert("Prenotazione effettuata con successo!");
          },
          (error) => {
            console.error('Errore nella prenotazione:', error);
          }
        );
    }
}
