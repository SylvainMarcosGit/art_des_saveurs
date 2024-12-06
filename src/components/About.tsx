import React from 'react';
import { Award, Heart, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-amber-600 mb-2">
                  <Award className="h-8 w-8 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-gray-900 dark:text-white">10+</div>
                <div className="text-gray-600 dark:text-gray-300">{t('about.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-amber-600 mb-2">
                  <Heart className="h-8 w-8 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-gray-900 dark:text-white">1000+</div>
                <div className="text-gray-600 dark:text-gray-300">{t('about.events')}</div>
              </div>
              <div className="text-center">
                <div className="text-amber-600 mb-2">
                  <Users className="h-8 w-8 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-gray-900 dark:text-white">50+</div>
                <div className="text-gray-600 dark:text-gray-300">{t('about.experts')}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt={t('about.title')}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg hidden lg:block">
              <p className="text-lg font-medium">
                {t('about.quote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;