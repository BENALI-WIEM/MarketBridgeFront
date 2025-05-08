import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  infosCarte = {
    numero: '',
    nom: '',
    exp: '',
    cvc: ''
  };

  loading = false;
  etatPaiement: 'success' | 'error' | null = null;

  
  // Expressions régulières de validation
  private expPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  private cvcPattern = /^[0-9]{3}$/;

  simulerPaiement() {
    const numeroNettoye = this.infosCarte.numero.trim().replace(/\s+/g, ' '); // remplace plusieurs espaces par un seul
  
    if (
      numeroNettoye !== '4242424242424242' ||
      !this.infosCarte.nom.trim() ||
      !this.expPattern.test(this.infosCarte.exp.trim()) ||
      !this.cvcPattern.test(this.infosCarte.cvc.trim())
    ) {
      this.etatPaiement = 'error';
      return;
    }
  
    this.loading = true;
  
    setTimeout(() => {
      this.loading = false;
      if (numeroNettoye === '4242424242424242') {
        this.etatPaiement = 'success';
        this.telechargerContenu();
      } else {
        this.etatPaiement = 'error';
      }
    }, 2500);
  }
  
  reset() {
    this.etatPaiement = null;
    this.infosCarte = {
      numero: '',
      nom: '',
      exp: '',
      cvc: ''
    };
  }

  telechargerContenu() {
    // Contenu à télécharger (ajout de texte personnalisé)
    const contenu = `🎉 Contenu Premium débloqué ! Merci pour votre achat.\n\nAccédez à votre contenu via le lien suivant :\n\nhttps://drive.google.com/yourfilelink`;
  
    // Création du Blob pour télécharger le contenu en fichier texte
    const blob = new Blob([contenu], { type: 'text/plain' });
  
    // Création d'un lien pour télécharger le fichier
    const url = URL.createObjectURL(blob);
    const lien = document.createElement('a');
    lien.href = url;
    lien.download = 'contenu-premium.txt';
  
    // Clic sur le lien pour démarrer le téléchargement
    lien.click();
  
    // Libération de l'URL une fois le téléchargement effectué
    URL.revokeObjectURL(url);
  }

  
}