import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-add-metal-form',
  templateUrl: './add-metal-form.component.html',
  styleUrls: ['./add-metal-form.component.scss']
})
export class AddMetalFormComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
