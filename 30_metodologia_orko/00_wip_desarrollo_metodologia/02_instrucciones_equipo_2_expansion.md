# INSTRUCCIONES EQUIPO 2 – EXPANSIÓN (DEVELOPMENT + SCHEMAS + IMPLEMENTATION)

## 1. Contexto y referencias obligatorias

Leer antes de trabajar:

- [README_FUENTE_VERDAD.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/README_FUENTE_VERDAD.md:0:0-0:0)
- [SPEC_ARQUITECTURA_DEFINITIVA.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/SPEC_ARQUITECTURA_DEFINITIVA.md:0:0-0:0)
- [PLAN_DESARROLLO_OPERATIVO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_DESARROLLO_OPERATIVO.md:0:0-0:0) (ETAPA 2)
- [PLAN_ETAPA_2_EXPANSION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_2_EXPANSION.md:0:0-0:0)
- [GUIA_AUTOR_CONTENIDO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/GUIA_AUTOR_CONTENIDO.md:0:0-0:0)

Usar templates/tooling de [40_implementacion_metodologia/dev_specs](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs:0:0-0:0):

- [TEMPLATE_FASE_WSLC.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_FASE_WSLC.md:0:0-0:0)
- [TEMPLATE_SCHEMA.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_SCHEMA.yaml:0:0-0:0)
- [CHECKLIST_VALIDACION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md:0:0-0:0)
- [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0)
- [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0)
- `scripts/dependency_closure_script.py`

## 2. Objetivo del equipo

Entregar la **Etapa 2 – Expansion (VG2)**:

- Fases development completas: F2,F4,F5,F6,F8.
- Fases implementation completas: F10,F11,F12.
- Schemas tipo e instancias:
  - `compliance_framework_schema.yaml` + `compliance_framework_instances.yaml`
  - `context_pattern_schema.yaml`
  - `jurisdiction_instances.yaml`
  - `case_instances.yaml`
- Caso **scaleup 200p** ejecutado F1–F12.
- `validation_expansion_report.md`.

## 3. Entregables concretos

### 3.1. Fases development (`01_fases/`)

- `F2_vision_definition.md`
- `F4_capability_mapping.md`
- `F5_flow_design.md`
- `F6_information_architecture.md`
- `F8_limits_definition.md`

### 3.2. Fases implementation

- `F10_quick_wins.md`
- `F11_fabric_deployment.md`
- `F12_state_transition.md`

### 3.3. Schemas e instancias (`dev_specs/schemas/`)

- `compliance_framework_schema.yaml`
- `compliance_framework_instances.yaml`
- `context_pattern_schema.yaml`
- `jurisdiction_instances.yaml` (≥10 jurisdicciones)
- `case_instances.yaml` (≥6 casos)

### 3.4. Caso scaleup_200p

- Aplicar F1–F12 al caso scaleup_200p.  
- Producir artefactos y `validation_expansion_report.md` (criterios VG2).

## 4. Plan de trabajo por SPRINT (según PLAN_ETAPA_2_EXPANSION.md)

- **SPRINT 3 – DEVELOPMENT + SCHEMAS**
  - FASE 1–5: F2,F4,F5,F6,F8 + schemas e instancias.

- **SPRINT 4 – IMPLEMENTATION**
  - FASE 6–10: F10,F11,F12 + templates de compliance + validación caso scaleup.

## 5. Dependencias a respetar

- Inputs obligatorios desde Equipo 1:
  - [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0) estable.
  - [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0) (kernel ya definido).
  - F1,F3,F7,F9,F13 completadas MVO.

- Reglas:
  - No crear enums/taxonomías nuevas sin validar con Equipo 1.
  - Antes de cerrar una fase o schema:
    - Alinear campos/IDs con [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0).
    - Validar contra [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0) usando `dependency_closure_script.py`.

## 6. Coordinación

- **Con Equipo 3:**
  - Outputs de F10–F12 y schemas son inputs para F14–F18 y playbooks (drift, capacity gaps, etc.).

- **Con Equipo 4:**
  - Proveer métricas, ejemplos y casos realistas (scaleup_200p) que se usarán en trayectorias y métricas globales.

## 7. Reglas internas del equipo

- Todo archivo nuevo:
  - Debe seguir [GUIA_AUTOR_CONTENIDO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/GUIA_AUTOR_CONTENIDO.md:0:0-0:0).
  - Debe pasar [CHECKLIST_VALIDACION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md:0:0-0:0).
- Cualquier modificación de schemas:
  - Documentar en el changelog del archivo.
  - Avisar a Equipo 3 y 4 si afecta triggers/inputs de playbooks o trayectorias.