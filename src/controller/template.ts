import { Request, Response } from "express";
import { Repository, getRepository } from "typeorm";

export interface IEntity {}

export class Template {
    repository: Repository<any>;
    obj: IEntity;

    async create(request: Request, response: Response) {
        this.obj = await this.fillObj(request.body);
        this.repository.save(this.obj);

        response.status(201).json({ success: 'teste' })
    }

    read(request: Request, response: Response) {
        const { id } = request.params;

        this.repository.findOne(id)
        .then(data => response.status(200).json(data))
        .catch(err => response.status(403).json({ error: 'Não encontrado' }));
    }

    delete(request: Request, response: Response) {
        const { id } = request.params;

        this.repository.delete(id)
        .then(data => response.status(200).json(data))
        .catch(err => response.status(403).json({ error: 'Não encontrado' }));
    }

    loadRepository(template: any) {
        this.repository = getRepository(template);
    }

    async findById(id: number): Promise<any> {
        const found = await this.repository.findOne(id);
        const result = await found;

        return result;
    }

    fillObj(body: any): any {}
}