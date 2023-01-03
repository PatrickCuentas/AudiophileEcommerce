import { GalleryProps } from "../gallery";
import { ItemBoxProps } from "../item";
import { OthersProps } from "../others";
import { ImageProps } from "../image";

export interface ProductProps {
	slug: string;
	name: string;
	description: string;
	image: {
		mobile: any;
		tablet: any;
		desktop: any;
	};
	isNew: boolean;
	position: string;
}

export interface ProductFullProps {
	id?: number | string;
	slug?: string;
	name?: string;
	category?: string;
	categoryImage?: ImageProps;
	new?: boolean;
	price?: number;
	description?: string;
	imagePath?: string;
	features?: string;
	includes?: Array<ItemBoxProps>;
	gallery?: GalleryProps;
	others?: Array<OthersProps>;
	quantity?: number;
}
