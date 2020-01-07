import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDatabase } from './in-memory-database';
import { ErrorHandlerService } from './core/service/error-handler/error-handler.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LoadingBarModule,
		LoadingBarRouterModule,
		HttpClientModule,

		HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
	],
	providers: [
		{ provide: ErrorHandler, useClass: ErrorHandlerService, },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
