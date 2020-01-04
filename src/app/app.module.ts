import * as Rollbar from 'rollbar';
import { BrowserModule } from '@angular/platform-browser'
import { Injectable, Injector, InjectionToken, NgModule, ErrorHandler, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDatabase } from './in-memory-database'

const rollbarConfig = {
	accessToken: '64b5691c436a4e3d880f70ad4459628b',
	captureUncaught: true,
	captureUnhandledRejections: true,
};

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
	constructor(@Inject(RollbarService) private rollbar: Rollbar) { }

	handleError(err: any): void {
		this.rollbar.error(err.originalError || err);
	}
}

export function rollbarFactory() {
	return new Rollbar(rollbarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LoadingBarModule,
		LoadingBarRouterModule,
		HttpClientModule,

		HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
	],
	providers: [
		{ provide: ErrorHandler, useClass: RollbarErrorHandler },
		{ provide: RollbarService, useFactory: rollbarFactory }
	  ],
	bootstrap: [AppComponent]
})
export class AppModule { }
