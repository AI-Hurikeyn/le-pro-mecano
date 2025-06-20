// src/components/sections/Contact/Contact.tsx
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import {SectionTitle} from '../../../ui/SectionTitle';
import { Input } from '../../../ui/Input';
import { Button } from '../../../ui/Button';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';

const logoIcon = new L.Icon({
  iconUrl: '/images/logo1.PNG',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  className: 'rounded-full border-4 border-yellow-400 bg-white shadow-lg object-cover',
});

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          subtitle={t('contact_us')}
          title={t('get_in_touch')}
          description={t('contact_desc')}
          center
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder={t('your_name')} required />
                <Input type="email" placeholder={t('your_email')} required />
              </div>
              <Input placeholder={t('subject')} />
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                rows={5}
                placeholder={t('your_message')}
                required
              ></textarea>
              <Button variant="primary" type="submit" className="w-full">
                {t('send_message')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-xl font-semibold mb-6">{t('contact_info')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{t('our_address')}</h4>
                    <p className="text-gray-600">{t('address_details')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{t('phone_number')}</h4>
                    <p className="text-gray-600 whitespace-nowrap" dir="ltr">+216 23 994 159</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{t('email_address')}</h4>
                    <p className="text-gray-600">snoussisaif550@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{t('working_hours')}</h4>
                    <p className="text-gray-600">{t('weekdays_hours')}</p>
                    <p className="text-gray-600">{t('saturday_hours')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <MapContainer
                    center={[36.574334, 10.516933]}
                    zoom={16}
                    scrollWheelZoom={false}
                    style={{ height: '250px', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[36.574334, 10.516933]} icon={logoIcon} />
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};