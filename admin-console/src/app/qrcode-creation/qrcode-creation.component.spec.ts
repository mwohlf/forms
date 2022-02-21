import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeCreationComponent } from './qrcode-creation.component';

describe('QrcodeCreationComponent', () => {
  let component: QrcodeCreationComponent;
  let fixture: ComponentFixture<QrcodeCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
