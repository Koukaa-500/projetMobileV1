import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleAppareilPage } from './single-appareil.page';

describe('SingleAppareilPage', () => {
  let component: SingleAppareilPage;
  let fixture: ComponentFixture<SingleAppareilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleAppareilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
