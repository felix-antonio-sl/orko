# 02_fases_development – Bloque Development (F4–F9)

Este directorio agrupa las fases de **Development** del WSLC ORKO. Su función es traducir el contexto inicial (F1–F3) en un diseño coherente de **capacidades**, **flujos**, **arquitectura de información** y **límites** que luego serán implementados y operados en los bloques siguientes.

---

## §0 Propósito del bloque

- Conectar la **visión/contexto** levantados en Initiation (F1–F3) con un diseño concreto del sistema de trabajo.
- Definir **qué capacidades** son necesarias (F4), **cómo fluye el trabajo** (F5), **cómo se estructura la información** (F6) y **qué límites/constraints** aplican (F8), preparando el terreno para el **estado objetivo** (F9).
- Servir de puente entre **trayectorias** (`Survival`/`Minimal`/`Avanzada`) y las decisiones de implementación, manteniendo trazabilidad con el kernel (VOCAB + DEP_GRAPH) y con los invariantes I1–I8.

Este bloque se apoya en los contratos formales descritos en:

- `VOCABULARIO_CONTROLADO.yaml` (layer_0–layer_3).
- `DEPENDENCY_GRAPH.yaml` (relaciones `reads_from`/`writes_to` entre fases).
- `SPEC_ARQUITECTURA_DEFINITIVA.md` (sección de Expansion Layer 1 – Development).

---

## §1 Fases incluidas

### F4 – Capability Mapping

- Traduce el perfil de contexto (`F1.context_profile_36_params`) y la trayectoria seleccionada (`F3.trajectory_selected`) en un **inventario de capacidades** alineado con P1_Capacidad.
- Produce artefactos como `capacity_inventory.yaml`, `skills_matrix.xlsx` y `capacity_gaps.yaml`, que alimentan F5, F7, F9 y F10.
- Está anclada a axiomas A1/A3, al primitivo P1_Capacidad y a invariantes como I4/I5, según `§0 FUNDAMENTO` de `F4_capability_mapping.md`.

### F5 – Flow Design

- Diseña los **flujos de trabajo** críticos usando la capacidad definida en F4, el contexto (F1), la trayectoria (F3) y el cascade de propósito (F7).
- Genera mapas de flujo (VSM) y decisiones de optimización que serán usadas por F9–F11 y por fases de implementación.
- Se apoya en el primitivo P2_Flujo y en invariantes como I2/I7, según `F5_flow_design.md`.

### F6 – Information Architecture

- Define la **arquitectura de información** necesaria para soportar capacidades y flujos: datasets críticos, dominios de datos y principios de governance.
- Produce artefactos como `critical_datasets.yaml`, `data_domain_model.md` e `information_governance.md`, que alimentan F9 y F11.
- Se apoya en el tejido `TF3_Information` y en invariantes I3/I8, como se describe en `F6_information_architecture.md`.

### F7 – Purpose Cascade

- Fase encargada de **cascadear propósito y objetivos** (por ejemplo, OKR) desde la visión (F2) hacia capacidades, flujos e información.
- Entrega artefactos como `okr_cascade` que son consumidos por F5 y F6.
- En ORKO v1.0.0, su contrato conceptual está definido a nivel de SPEC y DEP_GRAPH; el detalle de `§0 FUNDAMENTO` está en estado más incipiente y se clasifica como `CONDITIONAL` en `validation_final_report.md`.

### F8 – Limits Definition

- Identifica y clasifica los **límites** (regulatorios, de riesgo, técnicos, presupuestarios) relevantes para el sistema de trabajo.
- Usa inputs de contexto (constraints de F1/F3) y esquemas de compliance (`compliance_framework_instances.yaml`) para construir `limit_catalog.yaml`, `compliance_framework_instances.yaml` y `limit_phase_matrix.md`.
- Prepara a F6, F9, F10 y F11, asegurando que las decisiones de diseño respeten los límites definidos.

### F9 – Target State Design

- Integra los resultados de F4–F6 y F8 en un **diseño de estado objetivo** del sistema de trabajo (capacidades, flujos, información y límites coherentes).
- Sirve de base para los bloques de Implementation y Operation (F10–F12), donde este diseño se lleva a la práctica.
- En ORKO v1.0.0, su rol está descrito a nivel de arquitectura y DEP_GRAPH; los detalles de §0/§1 se consideran todavía en evolución y se tratan como `CONDITIONAL` en las auditorías de CAP-17.

---

## §2 Relación con trayectorias, health gates y casos

- **Trayectorias (`Survival`/`Minimal`/`Avanzada`):**
  - F4–F6/F8/F9 consumen `F3.trajectory_selected` para ajustar la profundidad y el alcance del diseño (por ejemplo, un caso `Minimal` puede limitar el número de capacidades o flujos activos en el primer ciclo).
  - Las reglas de `03_decision_matrix.md` y los health gates (`02_health_gates.md`) condicionan qué tanto se puede avanzar hacia el estado objetivo según H_org, eficiencia y ROI de habilitación.

- **Health gates (G1–G4):**
  - El diseño de capacidades/flujo/información debe ser compatible con las bandas definidas en G1–G4; por ejemplo, escenarios de `Survival` pueden llevar a versiones más acotadas del diseño.
  - F4–F6/F8 contribuyen a evidenciar brechas que luego serán monitoreadas por F13/F15/F17.

- **Casos de ejemplo:**
  - En los casos `startup_50p`, `scaleup_200p` y `gore_nuble`, el bloque Development se refleja en las decisiones documentadas en `trajectory.md` y en los artefactos listados en `artefactos.md` (capacidad, flujo, información, límites).
  - CAP-17 utiliza estos casos para verificar que el uso de F4–F8 es coherente con el contexto, la trayectoria elegida y los templates/calculadoras asociadas.

---

## §3 Estado en ORKO v1.0.0

- Según `validation_final_report.md` (§2.3), las fases F4, F5, F6 y F8 cuentan con `§0 FUNDAMENTO` explícito y trazado al VOCAB/DEP_GRAPH; F7 y F9 están en estado **CONDITIONAL** a nivel de fundamento/interfaz, aunque su rol en la arquitectura está definido.
- El bloque Development se considera **suficientemente especificado** para ORKO v1.0.0 como contrato de diseño (no de implementación detallada), siempre que:
  - No se modifique el kernel (VOCAB/DEP_GRAPH) sin nuevos CAP.
  - Las decisiones que dependan de F7/F9 se documenten reconociendo su estado `CONDITIONAL`.
  - Cualquier profundización en contenido (plantillas, ejemplos detallados por fase) se trate como backlog post‑1.0.0.
- CAP-20 busca que este README deje claro el rol del bloque Development dentro de `30_metodologia_orko`, ayudando a leer F4–F9 en conjunto sin introducir contratos nuevos.

