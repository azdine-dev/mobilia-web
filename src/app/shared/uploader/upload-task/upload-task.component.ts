import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css'],
})
export class UploadTaskComponent {
  @Input() file!: File;
  @Output() fileRemoved = new EventEmitter<File>();
  @Output() uploadCompleted = new EventEmitter<string>();

  task!: AngularFireUploadTask;
  percentage!: Observable<number | undefined>;
  downloadURL!: string;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.extractImageUrl();
  }

  extractImageUrl() {
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
  }

  startUpload() {
    const path = `mobilia-bus/${Date.now()}_${this.file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges();

    this.task
      .snapshotChanges()
      .pipe(
        catchError((error) => {
          console.error('Error occurred during upload:', error);
          // Handle error as needed
          return of('');
        }),
        finalize(() => {
          ref.getDownloadURL().subscribe((url) => {
            this.downloadURL = url;
            this.uploadCompleted.emit(this.downloadURL);
          });
        })
      )
      .subscribe();
  }

  isActive(snapshot: any) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }

  removeFile() {
    this.fileRemoved.emit(this.file);
  }
}
