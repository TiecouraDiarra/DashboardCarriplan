import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { httpInterceptorProviders } from '@modules/_helpers/http.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { httpInterceptorProviders } from './_helpers/http.interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule { }
