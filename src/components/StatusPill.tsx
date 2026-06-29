import { CheckCircle2, CircleAlert, Clock3 } from 'lucide-react';
import type { Health, Priority } from '../data/genesis';

interface StatusPillProps {
  label: string;
  health?: Health;
  priority?: Priority;
}

const healthIcons = {
  ok: CheckCircle2,
  watch: Clock3,
  risk: CircleAlert
};

export function StatusPill({ label, health = 'ok', priority }: StatusPillProps) {
  const Icon = healthIcons[health];
  const className = priority ? `pill priority-${priority.toLowerCase()}` : `pill ${health}`;

  return (
    <span className={className}>
      <Icon size={14} aria-hidden="true" />
      {priority ?? label}
    </span>
  );
}
