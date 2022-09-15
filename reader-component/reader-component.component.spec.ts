import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderComponentComponent } from './reader-component.component';

describe('ReaderComponentComponent', () => {
  let component: ReaderComponentComponent;
  let fixture: ComponentFixture<ReaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
