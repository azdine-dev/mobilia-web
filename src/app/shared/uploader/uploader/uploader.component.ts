import {
  Component,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { UploadTaskComponent } from '../upload-task/upload-task.component';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrl: './uploader.component.css',
})
export class UploaderComponent {
  isHovering!: boolean;
  @ViewChildren(UploadTaskComponent)
  uploadTasks!: QueryList<UploadTaskComponent>;
  uploadedUrls: string[] = [];

  @Output() urlsReady = new EventEmitter<string[]>();

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload() {
    this.uploadTasks.forEach((task) => task.startUpload());
  }
  onDrop(eventTarget: EventTarget | null) {
    let files: FileList | null = (eventTarget as HTMLInputElement).files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.files.push(files.item(i)!);
      }
    }
  }

  onFileRemoved(removedFile: File) {
    this.files = this.files.filter((file) => file !== removedFile);
  }

  async onUploadCompleted(url: string) {
    this.uploadedUrls.push(url);
    if (this.uploadedUrls.length === this.files.length) {
      // All files have been uploaded, emit the urlsReady event
      this.urlsReady.emit(this.uploadedUrls);
    }
  }
}
