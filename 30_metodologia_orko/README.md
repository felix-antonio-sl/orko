# 30_metodologia_orko – Metodología ORKO v1.0.0

Este directorio contiene la **metodología ejecutable ORKO** (Layer 3):

- 18 fases WSLC (`01_fases_initiation/` … `05_fases_evolution/`).
- Playbooks P01–P15 (`06_playbooks_recovery/`, `07_playbooks_transformation/`, `08_playbooks_operational/`).
- Trayectorias (`09_trayectorias/`): Survival, Minimal, Avanzada.
- Artefactos de soporte (templates, roles/governance, métricas, casos, instrumentación, evolución y validación final).

Para ORKO **v1.0.0**:

- La validación de VG4 (invariantes `I1`–`I8`) se documenta en:
  - `13_metricas_validacion/03_vg4_validation_map.md` – índice de evidencias por invariante.
  - `17_validacion_final/01_validacion_trazabilidad_i1_i8.md` – análisis detallado por invariante.
  - `17_validacion_final/validation_final_report.md` – síntesis CAP-14–CAP-17 y recomendación de RELEASE 1.0.0.
- Las decisiones de trayectorias y health gates se apoyan en:
  - `13_metricas_validacion/02_health_gates.md` – definición de G1–G4 y métricas canónicas.
  - `09_trayectorias/03_decision_matrix.md` – matriz de decisión para Survival/Minimal/Avanzada.

El Capitán evalúa la **RELEASE 1.0.0 de la metodología** principalmente a partir de `17_validacion_final/validation_final_report.md`, que integra:

- Validación de kernel/VOCAB/DEP_GRAPH (CAP-14).
- Evidencias de casos (CAP-15) y playbooks (CAP-16).
- Auditorías globales VG4 + clasificación `PASSED`/`CONDITIONAL` de `I1`–`I8` (CAP-17/CAP-19).

### Release ORKO v1.0.0 – estado de invariantes I1–I8

En `17_validacion_final/validation_final_report.md` §3, la release ORKO v1.0.0 queda evaluada así:

- I1 – Minimalidad: **CONDITIONAL**  
- I2 – Ortogonalidad: **CONDITIONAL**  
- I3 – Trazabilidad extremo-a-extremo: **PASSED**  
- I4 – Contratos y capas: **CONDITIONAL**  
- I5 – Accountability humana (HAIC): **PASSED**  
- I6 – Trajectory-awareness: **PASSED**  
- I7 – Coherencia entre capas: **CONDITIONAL**  
- I8 – Consistencia temporal/adaptación: **CONDITIONAL**

Los riesgos y gaps asociados a invariantes en estado `CONDITIONAL` están documentados explícitamente en `17_validacion_final/validation_final_report.md` §5 y forman parte del backlog post-1.0.0. La decisión CAP-21 declara ORKO v1.0.0 como RELEASE válida aceptando estos gaps como **no bloqueantes**.

## Cómo leer este árbol (01–16)

- `01–05_fases_*`: las 18 fases WSLC que implementan la metodología en contextos concretos (ver también `out/30_metodologia_orko.md` y `40_implementacion_metodologia/dev_specs/TEMPLATE_FASE_WSLC.md`).
- `06–08_playbooks_*`: catálogo de playbooks P01–P15 (VG3) y sus instancias (`08_playbooks_operational/playbook_instances.yaml`).
- `09_trayectorias/`: definición de trayectorias `Survival`, `Minimal`, `Avanzada` y la matriz de decisión que usan F3/F17.
- `10_integracion_tejidos/`: cómo se conectan los tejidos tecnológicos TF1/TF2/TF3 con fases y playbooks.
- `11–15_*`: artefactos de soporte (templates, roles/governance, métricas/health gates, casos, instrumentación).
- `16_evolucion_metodologia/`: guía para la evolución post‑1.0.0 alineada con `KERNEL_READINESS.md`, `VOCAB_v1.1.x_NOTAS.md` y el backlog de `validation_final_report.md`.
- `17_validacion_final/`: artefactos de validación VG4 (I1–I8) y reporte final de readiness para RELEASE 1.0.0.

## Relación con el kernel y los tejidos

- El kernel `v1.0.0-kernel` se documenta en `40_implementacion_metodologia/dev_specs/KERNEL_READINESS.md` y en `VOCABULARIO_CONTROLADO.yaml` + `DEPENDENCY_GRAPH.yaml`.  
- Los tejidos tecnológicos (TF1_Capacity, TF2_Flow, TF3_Information) se describen en `20_tejidos/` y se integran con la metodología a través de `30_metodologia_orko/10_integracion_tejidos/`.  
- La evolución futura (por ejemplo, nuevas métricas canónicas o extensiones de contratos) debe seguir el proceso controlado descrito en `KERNEL_READINESS.md` y en `VOCAB_v1.1.x_NOTAS.md`, dejando trazabilidad en `board_coordinación.md` y en `17_validacion_final/`.
