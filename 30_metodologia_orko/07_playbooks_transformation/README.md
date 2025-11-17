# 07 – Playbooks Transformation (P05–P08)

## §0. Propósito del bloque

- **Rol en la metodología:**
  - Los playbooks de esta carpeta representan la **familia Transformation** de VG3.
  - Se usan cuando la organización quiere **cambiar estructuralmente** su forma de operar (autonomía, escalamiento, optimización sostenida), no solo recuperarse de incidentes.
  - Operan principalmente sobre fases WSLC de **development/implementation/evolution** (F4–F6, F8, F10–F12, F16–F17), conectando decisiones de arquitectura, diseño de flujo, deployment e iteración.
- **Contratos de referencia:**
  - Definiciones canónicas de P05–P08 en `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`.
  - Campos de schema en `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml`.
  - Instancias en `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml` (tipos, métricas canónicas, fases, health gates, trayectorias).

## §1. Contenido del bloque

- `P05_bounded_autonomy_m6.md`
  - Playbook para diseñar/ajustar **bounded autonomy** basado en métricas de eficiencia (`eta_org`) y retorno de habilitación (`ROI_Habilitacion`).
  - Conecta decisiones de arquitectura organizacional con governance y límites de decisión por rol/equipo.

- `P06_pilot_transformation.md`
  - Playbook para ejecutar **pilotos de transformación** acotados, con foco en aprender rápido sin poner en riesgo el sistema completo.
  - Usa F11/F16/F17 para establecer ciclos de feedback controlados y criterios de éxito/fallo.

- `P07_scale_transformation.md`
  - Playbook para **escalar** una transformación validada en pilotos (P06) al resto de la organización o a dominios adicionales.
  - Requiere coordinación fuerte con governance, métricas y casos para evitar efectos colaterales no deseados.

- `P08_optimization_sustain.md`
  - Playbook para **optimizar y sostener** resultados de transformaciones, evitando regresiones y deuda organizacional.
  - Alinea mejoras continuas con health gates y loops de aprendizaje (F16).

 > Para triggers detallados, métricas canónicas y `fases_relacionadas`, ver `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml` y `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`.

## §2. Relación con WSLC, trayectorias y casos

- **WSLC y F16/F17:**
  - Estos playbooks están diseñados para trabajar en ciclos iterativos documentados en `30_metodologia_orko/05_fases_evolution/F16_learning_loops.md`.
  - F17 (Adaptation) usa salidas de P05–P08 para decidir si escalar, ajustar o revertir transformaciones.

- **Trayectorias (`30_metodologia_orko/09_trayectorias/`):**
  - En trayectorias `Minimal` y `Avanzada`, P05–P08 permiten mover la organización a estados de mayor capacidad/autonomía cuando los gates dejan de estar en modo crítico.
  - `03_decision_matrix.md` documenta cuándo es razonable activar playbooks Transformation según contexto y estado de G1–G4.

- **Casos de ejemplo:**
  - En los casos `40_implementacion_metodologia/ejemplos/*_completo`, P05–P08 aparecen como bloques que conectan decisiones estratégicas de contexto con cambios en arquitectura, equipos y flujos.
  - La combinación P05/P06/P07/P08 varía según trayectoria (`Minimal` vs `Avanzada`) y sector (startup, scaleup, sector público, etc.).

## §3. Lineamientos de uso en ORKO v1.0.0

- Tratar P05–P08 como **contratos estables** de la familia Transformation en ORKO v1.0.0 (CAP-16/CAP-18/CAP-19).
- No agregar nuevos playbooks Transformation ni modificar campos contractuales de P05–P08 sin un nuevo CAP que actualice `VOCABULARIO_CONTROLADO.yaml` y `playbook_instances.yaml`.
- Usar estos READMEs solo como guía de uso/navegación; cualquier cambio de diseño debe pasar por el proceso formal de evolución de la metodología.
