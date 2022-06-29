import React from 'react';
import ProductImgDesk from './assets/image-product-desktop.jpg';
import ProductImgMob from './assets/image-product-mobile.jpg';
import CartIcon from './assets/icon-cart.svg';

function ProductImageDesk() {
	return (
		<img
			className="hidden sm:block rounded-l-lg object-cover"
			src={ProductImgDesk}
			alt="Product"
		/>
	);
}

function ProductImageMob() {
	return (
		<img
			className="sm:hidden rounded-t-lg object-cover"
			src={ProductImgMob}
			alt="Product"
		/>
	);
}

function ProductContent() {
	return (
		<>
			<p className="text-DarkGrayishBlue mb-4 sm:mb-6">P E R F U M E</p>
			<h1 className="font-Fraunces text-VeryDarkBlue text-3xl mb-4 sm:mb-6">
				Gabrielle Essence Eau De Parfum
			</h1>

			<p className="text-DarkGrayishBlue mb-6">
				A floral, solar and voluptuous interpretation composed by Olivier Polge,
				Perfumer-Creator for the House of CHANEL.
			</p>

			<div className="grid grid-cols-2 gap-8 mb-6">
				<p className="font-Fraunces text-DarkCyan text-3xl">$149.99</p>
				<p className="font-Fraunces text-DarkGrayishBlue my-auto line-through">
					$169.99
				</p>
			</div>

			<button className="bg-DarkCyan text-White text-center hover:bg-DarkDarkCyan py-3 rounded-lg transition ease-in duration-300">
				<img className="inline mx-2" src={CartIcon} alt="" />
				Add to Cart
			</button>
		</>
	);
}

function App() {
	return (
		<div className="w-full min-h-screen bg-Cream flex justify-center items-center">
			<div className="w-full max-w-xs sm:max-w-xl my-8 bg-White text-xs sm:text-sm flex flex-col sm:flex-row rounded-lg">
				<div className="flex basis-1/3 sm:basis-1/2">
					<ProductImageDesk />
					<ProductImageMob />
				</div>
				<div className="flex flex-col basis-2/3 sm:basis-1/2 m-6 sm:m-8">
					<ProductContent />
				</div>
			</div>
		</div>
	);
}

export default App;
