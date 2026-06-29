import type { Kpi } from '../data/genesis';
import { StatusPill } from './StatusPill';

interface MetricCardProps {
  metric: Kpi;
}

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = metric.icon;

  return (
    <article className={`metric-card metric-${metric.health}`}>
      <div className="metric-icon">
        <Icon size={20} aria-hidden="true" />
      </div>
      <div>
        <p className="eyebrow">{metric.label}</p>
        <strong>{metric.value}</strong>
        <span>{metric.detail}</span>
      </div>
      <StatusPill label={metric.health === 'ok' ? 'En ritmo' : metric.health === 'watch' ? 'Validar' : 'Riesgo'} health={metric.health} />
    </article>
  );
}
