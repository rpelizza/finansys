import { Injectable, Injector } from '@angular/core'

import { BaseResourceService } from 'src/app/shared/services/base-resource.service'
import { Entry } from './entry.model'

@Injectable({
	providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

	constructor(protected injector: Injector) {
		super('api/entries', injector)
	}

}
