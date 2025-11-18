# 06 – Playbooks Recovery (P01–P04)

## §0. Propósito del bloque

- **Rol en la metodología:**
  - Los playbooks de esta carpeta representan la **familia Recovery** de VG3.
  - Se activan cuando la organización entra en estados de **riesgo elevado** o **degradación** de salud organizacional, alineados principalmente con gates G1/G2 de `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`.
  - Operan sobre fases WSLC de **operación y evolución** (especialmente F13–F15/F16–F17), restaurando condiciones mínimas para que el resto de la metodología pueda ejecutarse con seguridad.
- **Contratos de referencia:**
  - Definiciones canónicas de P01–P04 en `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`.
  - Campos y dimensiones en `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml`.
  - Instancias concretas en `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml` (`metricas_canonicas`, `fases_relacionadas`, `health_gates_relacionados`, `trayectorias_relacionadas`).

## §1. Contenido del bloque

- `P01_low_h_org_recovery.md`
  - Playbook principal cuando `H_org` cae bajo umbrales críticos (gates G1/G2).
  - Foco en estabilizar equipos, visibilidad de carga y contención de deuda organizacional.
  - Se apoya en métricas canónicas de salud y en decisiones F13/F16/F17.

- `P02_handoff_reduction.md`
  - Playbook para reducir **handoffs excesivos** y cuellos de botella que afectan `eta_org` y, de forma indirecta, `H_org`.
  - Aplica patrones de simplificación de flujos, clarificación de responsables y reducción de dependencias cruzadas.

- `P03_okr_alignment.md`
  - Playbook para recuperar **alineamiento direccional** cuando OKR y prioridades están descoordinados.
  - Refuerza la conexión entre objetivos estratégicos y trabajo operativo, evitando que la organización pierda foco en contextos de crisis o reorganización.

- `P04_security_remediation.md`
  - Playbook para responder a **incidentes de seguridad** o brechas de confianza críticas.
  - Coordina acciones rápidas con governance y equipos técnicos, sin modificar contratos de seguridad pero asegurando que la organización vuelve a un estado aceptable de riesgo.

 > Para detalles de triggers, métricas canónicas, `fases_relacionadas` y `health_gates_relacionados` de cada playbook, ver `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml` y `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`.

## §2. Relación con WSLC, trayectorias y casos

- **WSLC:**
  - Recovery actúa principalmente sobre F13 (Health Monitoring), F14 (Incident Response), F15 (Continuous Execution) y su integración con F16/F17 (learning/adaptation), según se documenta en `30_metodologia_orko/05_fases_evolution/F16_learning_loops.md` y en `30_metodologia_orko/17_validacion_final/validation_final_report.md`.

- **Trayectorias (`30_metodologia_orko/09_trayectorias/`):**
  - Los playbooks Recovery son compatibles con trayectorias `Survival`, `Minimal` y `Avanzada`.
  - `03_decision_matrix.md` utiliza estados de health gates G1–G4 para decidir cuándo activar P01–P04 en cada trayectoria.

- **Casos de ejemplo (`40_implementacion_metodologia/ejemplos/*_completo`):**
  - En los casos auditados, P01–P04 aparecen como respuesta a escenarios de caída de `H_org`, saturación de carga, mala coordinación de objetivos o incidentes críticos.
  - `artefactos.md` por caso documenta qué combinaciones de P01–P04 se usan en conjunto con otros playbooks (p.ej. P09–P11) para recuperar estabilidad y luego optimizar.

## §3. Lineamientos de uso en ORKO v1.0.0

- Tratar P01–P04 como **contratos estables** de la familia Recovery para ORKO v1.0.0 (CAP-16/CAP-18/CAP-19).
- No introducir nuevos playbooks Recovery ni cambiar los campos contractuales de P01–P04 sin pasar por un nuevo CAP y actualizar `VOCABULARIO_CONTROLADO.yaml` y `playbook_instances.yaml`.
- Cualquier ajuste futuro se registrará como backlog o `[NEED]` ligado a CAP-20 (post-1.0.0), evitando cambios silenciosos en esta versión.
