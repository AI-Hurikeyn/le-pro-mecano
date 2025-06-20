// src/components/sections/Hero/HeroCard.tsx
import { Truck, Shield, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroCard() {
	const { t } = useTranslation();
	const features = [
		{
			icon: <Truck className="h-6 w-6 text-yellow-500" />,
			title: t('free_shipping'),
			description: t('free_shipping_desc'),
		},
		{
			icon: <Shield className="h-6 w-6 text-yellow-500" />,
			title: t('one_year_warranty'),
			description: t('one_year_warranty_desc'),
		},
		{
			icon: <CreditCard className="h-6 w-6 text-yellow-500" />,
			title: t('secure_payment'),
			description: t('secure_payment_desc'),
		},
	];

	return (
		<div className="mt-8 md:mt-12 relative">
			<div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<div key={index} className="flex items-start space-x-4">
							<div className="bg-yellow-50 p-2 rounded-full">
								{feature.icon}
							</div>
							<div>
								<h3 className="font-semibold text-gray-900">
									{feature.title}
								</h3>
								<p className="text-gray-600 text-sm">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}