// Datos del portafolio - Modifica estos valores para actualizar tu información

export const personalInfo = {
  name: 'Héctor Hernández',
  title: 'Analista de Desarrollo',
  degree: 'TSU en Informática',
  company: 'KLKSISTEMAS',
  companyUrl: 'https://www.klk.com.ve',
  yearsExperience: 3,
  projectsCount: 16,
  emailPersonal: 'hectorher149@gmail.com',
  emailWork: 'h.hernandez@klk.com.ve',
  whatsapp: '+584122928380',
  github: 'https://github.com/Hectorah',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  location: 'Venezuela'
}

export const aboutData = {
  paragraphs: [
    `Soy un desarrollador con <strong>TSU en Informática</strong> y más de ${personalInfo.yearsExperience} años de experiencia construyendo soluciones reales. Actualmente formo parte del equipo de <strong><a href='https://www.klk.com.ve' target='_blank' rel='noreferrer' className='company-link'>${personalInfo.company}</a></strong>.`,
    'Mi stack principal es <strong>PHP/Laravel</strong> para backend, <strong>React/Node.js</strong> para aplicaciones web modernas y <strong>Dart/Flutter</strong> para aplicaciones móviles. Me apasiona escribir código limpio y crear experiencias de usuario fluidas.',
    'Siempre en <strong>aprendizaje continuo</strong>, explorando nuevas tecnologías y compartiendo conocimiento con la comunidad.'
  ],
  highlights: [
    { number: `+${personalInfo.yearsExperience}`, label: 'Años exp.' },
    { number: `+${personalInfo.projectsCount}`, label: 'Proyectos' },
    { number: '100%', label: 'Compromiso' }
  ]
}

export const experienceData = [
  {
    id: 1,
    position: 'Analista de Desarrollo',
    company: 'KLKSISTEMAS',
  companyUrl: 'https://www.klk.com.ve',
    period: '2024 — Presente',
    current: true,
    description: [
      'Desarrollo y mantenimiento de sistemas web con Laravel y PHP',
      'Creación de aplicaciones móviles multiplataforma con Flutter',
      'Desarrollo de aplicaciones frontend con React y Node.js',
      'Diseño e implementación de APIs RESTful',
      'Gestión de bases de datos MySQL, SQLite y optimización de consultas',
      'Participación en múltiples proyectos empresariales de alto impacto'
    ]
  },
  {
    id: 2,
    position: 'Soporte Técnico',
    company: 'KLKSISTEMAS',
  companyUrl: 'https://www.klk.com.ve',
    period: '2022 — 2024',
    current: false,
    description: [
      'Atención y resolución de incidencias técnicas',
      'Soporte a usuarios en sistemas empresariales',
      'Documentación de procesos y procedimientos',
      'Colaboración en proyectos de desarrollo como pasante'
    ]
  }
]

