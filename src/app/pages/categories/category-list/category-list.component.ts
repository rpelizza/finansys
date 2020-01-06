import { Component, OnInit } from '@angular/core'

import { Category } from '../shared/category.model'
import { CategoryService } from '../shared/category.service'

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

	categories: Category[] = []

	constructor(private categoryService: CategoryService) { }

	ngOnInit() {
		this.categoryService.getAll().subscribe((res) => {
			this.categories = res
		})
	}

	deleteCategory(category) {
		const mustDelete = confirm('Deseja realmente excluir este item?')
		if (mustDelete) {
			this.categoryService.delete(category.id).subscribe(() => {
				this.categories = this.categories.filter(element => element !== category)
			}, (error) => {
				console.log('Erro ao deletar a categoria')
			})
		}
	}

}
