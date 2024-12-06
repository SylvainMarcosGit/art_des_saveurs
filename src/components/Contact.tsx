import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      toast.success(t('contact.success'));
      formRef.current.reset();
    } catch (error) {
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 dark:bg-gray-900">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="event" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('contact.eventType')}
                </label>
                <select
                  id="event"
                  name="event_type"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">{t('contact.eventType.select')}</option>
                  <option value="mariage">{t('contact.eventType.wedding')}</option>
                  <option value="anniversaire">{t('contact.eventType.birthday')}</option>
                  <option value="bapteme">{t('contact.eventType.baptism')}</option>
                  <option value="communion">{t('contact.eventType.communion')}</option>
                  <option value="entreprise">{t('contact.eventType.corporate')}</option>
                  <option value="autre">{t('contact.eventType.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('contact.info')}
              </h3>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{t('contact.phone.label')}</p>
                  <p className="text-gray-600 dark:text-gray-300">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{t('contact.email.label')}</p>
                  <p className="text-gray-600 dark:text-gray-300">contact@artdessaveurs.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{t('contact.address.label')}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Avenue des Gourmets<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-gray-300 italic">
                  {t('contact.team.message')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;