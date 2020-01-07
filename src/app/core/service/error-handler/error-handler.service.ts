import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import * as Sentry from '@sentry/browser';

Sentry.init({
	dsn: 'https://f77a44dd8ead4517861d072b5ae4af97@sentry.io/1872772'
});

@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

	constructor() { }

	handleError(error: any) {
		Sentry.captureException(error.originalError || error);
		if (Error instanceof HttpErrorResponse) {
			const message = error.error.message
			switch (error.status) {
				case 401:
					// todo enviar o usuário para o login
					// todo caso tenha dado 401
					console.error(message || '')
					console.error(error)
					break;
				case 403:
					console.error(message || 'Não autorizado')
					console.error(error)
					break;
				case 404:
					console.error(message || 'Recurso não encontrado.')
					console.error(error)
					break;

				default:
					break;
			}
			// criar log
		} else {
			console.error('Global error')
			console.error(error)
			// criar log
		}
	}
}
