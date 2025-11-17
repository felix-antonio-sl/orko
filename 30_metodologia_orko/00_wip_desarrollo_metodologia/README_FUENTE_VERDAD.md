# FUENTE DE VERDAD CONSOLIDADA - METODOLOGÍA ORKO

**Estado original (2024):** DEFINITIVA - Production Spec  
**Fecha original:** 14 Noviembre 2024  
**Propósito:** Índice maestro documentos prescriptivos Layer 3  
**Actualización ORKO v1.0.0 (CAP-21, 2025-11-18):** Este README describe la fuente de verdad de **planificación y diseño** previa al desarrollo. Para el estado validado de la metodología ORKO v1.0.0, la fuente de verdad principal pasa a ser `30_metodologia_orko/17_validacion_final/validation_final_report.md`, junto con `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md` y `30_metodologia_orko/00_wip_desarrollo_metodologia/board_coordinación.md` (CAP-14–CAP-21).

---

## §0. DOCUMENTOS CONSOLIDADOS

```yaml
Consolidación_Entrada:
  Documentos_WIP_Sintetizados:
    - 10_propuesta_metodologia.md
    - 20_guia_desarrollo_metodologia.md
    - 30_como_llegamos_hasta_aqui.md
    - 40_evaluacion_estructural_final.md
    - 50_roadmap_implementacion_detallado.md
    - 60_propuesta_colega.md
    - 00b_mapeo_dominios_fases.md
  
  Documentos_Fuente_Verdad_Generados:
    1. SPEC_ARQUITECTURA_DEFINITIVA.md
    2. PLAN_DESARROLLO_OPERATIVO.md
    3. GUIA_AUTOR_CONTENIDO.md
    4. README_FUENTE_VERDAD.md (este archivo)

Eliminación_Redundancias:
  ✅ ADRs consolidados en SPEC_ARQUITECTURA
  ✅ Roadmap unificado en PLAN_DESARROLLO
  ✅ Templates consolidados en GUIA_AUTOR
  ✅ Evaluaciones + feedback sintetizados
```

---

## §1. ARQUITECTURA DEFINITIVA

**Documento:** `SPEC_ARQUITECTURA_DEFINITIVA.md`

**Contenido:**
- ADR-001 a ADR-006 (decisiones aprobadas)
- Estructura directorios 30/ + 40/ definitiva
- Kernel 5 fases (F1→F3→F7→F9→F13)
- Fases expansion (F2,F4-F6,F8,F10-F12,F14-F18)
- Playbooks priorización (P01-P15)
- Trayectorias definitivas (Survival, Minimal, Avanzada, Parametric)
- Schemas tipo (compliance, context, playbook)
- Métricas calidad definitivas
- Validación invariantes I1-I8
- Dependency graph completo

**Quién usa:**
- Lead Architecture: Referencia decisiones
- Desarrolladores: Estructura + dependencies
- QA: Validación invariantes + métricas

**Cuándo consultar:**
- ANTES iniciar desarrollo cualquier fase/playbook
- Para resolver ambigüedades arquitectónicas
- Durante peer review coherencia

---

## §2. PLAN DESARROLLO OPERATIVO

**Documentos:**
- `PLAN_DESARROLLO_OPERATIVO.md` (maestro overview)
- `PLAN_ETAPA_1_KERNEL.md` (SPRINTs 1-2, FASE a FASE)
- `PLAN_ETAPA_2_EXPANSION.md` (SPRINTs 3-4, FASE a FASE)
- `PLAN_ETAPA_3_PLAYBOOKS.md` (SPRINT 5, FASE a FASE)
- `PLAN_ETAPA_4_COMPLETION.md` (SPRINT 6, FASE a FASE)

**Contenido Maestro:**
- Roadmap 4 etapas overview
- Timeline 6 semanas global
- Métricas éxito global
- Dependency sequencing

