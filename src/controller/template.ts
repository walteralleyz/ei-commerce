import { Request, Response } from "express";
import { Repository, getRepository } from "typeorm";

export interface IEntity {}

export class Template {
    repository: Repository<any>;
    obj: IEntity | boolean;

    async create(request: Request, response: Response) {
        this.obj = await this.fillObj(request.body);

        if(typeof this.obj === 'object') {
            this.repository.save(this.obj);

            return response.status(201).json({ success: 'salvo' });
        }

        response.status(400).json({ error: 'Não foi possivel salvar!' });
    }

    read(request: Request, response: Response) {
        const { id } = request.params;

        this.defaultResponse(
            this.repository.findOne(id),
            response,
            'Não encontrado!'
        );
    }

    readAll(response: Response) {
        this.defaultResponse(
            this.repository.find({}),
            response,
            'Não encontrado!'
        );
    }

    delete(request: Request, response: Response) {
        const { id } = request.params;

        this.defaultResponse(
            this.repository.delete(id), 
            response, 
            'Não encontrado!'
        );
    }

    loadRepository(template: any) {
        this.repository = getRepository(template);
    }

    async findById(id: number): Promise<any> {
        const found = await this.repository.findOne(id);
        const result = await found;

        return result;
    }

    defaultResponse(fn: any, rp: any, msg: string) {
        fn
        .then((data: any) => rp.status(200).json(data))
        .catch((err: any) => rp.status(403).json({ error: msg }));
    }

    fillObj(body: any): any {}
}