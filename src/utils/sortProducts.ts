

export const sortProductsByNewest = (productsList) => {
	return productsList.sort((a, b) => {
		if (a.isNew && !b.isNew) return -1
		if (!a.isNew && b.isNew) return 1
		return 1
	})
}