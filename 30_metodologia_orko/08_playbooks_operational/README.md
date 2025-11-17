# 08 – Playbooks Operational (P09–P15)

## §0. Propósito del bloque

- **Rol en la metodología:**
  - Los playbooks de esta carpeta representan la **familia Operational** de VG3.
  - Se activan en la operación continua para gestionar drift, brechas de capacidad, optimización de flujo, calidad de datos, alineamiento político/cliente y cadencias adaptativas.
  - Conectan health gates, trayectorias y decisiones de gobernanza con acciones concretas en el día a día.
- **Contratos de referencia:**
  - Definiciones canónicas de P09–P15 en `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`.
  - Schema en `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml`.
  - Instancias y triggers en `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml` y `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`.

## §1. Contenido del bloque

- `P09_drift_detection_response.md`
  - Playbook para **detectar y responder a drift** organizacional/procesal.
  - Se activa cuando señales de G1–G4 o indicadores de contexto sugieren que la organización se aleja de su diseño objetivo.

- `P10_capacity_gap_resolution.md`
  - Playbook para abordar **brechas de capacidad** detectadas por métricas y casos.
  - Busca cerrar gaps sin romper la arquitectura ni introducir deuda adicional.

- `P11_flow_optimization.md`
  - Playbook para **optimizar flujos** existentes (colas, esperas, WIP, dependencias) cuando ya no se está en modo Recovery pero hay espacio de mejora.

- `P12_data_quality_recovery.md`
  - Playbook para **recuperar calidad de datos** cuando problemas de integridad, completitud o consistencia amenazan la toma de decisiones.

- `P13_political_alignment.md`
  - Playbook para gestionar **alineamiento político** cuando hay tensiones entre stakeholders clave que pueden bloquear la evolución de la arquitectura o los casos.

- `P14_client_expectation_mgmt.md`
  - Playbook para **gestionar expectativas de clientes** (internos/externos) cuando éstas se desalinean con la realidad de capacidad y trayectorias.

- `P15_adaptive_cadence.md`
  - Playbook para ajustar **cadencias de trabajo y governance** (rituales, ciclos de decisión) en función de contexto, trayectorias y señales de health gates.

 > Para cada playbook, los triggers exactos, métricas canónicas, `fases_relacionadas` y `health_gates_relacionados` se encuentran en `playbook_instances.yaml`.

## §2. Relación con WSLC, trayectorias y health gates

- **WSLC:**
  - P09–P15 operan sobre fases de operación/evolución (F13–F18), usando insumos de Initiation/Development/Implementation.
  - Algunos playbooks (P09, P12) se activan desde F13 (Health Monitoring); otros (P10, P11, P15) se distribuyen entre F14–F17.

- **Trayectorias (`30_metodologia_orko/09_trayectorias/`):**
  - `03_decision_matrix.md` usa estados de G1–G4 para decidir qué combinaciones de P09–P15 aplicar en trayectorias `Survival`, `Minimal` y `Avanzada`.
  - Los casos documentan cómo, por ejemplo, P09/P10/P11/P15 se combinan para sostener una trayectoria Minimal estable.

- **Health gates y métricas (`30_metodologia_orko/13_metricas_validacion/02_health_gates.md`):**
  - Cada playbook Operational se asocia a uno o más gates (G1–G4), usando solo métricas canónicas (`H_org`, `eta_org`, `ROI_Habilitacion`) como entrada para decisiones.

## §3. Interacción con casos y validación

- En los 6 casos de `40_implementacion_metodologia/ejemplos/*_completo`, P09–P15 aparecen como piezas que conectan contexto/decisiones de trayectoria con ajustes operacionales.
- `30_metodologia_orko/17_validacion_final/validation_final_report.md` y `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md` usan estos playbooks como evidencia de que VG3 está disponible para VG4.

## §4. Lineamientos de uso en ORKO v1.0.0

- Considerar P09–P15 como catálogo **cerrado** de playbooks Operational para ORKO v1.0.0.
- No agregar nuevos playbooks ni alterar campos contractuales sin un nuevo CAP que actualice VOCAB/DEP_GRAPH/instances.
- Utilizar este README como mapa para navegar el bloque; las decisiones de diseño se documentan en los playbooks individuales y en los contratos asociados.
