# INSTRUCCIONES EQUIPO 3 – PLAYBOOKS + EVOLUTION

## 1. Contexto y referencias obligatorias

Leer antes de trabajar:

- [README_FUENTE_VERDAD.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/README_FUENTE_VERDAD.md:0:0-0:0)
- [SPEC_ARQUITECTURA_DEFINITIVA.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/SPEC_ARQUITECTURA_DEFINITIVA.md:0:0-0:0)
- [PLAN_DESARROLLO_OPERATIVO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_DESARROLLO_OPERATIVO.md:0:0-0:0) (ETAPA 3)
- [PLAN_ETAPA_3_PLAYBOOKS.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_3_PLAYBOOKS.md:0:0-0:0)
- [GUIA_AUTOR_CONTENIDO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/GUIA_AUTOR_CONTENIDO.md:0:0-0:0)

Usar templates/tooling de [dev_specs](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs:0:0-0:0):

- [TEMPLATE_FASE_WSLC.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_FASE_WSLC.md:0:0-0:0)
- [TEMPLATE_PLAYBOOK.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_PLAYBOOK.md:0:0-0:0)
- [TEMPLATE_SCHEMA.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_SCHEMA.yaml:0:0-0:0)
- [CHECKLIST_VALIDACION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md:0:0-0:0)
- [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0)
- [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0)

## 2. Objetivo del equipo

Entregar la **Etapa 3 – Playbooks + Evolution (VG3)**:

- Fases F14,F15,F16,F17,F18 en MVO.
- Playbooks:
  - P01–P08 documentados en detalle.
  - `playbook_schema.yaml` + `playbook_instances.yaml` (P09–P15).
- Caso enterprise_2000p ejecutado F1–F18 + playbooks.
- `validation_playbooks_report.md`.

## 3. Entregables concretos

### 3.1. Fases (`01_fases/`)

- `F14_incident_response.md`
- `F15_continuous_execution.md`
- `F16_learning_loops.md`
- `F17_adaptation.md`
- `F18_convergence_check.md`

### 3.2. Playbooks recovery (`06_playbooks_recovery/`)

- `P01_low_h_org_recovery.md`
- `P02_handoff_reduction.md`
- `P03_okr_alignment.md`
- `P04_security_remediation.md`
- `P05_bounded_autonomy_m6.md`

### 3.3. Playbooks transformación + schema

- `P06_pilot_transformation.md`
- `P07_scale_transformation.md`
- `P08_optimization_sustain.md`
- `dev_specs/schemas/playbook_schema.yaml`
- `dev_specs/playbook_instances.yaml` (P09–P15 parametrizados).

### 3.4. Caso enterprise_2000p

- Ejecutar F1–F18 + playbooks relevantes sobre un caso enterprise (~2000p).
- Producir `validation_playbooks_report.md`.

## 4. Dependencias

- Requiere que equipos 1 y 2 hayan entregado:
  - F1–F13 (al menos MVO).
  - Schemas/instances de compliance, context, jurisdicciones y casos.
- Respetar `DEPENDENCY_SEQUENCING`:

  ```yaml
  F14 ← F8,F10,F13
  F15 ← F7,F11
  F16 ← F13,F14,F15
  F17 ← F3,F13,F16
  F18 ← F9,F12,F13
  ```

## 5. Uso de TEMPLATE_PLAYBOOK

- Todo P{NN} debe seguir [TEMPLATE_PLAYBOOK.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_PLAYBOOK.md:0:0-0:0):

  - §0: Fundamento (Axiomas, Primitivos, Invariantes, métricas de F13).
  - §1: Trigger → condición explícita (H_org, handoff_ratio, alignment_score, incidents, etc.).
  - §3: Proceso remediation en 3–4 bloques claros.
  - §4–§7: Stakeholders, artefactos, métricas, riesgos y escalación.

## 6. Coordinación

- Con Equipo 2:
  - Alinear triggers y datos de playbooks con schemas/instances (drift, capacity_gaps, data_quality, etc.).
- Con Equipo 4:
  - Entregar información clara de:
    - Qué playbooks activan qué trayectorias.
    - Qué métricas se usan para triggers y éxito de playbooks.

## 7. Reglas internas del equipo

- No inventar nuevos triggers sin anclarlos a métricas ya definidas en F13/F16 o en schemas.
- Cualquier nuevo playbook o cambio mayor:
  - Documentar en changelog.
  - Validar con [CHECKLIST_VALIDACION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md:0:0-0:0).