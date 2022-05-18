import { CalculatriceService } from './../services/calculatrice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss'],
})
export class CalculatriceComponent implements OnInit{
  constructor(private calculatriceService: CalculatriceService) {}

  ngOnInit(): void {
    this.getInput();
    this.getNumbers();
    this.getOperators();
  }


  input: string = '';
  numbers: string[] = []
  operators: string[] = []

  private getInput(): void {
    this.input = this.calculatriceService.input;
  }

  private getNumbers(): void {
    this.numbers = this.calculatriceService.numbers;
  }

  private getOperators(): void {
    this.operators = this.calculatriceService.operators;
  }

  public calculate(): void {
    this.calculatriceService.calculate();
    this.getInput();
  }

  public clear(): void {
    this.calculatriceService.clear();
    this.getInput();
  }

  public add(input: string): void {
    this.calculatriceService.add(input);
    this.getInput();
  }
}
