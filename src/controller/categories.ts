import { IEntity, Template } from './template';
import { Categories } from '../models/categories';

export class CategoriesController extends Template {
    constructor() {
        super();
        
        this.loadRepository(Categories);
    }

    fillObj(body: any): IEntity {
        const categoryObj = new Categories();
        const { category } = body;

        categoryObj.category = category;

        return categoryObj;
    }
}