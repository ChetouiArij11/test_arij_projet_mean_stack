import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/postApi';
  Posts:any;
  constructor(private http: HttpClient) {
    this.chargerListPost().subscribe((listPost) => {
      console.log(listPost);
    });

  }

  chargerListPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/postApi');
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  addpost(p: Post): Observable<Post[]> {
    return this.http.post<Post[]>(this.url, p);
  }
  getpostbyId(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + id);
  }
  updatepost(p: Post): Observable<any> {
    return this.http.put<any>(this.url + p.id, p);
  }
  deletepost(id:string): Observable<any> {
    return this.http.delete<any>(this.url +id);
  }
}
