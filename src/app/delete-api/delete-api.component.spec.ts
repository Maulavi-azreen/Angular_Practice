import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAPIComponent } from './delete-api.component';

describe('DeleteAPIComponent', () => {
  let component: DeleteAPIComponent;
  let fixture: ComponentFixture<DeleteAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
