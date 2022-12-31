import Products from "../../data.js";
import { ProductFullProps } from "../interfaces/product";
import yx1Earphones from "/assets/cart/image-yx1-earphones.jpg";
import xx59Headphones from "/assets/cart/image-xx59-headphones.jpg";
import xx99MarkOneHeadphones from "/assets/cart/image-xx99-mark-one-headphones.jpg";
import xx99MarkTwoHeadphones from "/assets/cart/image-xx99-mark-two-headphones.jpg";
import zx7Speaker from "/assets/cart/image-zx7-speaker.jpg";
import zx9Speaker from "/assets/cart/image-zx9-speaker.jpg";

export const getProductsByCategory = (category: string) => {
	const productsByCategory = Products.filter(
		(product: ProductFullProps) => product.category === category
	);

	return Array.isArray(productsByCategory) ? productsByCategory : [];
};

export const getProductsBySlug = (name: string | undefined) => {
	if (name === undefined) throw new Error("Product name is required");

	const product = Products.find(
		(product: ProductFullProps) => product.slug === name
	);

	if (product === undefined) throw new Error("Product not found");

	return product;
};

export const getProductImageBySlugName = (slugName: string | undefined) => {
	if (slugName === undefined) throw new Error("Slug name is undefined");

	const product = Products.find(
		(product: ProductFullProps) => product.slug === slugName
	);

	if (product === undefined) throw new Error("Product not found by slug name");

	return product.image;
};

export const getCartImageBySlugName = (slugName: string | undefined) => {
	if (slugName === undefined) throw new Error("Slug name is undefined");

	const productImages = {
		"yx1-earphones": yx1Earphones,
		"xx59-headphones": xx59Headphones,
		"xx99-mark-one-headphones": xx99MarkOneHeadphones,
		"xx99-mark-two-headphones": xx99MarkTwoHeadphones,
		"zx7-speaker": zx7Speaker,
		"zx9-speaker": zx9Speaker,
	};

	const imageURL = productImages[slugName];
	return imageURL;
};

export const getShortName = (name: string) => {
	const listName = {
		"yx1-earphones": "YX1",
		"xx59-headphones": "XX59",
		"xx99-mark-one-headphones": "XX99 MK I",
		"xx99-mark-two-headphones": "XX99 MK II",
		"zx7-speaker": "ZX7",
		"zx9-speaker": "ZX9",
	};

	return listName[name];
};
