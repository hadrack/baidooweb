
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  private BASIC_URL = 'https://example.com/'; // Replace with your API URL backend

  constructor(private http: HttpClient) { }

  creatNewPost(data: any): Observable<any> {
    return this.http.post(`${this.BASIC_URL}api/post`, data);
  }

  // get  post from  postman api
  getAllPost(data: any): Observable<any> {
    return this.http.get(`${this.BASIC_URL}api/post`)}


  // get  post by id
  getPostById(postid:number): Observable<any> {
    return this.http.get(`${this.BASIC_URL}api/post/${postid}`)}

//postlike method
    likePost(postid:number): Observable<any> {
      return this.http.put(`${this.BASIC_URL}api/post/${postid}`,{})}



  }  
