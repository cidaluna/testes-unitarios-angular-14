import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsTestsComponent } from './concepts-tests.component';

describe('ConceptsTestsComponent', () => {
  let component: ConceptsTestsComponent;
  let fixture: ComponentFixture<ConceptsTestsComponent>;
  let name: string;

  beforeEach(async () => {
    name = 'Cida';
    await TestBed.configureTestingModule({
      declarations: [ ConceptsTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptsTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create _______________ (toBeTruthy)', () => {
    expect(component).toBeTruthy();
  });

  it('should verify name value ____ (toContain)', () => {
    expect(name).toContain('Cida');
  });

});
