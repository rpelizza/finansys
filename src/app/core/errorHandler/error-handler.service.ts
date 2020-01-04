import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import * as Sentry from '@sentry/browser';

Sentry.init({
	dsn: 'https://e573ad520fb548fdb70ce68bc8954be5@sentry.io/1871749'
});

@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

	constructor(private injector: Injector) { }

	handleError(error: any) {
		const eventId = Sentry.captureException(error.originalError || error);
		if (Error instanceof HttpErrorResponse) {
			console.warn('----------------------------------------------------------')
			console.warn('HTTP error')
			console.warn('----------------------------------------------------------')
			console.warn(error)
			console.warn(error.status)
			console.warn('----------------------------------------------------------')
			// criar log
		} else {
			console.warn('----------------------------------------------------------')
			console.warn('Global error')
			console.warn('----------------------------------------------------------')
			console.warn(error)
			console.warn('----------------------------------------------------------')
			// criar log
		}
	}
}