**Contenido Planes Detallados:**
- **Etapa 1 Kernel:** FASE a FASE SPRINTs 1-2, VOCABULARIO desarrollo, F1-F3-F7-F9-F13 detallados, scripts/templates fundamentales, Validation Gate 1 completo, Caso startup paso a paso
- **Etapa 2 Expansion:** FASE a FASE SPRINTs 3-4, F2+F4-F6+F8 paralelo, F10-F12 implementation, Schemas compliance+context detallados, 10 jurisdictions + 6 casos, Validation Gate 2
- **Etapa 3 Playbooks:** FASE a FASE SPRINT 5, F14-F18 evolution, P01-P08 individual, playbook_schema+instances P09-P15, Caso enterprise, Validation Gate 3
- **Etapa 4 Completion:** FASE a FASE SPRINT 6, 6 trayectorias completas, Governance+Métricas, 25 templates finales, Validación I1-I8 formal, Validation Gate 4 RELEASE

**Quién usa:**
- Project Manager: PLAN_DESARROLLO_OPERATIVO.md overview
- Desarrolladores: Plan etapa específico día a día
- QA: Validation gates criterios

**Cuándo consultar:**
- Overview: Planificación sprints
- Etapa específica: Ejecución diaria
- Validation gates: Completar etapa

---

## §3. GUÍA AUTOR CONTENIDO

**Documento:** `GUIA_AUTOR_CONTENIDO.md`

**Contenido:**
- Template Fase WSLC (§0-§11)
- Template Playbook (§0-§7)
- Template Schema YAML
- Checklist pre-commit por tipo
- Flujo trabajo autor (antes → durante → después)
- Antipatrones comunes
- Métricas calidad autor
- Recursos desarrollo

**Quién usa:**
- Autores fases/playbooks/schemas
- Peer reviewers
- QA contenido

**Cuándo consultar:**
- ANTES escribir cualquier fase/playbook/schema
- Durante escritura (validar estructura)
- Después escritura (self-review)
- Durante peer review

---

## §4. DOCUMENTOS FUNDACIONALES (No Modificar)

```yaml
Layer_0_Fundamentos:
  - out/00_fundamentos_teoricos.md
    * A1-A5, P1-P5, I1-I8
    * Contratos C1-C5
    * Base axiomática

Layer_1_Arquitectura:
  - out/10_arquitectura_orko.md
    * D1-D4 dominios
    * E6-E7 entidades
    * Principios PD

Layer_2_Tejidos:
  - out/20_tejidos.md
    * TF1 Capacity
    * TF2 Flow
    * TF3 Information
    * Contratos OpenAPI

Referencias:
  - out/90_referencias_fundacionales.md
    * Alter, Meadows, Beer
    * WSLC, VSS, Lakehouse

Trazabilidad:
  - 00b_mapeo_dominios_fases.md
    * Matriz D×F
    * Layer 1 → Layer 3
```

---

## §5. FLUJO TRABAJO INTEGRADO

### Para Iniciar Desarrollo Etapa

```yaml
1. Consultar_Plan_Desarrollo:
   - PLAN_DESARROLLO_OPERATIVO.md
   - Identificar etapa actual
   - Confirmar prerequisites completos
   - Leer deliverables esperados

2. Consultar_Spec_Arquitectura:
   - SPEC_ARQUITECTURA_DEFINITIVA.md
   - Verificar ADRs aplicables
   - Revisar dependency sequencing
   - Confirmar estructura aprobada

3. Preparar_Workspace:
   - VOCABULARIO_CONTROLADO.yaml ready
   - DEPENDENCY_GRAPH.yaml updated
   - Templates disponibles
   - Casos validación identificados
```

### Para Escribir Fase/Playbook/Schema

