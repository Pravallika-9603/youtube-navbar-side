import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Channel3Component } from './channel3.component';

describe('Channel3Component', () => {
  let component: Channel3Component;
  let fixture: ComponentFixture<Channel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Channel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Channel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
