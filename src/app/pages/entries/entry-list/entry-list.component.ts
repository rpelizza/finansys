import { Component, OnInit } from '@angular/core'

import { Entry } from '../shared/entry.model'
import { EntryService } from '../shared/entry.service'

@Component({
	selector: 'app-entry-list',
	templateUrl: './entry-list.component.html',
	styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {

	entries: Entry[] = []

	constructor(private entryService: EntryService) { }

	ngOnInit() {
		this.entryService.getAll().subscribe((res) => {
			this.entries = res
		})
	}

	deleteEntry(entry) {
		const mustDelete = confirm('Deseja realmente excluir este item?')
		if (mustDelete) {
			this.entryService.delete(entry.id).subscribe(() => {
				this.entries = this.entries.filter(element => element !== entry)
			}, (error) => {
				console.log('Erro ao tentar excluir')
			})
		}
	}

}
