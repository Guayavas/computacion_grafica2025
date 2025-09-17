import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMheaderComponent } from './cmheader.component';

describe('CMheaderComponent', () => {
  let component: CMheaderComponent;
  let fixture: ComponentFixture<CMheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CMheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
