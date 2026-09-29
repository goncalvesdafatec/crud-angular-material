import { Component } from '@angular/core';
import {FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule} from '@angular/material/card'
import { FormsModule} from '@angular/forms'


@Component({
  selector: 'app-consulta',
  imports: [FlexLayoutModule, MatCardModule, FormsModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {

}
