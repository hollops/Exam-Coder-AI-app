import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GeminiService } from './services/gemini.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  private fb = inject(FormBuilder);
  public geminiService = inject(GeminiService);

  public configForm: FormGroup = this.fb.group({
    apiKey: ['', Validators.required]
  });

  public examForm: FormGroup = this.fb.group({
    notes: ['', Validators.required],
    pastQuestions: ['', Validators.required]
  });

  public isLoading = this.geminiService.isLoading;
  public error = this.geminiService.error;
  public results = this.geminiService.examResults;

  public isConfigured = false;

  saveConfig() {
    if (this.configForm.valid) {
      this.geminiService.initialize(this.configForm.value.apiKey);
      this.isConfigured = true;
    }
  }

  generateExam() {
    if (this.examForm.valid && this.isConfigured) {
      const { notes, pastQuestions } = this.examForm.value;
      this.geminiService.generateExam(notes, pastQuestions);
    }
  }
}
