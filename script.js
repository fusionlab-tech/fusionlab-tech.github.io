// Language Management
let currentLanguage = 'en';

// Language data
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Services': 'Services',
        'Portfolio': 'Portfolio',
        'Contact': 'Contact',
        
        // Hero Section
        'We Create Digital Experiences That Matter': 'We Create Digital Experiences That Matter',
        'FusionLab is a creative digital Company specializing in web and mobile design, branding, and digital innovation. We transform ideas into powerful digital solutions.': 'FusionLab is a creative digital Company specializing in web and mobile design, branding, and digital innovation. We transform ideas into powerful digital solutions.',
        'View Our Work': 'View Our Work',
        'Get In Touch': 'Get In Touch',
        
        // About Section
        'About FusionLab': 'About FusionLab',
        'We\'re a team of creative professionals passionate about digital innovation': 'We\'re a team of creative professionals passionate about digital innovation',
        'Our Story': 'Our Story',
        'Founded in 2020, FusionLab has been at the forefront of digital transformation, helping businesses of all sizes establish their online presence and achieve their digital goals.': 'Founded in 2020, FusionLab has been at the forefront of digital transformation, helping businesses of all sizes establish their online presence and achieve their digital goals.',
        'We believe in the power of creative thinking, technical excellence, and strategic insight to deliver solutions that not only look great but drive real business results.': 'We believe in the power of creative thinking, technical excellence, and strategic insight to deliver solutions that not only look great but drive real business results.',
        'Projects Completed': 'Projects Completed',
        'Happy Clients': 'Happy Clients',
        'Years Experience': 'Years Experience',
        
        // Services Section
        'Our Services': 'Our Services',
        'Comprehensive digital solutions for modern businesses': 'Comprehensive digital solutions for modern businesses',
        'Web Development': 'Web Development',
        'Custom websites and web applications built with modern technologies and best practices.': 'Custom websites and web applications built with modern technologies and best practices.',
        'UI/UX Design': 'UI/UX Design',
        'User-centered design solutions that create engaging and intuitive digital experiences.': 'User-centered design solutions that create engaging and intuitive digital experiences.',
        'Digital Marketing': 'Digital Marketing',
        'Strategic digital marketing campaigns that drive growth and increase brand visibility.': 'Strategic digital marketing campaigns that drive growth and increase brand visibility.',
        'Mobile Apps': 'Mobile Apps',
        'Native and cross-platform mobile applications for iOS and Android devices.': 'Native and cross-platform mobile applications for iOS and Android devices.',
        'Analytics & SEO': 'Analytics & SEO',
        'Data-driven insights and search engine optimization to improve online performance.': 'Data-driven insights and search engine optimization to improve online performance.',
        'Consulting': 'Consulting',
        'Strategic digital consulting to help businesses navigate the digital landscape.': 'Strategic digital consulting to help businesses navigate the digital landscape.',
        
        // Portfolio Section
        'Our Portfolio': 'Our Portfolio',
        'Showcasing our best work and creative solutions': 'Showcasing our best work and creative solutions',
        
        // Contact Section
        'Get In Touch': 'Get In Touch',
        'Ready to start your next project? Let\'s talk!': 'Ready to start your next project? Let\'s talk!',
        'Address': 'Address',
        'Phone': 'Phone',
        'Email': 'Email',
        'Your Name': 'Your Name',
        'Your Email': 'Your Email',
        'Subject': 'Subject',
        'Your Message': 'Your Message',
        'Send Message': 'Send Message',
        
        // Footer
        'Creating digital experiences that inspire and engage.': 'Creating digital experiences that inspire and engage.',
        'Company': 'Company',
        'About Us': 'About Us',
        'Our Team': 'Our Team',
        'Careers': 'Careers',
        'Blog': 'Blog',
        'Get Quote': 'Get Quote',
        'Support': 'Support',
        'Partnership': 'Partnership',
        'All rights reserved.': 'All rights reserved.'
    },
    es: {
        // Navigation
        'Home': 'Inicio',
        'About': 'Acerca de',
        'Services': 'Servicios',
        'Portfolio': 'Portafolio',
        'Contact': 'Contacto',
        
        // Hero Section
        'We Create Digital Experiences That Matter': 'Creamos Experiencias Digitales Que Importan',
        'FusionLab is a creative digital Company specializing in web and mobile design, branding, and digital innovation. We transform ideas into powerful digital solutions.': 'FusionLab es una agencia digital creativa especializada en diseño web y móvil, branding e innovación digital. Transformamos ideas en poderosas soluciones digitales.',
        'View Our Work': 'Ver Nuestro Trabajo',
        'Get In Touch': 'Ponerse en Contacto',
        
        // About Section
        'About FusionLab': 'Acerca de FusionLab',
        'We\'re a team of creative professionals passionate about digital innovation': 'Somos un equipo de profesionales creativos apasionados por la innovación digital',
        'Our Story': 'Nuestra Historia',
        'Founded in 2020, FusionLab has been at the forefront of digital transformation, helping businesses of all sizes establish their online presence and achieve their digital goals.': 'Fundado en 2020, FusionLab ha estado a la vanguardia de la transformación digital, ayudando a empresas de todos los tamaños a establecer su presencia en línea y lograr sus objetivos digitales.',
        'We believe in the power of creative thinking, technical excellence, and strategic insight to deliver solutions that not only look great but drive real business results.': 'Creemos en el poder del pensamiento creativo, la excelencia técnica y la visión estratégica para entregar soluciones que no solo se ven bien, sino que impulsan resultados comerciales reales.',
        'Projects Completed': 'Proyectos Completados',
        'Happy Clients': 'Clientes Felices',
        'Years Experience': 'Años de Experiencia',
        
        // Services Section
        'Our Services': 'Nuestros Servicios',
        'Comprehensive digital solutions for modern businesses': 'Soluciones digitales integrales para empresas modernas',
        'Web Development': 'Desarrollo Web',
        'Custom websites and web applications built with modern technologies and best practices.': 'Sitios web personalizados y aplicaciones web construidas con tecnologías modernas y mejores prácticas.',
        'UI/UX Design': 'Diseño UI/UX',
        'User-centered design solutions that create engaging and intuitive digital experiences.': 'Soluciones de diseño centradas en el usuario que crean experiencias digitales atractivas e intuitivas.',
        'Digital Marketing': 'Marketing Digital',
        'Strategic digital marketing campaigns that drive growth and increase brand visibility.': 'Campañas de marketing digital estratégicas que impulsan el crecimiento y aumentan la visibilidad de la marca.',
        'Mobile Apps': 'Aplicaciones Móviles',
        'Native and cross-platform mobile applications for iOS and Android devices.': 'Aplicaciones móviles nativas y multiplataforma para dispositivos iOS y Android.',
        'Analytics & SEO': 'Analíticas y SEO',
        'Data-driven insights and search engine optimization to improve online performance.': 'Información basada en datos y optimización de motores de búsqueda para mejorar el rendimiento en línea.',
        'Consulting': 'Consultoría',
        'Strategic digital consulting to help businesses navigate the digital landscape.': 'Consultoría digital estratégica para ayudar a las empresas a navegar por el panorama digital.',
        
        // Portfolio Section
        'Our Portfolio': 'Nuestro Portafolio',
        'Showcasing our best work and creative solutions': 'Mostrando nuestro mejor trabajo y soluciones creativas',
        
        // Contact Section
        'Get In Touch': 'Ponte en Contacto',
        'Ready to start your next project? Let\'s talk!': '¿Listo para comenzar tu próximo proyecto? ¡Hablemos!',
        'Address': 'Dirección',
        'Phone': 'Teléfono',
        'Email': 'Correo Electrónico',
        'Your Name': 'Tu Nombre',
        'Your Email': 'Tu Correo Electrónico',
        'Subject': 'Asunto',
        'Your Message': 'Tu Mensaje',
        'Send Message': 'Enviar Mensaje',
        
        // Footer
        'Creating digital experiences that inspire and engage.': 'Creando experiencias digitales que inspiran y comprometen.',
        'Company': 'Empresa',
        'About Us': 'Acerca de Nosotros',
        'Our Team': 'Nuestro Equipo',
        'Careers': 'Carreras',
        'Blog': 'Blog',
        'Get Quote': 'Obtener Cotización',
        'Support': 'Soporte',
        'Partnership': 'Asociación',
        'All rights reserved.': 'Todos los derechos reservados.'
    }
};

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = element.dataset.en;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(element => {
        const key = element.dataset.enPlaceholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Store language preference
    localStorage.setItem('fusionlab-language', lang);
}

// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('fusionlab-language');
    if (savedLang) {
        changeLanguage(savedLang);
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Portfolio item click handling
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const projectTitle = this.querySelector('h3').textContent;
        const projectDesc = this.querySelector('p').textContent;
        
        // Define unique content for each project
        const projectData = {
            'EcoTech Solutions': {
                client: 'EcoTech Industries',
                duration: '10 weeks',
                technologies: '.NET Core, C#, ASP.NET MVC, SQL Server, Azure',
                services: 'Web Development, UI/UX Design, API Integration',
                overview: 'Developed a comprehensive sustainability platform for businesses to track and manage their environmental impact. The platform includes carbon footprint calculators, sustainability reporting tools, and compliance management systems.',
                features: [
                    'Real-time environmental impact tracking',
                    'Customizable sustainability dashboards',
                    'Automated compliance reporting',
                    'Integration with IoT sensors',
                    'Mobile-responsive design'
                ]
            },
            'FinFlow Banking': {
                client: 'FinFlow Financial Services',
                duration: '16 weeks',
                technologies: 'React Native, Node.js, MongoDB, Stripe API',
                services: 'Mobile App Development, Web Development, Payment Integration',
                overview: 'Created a modern banking application that simplifies financial management for small businesses and individuals. The app features secure transactions, real-time notifications, and comprehensive financial analytics.',
                features: [
                    'Secure biometric authentication',
                    'Real-time transaction monitoring',
                    'Multi-currency support',
                    'Investment portfolio tracking',
                    'Business expense management'
                ]
            },
            'HealthConnect': {
                client: 'HealthConnect Medical Group',
                duration: '14 weeks',
                technologies: 'Vue.js, Python Django, PostgreSQL, HIPAA-compliant hosting',
                services: 'Healthcare Platform, UI/UX Design, Security Implementation',
                overview: 'Built a HIPAA-compliant healthcare management platform that streamlines patient care coordination, appointment scheduling, and medical record management for healthcare providers.',
                features: [
                    'HIPAA-compliant data security',
                    'Patient portal with secure messaging',
                    'Automated appointment scheduling',
                    'Electronic health records management',
                    'Telemedicine integration capabilities'
                ]
            },
            'SmartRetail': {
                client: 'SmartRetail Solutions',
                duration: '12 weeks',
                technologies: 'Next.js, Shopify API, Node.js, MongoDB',
                services: 'E-commerce Platform, Digital Marketing, Analytics Integration',
                overview: 'Developed an intelligent e-commerce platform with AI-powered product recommendations, automated inventory management, and advanced customer analytics to boost sales and customer satisfaction.',
                features: [
                    'AI-powered product recommendations',
                    'Automated inventory management',
                    'Customer behavior analytics',
                    'Multi-channel sales integration',
                    'Personalized shopping experiences'
                ]
            },
            'EduTech Platform': {
                client: 'EduTech Learning Institute',
                duration: '18 weeks',
                technologies: 'React, Node.js, MongoDB, WebRTC, AWS',
                services: 'Learning Management System, Video Conferencing, Content Management',
                overview: 'Created a comprehensive learning management system that supports both synchronous and asynchronous learning, with integrated video conferencing, content creation tools, and progress tracking.',
                features: [
                    'Live video conferencing with recording',
                    'Interactive whiteboard and collaboration tools',
                    'Content creation and management system',
                    'Progress tracking and analytics',
                    'Mobile learning app integration'
                ]
            },
            'TravelBuddy': {
                client: 'TravelBuddy Adventures',
                duration: '8 weeks',
                technologies: 'React Native, Node.js, MongoDB, Google Maps API',
                services: 'Travel App Development, Branding, Location Services',
                overview: 'Designed and developed a travel companion app that helps users discover local attractions, plan itineraries, and connect with fellow travelers. The app includes social features and real-time location services.',
                features: [
                    'Interactive map with local attractions',
                    'Social travel planning features',
                    'Real-time location sharing',
                    'Local language translation tools',
                    'Offline map functionality'
                ]
            }
        };
        
        const project = projectData[projectTitle] || {
            client: 'Confidential',
            duration: '8-12 weeks',
            technologies: 'React, Node.js, MongoDB',
            services: 'Web Development, UI/UX Design',
            overview: 'This project involved creating a comprehensive digital solution that transformed the client\'s business operations. We delivered a modern, scalable platform that improved user experience and business efficiency.',
            features: [
                'Responsive design for all devices',
                'Advanced user authentication system',
                'Real-time data synchronization',
                'Analytics dashboard',
                'Mobile-first approach'
            ]
        };
        
        // Create modal content
        const modal = document.createElement('div');
        modal.className = 'portfolio-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${projectTitle}</h2>
                <p>${projectDesc}</p>
                <div class="project-details">
                    <h3>Project Details</h3>
                    <ul>
                        <li><strong>Client:</strong> ${project.client}</li>
                        <li><strong>Duration:</strong> ${project.duration}</li>
                        <li><strong>Technologies:</strong> ${project.technologies}</li>
                        <li><strong>Services:</strong> ${project.services}</li>
                    </ul>
                    <h3>Project Overview</h3>
                    <p>${project.overview}</p>
                    <h3>Key Features</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// Add CSS for modal
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .portfolio-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 20px;
    }
    
    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
    }
    
    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        cursor: pointer;
        color: #6b7280;
        line-height: 1;
    }
    
    .close-modal:hover {
        color: #1f2937;
    }
    
    .modal-content h2 {
        color: #1f2937;
        margin-bottom: 1rem;
        padding-right: 2rem;
    }
    
    .modal-content h3 {
        color: #374151;
        margin: 1.5rem 0 0.5rem 0;
    }
    
    .modal-content ul {
        margin: 0.5rem 0 1rem 1.5rem;
        color: #4b5563;
    }
    
    .modal-content li {
        margin-bottom: 0.5rem;
    }
    
    .project-details {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #e5e7eb;
    }
`;

document.head.appendChild(modalStyles);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
