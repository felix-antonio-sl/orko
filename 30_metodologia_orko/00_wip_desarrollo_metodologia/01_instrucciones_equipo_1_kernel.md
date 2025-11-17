# INSTRUCCIONES EQUIPO 1 – KERNEL + FUNDAMENTOS

## 1. Contexto y referencias obligatorias

Antes de trabajar, leer:

- [README_FUENTE_VERDAD.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/README_FUENTE_VERDAD.md:0:0-0:0)
- [SPEC_ARQUITECTURA_DEFINITIVA.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/SPEC_ARQUITECTURA_DEFINITIVA.md:0:0-0:0)
- [PLAN_DESARROLLO_OPERATIVO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_DESARROLLO_OPERATIVO.md:0:0-0:0) (especialmente ETAPA 1)
- [PLAN_ETAPA_1_KERNEL.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_1_KERNEL.md:0:0-0:0)
- [GUIA_AUTOR_CONTENIDO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/GUIA_AUTOR_CONTENIDO.md:0:0-0:0)

Templates y tooling (en [40_implementacion_metodologia/dev_specs](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs:0:0-0:0)):

- [TEMPLATE_FASE_WSLC.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_FASE_WSLC.md:0:0-0:0)
- [TEMPLATE_PLAYBOOK.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_PLAYBOOK.md:0:0-0:0)
- [TEMPLATE_SCHEMA.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_SCHEMA.yaml:0:0-0:0)
- [CHECKLIST_VALIDACION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md:0:0-0:0)
- [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0)
- [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0)
- `scripts/dependency_closure_script.py`

## 2. Objetivo del equipo

Entregar la **Etapa 1 – Kernel (VG1)**:

- Kernel F1,F3,F7,F9,F13 en estado MVO (según [PLAN_ETAPA_1_KERNEL.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_1_KERNEL.md:0:0-0:0)).
- Fundamentos globales listos para que otros equipos puedan trabajar sin ambigüedades:
  - Vocabulario canónico.
  - Dependency graph (kernel, luego extendido).
  - Script de cierre de dependencias.
  - Checklist de validación y templates base.
- Caso **startup ~50p** ejecutado F1→F3→F7→F9→F13.
- `validation_kernel_report.md` con fricciones y decisión VG1.

## 3. Scope y entregables concretos

### 3.1. Fundamentos globales ([dev_specs/](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs:0:0-0:0))

- [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0)  
  - Layer 0–3, términos A1–A5, P1–P5, I1–I8, D1–D4, C1–C5, etc.
- [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0)  
  - Inicial: kernel F1,F3,F7,F9,F13.  
  - Posterior: se extenderá con F2,F4–F6,F8,F10–F12,F14–F18.
- `scripts/dependency_closure_script.py`
- [CHECKLIST_VALIDACION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md:0:0-0:0)
- [TEMPLATE_FASE_WSLC.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_FASE_WSLC.md:0:0-0:0)
- [TEMPLATE_PLAYBOOK.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_PLAYBOOK.md:0:0-0:0)
- [TEMPLATE_SCHEMA.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_SCHEMA.yaml:0:0-0:0)

### 3.2. Fases kernel (`40_implementacion_metodologia/dev_specs/01_fases`)

- `F1_context_assessment.md`
- `F3_trajectory_selection.md`
- `F7_purpose_cascade.md`
- `F9_target_state_design.md`
- `F13_health_monitoring.md`

Cada una debe:

- Derivarse de [TEMPLATE_FASE_WSLC.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/TEMPLATE_FASE_WSLC.md:0:0-0:0).
- Tener §0 Fundamento y §1 Interfaz completos.
- Tener §2–§10 en estado MVO (lista clara de inputs/outputs, proceso y validación).

### 3.3. Caso startup 50p

Artefactos mínimos:

- `context.yaml` (36 parámetros contexto).
- `trajectory.md` (trayectoria seleccionada + rationale).
- `okr_cascade.xlsx` (OKR L4→L1).
- `e6_target.yaml`.
- `h_org_dashboard.yaml`.
- `learnings_kernel.md` (fricciones y decisiones).

Reporte:

- `validation_kernel_report.md` (criterios VG1, resultados, Go/No-Go).

## 4. Secuencia de trabajo sugerida (resumen del plan)

1. **Fundamentos (VOCAB + DEP_GRAPH kernel)**  
   - Completar [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0) con Layer 0–3.  
   - Definir [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0) para F1,F3,F7,F9,F13.  
   - Ejecutar `dependency_closure_script.py` hasta PASS.

2. **Tooling + templates**  
   - Implementar `dependency_closure_script.py` según dev_specs.  
   - Crear/ajustar [CHECKLIST_VALIDACION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md:0:0-0:0) y los 3 templates base.

3. **Fases F1,F3,F7,F9,F13**  
   - Para cada fase: copiar template, completar §0–§1, definir inputs/outputs/dependencies según [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0).

4. **Caso startup + VG1**  
   - Ejecutar F1–F13 sobre el caso startup_50p.  
   - Generar artefactos + `validation_kernel_report.md`.

## 5. Dependencias y coordinación

- **Bloquea a Equipos 2–3–4:**
  - No pueden dar por “completa” una fase que dependa de F1,F3,F7,F9,F13 si estas no están al menos en MVO.
  - No pueden introducir nuevos términos/enums sin coordinar cambios en [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0).

- **Debe coordinar con:**
  - Equipo 2: para asegurar que los outputs de F1,F3,F7,F9,F13 coinciden con los inputs descritos en [PLAN_ETAPA_2_EXPANSION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_2_EXPANSION.md:0:0-0:0).
  - Equipos 3–4: para mantener alineado el vocabulario y grafo a medida que aparezcan nuevos playbooks/trayectorias.

## 6. Reglas internas del equipo

- No mergear PRs sin:
  - [CHECKLIST_VALIDACION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md:0:0-0:0) completado.
  - `dependency_closure_script.py` PASS cuando se toque [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0).
  - §0 Fundamento explícito por archivo.