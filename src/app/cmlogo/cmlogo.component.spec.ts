import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmlogoComponent } from './cmlogo.component';

describe('CmlogoComponent', () => {
  let component: CmlogoComponent;
  let fixture: ComponentFixture<CmlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmlogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
