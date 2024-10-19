import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostserviceService } from 'src/app/service/postservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent {
  allPost: any; // Declare allPost to store the posts

  constructor(private postService: PostserviceService, private snackbar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.postService.getAllPost(null).subscribe( // Pass null if no data is required
      (res: any) => { 
        console.log(res);
        this.allPost = res;
      },
      error => {
        this.snackbar.open("Something went wrong", 'OK');
      }
    );
  }
}