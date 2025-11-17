# 03_fases_implementation – Bloque Implementation (F10–F12)

Este directorio agrupa las fases de **Implementation** del WSLC ORKO. Su función es llevar a la práctica el diseño construido en el bloque Development (F4–F9) mediante quick wins, despliegue de tejidos (TF1–TF3) y gestión de transiciones de estado.

---

## §0 Propósito del bloque

- Traducir el **estado objetivo** diseñado en F9 y los insumos de F4–F8 en cambios concretos en el sistema de trabajo.
- Asegurar que los cambios se implementan de forma **incremental y controlada** (quick wins, despliegue por tejidos, planes de transición), respetando límites de contexto y trayectoria.
- Mantener la **trazabilidad** entre contexto, diseño y ejecución, de modo que F13/F17 puedan evaluar impacto y ajustar trayectorias según los health gates.

Este bloque se apoya en los contratos formales descritos en:

- `VOCABULARIO_CONTROLADO.yaml` (fase_id F10–F12, axiomas, primitivos, invariantes, dominios y tejidos relevantes).
- `DEPENDENCY_GRAPH.yaml` (dependencias `reads_from`/`writes_to` entre F10–F12 y el resto de fases).
- `SPEC_ARQUITECTURA_DEFINITIVA.md` (Expansion Layer 2 – Implementation).

---

## §1 Fases incluidas

### F10 – Quick Wins

- Selecciona e implementa **quick wins** sobre capacidades, flujos e información, apoyándose en:
  - Gaps e inventario de capacidades (`F4.capacity_gaps`, `F4.p1_inventory`).
  - Mapas de flujo y métricas de handoffs (`F5.vsm_maps`, `F5.handoff_ratio`).
  - Catálogo de límites (`F8.limit_catalog`) y estado objetivo (`F9.e6_target`).
  - Observaciones de `H_org` en tiempo casi real (`F13.h_org_dashboard_live`).
- Produce artefactos como `quick_wins_backlog.yaml`, `quick_wins_execution_log.md`, `quick_wins_impact.yaml` y `h_org_improvement_plan.md`, que alimentan F12 y F13.
- Se apoya en axiomas de organización/flujo/cambio y en invariantes como I1 (minimalidad) e I7 (emergencia/complejidad), según `F10_quick_wins.md`.

### F11 – Fabric Deployment

- Planifica y ejecuta el **despliegue de tejidos** TF1_Capacity, TF2_Flow y TF3_Information, en coherencia con:
  - Trayectoria seleccionada (`F3.trajectory_selected`).
  - Inventario de capacidades (F4), VSM (F5) y catálogo de datasets (F6).
  - Catálogo de límites (F8) y estado objetivo arquitectural (`F9.e6_target`).
- Produce planes y estados de despliegue (`fabric_deployment_plan.yaml`, `tf1_capacity_plan.md`, `tf2_flow_plan.md`, `tf3_information_plan.md`, `fabric_status.yaml`) consumidos por F12 y F13.
- Se apoya en los tejidos TF1–TF3 y en invariantes I1/I5, según `F11_fabric_deployment.md`.

### F12 – State Transition

- Define y gobierna la **transición de estado** desde el estado actual (`E6_current`, medido vía F1/F13) hacia el estado objetivo (`E6_target` de F9), usando como insumos:
  - Línea base de H_org (`F1.h_org_baseline`) y dashboard en vivo (`F13.h_org_dashboard_live`).
  - Estado objetivo arquitectural (`F9.e6_target`).
  - Plan de despliegue de tejidos (`F11.fabric_deployment_plan`) e impacto de quick wins (`F10.quick_wins_impact`).
- Produce el `state_transition_plan.yaml`, estados intermedios (`e6_intermediate.yaml`) y artefactos de validación/seguimiento de transición (`transition_validation.md`, `transition_status.yaml`) consumidos por F13 y F18.
- Se apoya en la entidad `E6_ArchitecturalState` y en invariantes I3 (trazabilidad) e I6 (trajectory awareness), como se detalla en `F12_state_transition.md`.

---

## §2 Relación con trayectorias, health gates y casos

- **Trayectorias (`Survival`/`Minimal`/`Avanzada`):**
  - F10–F12 consumen `F3.trajectory_selected` para decidir el **ritmo y alcance** de cambios:
    - En contextos `Minimal`, F10 prioriza quick wins de bajo esfuerzo y alto impacto, y F11/F12 despliegan tejidos de forma más gradual.
    - En contextos preparados para `Avanzada`, los planes de despliegue y transición pueden asumir cambios más profundos, siempre alineados con F9.

- **Health gates (G1–G4):**
  - F10 utiliza señales de G1–G3 para priorizar quick wins que recuperen o mejoren H_org y eficiencia antes de transiciones más grandes.
  - F12 usa H_org baseline/live y el estado de transición para decidir cuándo es seguro avanzar hacia estados intermedios/finales, conectando con decisiones de F17 (Adaptation) y F18 (Convergence Check).

- **Casos de ejemplo:**
  - En los casos `startup_50p`, `scaleup_200p` y `gore_nuble`, las decisiones de quick wins, despliegue de tejidos y transición de estado aparecen reflejadas en `artefactos.md` y se apoyan en la trayectoria elegida (`Minimal`) y en los contratos de F10–F12.
  - CAP-17 utiliza estos casos para comprobar que Implementation se engancha correctamente al diseño de Development y a las métricas/health gates definidas, sin introducir fases ni artefactos fuera de catálogo.

---

## §3 Estado en ORKO v1.0.0

- Según `validation_final_report.md` (§2.3), las fases F10, F11 y F12 cuentan con `§0 FUNDAMENTO` explícito y están trazadas al VOCAB/DEP_GRAPH, por lo que se consideran **`PASSED`** a nivel de fundamentación en ORKO v1.0.0.
- El bloque Implementation está definido como **contrato de diseño y ejecución** a nivel de fases WSLC; la profundidad de ejemplos, plantillas específicas y tooling adicional se mantiene en estado **MVO** y se trata como backlog post‑1.0.0.
- Cualquier futura evolución de F10–F12 (por ejemplo, mayor detalle operativo o integración con instrumentación avanzada) deberá entrar como nuevo CAP posterior a la RELEASE, respetando el kernel y los contratos existentes.

