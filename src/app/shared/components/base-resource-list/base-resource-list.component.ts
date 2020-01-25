import { OnInit } from '@angular/core'

import { BaseResourceModel } from '../../models/base-resource.model'
import { BaseResourceService } from '../../services/base-resource.service'

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

	resources: T[] = []

	constructor(private resourceService: BaseResourceService<T>) { }

	ngOnInit() {
		this.resourceService.getAll().subscribe((resources) => {
			this.resources = resources.sort((a, b) => b.id - a.id)
		})
	}

	deleteResource(resource) {
		const mustDelete = confirm('Deseja realmente excluir este item?')
		if (mustDelete) {
			this.resourceService.delete(resource.id).subscribe(() => {
				this.resources = this.resources.filter(element => element !== resource)
			}, (error) => {
				console.log('Erro ao tentar excluir')
			})
		}
	}

}
