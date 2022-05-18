import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatriceService {


  numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  operators: string[] = ['+', '-', '*', '/'];
  input: string = '';

  constructor() { }

    /**
   * Permet de calculer le résultat
   * @returns résultat du calcul
   */
     public calculate(): void {
      this.checkIntegrity(this.input);
      this.input = eval(this.input);
      console.log(this.input);
    }

    /**
     * Efface la chaine de caractère
     */
    public clear(): void {
      this.input = '';
    }

    /**
     * Permet d'ajouter un caractère à l'input
     * @param input Chaine de caractère à ajouter
     */
    public add(input: string): void {
      this.input += input;
      console.log(this.input);
    }

    private checkIntegrity(input: string): void {
      this.chekDotNumber(input);
    }

    private chekDotNumber(input: string): void {
      if (input.includes('..')) {
        throw new Error('Nombre invalide');
      } else {
        this.input = this.input;
      }
    }
}
