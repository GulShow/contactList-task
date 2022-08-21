import { Component, Output } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})



export class DirectoryComponent {

  // @Output() contactInput;

  constructor(public contactService: ContactService) { }

}
