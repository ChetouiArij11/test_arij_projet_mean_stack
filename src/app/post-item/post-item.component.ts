import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() id !:string;
  @Input() title !:string;
  @Input() contenu !:string;
  @Input() index !:number;

}
