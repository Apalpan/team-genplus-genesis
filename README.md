# Genesis OS - AECODE Light

Dashboard operativo premium para ordenar el trabajo comercial de Genesis en AECODE Live Training, Reto IA y AI Construction Summit.

## Diseño aplicado

La interfaz usa el sistema visual de `DESIGN-AECODE.zip`:

- Logo oficial AECODE.
- Assets Aecodito y Training Hero.
- Modo light con nav/footer dark.
- Paleta violeta, indigo, lavender y verde.
- Cards elevadas, pills, filtros y CTAs segun el estilo AECODE.

Tambien se creo el skill reutilizable:

```txt
C:\Users\Lenovo\.codex\skills\aecode-light-design
```

## Que resuelve

- Controla ventas, leads, webinars, objeciones y bloqueos por producto.
- Ordena el handoff entre Genesis, Marketing, Reiner, Patrick, Erika y equipo academico.
- Convierte el Stand AECODE Ventas del Summit en un modulo comercial medible.
- Deja preparada la estructura para conectar Google Sheets, GHL o una API.

## Stack

- Vite
- React
- TypeScript
- CSS modular global con tokens AECODE Light
- Lucide React para iconos

## Ejecutar

```bash
npm install
npm run dev
```

URL local por defecto:

```txt
http://127.0.0.1:5187
```

## Build

```bash
npm run build
```

## Datos

La data vive en:

```txt
src/data/genesis.ts
```

Para conectar datos reales:

1. Reemplazar `genesisData` por una llamada a Google Sheets, GHL o Supabase.
2. Mantener las mismas entidades: `programs`, `actions`, `standChecklist`, `cadence`, `handoffs`.
3. Agregar fecha de corte y estado de fuente.
4. Registrar errores de sincronizacion en un panel de riesgos.

## Proxima iteracion

- Conectar Sheet de Estatus de Ventas.
- Agregar login interno.
- Registrar checklists por usuario.
- Exportar reporte semanal en PDF.
- Sincronizar leads Reto IA y Summit con GHL.
