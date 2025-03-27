import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEditarUsuarioComponent } from './adicionar-editar-usuario.component';

describe('AdicionarEditarUsuarioComponent', () => {
  let component: AdicionarEditarUsuarioComponent;
  let fixture: ComponentFixture<AdicionarEditarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarEditarUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarEditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
