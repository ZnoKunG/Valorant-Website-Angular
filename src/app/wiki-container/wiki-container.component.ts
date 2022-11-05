import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wiki-container',
  templateUrl: './wiki-container.component.html',
  styleUrls: ['./wiki-container.component.scss'],
})
export class WikiContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
