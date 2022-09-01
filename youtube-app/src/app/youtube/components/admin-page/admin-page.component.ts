import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroup, FormGroupDirective, Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  adminFormGroup!: FormGroup<{
    titleInput: FormControl<string | null>;
    descriptionInput: FormControl<string | null>;
    imgInput: FormControl<string | null>;
    videoInput: FormControl<string | null>;
    creationDateInput: FormControl<string | null>; }>;

  REG: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.adminFormGroup = new FormGroup({
      titleInput: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
      ]),
      descriptionInput: new FormControl(
        '',
        Validators.maxLength(255),
      ),
      imgInput: new FormControl('', [
        Validators.required,
        Validators.pattern(this.REG),
      ]),
      videoInput: new FormControl('', [
        Validators.required,
        Validators.pattern(this.REG),
      ]),
      creationDateInput: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onSubmitAdminForm(form: FormGroupDirective) {
    return this.http.post('/admin', form.value);
  }

  get title() {
    return this.adminFormGroup.get('titleInput');
  }

  get description() {
    return this.adminFormGroup.get('descriptionInput');
  }

  get imageUrl() {
    return this.adminFormGroup.get('imgInput');
  }

  get videoUrl() {
    return this.adminFormGroup.get('videoInput');
  }

  get date() {
    return this.adminFormGroup.get('creationDateInput');
  }
}