```yaml
1. Leer_Guia_Autor:
   - GUIA_AUTOR_CONTENIDO.md
   - Identificar template aplicable
   - Revisar checklist pre-commit
   - Estudiar antipatrones

2. Consultar_Dependencies:
   - DEPENDENCY_GRAPH.yaml
   - Identificar prerequisitos
   - Confirmar consumers
   - Verificar no ciclos

3. Escribir_Contenido:
   - §0 Fundamento PRIMERO
   - §1 Interfaz SEGUNDO
   - §2-§N Contenido MVO
   - Navegación ÚLTIMA

4. Self_Review:
   - CHECKLIST_VALIDACION.md
   - Ejecutar dependency_closure_script.py
   - Verificar métricas calidad
   - Confirmar vocabulario canónico
```

### Para Validation Gate

```yaml
1. Revisar_Criterios_Gate:
   - PLAN_DESARROLLO_OPERATIVO.md
   - Criterios técnicos (fases completas, dependency cerrado)
   - Criterios empíricos (caso uso validado)
   - Criterios calidad (vocabulario, métricas)

2. Ejecutar_Validación:
   - Caso uso aplicado (startup/scaleup/enterprise)
   - Artefactos generados coherentes
   - Templates ejecutables
   - H_org baseline→target claro

3. Generar_Report:
   - validation_{etapa}_report.md
   - Qué funcionó / dónde fricción
   - Ajustes necesarios
   - Go/No-Go decisión

4. Retrospective:
   - Equipo feedback
   - Refinar templates si necesario
   - Actualizar vocabulario si gaps
   - Preparar siguiente etapa
```

---

## §6. REGLAS ORO DESARROLLO

```yaml
Regla_1_Kernel_First:
  "Desarrollar F1→F3→F7→F9→F13 ANTES expansión"
  "Validar kernel empíricamente ANTES continuar"

Regla_2_MVO_Not_Perfect:
  "§0-§1 completos > §2-§10 perfectos"
  "Funcional > Perfecto"
  "Validar antes expandir"

Regla_3_Dependency_Driven:
  "NO desarrollar sin prerequisites completos"
  "Consultar DEPENDENCY_GRAPH.yaml ANTES escribir"
  "DAG válido obligatorio"

Regla_4_Trazabilidad_Obligatoria:
  "§0 Fundamento NO es opcional"
  "Layer 0-1-2 refs explícitos"
  "Justificación 2-3 líneas clara"

Regla_5_Vocabulario_Canónico:
  "VOCABULARIO_CONTROLADO.yaml 100%"
  "Términos prohibidos = code review rejection"
  "A1-A5, P1-P5, I1-I8, D1-D4, C1-C5, M1-M6"

Regla_6_Validation_Gates_No_Skip:
  "NO avanzar sin gate passed"
  "Evidencia empírica obligatoria"
  "validation_report.md generado"

Regla_7_Peer_Review_Obligatorio:
  "Lead Architecture/Methodology review antes merge"
  "CHECKLIST_VALIDACION.md ejecutado"
  "dependency_closure_script.py 0 errores"
```

---

## §7. ESTADO DESARROLLO

