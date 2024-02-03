import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppareilsPage } from './appareils.page';

describe('AppareilsPage', () => {
  let component: AppareilsPage;
  let fixture: ComponentFixture<AppareilsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppareilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
