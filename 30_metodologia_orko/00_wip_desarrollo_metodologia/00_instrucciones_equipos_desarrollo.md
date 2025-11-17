# Coordinación equipos. TIMING, DEPENDENCIAS Y HABILITADORES – 4 EQUIPOS ORKO

**Objetivo:**  
Coordinar el trabajo de 4 equipos en paralelo para construir la metodología ORKO Layer 3, respetando:

- Kernel-first (VG1–VG4).
- Dependencias entre fases F1–F18 y playbooks P01–P15.
- Habilitadores globales (vocab, dependency graph, templates, scripts).

Este documento complementa:

- [README_FUENTE_VERDAD.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/README_FUENTE_VERDAD.md:0:0-0:0)
- [SPEC_ARQUITECTURA_DEFINITIVA.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/SPEC_ARQUITECTURA_DEFINITIVA.md:0:0-0:0)
- [PLAN_DESARROLLO_OPERATIVO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_DESARROLLO_OPERATIVO.md:0:0-0:0)
- [PLAN_ETAPA_1_KERNEL.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_1_KERNEL.md:0:0-0:0)
- [PLAN_ETAPA_2_EXPANSION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_2_EXPANSION.md:0:0-0:0)
- [PLAN_ETAPA_3_PLAYBOOKS.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_3_PLAYBOOKS.md:0:0-0:0)
- [PLAN_ETAPA_4_COMPLETION.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_4_COMPLETION.md:0:0-0:0)
- [00_instrucciones_equipos_desarrollo.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/00_instrucciones_equipos_desarrollo.md:0:0-0:0)
- `01–04_instrucciones_equipo_*.md`

---

## §1. TIMELINE MULTI-EQUIPO (SPRINTS 1–6)

### 1.1. Vista global por SPRINT

```yaml
SPRINT_1:
  Equipo_1: Fundamentos kernel (VOCAB, DEP_GRAPH, scripts, templates)
  Equipo_2: Preparación expansión (lectura, bocetos F2/F4-F6/F8 + schemas)
  Equipo_3: Preparación playbooks (lectura, diseño triggers alto nivel)
  Equipo_4: Preparación completion (lectura, bosquejo trayectorias/gobernance)

SPRINT_2:
  Equipo_1: F1,F3,F7,F9,F13 + caso startup_50p + VG1
  Equipo_2: Diseño detallado SPRINT_3 (F2,F4-F6,F8) alineado a kernel
  Equipo_3: Diseño detallado SPRINT_5 (estructura F14-F18, P01-P08, schema)
  Equipo_4: Diseño detallado SPRINT_6 (trayectorias, governance, métricas)

SPRINT_3:
  Equipo_1: Mantención VOCAB/DEP_GRAPH según necesidades expansión
  Equipo_2: F2,F4,F5,F6,F8 + schemas (compliance, context, jurisdictions, cases)
  Equipo_3: Preparación instancias playbooks (definir tipos de incidentes, gaps, etc.)
  Equipo_4: Bosquejo KPIs/gates basados en outputs esperados de F2–F8

SPRINT_4:
  Equipo_1: Ajustes menores DEP_GRAPH/Fundamentos si expansión lo requiere
  Equipo_2: F10,F11,F12 + validar caso scaleup_200p + VG2
  Equipo_3: Afinar diseño F14–F18 y P01–P08 con datos reales scaleup_200p
  Equipo_4: Empezar borradores de trayectorias Minimal/Survival usando casos kernel+scaleup

SPRINT_5:
  Equipo_1: Soporte a dependencias / vocab si aparecen nuevos conceptos
  Equipo_2: Soporte puntual (explicar fabrics, limits, state_transition)
  Equipo_3: F14–F18 + P01–P08 + playbook_schema + playbook_instances + caso enterprise_2000p + VG3
  Equipo_4: Consolidar diseño trayectorias y governance basándose en 3 casos (startup/scaleup/enterprise)

SPRINT_6:
  Equipo_1: Congelar vocabulario y grafo salvo hotfix de coherencia
  Equipo_2: Soporte datos reales (schemas, casos) para métricas/trayectorias
  Equipo_3: Ajustes finos a playbooks según necesidades governance/métricas
  Equipo_4: Trayectorias, governance, métricas, templates finales, validación I1–I8 + VG4 (release)
```

