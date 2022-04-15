import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forms-spa-test';

  layout: number = 1;

  elements: any[] = [];

  constructor(private formService:FormService) {

 
  }
  ngOnInit(): void {

    this.elements = [
      {},
      {},
      {}
    ]

    this.formService.getFormHtml().subscribe((v) => console.log(v));
  }

  setLayout(id: number) {
    this.layout = id;
  }
}
