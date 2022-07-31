import Products from "../../data.json"

export const getProductsByCategory = (category: string) => {
	const productsByCategory = Products.filter(product => product.category === category)

	return Array.isArray(productsByCategory) ? productsByCategory : []
}

export const getProductsBySlug = (name: string | undefined) => {
	if (name === undefined) throw new Error("Product name is required")

	const product = Products.find(product => product.slug === name)

	return product
}

export const getCartImageBySlugName = (slugName: string | undefined) => {
	if (slugName === undefined) throw new Error("Slug name is undefined")

	const imageURL = `../../assets/cart/image-${slugName}.jpg`
	return imageURL
}

export const getShortName = (name: string) => {
	const listName = {
		"yx1-earphones": "YX1",
		"xx59-headphones": "XX59",
		"xx99-mark-one-headphones": "XX99 MK I",
		"xx99-mark-two-headphones": "XX99 MK II",
		"zx7-speaker": "ZX7",
		"zx9-speaker": "ZX9",
	}

	return listName[name]
}