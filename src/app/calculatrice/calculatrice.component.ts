import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  input: string = ''

  numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  operators: string[] = ['+', '-', '*', '/'];

  /**
   * Permet de calculer le résultat
   * @param input Chaine de caractère à calculer
   * @returns résultat du calcul
   */
  public calculate(input: string): number {
    return this.input = eval(input)
  }

  /**
   * Efface la chaine de caractère
   */
  public clear(): void {
    this.input = ''
  }

  /**
   * Permet d'ajouter un caractère à l'input
   * @param input Chaine de caractère à ajouter
   */
  public add(input: string): void {
    this.input += input
  }
}
