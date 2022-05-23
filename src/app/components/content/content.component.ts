import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  level: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.level = this.route.snapshot.paramMap.get('level');
  }
}