export const projectsData = [
  {
    id: 1,
    title: 'Portal Consolidado de Estadísticas',
    description: 'Portal centralizado para visualización de estadísticas de múltiples tiendas y sus sucursales. Incluye dashboards interactivos, tablas dinámicas, gráficas de rendimiento y exportación de datos.',
    tags: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Chart.js', 'TypeScript'],
    image: 'projects/portal/Screenshot_1.png',
    images: [
      'projects/portal/Screenshot_1.png',
      'projects/portal/Screenshot_2.png',
      'projects/portal/Screenshot_4.png'
    ],
    type: 'private',
    company: 'KLKSISTEMAS',
  companyUrl: 'https://www.klk.com.ve',
    year: '2023',
    details: [
      'Dashboard consolidado con estadísticas de múltiples tiendas',
      'Frontend con Next.js y React para SSR y SEO optimizado',
      'Estilos modernos con Tailwind CSS',
      'Visualización de datos con gráficas interactivas (Chart.js)',
      'Tablas dinámicas con filtros y ordenamiento',
      'Backend con Node.js y APIs RESTful',
      'Sistema de exportación a Excel y PDF',
      'Gestión de sucursales y comparativas entre tiendas',
      'TypeScript para código tipado y mantenible'
    ]
  },
  {
    id: 2,
    title: 'Gestor de Entradas - Self Checkout',
    description: 'Aplicación móvil tipo kiosko para gestión de entradas en eventos. Sistema de self-checkout para validación y control de accesos en tiempo real.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Provider', 'QR Scanner'],
    image: 'projects/gestor-entradas/Screenshot_1.png',
    type: 'private',
    company: 'KLKSISTEMAS',
  companyUrl: 'https://www.klk.com.ve',
    year: '2024',
    details: [
      'App móvil con Flutter para tablets tipo kiosko',
      'Escaneo de QR para validación de entradas',
      'Sincronización en tiempo real con Firebase',
      'Gestión de eventos y control de accesos',
      'Interfaz optimizada para pantallas táctiles',
      'Modo offline con sincronización posterior'
    ]
  },
  {
    id: 3,
    title: 'Sistema de Pedidos Móvil',
    description: 'Aplicación móvil multiplataforma para gestión de pedidos y entregas en tiempo real. Desarrollada para empresa de logística.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'API REST'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
    type: 'private',
    company: 'KLKSISTEMAS',
  companyUrl: 'https://www.klk.com.ve',
    year: '2024',
    details: [
      'Aplicación móvil con Flutter para Android/iOS',
      'Backend con Node.js y Firebase',
      'Geolocalización en tiempo real',
      'Notificaciones push para estados de pedido',
      'Sincronización offline',
      'API RESTful para comunicación con ERP'
    ]
  },
  {
    id: 4,
    title: 'Landing Page FEMAPuerto',
    description: 'Reestructuración total de la landing page oficial de FEMAPuerto. Diseño moderno, responsivo y optimizado para conversión.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design', 'UX/UI'],
    image: 'projects/landing-page/femapuerto.png',
    images: [
      'projects/landing-page/femapuerto.png'
    ],
    type: 'demo',
    demoUrl: 'https://hectorah.github.io/femapuerto_web/',
    year: '2026',
    details: [
      'Reestructuración completa del diseño de la landing page',
      'Implementación responsive con Bootstrap 5',
      'Optimización de tiempos de carga y performance',
      'Mejora de UX/UI para mayor conversión',
      'Integración de efectos visuales modernos',
      'Compatibilidad con todos los navegadores',
      'Implementación completa con enfoque en performance'
    ]
  },
  {
    id: 5,
    title: 'API de Gestión de Tareas',
    description: 'API RESTful para gestión de tareas y proyectos con autenticación JWT.',
    tags: ['Node.js', 'Express', 'JWT', 'SQLite', 'API REST'],
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600',
    type: 'github',
    githubUrl: 'https://github.com/Hectorah/task-api',
    demoUrl: null,
    year: '2024',
    details: [
      'API REST con Node.js y Express',
      'Autenticación con JWT',
      'CRUD completo de tareas y proyectos',
      'Base de datos SQLite',
      'Documentación con Swagger'
    ]
  },
  {
    id: 6,
    title: 'Integración ERP T-Virtual a KLK POS',
    description: 'Servicio Node.js para integrar datos del ERP TVirtual con el sistema POS local. Sincronización de productos, precios, existencias y ventas con SQL Server.',
    tags: ['Node.js', 'Express', 'SQL Server', 'API REST', 'Axios'],
    image: 'projects/API-node/API.png',
    type: 'private',
    company: 'KLKSISTEMAS',
  companyUrl: 'https://www.klk.com.ve',
    year: '2024',
    details: [
      'Integración bidireccional entre ERP T-Virtual y base de datos SQL Server',
      'Sincronización automatizada de maestros (productos, precios, almacenes)',
      'Implementación de cola de sincronización (Sync Queue) para asegurar integridad',
      'Manejo de idempotencia y Circuit Breaker para estabilidad ante fallos de red',
      'Mapeo dinámico de campos usando el patrón Adapter',
      'Logging detallado de operaciones y monitoreo de sincronización',
      'Endpoint para sincronización manual de existencias y precios en tiempo real'
    ]
  }
]

export const skillsData = [
  { name: 'PHP', category: 'Backend', level: 90 },
  { name: 'Laravel', category: 'Backend', level: 85 },
  { name: 'JavaScript', category: 'Frontend', level: 85 },
  { name: 'React', category: 'Frontend', level: 80 },
  { name: 'Node.js', category: 'Backend', level: 75 },
  { name: 'Dart', category: 'Mobile', level: 80 },
  { name: 'Flutter', category: 'Mobile', level: 85 },
  { name: 'MySQL', category: 'Database', level: 85 },
  { name: 'SQLite', category: 'Database', level: 80 },
  { name: 'Git', category: 'Tools', level: 85 }
]