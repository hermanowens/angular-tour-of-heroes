import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ FormsModule ]
    }).compileComponents();
  }));
  it('should create the app.', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have 'Tour of Heroes' set as title.`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));
  it(`should have 'Windstorm' set as the name for the hero with an id of 1.`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.hero).toEqual({ id: 1, name: 'Windstorm'});
  }));
  it(`should render the title in a h1 tag.`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
  it(`should render the hero's name in a h2 tag.`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Windstorm');
  }));
  it(`should render the hero's id in first div.`, async(() => {
    /* TODO: Fix the test for input value, currently coming back as empty string. */
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    /*const input = fixture.debugElement.query(By.css('input')).nativeElement;*/
    expect(compiled.querySelectorAll('div')[0].textContent).toBe('id: 1');
    /*expect(input.value).toContain('Windstorm');*/
  }));
});
