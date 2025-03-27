import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionarEditarUsuarioComponent } from './components/adicionar-editar-usuario/adicionar-editar-usuario.component'; // Importando o componente AdicionarEditarUsuario
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component'; // Importando o componente ListUsuarios
import { MatToolbarModule } from '@angular/material/toolbar';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdicionarEditarUsuarioComponent, ListUsuariosComponent,MatToolbarModule], // Adicionando os componentes Standalone
  templateUrl: './app.component.html', // Usando o template no arquivo HTML separado
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-barbershop';
}
