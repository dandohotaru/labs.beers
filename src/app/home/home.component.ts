import { Component, OnInit } from '@angular/core';

import { ModalService } from "app/shared/components/modal/modal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  private bodyText: string;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.title = "Home";
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(modal: any) {
    this.modalService.open(modal);
  }

  closeModal(modal: any) {
    this.modalService.close(modal);
  }

  log(message: string){
    console.log(message);
  }

}