### 1.2. Estados de trabajo por equipo

- **Equipo 1 (Kernel + Fundamentos)**
  - SPRINT 1–2: **Activo** (fundamentos + kernel + VG1).
  - SPRINT 3–6: **Soporte / mantenimiento** (VOCAB/DEP_GRAPH/chequeos).

- **Equipo 2 (Expansion)**
  - SPRINT 1–2: **Preparación** (lectura, diseño conceptual).
  - SPRINT 3–4: **Activo** (F2–F8, F10–F12, schemas, caso scaleup + VG2).
  - SPRINT 5–6: **Soporte** (datos y ejemplos para playbooks/trayectorias/métricas).

- **Equipo 3 (Playbooks + Evolution)**
  - SPRINT 1–2: **Preparación** (diseño alto nivel de incidentes, flujos, loops, adaptación).
  - SPRINT 3–4: **Diseño consolidado** (sin escribir definitiva F14–F18/P01–P08 mientras no exista VG2).
  - SPRINT 5: **Activo** (F14–F18, P01–P08, schema P09–P15, caso enterprise + VG3).
  - SPRINT 6: **Soporte** (ajustes según governance/gates).

- **Equipo 4 (Completion + Governance + Validación)**
  - SPRINT 1–2: **Preparación** (entender arquitectura, planes, constraints regulatorios).
  - SPRINT 3–4: **Diseño** (bosquejos de trayectorias, governance, métricas).
  - SPRINT 5–6: **Activo** (trayectorias, governance, templates, métricas, I1–I8, VG4).

---

## §2. HABILITADORES GLOBALES

### 2.1. Tabla de habilitadores

```yaml
- id: H1_VOCABULARIO
  artefacto: VOCABULARIO_CONTROLADO.yaml
  owner: Equipo_1
  sprint_creacion: SPRINT_1
  readiness_critico:
    - Layer 0-3 cubiertos para kernel antes de SPRINT_2
  equipos_dependientes: [Equipo_2, Equipo_3, Equipo_4]
  reglas:
    - Cualquier término nuevo debe pasar por Equipo_1
    - Grep términos prohibidos = bloqueo PR

- id: H2_DEP_GRAPH
  artefacto: DEPENDENCY_GRAPH.yaml + dependency_closure_script.py
  owner: Equipo_1
  sprint_creacion: SPRINT_1
  readiness_critico:
    - Subgrafo kernel listo en SPRINT_1
    - Extendido con expansion antes de cierre SPRINT_3
  equipos_dependientes: [Equipo_2, Equipo_3, Equipo_4]
  reglas:
    - No agregar edges sin referenciar SPEC + PLAN_DESARROLLO
    - Cualquier cambio estructural debe pasar `dependency_closure_script.py` (PASS)

- id: H3_TEMPLATES_BASE
  artefacto: TEMPLATE_FASE_WSLC.md, TEMPLATE_PLAYBOOK.md, TEMPLATE_SCHEMA.yaml
  owner: Equipo_1
  sprint_creacion: SPRINT_1
  readiness_critico:
    - Versiones iniciales disponibles al final de SPRINT_1
  equipos_dependientes: [Equipo_1, Equipo_2, Equipo_3]
  reglas:
    - No escribir fases/playbooks/schemas sin usar estos templates
    - Cambios mayores en templates requieren consenso de los 4 equipos

- id: H4_CHECKLIST
  artefacto: CHECKLIST_VALIDACION.md
  owner: Equipo_1
  sprint_creacion: SPRINT_1
  equipos_dependientes: [Todos]
  reglas:
    - Self-review obligatorio antes de cualquier PR
    - PR sin checklist = rechazo automático

- id: H5_CASES
  artefacto: case_instances.yaml (+ artefactos por caso)
  owner: Equipo_2 (estructura), Equipo_1/3/4 (uso)
  sprint_creacion: SPRINT_3
  equipos_dependientes: [Equipo_3, Equipo_4]
  reglas:
    - Todos los casos (startup, scaleup, enterprise, otros) deben seguir estructura común
    - VG1–VG3 deben apuntar a casos definidos aquí
```

