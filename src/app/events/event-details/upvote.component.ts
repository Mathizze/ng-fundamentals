import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'upvote',
  styleUrls: ['./upvote.component.css'],
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
          <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
        </div>
        <div clas="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `
})

export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.vote.emit({});
  }
}
