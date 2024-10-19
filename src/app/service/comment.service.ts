import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL="http://localhost:8080/";//link to backend commentservice

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private http:HttpClient) { }

createComment(postId:number,postedBy:String,content:string):Observable<any>{
  const params={
postId:postId,
postedBy:postedBy,



}
return this.http.post<any>(BASIC_URL+`api/comment/create`,content,[params]);
}

getAllCommentByPost(postId:number):Observable<any>{
  return this.http.get<any>(BASIC_URL+`api/comment/getall/${postId}`);
}








}
