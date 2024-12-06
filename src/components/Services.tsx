import React, { useState } from 'react';
import { Utensils, Users, PartyPopper, Heart } from 'lucide-react';
import Modal from './Modal';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const { t } = useLanguage();

  const services = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: t('services.gastronomy.title'),
      description: t('services.gastronomy.description'),
      details: t('services.gastronomy.details')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('services.service.title'),
      description: t('services.service.description'),
      details: t('services.service.details')
    },
    {
      icon: <PartyPopper className="h-8 w-8" />,
      title: t('services.events.title'),
      description: t('services.events.description'),
      details: t('services.events.details')
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('services.special.title'),
      description: t('services.special.description'),
      details: t('services.special.details')
    },
  ];

  const handleClose = () => setSelectedService(null);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-amber-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <button 
                onClick={() => setSelectedService(index)}
                className="text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
              >
                {t('services.readMore')} →
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={handleClose}
        title={selectedService !== null ? services[selectedService].title : ''}
      >
        <div className="text-gray-600 dark:text-gray-300">
          {selectedService !== null && services[selectedService].details}
        </div>
      </Modal>
    </section>
  );
};

export default Services;