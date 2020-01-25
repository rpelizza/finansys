import { InMemoryDbService } from 'angular-in-memory-web-api'

import { Category } from './pages/categories/shared/category.model'
import { Entry } from './pages/entries/shared/entry.model'

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
        
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa' },
            { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios' },
            { id: 3, name: 'Lazer', description: 'Cinema, parques, bares, etc' },
            { id: 4, name: 'Salário', description: 'Recebimento de salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' },
        ]

        const entries: Entry[] = [
            {id: 1, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: true, date: '17/01/2020', amount: '00,10', type: 'expense', description: 'Descrição qualquer'} as Entry,
            {id: 2, name: 'Remédio', categoryId: categories[1].id, category: categories[1], paid: true, date: '18/01/2020', amount: '110,20', type: 'revenue', description: 'Descrição qualquer'} as Entry,
            {id: 3, name: 'Barzinho', categoryId: categories[2].id, category: categories[2], paid: true, date: '19/01/2020', amount: '20,30', type: 'expense', description: 'Descrição qualquer'} as Entry,
            {id: 4, name: 'Recebimento', categoryId: categories[3].id, category: categories[3], paid: true, date: '20/01/2020', amount: '330,40', type: 'revenue', description: 'Descrição qualquer'} as Entry,
            {id: 5, name: 'Free', categoryId: categories[4].id, category: categories[4], paid: false, date: '21/01/2020', amount: '40,50', type: 'expense', description: 'Descrição qualquer'} as Entry,
        ]

        return { categories, entries }

    }

}
