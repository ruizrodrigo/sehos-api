/* import { Products, Users, Category, Product_details, Color, Images, Sizes } from "../db";
import { Op } from "sequelize" */

/* import { where } from 'sequelize/types'; */

import { Products } from '../db';
import { ProductsI } from '../types';

export const getProducts = async (product: string): Promise<any> => {
	try {
		if (!product) throw new Error(`there's no any product for` + product);

		/* const { data }: any = await axios.get('http://localhost:3001/products');

		const filtrados: Array<any> = data.filter((p: any) =>
			p.name.toLowerCase().includes(product.toLowerCase())
		); */
		const filtrados: any = await Products.findAll()
		let exp = new RegExp(product.toLowerCase());
		/* console.log("Entre al al title"); */
		let result = filtrados?.filter((e: ProductsI) => exp.test(e.name.toLowerCase()));
		if (!result) throw new Error(`Theres no coincidence for ${product}`);

		return result;
	} catch (error: any) {
		return [];
	}
};
