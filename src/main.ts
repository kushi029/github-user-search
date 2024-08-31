import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(HomeComponent, {
  providers: [provideHttpClient(), provideAnimationsAsync()],
}).catch((err) => console.error(err));
