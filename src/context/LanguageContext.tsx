import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar' | 'es' | 'fr' | 'zh';

type TranslationKeys = 
  | 'nav.about'
  | 'nav.projects'
  | 'nav.contact'
  | 'hero.greeting'
  | 'hero.roles'
  | 'hero.viewWork'
  | 'hero.contactMe'
  | 'about.title'
  | 'about.description'
  | 'projects.title'
  | 'contact.title'
  | 'contact.name'
  | 'contact.email'
  | 'contact.message'
  | 'footer.rights';

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKeys) => string;
}

const translations: Record<Language, Record<TranslationKeys, string | string[]>> = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello, I am Peter Mwaba',
    'hero.roles': ['Full Stack Developer', 'Software Engineer', 'Teacher'],
    'hero.viewWork': 'View Work',
    'hero.contactMe': 'Contact Me',
    'about.title': 'About Me',
    'about.description': 'I am a passionate software developer with experience in building modern web applications. With a solid foundation in both frontend and backend technologies, I create scalable and user-friendly solutions that solve real-world problems.',
    'projects.title': 'Featured Projects',
    'contact.title': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'footer.rights': 'All rights reserved.',
  },
  zh: {
    'nav.about': '关于我',
    'nav.projects': '项目',
    'nav.contact': '联系',
    'hero.greeting': '你好，我是Peter Mwaba',
    'hero.roles': ['全栈开发工程师', '软件工程师', '教师'],
    'hero.viewWork': '查看作品',
    'hero.contactMe': '联系我',
    'about.title': '关于我',
    'about.description': '我是一位充满热情的软件开发人员，擅长构建现代网络应用程序。凭借前端和后端技术的坚实基础，我创建可扩展且用户友好的解决方案，解决现实世界的问题。',
    'projects.title': '精选项目',
    'contact.title': '联系方式',
    'contact.name': '姓名',
    'contact.email': '邮箱',
    'contact.message': '留言',
    'footer.rights': '版权所有。',
  },
  ar: {
    'nav.about': 'حول',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل',
    'hero.greeting': 'مرحبًا، أنا بيتر موابا',
    'hero.roles': ['مطور متكامل', 'مهندس برمجيات', 'معلم'],
    'hero.viewWork': 'عرض العمل',
    'hero.contactMe': 'اتصل بي',
    'about.title': 'عني',
    'about.description': 'أنا مطور برمجيات شغوف بخبرة في بناء تطبيقات الويب الحديثة. مع أساس قوي في تقنيات الواجهة الأمامية والخلفية، أقوم بإنشاء حلول قابلة للتطوير وسهلة الاستخدام تحل مشاكل العالم الحقيقي.',
    'projects.title': 'المشاريع المميزة',
    'contact.title': 'تواصل معنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy Peter Mwaba',
    'hero.roles': ['Desarrollador Full Stack', 'Ingeniero de Software', 'Profesor'],
    'hero.viewWork': 'Ver mi trabajo',
    'hero.contactMe': 'Contáctame',
    'about.title': 'Sobre mí',
    'about.description': 'Soy un desarrollador de software apasionado con experiencia en la construcción de aplicaciones web modernas. Con una base sólida en tecnologías frontend y backend, creo soluciones escalables y fáciles de usar que resuelven problemas del mundo real.',
    'projects.title': 'Proyectos Destacados',
    'contact.title': 'Ponte en Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.message': 'Mensaje',
    'footer.rights': 'Todos los derechos reservados.',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'hero.greeting': 'Bonjour, je suis Peter Mwaba',
    'hero.roles': ['Développeur Full Stack', 'Ingénieur Logiciel', 'Enseignant'],
    'hero.viewWork': 'Voir le travail',
    'hero.contactMe': 'Contactez-moi',
    'about.title': 'À propos de moi',
    'about.description': 'Je suis un développeur logiciel passionné avec de l\'expérience dans la création d\'applications web modernes. Avec une base solide en technologies frontend et backend, je crée des solutions évolutives et conviviales qui résolvent des problèmes réels.',
    'projects.title': 'Projets en vedette',
    'contact.title': 'Entrer en contact',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'footer.rights': 'Tous droits réservés.',
  },
};

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKeys): string => {
    return translations[language][key] as string || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}