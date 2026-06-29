import {
  BadgeCheck,
  BarChart3,
  CalendarClock,
  ClipboardList,
  Flame,
  Megaphone,
  MonitorSmartphone,
  RadioTower,
  Route,
  Sparkles,
  Target,
  Users
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Priority = 'P0' | 'P1' | 'P2';
export type Front = 'ventas' | 'marketing' | 'webinars' | 'summit' | 'reto-ia' | 'operacion';
export type Health = 'ok' | 'watch' | 'risk';

export interface Kpi {
  label: string;
  value: string;
  detail: string;
  health: Health;
  icon: LucideIcon;
}

export interface Program {
  id: string;
  name: string;
  stage: string;
  owner: string;
  sales: string;
  nextAction: string;
  risk: string;
  health: Health;
  tags: string[];
  evidence: string[];
}

export interface ActionItem {
  id: string;
  priority: Priority;
  front: Front;
  title: string;
  owner: string;
  due: string;
  status: string;
  evidence: string;
  dependency: string;
}

export interface StandItem {
  id: string;
  label: string;
  owner: string;
  evidence: string;
}

export interface Handoff {
  person: string;
  role: string;
  handoff: string;
  risk: string;
}

export const genesisData = {
  updatedAt: '2026-06-29',
  title: 'Genesis OS',
  subtitle: 'Control comercial AECODE Live Training + Summit',
  primaryDecision:
    'Convertir el trabajo de Genesis en un sistema diario de leads, webinars, difusion, cierres y stand Summit medible.',
  role: {
    person: 'Genesis',
    position: 'Comercial AECODE Training',
    focus:
      'Seguimiento de leads, llamadas de cierre, webinars, mensajes masivos, Reto IA, productos Live Training y Stand AECODE Ventas.',
    wip: '3 programas P1 activos: BIM Vial, IA y AutoBIM.'
  },
  kpis: [
    {
      label: 'Ventas junio reportadas',
      value: '131',
      detail: 'Pendiente validar vs corte Talia: 118',
      health: 'watch',
      icon: BarChart3
    },
    {
      label: 'BIM Vial acumulado',
      value: '37',
      detail: 'Modulo 1 propuesto: 14/07',
      health: 'ok',
      icon: Route
    },
    {
      label: 'IA acumulado',
      value: '15',
      detail: 'Debe venderse en Precongreso y Summit',
      health: 'watch',
      icon: Sparkles
    },
    {
      label: 'AutoBIM acumulado',
      value: '8',
      detail: 'Brochure y webinar por cerrar',
      health: 'risk',
      icon: MonitorSmartphone
    },
    {
      label: 'Actividades criticas',
      value: '11',
      detail: 'Sheet, ApeMasivo, webinars, stand y Reto IA',
      health: 'risk',
      icon: Flame
    }
  ] as Kpi[],
  programs: [
    {
      id: 'live-training',
      name: 'AECODE Live Training',
      stage: 'Sistema operativo comercial',
      owner: 'Genesis + Talia',
      sales: '131 reportadas / cifra oficial por validar',
      nextAction: 'Actualizar Sheet de Estatus de Ventas por mes, producto y estado de lead.',
      risk: 'Sin fuente unica, marketing y ventas toman decisiones con cortes distintos.',
      health: 'watch',
      tags: ['ventas', 'sheet', 'tracking'],
      evidence: ['Sheet ventas', 'GHL', 'Reporte semanal']
    },
    {
      id: 'bim-vial',
      name: 'BIM Infraestructura Vial Ed. 4',
      stage: 'Inicio comercial con workshops',
      owner: 'Genesis + Academico BIM + Marketing',
      sales: '37 ventas acumuladas',
      nextAction: 'Armar webinar + 3 talleres introductorios y confirmar Modulo 1 para 14/07.',
      risk: 'Leads bajos si no hay marketing agresivo y copy tecnico desde academico.',
      health: 'watch',
      tags: ['bim', 'webinar', 'workshop'],
      evidence: ['Copy academico', 'Piezas', 'Registro taller']
    },
    {
      id: 'autobim',
      name: 'Automatizacion BIM / AutoBIM',
      stage: 'Mapa comercial por cerrar',
      owner: 'Genesis + Anggie + Academico',
      sales: '8 ventas acumuladas',
      nextAction: 'Revisar brochure, contenido academico, fechas, marketing y primer webinar.',
      risk: 'Se puede vender con dudas de contenido, fechas o promesa si no se mapea completo.',
      health: 'risk',
      tags: ['autobim', 'brochure', 'webinar'],
      evidence: ['Brochure validado', 'Calendario', 'Guion webinar']
    },
    {
      id: 'ia',
      name: 'Diplomado Inteligencia Artificial',
      stage: 'Campana conectada al Summit',
      owner: 'Genesis + Anggie + Jessica + Enma',
      sales: '15 ventas acumuladas',
      nextAction: 'Corregir brochure, incluir slide Summit y preparar venta en Precongreso/Summit.',
      risk: 'El brochure sin narrativa Summit reduce conversion y autoridad.',
      health: 'watch',
      tags: ['ia', 'summit', 'precongreso'],
      evidence: ['Brochure IA', 'Slide Summit', 'Campana GHL']
    },
    {
      id: 'reto-ia',
      name: 'Reto IA',
      stage: 'Remarketing y conversion',
      owner: 'Anggie + Arantxa + Genesis',
      sales: 'Leads por segmentar',
      nextAction: 'Nutrir leads con prompts, guias, roadmaps y rutas hacia diplomados/Summit.',
      risk: 'Sin segmentacion, la base gratuita se enfria y no convierte.',
      health: 'risk',
      tags: ['remarketing', 'recursos', 'summit'],
      evidence: ['Segmentos GHL', 'Secuencias', 'Recursos']
    },
    {
      id: 'stand-summit',
      name: 'Stand AECODE Ventas',
      stage: 'Preparacion comercial Summit',
      owner: 'Genesis + Marketing + Producto + Tech',
      sales: 'Meta por definir',
      nextAction: 'Cerrar materiales, precios, ruleta, pantalla, PPTs, base de datos y reunion previa.',
      risk: 'El stand puede atraer personas pero no cerrar si el equipo no estudia productos.',
      health: 'risk',
      tags: ['summit', 'stand', 'leads'],
      evidence: ['Checklist stand', 'Base leads', 'Reporte cierres']
    }
  ] as Program[],
  actions: [
    {
      id: 'a1',
      priority: 'P0',
      front: 'ventas',
      title: 'Actualizar Sheet de Estatus de Ventas',
      owner: 'Genesis + Reiner',
      due: 'Diario',
      status: 'Por cerrar',
      evidence: 'Sheet con ventas, leads, estados y bloqueos',
      dependency: 'Criterio oficial Talia/Alejandro'
    },
    {
      id: 'a2',
      priority: 'P0',
      front: 'webinars',
      title: 'Reunion previa obligatoria para cada webinar',
      owner: 'Genesis + Anggie + Jessica + Academico',
      due: '24h antes',
      status: 'Nueva regla',
      evidence: 'Minuta + paquete webinar',
      dependency: 'Producto, precio, promocion y guion'
    },
    {
      id: 'a3',
      priority: 'P0',
      front: 'summit',
      title: 'Preparar Stand AECODE Ventas',
      owner: 'Genesis + Marketing + Tech',
      due: 'Antes del Summit',
      status: 'Critico',
      evidence: 'Checklist, ruleta probada, base leads, PPTs',
      dependency: 'Materiales y responsables'
    },
    {
      id: 'a4',
      priority: 'P0',
      front: 'marketing',
      title: 'Pasar feedback de leads a Marketing',
      owner: 'Genesis -> Anggie/Jessica',
      due: 'Lun/Mie/Vie',
      status: 'Recurrente',
      evidence: 'Reporte de objeciones y propuestas',
      dependency: 'GHL + WhatsApp + llamadas'
    },
    {
      id: 'a5',
      priority: 'P0',
      front: 'operacion',
      title: 'Transferir ApeMasivo a Genesis',
      owner: 'Patrick + Reiner',
      due: 'Esta semana',
      status: 'Por entrenar',
      evidence: 'Proceso documentado y prueba de envio',
      dependency: 'Acceso y lista de grupos'
    },
    {
      id: 'a6',
      priority: 'P1',
      front: 'ventas',
      title: 'Validar 131 vs 118 ventas junio',
      owner: 'Talia + Genesis',
      due: 'Antes de reporte semanal',
      status: 'Pendiente',
      evidence: 'Cifra oficial y criterio de corte',
      dependency: 'Sheet consolidado'
    },
    {
      id: 'a7',
      priority: 'P1',
      front: 'webinars',
      title: 'Armar 3 talleres introductorios BIM Vial',
      owner: 'Genesis + Academico BIM',
      due: 'Previo a Modulo 1',
      status: 'Propuesto',
      evidence: 'Calendario, copy, landing, registro',
      dependency: 'Contenido academico BIM'
    },
    {
      id: 'a8',
      priority: 'P1',
      front: 'marketing',
      title: 'Corregir brochure IA e insertar slide Summit',
      owner: 'Anggie + Enma + Genesis',
      due: 'Antes del Precongreso',
      status: 'Pendiente',
      evidence: 'Brochure final',
      dependency: 'Narrativa Summit'
    },
    {
      id: 'a9',
      priority: 'P1',
      front: 'reto-ia',
      title: 'Reactivar leads Reto IA',
      owner: 'Anggie + Arantxa + Genesis',
      due: 'Semanal',
      status: 'Por segmentar',
      evidence: 'Secuencia de recursos y remarketing',
      dependency: 'Segmentos por interes'
    }
  ] as ActionItem[],
  standChecklist: [
    {
      id: 's1',
      label: 'Banners del stand AECODE con oferta clara',
      owner: 'Marketing',
      evidence: 'Archivo final + impresion'
    },
    {
      id: 's2',
      label: 'Precios y promociones por producto',
      owner: 'Genesis + Talia',
      evidence: 'Lista aprobada'
    },
    {
      id: 's3',
      label: 'Volantes y dipticos impresos',
      owner: 'Marketing',
      evidence: 'Cantidad y arte final'
    },
    {
      id: 's4',
      label: 'Apps, demos o recursos para mostrar valor',
      owner: 'Producto',
      evidence: 'Links o dispositivos listos'
    },
    {
      id: 's5',
      label: 'Ruleta con automatizacion probada',
      owner: 'Tech + Genesis',
      evidence: 'Prueba end-to-end'
    },
    {
      id: 's6',
      label: 'Pantalla con PPTs y visuales',
      owner: 'Marketing + Producto',
      evidence: 'Playlist / PPT final'
    },
    {
      id: 's7',
      label: 'Base de datos de leads preparada',
      owner: 'Genesis',
      evidence: 'Sheet / formulario'
    },
    {
      id: 's8',
      label: 'Speech por producto y objeciones',
      owner: 'Genesis',
      evidence: 'Guion de stand'
    },
    {
      id: 's9',
      label: 'Reunion previa para estudiar productos',
      owner: 'Genesis + equipo stand',
      evidence: 'Minuta + asistencia'
    },
    {
      id: 's10',
      label: 'Reporte diario de leads y cierres',
      owner: 'Genesis',
      evidence: 'Corte por dia'
    }
  ] as StandItem[],
  handoffs: [
    {
      person: 'Reiner',
      role: 'Mensajes masivos y estatus en tiempo real',
      handoff: 'Transferir proceso ApeMasivo y reforzar envios nocturnos.',
      risk: 'Genesis opera de dia sin proceso claro y se pierde cobertura.'
    },
    {
      person: 'Patrick',
      role: 'Proceso y soporte de difusion',
      handoff: 'Mapear grupos, flujo, horarios, copy y registro de respuestas.',
      risk: 'La difusion queda artesanal y no medible.'
    },
    {
      person: 'Anggie',
      role: 'Marketing Live Training',
      handoff: 'Definir proceso webinar, piezas, ads, mail marketing y reclutamiento.',
      risk: 'Ventas recibe leads sin materiales ni narrativa cerrada.'
    },
    {
      person: 'Jessica',
      role: 'GHL, performance y automatizaciones',
      handoff: 'Alinear campanas, estados, secuencias y trazabilidad.',
      risk: 'Los leads entran pero no se sabe que accion genero ventas.'
    },
    {
      person: 'Enma',
      role: 'Piezas y brochures',
      handoff: 'Cerrar visuales, flyers, dipticos y materiales Summit/IA.',
      risk: 'El stand o webinar se ve bien, pero no comunica conversion.'
    },
    {
      person: 'Erika',
      role: 'Oferta Summit en cursos en vivo',
      handoff: 'Entrar a clases, ofrecer Summit y pasar interesados a Genesis.',
      risk: 'Se pierde venta cruzada desde clases activas.'
    },
    {
      person: 'Equipo academico BIM/IA',
      role: 'Contenido tecnico y fechas',
      handoff: 'Dar temario, promesa, workshops, fecha real y argumentos de valor.',
      risk: 'El copy comercial sale incompleto o incorrecto.'
    }
  ] as Handoff[],
  cadence: [
    { day: 'Lunes', marketing: '9:00 a. m.', sales: '10:00 a. m.', focus: 'Plan semanal y bloqueos' },
    { day: 'Miercoles', marketing: '9:00 a. m.', sales: '10:00 a. m.', focus: 'Leads, webinars y piezas' },
    { day: 'Viernes', marketing: '9:00 a. m.', sales: '10:00 a. m.', focus: 'Resultados, aprendizajes y siguiente sprint' }
  ],
  dataSources: [
    'Feedback-Operativo-Genesis-2026-06-29.md',
    'Estatus-Comercial-2026-06-28.md',
    'Actividades-Clave.md',
    'Avances-Proyectos.md',
    'Resultados.md'
  ]
};
