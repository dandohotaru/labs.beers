import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public search(term: string){
    console.log(term);
  }

}
