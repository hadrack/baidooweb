import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import { PostserviceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  postId: string; // Declare postId as a string
  postData: any;
  commentForm!: FormGroup;

  constructor(
    private postService: PostserviceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matsnackBar: MatSnackBar,
    private fb: FormBuilder,
    private commentService: CommentService
  ) {
    // Initialize postId in the constructor
    this.postId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    console.log(this.postId);
    this.getPostById(); // Fetch post data by ID

    // Initialize comment form
    this.commentForm = this.fb.group({
      postedBy: [null, Validators.required],
      content: [null, Validators.required],
    });
  }

  publishComment() {
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.createComment(this.postId, postedBy, content).subscribe((response) => {
      // Handle success response if needed
    }, error => {
      this.matsnackBar.open('Something went wrong, please try again.', 'Close');
    }); // Added closing parenthesis
  }

  getPostById() {
    this.postService.getPostById(this.postId).subscribe(res => {
      this.postData = res;
      console.log(res);
    }, error => {
      this.matsnackBar.open("Something went wrong", "Close", {
        duration: 3000
      });
    });
  }

  likePost() {
    this.postService.likePost(this.postId).subscribe(response => {
      this.matsnackBar.open("Post liked successfully", "Close", {
        duration: 3000
      });
      this.getPostById(); // Refresh post data after liking
    }, (error: any) => {
      this.matsnackBar.open("Something went wrong!", "Close", {
        duration: 3000
      });
    });
  }
}