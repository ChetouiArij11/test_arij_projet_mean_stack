import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts=[
    new Post('455','title1','le contenu de 1ere article '),
    new Post('458','title2','le contenu de 2eme article '),
    new Post('522','title3','le contenu de 3eme article '),
    new Post('544','title4','le contenu de 4eme article '),
  ];
  constructor(private http: HttpClient) {
    this.chargerListPost().subscribe((listApp) => {
      console.log(listApp);
    });
  }

  chargerListPost() : Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:3000/postApi');
  }
}