---

## §3. DEPENDENCIAS ENTRE EQUIPOS

### 3.1. Equipo 1 como “infraestructura metodológica”

- **Provee:**
  - VOCAB (H1), DEP_GRAPH + script (H2), templates + checklist (H3,H4).
  - Kernel F1,F3,F7,F9,F13 + caso startup (VG1).

- **Recibe:**
  - Feedback de todos los equipos sobre nuevas necesidades de vocab/relaciones.
  - Peticiones de ajustes de grafo al agregar nuevas fases/playbooks/schemas.

- **Regla:**  
  Ningun equipo puede introducir conceptos nuevos de forma estable (nombres de entidades, métricas clave, estados) sin que Equipo 1 los incorpore al VOCAB y, si aplica, al DEP_GRAPH.

---

### 3.2. Equipo 2 dependencias

- **Necesita de Equipo 1 (antes de escribir en serio):**
  - VOCABULARIO listo para kernel.
  - DEP_GRAPH kernel.
  - F1,F3,F7,F9,F13 MVO.

- **Provee a:**
  - Equipo 3: outputs de F10,F11,F12 + schemas (que definen muchas de las condiciones para incidentes, drifts, gaps).
  - Equipo 4: datos de casos Minimal/scaleup_200p (métricas reales para trayectorias, KPIs, gates).

- **Punto crítico de sincronización:**
  - Fin SPRINT 4 (VG2):  
    - Debe existir un estado consistente para que Equipo 3 pueda diseñar/afinar playbooks y Equipo 4 pueda cementar trayectorias.

---

### 3.3. Equipo 3 dependencias

- **Necesita de:**
  - Equipo 1:
    - Vocab y grafo extendido (incluyendo F2–F12).
  - Equipo 2:
    - F2,F4–F6,F8,F10–F12 en MVO.
    - Schemas e instancias (`compliance`, `context`, `jurisdictions`, `cases`).
    - Métricas y resultados de caso scaleup_200p.

- **Provee a:**
  - Equipo 4:
    - F16,F17,F18 como base de aprendizaje/adaptación/convergencia.
    - Playbooks P01–P08 + P09–P15 como “respuestas estandarizadas” que se usan en trayectorias y gates.
    - `validation_playbooks_report.md` con resultados del caso enterprise_2000p.

- **Puntos críticos de sincronización:**
  - Inicio SPRINT 5: inputs de VG2 deben estar “cerrados”.
  - Fin SPRINT 5: outputs de VG3 deben estar disponibles para diseño final de trayectorias/gobernance/métricas.

---

### 3.4. Equipo 4 dependencias

- **Necesita de:**
  - VG1, VG2 y VG3 aprobados (Evidencia de startup, scaleup, enterprise).
  - F1–F18 y P01–P15 en MVO+.
  - Schemas + casos + métricas reales (desde equipos 1–3).

- **Provee a:**
  - La organización en general:
    - Trayectorias Minimal/Avanzada/Survival completas.
    - Governance/roles/paths de escalamiento.
    - KPIs, health gates, dashboards y métricas de adopción/efectividad metodología.
    - Validación formal I1–I8 y `validation_final_report.md`.

- **Punto crítico de sincronización:**
  - SPRINT 6:  
    - Todos los equipos deben estar disponibles para responder a hallazgos de validación (ajustes ligeros) sin introducir cambios estructurales grandes.

---

## §4. FLUJO DE TRABAJO ENTRE SPRINTS (HANDSHAKES)

### 4.1. Handshake H0 – Arranque (inicio SPRINT 1)

- Actividades:
  - Revisión conjunta de [README_FUENTE_VERDAD.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/README_FUENTE_VERDAD.md:0:0-0:0) + [PLAN_DESARROLLO_OPERATIVO.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_DESARROLLO_OPERATIVO.md:0:0-0:0).
  - Confirmación de ownership:
    - Equipo 1: VOCAB, DEP_GRAPH, templates/script.
    - Equipo 2: schemas, F2–F8,F10–F12.
    - Equipo 3: F14–F18 + P01–P15.
    - Equipo 4: trayectorias, governance, métricas, validación final.
  - Acordar formato de changelog por archivo.

