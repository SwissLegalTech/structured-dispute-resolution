import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbmComponent } from './tbm.component';

describe('TbmComponent', () => {
  let component: TbmComponent;
  let fixture: ComponentFixture<TbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
