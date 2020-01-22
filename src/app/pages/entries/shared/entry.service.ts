import { Injectable, Injector } from '@angular/core'

import { Observable } from 'rxjs'
import { flatMap } from 'rxjs/operators'

import { BaseResourceService } from 'src/app/shared/services/base-resource.service'
import { Entry } from './entry.model'
import { CategoryService } from '../../categories/shared/category.service'

@Injectable({
	providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

	constructor(protected injector: Injector, private categoryService: CategoryService) {
		super('api/entries', injector)
	}

	create(entry: Entry): Observable<Entry> {
		return this.categoryService.getById(entry.categoryId).pipe(
			flatMap(category => {
				entry.category = category				
				return super.create(entry)
		}))
	}

	update(entry: Entry): Observable<Entry> {
		
		return this.categoryService.getById(entry.categoryId).pipe(
			flatMap(category => {
				entry.category = category
				return super.update(entry)
			})
		)
	}

	// ! Protected Methods
	protected jsonDataToResources(jsonData: any[]): Entry[] {
		const entries: Entry[] = []

		jsonData.forEach(el => {
			const entry = Object.assign(new Entry(), el)
			entries.push(entry)
		})

		return entries
	}

	protected jsonDataToResource(jsonData: any): Entry {
		return Object.assign(new Entry(), jsonData)
	}	

}
