export const formatPrice = (price: number | undefined) => {

	if (price === undefined) throw new Error('Price is undefined');

	const priceFormatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	return priceFormatted
}