```yaml
Etapa_Actual: 0_PLANNING_COMPLETE
  ✅ Fuente verdad consolidada (4 docs)
  ✅ Arquitectura definitiva (ADR-001 a ADR-006)
  ✅ Plan desarrollo operativo maestro
  ✅ Planes detallados 4 etapas día a día
  ✅ Guía autor contenido completa
  🟡 Fundamentos kernel pendientes (inicio inminente)

Documentos_Fuente_Verdad_Creados (8):
  Core:
    1. SPEC_ARQUITECTURA_DEFINITIVA.md
    2. GUIA_AUTOR_CONTENIDO.md
    3. README_FUENTE_VERDAD.md (este)
  
  Planes_Desarrollo:
    4. PLAN_DESARROLLO_OPERATIVO.md (maestro)
    5. PLAN_ETAPA_1_KERNEL.md (SPRINTs 1-2, FASEs detalladas)
    6. PLAN_ETAPA_2_EXPANSION.md (SPRINTs 3-4, FASEs detalladas)
    7. PLAN_ETAPA_3_PLAYBOOKS.md (SPRINT 5, FASEs detalladas)
    8. PLAN_ETAPA_4_COMPLETION.md (SPRINT 6, FASEs detalladas)

Próximos_Pasos_Inmediatos:
  Día 1-2 (Fundamentos):
    1. VOCABULARIO_CONTROLADO.yaml (Layer 0-3, 2200L)
    2. DEPENDENCY_GRAPH.yaml kernel subset (900L)
    3. dependency_closure_script.py (450L Python)
    4. CHECKLIST_VALIDACION.md (200L)
    5. Templates (FASE, PLAYBOOK, SCHEMA)
  
  Día 3-13 (Kernel):
    6. F1_context_assessment.md + T01 (Día 3-4)
    7. F3_trajectory_selection.md + matrix (Día 5)
    8. F7_purpose_cascade.md + T07 (Día 6-7)
    9. F9_target_state_design.md (Día 8)
    10. F13_health_monitoring.md + calculator (Día 9)
    11. Documentación inicial (Día 10)
    12. Validación caso startup (Día 11-12)
    13. Validation Gate 1 (Día 13)

Timeline_Detallado:
  Etapa 1 Kernel: 2 SPRINTs (~13 bloques de trabajo)
    - Fundamentos: Día 1-2
    - F1+F3: Día 3-5
    - F7+F9+F13: Día 6-9
    - Documentación: Día 10
    - Validación empírica: Día 11-12
    - Gate 1: Día 13
  
  Etapa 2 Expansion: 2 SPRINTs (~10 bloques de trabajo)
    - SPRINT 3: F2,F4-F6,F8 + Schemas (FASEs 1-5)
    - SPRINT 4: F10-F12 + Templates + Validación (FASEs 6-10)
  
  Etapa 3 Playbooks: 1 SPRINT (~7 bloques de trabajo)
    - F14-F18 + P01-P08 + Schema P09-P15 + Caso enterprise
  
  Etapa 4 Completion: 1 SPRINT (~7 bloques de trabajo)
    - Trayectorias + Governance + Templates finales + Validación I1-I8
  
  Total: 6 SPRINTs (~37 bloques de trabajo)

Esfuerzo_Total_Estimado:
  - Etapa 1: 83-107h
  - Etapa 2: 114-140h
  - Etapa 3: 102-123h
  - Etapa 4: 126-160h
  - TOTAL: 425-530h
  
  Setup_Ideal: 2 personas x 6 semanas (240h cada una)
  Setup_Alternativo: 1 persona x 11-14 semanas

Capacity_Assumption:
  - 1-2 personas desarrollando
  - Sesiones concentradas 6-8h
  - Validación empírica cada etapa (startup, scaleup, enterprise)
  - Peer review continuo
```

---

## §8. RESUMEN EJECUTIVO

