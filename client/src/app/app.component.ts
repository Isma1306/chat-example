import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  messageInput = new FormControl('', Validators.required);

  submitHandler($event: SubmitEvent) {
    $event.preventDefault();
    if (!this.messageInput.errors?.['required']) {
      //send to API service
    }
    this.messageInput.reset();
  }
}
