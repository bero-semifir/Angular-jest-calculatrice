import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatriceComponent } from './calculatrice.component';

describe('CalculatriceComponent', () => {
  let component: CalculatriceComponent;
  let fixture: ComponentFixture<CalculatriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Quand je fais une addition', () => {
    it("J'obtiens le résultat de l'addition", () => {
      expect(component.calculate('2+2')).toBe(4)
    })
  })

  describe('Quand je presse une touche', ()=> {
    it('J\'ajoute le chiffre à la chaine de caractères', () => {
      component.add('2')
      expect(component.input).toBe('2')
    })
    it("J'ajoute l'opérateur à la chaine de caractère", () => {
      component.add('+')
      expect(component.input).toBe('+')
    })
  })
});