### 4.2. Handshake H1 – Fundamentos listos (fin SPRINT 1)

- Criterios:
  - H1_VOCAB (Layer 0–3 suficiente para kernel) ✔
  - H2_DEP_GRAPH (subgrafo kernel) ✔
  - Templates y checklist en estado usable ✔

- Impacto:
  - Equipos 2–3–4 ya pueden:
    - Crear skeletons de sus fases/playbooks/schemas.
    - Referenciar vocab y dependencias de kernel.

### 4.3. Handshake H2 – Kernel validado (VG1, fin SPRINT 2)

- Criterios:
  - F1,F3,F7,F9,F13 MVO, caso startup_50p ejecutado.
  - `validation_kernel_report.md` ✔

- Impacto:
  - Equipo 2 puede ejecutar SPRINT 3–4 con base sólida.
  - Equipo 3 puede afinar diseño de F14–F18 triggers y P01–P08.
  - Equipo 4 puede modelar trayectorias Minimal/Survival con más realismo.

### 4.4. Handshake H3 – Expansion completada (VG2, fin SPRINT 4)

- Criterios:
  - F2,F4,F5,F6,F8,F10,F11,F12 en MVO.
  - Schemas + instances definidos.
  - Caso scaleup_200p validado.
  - `validation_expansion_report.md` ✔

- Impacto:
  - Equipo 3 puede ejecutar SPRINT 5 (playbooks + F14–F18) usando datos sólidos.
  - Equipo 4 puede consolidar matrices de decisión y trayectorias Minimal/Avanzada.

### 4.5. Handshake H4 – Playbooks + Evolution completados (VG3, fin SPRINT 5)

- Criterios:
  - F14–F18 y P01–P08 completados, schema + instances P09–P15 definidos.
  - Caso enterprise_2000p validado.
  - `validation_playbooks_report.md` ✔

- Impacto:
  - Equipo 4 puede:
    - Ajustar trayectorias para incluir playbooks como mecanismos concretos de respuesta.
    - Definir health gates que gatillan playbooks específicos.
    - Diseñar governance alineada a responsabilidades HAIC.

### 4.6. Handshake H5 – Completion + Release (VG4, fin SPRINT 6)

- Criterios:
  - I1–I8 validados con evidencia.
  - 18/18 fases, 15/15 playbooks, trayectorias, templates, calculadoras, casos completos.
  - `validation_final_report.md` ✔

- Impacto:
  - Metodología ORKO Layer 3 lista para:
    - Deployment en organizaciones.
    - Training y documentación externa.
    - Extensión vía schemas/instances.
    - Integración con plataforma/SDKs.

---

## §5. REGLAS DE GESTIÓN DE CAMBIOS ENTRE EQUIPOS

- **Cambios en VOCAB/DEP_GRAPH (Equipo 1):**
  - Deben anunciarse en canal compartido (ej. `#orko-core`) con:
    - Qué términos se agregan/cambian.
    - Qué fases/schemas/playbooks se ven afectados.
  - Equipo 2–3–4 validan impacto en sus artefactos.

- **Cambios en schemas (Equipo 2):**
  - Implican posible impacto en:
    - Playbooks (triggers basados en datos).
    - Trayectorias/metrics (KPIs basados en instancias).
  - Requieren aviso explícito a Equipo 3 y 4.

- **Cambios en playbooks (Equipo 3):**
  - Pueden requerir:
    - Ajustes de health gates (Equipo 4).
    - Ajustes de dependencias (Equipo 1).
  - Cualquier nuevo tipo de incidente/gap debe mapearse a vocab/graph.

- **Cambios en governance/metrics (Equipo 4):**
  - No pueden contradecir:
    - HAIC (I5) definido en SPEC.
    - Dependencias declaradas en [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0).
  - Si se exige nueva métrica, debe añadirse a VOCAB y, si aplica, a fases/playbooks.
