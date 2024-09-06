import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamsbycontextComponent } from './streamsbycontext.component';

describe('StreamsbycontextComponent', () => {
  let component: StreamsbycontextComponent;
  let fixture: ComponentFixture<StreamsbycontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamsbycontextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamsbycontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
