import qs from "qs";
import yx1Earphones from "/assets/cart/image-yx1-earphones.jpg";
import xx59Headphones from "/assets/cart/image-xx59-headphones.jpg";
import xx99MarkOneHeadphones from "/assets/cart/image-xx99-mark-one-headphones.jpg";
import xx99MarkTwoHeadphones from "/assets/cart/image-xx99-mark-two-headphones.jpg";
import zx7Speaker from "/assets/cart/image-zx7-speaker.jpg";
import zx9Speaker from "/assets/cart/image-zx9-speaker.jpg";

export const findByCategoryQuery = (category: string) => {
	const query = {
		category: {
			equals: category,
		}
	};

	return qs.stringify({
		where: query
	}, { addQueryPrefix: true });
}

export const findBySlugQuery = (slug: string) => {
	const query = {
		slug: {
			equals: slug,
		}
	};

	return qs.stringify({
		where: query
	}, { addQueryPrefix: true });
}

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
