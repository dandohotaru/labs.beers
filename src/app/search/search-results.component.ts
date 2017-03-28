import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  term: string;
  beers: number;
  breweries: number;

  constructor(private router: Router, private route: ActivatedRoute){ 
  }

  ngOnInit() {
  }
  
}
