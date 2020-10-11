import { Template } from './template';
import { Cat } from '../models/categories';

export class CategoriesController extends Template {
    constructor() {
        super();
        
        this.loadRepository(Cat);
    }

    fillObj(body: any) {
        const category = new Cat();
        category.category = body;

        this.repository.find({ category: body })
        .then(data => {
            if(data.length) return false;
            this.repository.save(category);
        })
    }
}