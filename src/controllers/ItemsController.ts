import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                name: item.title,            
                id: item.id,
                /** Chamando API  */
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        })
    
        return response.json(serializedItems);
    }
}

export default ItemsController;