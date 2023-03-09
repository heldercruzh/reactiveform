import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('randomIntFromInterval(1, 9) - should generate number less than ten', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.randomIntFromInterval(1, 9)).toBeLessThan(10);
  });

  it('randomIntFromInterval(1, 9) - should generate number greater than zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.randomIntFromInterval(1, 9)).toBeGreaterThan(0);
  });

});
