// src/components/sections/Parts/PartsCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { Star, ShoppingCart } from 'lucide-react';

export const PartsCarousel = () => {
	const { t } = useTranslation();
	const parts = [
		{
			id: 1,
			name: t('engine_control_module'),
			category: t('engine'),
			price: 249.99,
			rating: 4.8,
			image: '/assets/images/parts/engine-control.jpg',
		},
		{
			id: 2,
			name: t('brake_pad_set'),
			category: t('brakes'),
			price: 89.99,
			rating: 4.5,
			image: '/assets/images/parts/brake-pads.jpg',
		},
		{
			id: 3,
			name: t('alternator'),
			category: t('electrical'),
			price: 179.99,
			rating: 4.7,
			image: '/assets/images/parts/alternator.jpg',
		},
	];

	return (
		<Swiper
			modules={[Navigation, Pagination]}
			navigation
			pagination={{ clickable: true }}
			spaceBetween={24}
			slidesPerView={1}
			breakpoints={{
				768: { slidesPerView: 2 },
				1024: { slidesPerView: 3 },
			}}
		>
			{parts.map((part) => (
				<SwiperSlide key={part.id}>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
						<img
							src={part.image}
							alt={part.name}
							className="w-32 h-32 object-cover mb-4 rounded"
						/>
						<h3 className="font-semibold text-lg mb-1">{part.name}</h3>
						<span className="text-sm text-gray-500 mb-2">
							{part.category}
						</span>
						<div className="flex items-center mb-2">
							<Star className="w-4 h-4 text-yellow-400 mr-1" />
							<span className="text-yellow-500 font-medium">
								{part.rating}
							</span>
						</div>
						<div className="font-bold text-xl mb-4">${part.price}</div>
						<button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
							<ShoppingCart className="w-4 h-4" /> {t('add_to_cart')}
						</button>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};