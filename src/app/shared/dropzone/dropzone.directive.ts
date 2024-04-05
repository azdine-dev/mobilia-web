import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dropzone]',
  standalone: true,
})
export class DropzoneDirective {
  @Output() dropped = new EventEmitter<EventTarget>();
  @Output() hovered = new EventEmitter<boolean>();

  @HostListener('drop', ['$event'])
  onDrop($event: any) {
    $event.preventDefault();
    this.dropped.emit($event.files.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event: any) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event: any) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
