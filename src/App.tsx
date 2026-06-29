import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ClipboardCheck,
  DatabaseZap,
  ExternalLink,
  Filter,
  LayoutDashboard,
  ListChecks,
  Megaphone,
  MessageSquareText,
  PanelsTopLeft,
  Presentation,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from 'lucide-react';
import { genesisData, type Front, type Program } from './data/genesis';
import { MetricCard } from './components/MetricCard';
import { SectionHeader } from './components/SectionHeader';
import { StatusPill } from './components/StatusPill';

const filters: Array<{ id: 'all' | Front; label: string }> = [
  { id: 'all', label: 'Todo' },
  { id: 'ventas', label: 'Ventas' },
  { id: 'webinars', label: 'Webinars' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'summit', label: 'Summit' },
  { id: 'reto-ia', label: 'Reto IA' },
  { id: 'operacion', label: 'Operacion' }
];

function App() {
  const [activeFilter, setActiveFilter] = useState<'all' | Front>('all');
  const [selectedProgram, setSelectedProgram] = useState<Program>(genesisData.programs[0]);
  const [checked, setChecked] = useState<Set<string>>(new Set(['s1', 's2']));
  const [copyState, setCopyState] = useState('Copiar brief');

  const filteredActions = useMemo(() => {
    if (activeFilter === 'all') return genesisData.actions;
    return genesisData.actions.filter((action) => action.front === activeFilter);
  }, [activeFilter]);

  const standProgress = Math.round((checked.size / genesisData.standChecklist.length) * 100);

  const copyBrief = async () => {
    const brief = [
      `${genesisData.title} - ${genesisData.updatedAt}`,
      genesisData.primaryDecision,
      `Foco: ${genesisData.role.focus}`,
      `WIP: ${genesisData.role.wip}`,
      'P0: Sheet ventas, webinars, stand Summit, ApeMasivo y Reto IA.'
    ].join('\n');

    try {
      await navigator.clipboard.writeText(brief);
      setCopyState('Brief copiado');
      window.setTimeout(() => setCopyState('Copiar brief'), 1800);
    } catch {
      setCopyState('No copiado');
      window.setTimeout(() => setCopyState('Copiar brief'), 1800);
    }
  };

  const toggleStand = (id: string) => {
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Genesis OS">
          <img
            className="brand-logo"
            src="/assets/logos/aecode-logo-principal-fondo-oscuro.png"
            alt="AECODE"
          />
          <span>
            <strong>Genesis Light OS</strong>
            <small>Comercial Training + Summit</small>
          </span>
        </a>
        <nav className="topnav" aria-label="Secciones">
          <a href="#dashboard">Dashboard</a>
          <a href="#stand">Stand Summit</a>
          <a href="#handoffs">Handoffs</a>
        </nav>
        <button className="icon-button" type="button" onClick={copyBrief}>
          <ClipboardCheck size={17} aria-hidden="true" />
          <span>{copyState}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero-panel" id="dashboard">
          <div className="hero-copy">
            <div className="hero-content">
              <p className="eyebrow">Corte operativo {genesisData.updatedAt}</p>
              <h1>
                Genesis OS para <span>AECODE Live Training</span>
              </h1>
              <p>
                Un tablero light premium para convertir ventas, webinars, Reto IA y el Stand AECODE
                del Summit en acciones medibles con owner, evidencia y siguiente paso.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#acciones">
                  <Target size={18} aria-hidden="true" />
                  Ver P0 de hoy
                </a>
                <a className="secondary-action" href="#stand">
                  <PanelsTopLeft size={18} aria-hidden="true" />
                  Preparar stand
                </a>
              </div>
            </div>

            <div className="hero-showcase" aria-label="AECODE Training visual">
              <img
                className="training-visual"
                src="/assets/reference/training-hero.png"
                alt="Interfaz visual de AECODE Training con clase, IA y comunidad"
              />
              <div className="aecodito-card">
                <img src="/assets/reference/aecodito-footer.png" alt="" />
                <span>Aecodito comercial</span>
                <strong>Leads, webinars y cierre con evidencia.</strong>
              </div>
            </div>
          </div>

          <aside className="decision-panel" aria-label="Decision principal">
            <div className="decision-top">
              <LayoutDashboard size={22} aria-hidden="true" />
              <span>Decision de producto</span>
            </div>
            <h2>{genesisData.primaryDecision}</h2>
            <div className="decision-grid">
              <div>
                <small>Rol</small>
                <strong>{genesisData.role.position}</strong>
              </div>
              <div>
                <small>WIP recomendado</small>
                <strong>{genesisData.role.wip}</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="metrics-grid" aria-label="Metricas principales">
          {genesisData.kpis.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </section>

        <section className="two-column">
          <div className="surface-panel">
            <SectionHeader
              eyebrow="Programas"
              title="Estado por frente"
              description="Selecciona un programa para ver riesgo, evidencia y siguiente accion."
            />
            <div className="program-list">
              {genesisData.programs.map((program) => (
                <button
                  key={program.id}
                  className={`program-card ${selectedProgram.id === program.id ? 'active' : ''}`}
                  type="button"
                  onClick={() => setSelectedProgram(program)}
                >
                  <span className="program-title">
                    <strong>{program.name}</strong>
                    <StatusPill label={program.health === 'ok' ? 'En ritmo' : program.health === 'watch' ? 'Vigilar' : 'Riesgo'} health={program.health} />
                  </span>
                  <span>{program.stage}</span>
                </button>
              ))}
            </div>
          </div>

          <aside className="surface-panel selected-program">
            <p className="eyebrow">Detalle activo</p>
            <h2>{selectedProgram.name}</h2>
            <div className="detail-row">
              <span>Owner</span>
              <strong>{selectedProgram.owner}</strong>
            </div>
            <div className="detail-row">
              <span>Ventas / estado</span>
              <strong>{selectedProgram.sales}</strong>
            </div>
            <div className="callout">
              <SearchCheck size={18} aria-hidden="true" />
              <div>
                <span>Siguiente accion</span>
                <strong>{selectedProgram.nextAction}</strong>
              </div>
            </div>
            <div className="risk-box">
              <ShieldCheck size={18} aria-hidden="true" />
              <p>{selectedProgram.risk}</p>
            </div>
            <div className="tag-row">
              {selectedProgram.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="surface-panel action-panel" id="acciones">
          <div className="action-header">
            <SectionHeader
              eyebrow="Acciones"
              title="P0 / P1 con filtro operativo"
              description="La lista responde que hacer ahora, quien lo mueve y que evidencia debe quedar."
            />
            <div className="filter-box" aria-label="Filtro de acciones">
              <Filter size={16} aria-hidden="true" />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={activeFilter === filter.id ? 'active' : ''}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {filteredActions.length === 0 ? (
            <div className="empty-state">
              <Sparkles size={22} aria-hidden="true" />
              <p>No hay acciones para este filtro.</p>
            </div>
          ) : (
            <div className="action-table">
              {filteredActions.map((action) => (
                <article className="action-row" key={action.id}>
                  <StatusPill label={action.priority} priority={action.priority} />
                  <div>
                    <strong>{action.title}</strong>
                    <span>{action.dependency}</span>
                  </div>
                  <div>
                    <small>Owner</small>
                    <span>{action.owner}</span>
                  </div>
                  <div>
                    <small>SLA</small>
                    <span>{action.due}</span>
                  </div>
                  <div>
                    <small>Evidencia</small>
                    <span>{action.evidence}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="stand-section" id="stand">
          <div className="stand-hero">
            <p className="eyebrow">AI Construction Summit</p>
            <h2>Stand AECODE Ventas</h2>
            <p>
              El stand debe operar como modulo de conversion: atraer, diagnosticar interes,
              registrar lead, mostrar producto y derivar a cierre.
            </p>
            <div className="progress-shell" aria-label={`Progreso stand ${standProgress}%`}>
              <div className="progress-meta">
                <span>Preparacion del stand</span>
                <strong>{standProgress}%</strong>
              </div>
              <div className="progress-track">
                <span style={{ width: `${standProgress}%` }} />
              </div>
            </div>
          </div>

          <div className="stand-checklist">
            {genesisData.standChecklist.map((item) => (
              <label key={item.id} className={checked.has(item.id) ? 'checked' : ''}>
                <input
                  type="checkbox"
                  checked={checked.has(item.id)}
                  onChange={() => toggleStand(item.id)}
                />
                <span className="fake-check">
                  <ListChecks size={16} aria-hidden="true" />
                </span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.owner} - {item.evidence}</small>
                </span>
              </label>
            ))}
          </div>
        </section>

        <section className="three-column" id="handoffs">
          <div className="surface-panel cadence-panel">
            <SectionHeader eyebrow="Cadencia" title="Ritmo Marketing + Ventas" />
            {genesisData.cadence.map((item) => (
              <div className="cadence-row" key={item.day}>
                <CalendarClock size={18} aria-hidden="true" />
                <div>
                  <strong>{item.day}</strong>
                  <span>Marketing {item.marketing} / Ventas {item.sales}</span>
                  <small>{item.focus}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="surface-panel handoff-panel">
            <SectionHeader eyebrow="Handoffs" title="Coordinaciones criticas" />
            {genesisData.handoffs.map((handoff) => (
              <article key={handoff.person} className="handoff-card">
                <div>
                  <UsersRound size={18} aria-hidden="true" />
                  <strong>{handoff.person}</strong>
                </div>
                <span>{handoff.role}</span>
                <p>{handoff.handoff}</p>
              </article>
            ))}
          </div>

          <div className="surface-panel source-panel">
            <SectionHeader eyebrow="Datos" title="Fuentes y conexion futura" />
            <div className="source-list">
              {genesisData.dataSources.map((source) => (
                <div key={source}>
                  <DatabaseZap size={17} aria-hidden="true" />
                  <span>{source}</span>
                </div>
              ))}
            </div>
            <a className="source-link" href="#dashboard">
              <RefreshCw size={17} aria-hidden="true" />
              Preparado para Sheets / GHL
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="workflow-strip" aria-label="Flujo comercial Genesis">
          {[
            ['Lead', MessageSquareText],
            ['Diagnostico', SearchCheck],
            ['Webinar', Presentation],
            ['Oferta', Megaphone],
            ['Cierre', BadgeCheck]
          ].map(([label, Icon], index) => {
            const StepIcon = Icon as typeof MessageSquareText;
            return (
              <div className="workflow-step" key={label as string}>
                <span>{index + 1}</span>
                <StepIcon size={18} aria-hidden="true" />
                <strong>{label as string}</strong>
                {index < 4 ? <ArrowRight size={16} aria-hidden="true" /> : null}
              </div>
            );
          })}
        </section>
      </main>

      <footer className="app-footer">
        <img src="/assets/logos/aecode-logo-principal-fondo-oscuro.png" alt="AECODE" />
        <span>Design System Light aplicado desde DESIGN-AECODE.zip</span>
        <strong>Genesis OS · Producto comercial operativo</strong>
      </footer>
    </div>
  );
}

export default App;