```yaml
Qué_Hemos_Consolidado:
  ✅ 7 documentos WIP sintetizados en 8 fuentes verdad prescriptivas
  ✅ Redundancias eliminadas (ADRs, roadmap, templates unificados)
  ✅ Decisiones arquitectónicas explícitas (ADR-001 a ADR-006)
  ✅ Roadmap operativo maestro + 4 planes etapa FASE a FASE por sprint
  ✅ Guías prescriptivas completas para autores
  ✅ Flujo trabajo integrado operacional
  ✅ Reglas oro desarrollo claras

Documentos_Generados (8):
  1. SPEC_ARQUITECTURA_DEFINITIVA.md (QUÉ construir)
  2. GUIA_AUTOR_CONTENIDO.md (CÓMO escribir)
  3. README_FUENTE_VERDAD.md (Índice maestro integrador)
  4. PLAN_DESARROLLO_OPERATIVO.md (Overview 4 etapas)
  5. PLAN_ETAPA_1_KERNEL.md (FASE a FASE SPRINTs 1-2)
  6. PLAN_ETAPA_2_EXPANSION.md (FASE a FASE SPRINTs 3-4)
  7. PLAN_ETAPA_3_PLAYBOOKS.md (FASE a FASE SPRINT 5)
  8. PLAN_ETAPA_4_COMPLETION.md (FASE a FASE SPRINT 6)

Estado_Arquitectónico:
  ✅ Coherencia Layers 0→1→2→3 verificada
  ✅ Invariantes I1-I8 preserved
  ✅ Dependency sequencing completo (kernel + expansion)
  ✅ Kernel methodology identificado (F1→F3→F7→F9→F13)
  ✅ MVO approach adoptado (Genoma/Fenotipo)
  ✅ Validation gates definidos (criterios + outputs)

Calidad_Consolidación:
  ✅ Parsimoniosa (mínimo necesario suficiente)
  ✅ Consistente (ADRs + vocabulario canónico)
  ✅ Completa (arquitectura + 4 planes + guías)
  ✅ Trazable (Layer 0→3 explícito)
  ✅ Operable (checklists + scripts + templates + día a día)

Nivel_Detalle_Planes:
  ✅ Etapa 1 Kernel: 13 bloques/FASEs detallados
    - Día 1: VOCABULARIO 4h mañana + DEPENDENCY_GRAPH 4h tarde
    - Día 2: Scripts + Templates
    - Día 3-4: F1 + T01
    - Día 5: F3 + decision_matrix
    - Día 6-7: F7 + T07
    - Día 8-9: F9 + F13
    - Día 10: Documentación
    - Día 11-12: Validación caso startup
    - Día 13: Gate 1
  
  ✅ Etapa 2 Expansion: 10 bloques/FASEs planificados
  ✅ Etapa 3 Playbooks: 7 bloques/FASEs planificados
  ✅ Etapa 4 Completion: 7 bloques/FASEs planificados

Ready_To:
  ✅ Iniciar desarrollo INMEDIATAMENTE (Día 1: VOCABULARIO)
  ✅ Ejecutar día a día con claridad total
  ✅ Validar empíricamente por etapa (3 casos)
  ✅ Escalar desarrollo con múltiples autores
  ✅ Tracking granular progreso
```

---

## CONCLUSIÓN

**✅ Fuente de verdad consolidada COMPLETA.**

**8 documentos prescriptivos eliminan ambigüedades:**

**Core (3):**
1. **SPEC_ARQUITECTURA_DEFINITIVA.md** - QUÉ construir (arquitectura + decisiones)
2. **GUIA_AUTOR_CONTENIDO.md** - CÓMO escribir (templates + checklists)
3. **README_FUENTE_VERDAD.md** - Índice maestro integrador

**Planes Operativos (5):**
4. **PLAN_DESARROLLO_OPERATIVO.md** - Overview 4 etapas + métricas globales
5. **PLAN_ETAPA_1_KERNEL.md** - FASE a FASE SPRINTs 1-2
6. **PLAN_ETAPA_2_EXPANSION.md** - FASE a FASE SPRINTs 3-4
7. **PLAN_ETAPA_3_PLAYBOOKS.md** - FASE a FASE SPRINT 5
8. **PLAN_ETAPA_4_COMPLETION.md** - FASE a FASE SPRINT 6

---

**✅ 7 documentos WIP sintetizados sin pérdida información.**

**✅ Redundancias eliminadas, coherencia preservada.**

**✅ Flujo trabajo integrado operacional día a día.**

**✅ Reglas oro claras y ejecutables.**

**✅ Validation gates 4 etapas con criterios específicos.**

**✅ Nivel detalle operativo: mañanas/tardes por día.**

---

## 🚀 READY TO START DEVELOPMENT

**PRÓXIMO PASO INMEDIATO:**  
**Día 1 Etapa 1 Kernel - Sesión Mañana (4h): VOCABULARIO_CONTROLADO.yaml**

**Consultar:** `PLAN_ETAPA_1_KERNEL.md` para ejecución paso a paso.

**Timeline total:** 6 SPRINTs (~6 semanas, ~37 bloques de trabajo)
 hasta RELEASE 1.0.0

**¡Metodología ORKO Layer 3 lista para construcción!** 🎯
