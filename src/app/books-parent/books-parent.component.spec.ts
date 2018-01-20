import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksParentComponent } from './books-parent.component';

describe('BooksParentComponent', () => {
  let component: BooksParentComponent;
  let fixture: ComponentFixture<BooksParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
