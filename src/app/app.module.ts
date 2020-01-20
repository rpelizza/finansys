import { NgModule, ErrorHandler } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { ErrorHandlerService } from './core/services/error-handler/error-handler.service';
import { CoreModule } from './core/core.module'

@NgModule({
	declarations: [AppComponent],
	imports: [		
		CoreModule,
		AppRoutingModule,
		LoadingBarModule,
		LoadingBarRouterModule,
	],
	providers: [
		{ provide: ErrorHandler, useClass: ErrorHandlerService, },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
