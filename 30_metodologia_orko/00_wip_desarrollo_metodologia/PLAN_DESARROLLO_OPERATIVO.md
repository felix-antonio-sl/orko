# PLAN DESARROLLO OPERATIVO - METODOLOGÍA ORKO

**Roadmap Ejecutable: 4 Etapas + Validation Gates**  
**Timeline:** 6 SPRINTs (~6 semanas)  
**Approach:** Kernel-First + MVO + Dependency-Driven  
**Estado:** OPERATIVO - Production Ready

---

## §0. ESTRUCTURA PLAN DETALLADO

```yaml
Archivos_Plan:
  Plan_Maestro:
    - PLAN_DESARROLLO_OPERATIVO.md (este archivo)
      * Overview 4 etapas
      * Timeline global
      * Métricas éxito
      * Dependency sequencing
  
  Planes_Detallados_Por_Etapa:
    - PLAN_ETAPA_1_KERNEL.md
      * FASE a FASE SPRINTs 1-2
      * Deliverables detallados
      * Scripts desarrollo
      * Validation Gate 1 completo
    
    - PLAN_ETAPA_2_EXPANSION.md
      * FASE a FASE SPRINTs 3-4
      * Schemas detallados
      * Templates completos
      * Validation Gate 2 completo
    
    - PLAN_ETAPA_3_PLAYBOOKS.md
      * FASE a FASE SPRINT 5
      * Playbooks individuales + schema
      * Evolution phases
      * Validation Gate 3 completo
    
    - PLAN_ETAPA_4_COMPLETION.md
      * FASE a FASE SPRINT 6
      * Trayectorias completas
      * Governance detallado
      * Validation Gate 4 RELEASE

Uso:
  "Consultar plan maestro para overview"
  "Consultar plan etapa específico para ejecución día a día"
```

---

## §1. OVERVIEW 4 ETAPAS

### ETAPA 1: KERNEL (Sprints 1-2) - P1_CRÍTICO

```yaml
Objetivo: "MVP metodología validable (F1→F3→F7→F9→F13)"

Deliverables_Fundamentos:
  - VOCABULARIO_CONTROLADO.yaml (4-6h)
  - DEPENDENCY_GRAPH.yaml kernel (6-8h)
  - dependency_closure_script.py (4-6h)
  - CHECKLIST_VALIDACION.md (3-4h)
  - TEMPLATE_FASE_WSLC.md (2-3h)
  - TEMPLATE_PLAYBOOK.md (2-3h)

Deliverables_Kernel_Fases:
  - F1_context_assessment.md (6-8h)
    §0-§1: ✅ COMPLETO | §2-§10: ⚠️ MVO
    Artefacto: T01_context_assessment.yaml
  
  - F3_trajectory_selection.md (5-6h)
    §0-§1: ✅ COMPLETO | §2-§10: ⚠️ MVO
    Artefacto: context_decision_matrix.xlsx
  
  - F7_purpose_cascade.md (6-7h)
    §0-§1: ✅ COMPLETO | §2-§10: ⚠️ MVO
    Artefacto: T07_okr_cascade.xlsx
  
  - F9_target_state_design.md (7-8h)
    §0-§1: ✅ COMPLETO | §2-§10: ⚠️ MVO
    Artefacto: T12_adr_template.md
  
  - F13_health_monitoring.md (5-6h)
    §0-§1: ✅ COMPLETO | §2-§10: ⚠️ MVO
    Artefacto: health_score_calculator.xlsx

Validation_Gate_1:
  ✅ 5 fases kernel completas (§0-§1 100%, §2-§10 MVO)
  ✅ Dependency graph cerrado (0 errores)
  ✅ Vocabulario canónico 100%
  ✅ Caso startup validado: F1→F3→F7→F9→F13 ejecutable
  ✅ H_org baseline→target definido
  Output: validation_kernel_report.md
  
Esfuerzo: 83-107h (~2 Sprints 1 persona)
```

---

## ETAPA 2: EXPANSION (Sprints 3-4) - P1_CRÍTICO

```yaml
Objetivo: "F2,F4-F6,F8 (Development) + F10-F12 (Implementation) + Schemas"

Deliverables_Development:
  - F2_vision_definition.md (5-6h)
  - F4_capability_mapping.md (6-7h) + T04
  - F5_flow_design.md (6-7h) + T05
  - F6_information_architecture.md (6-8h) + T06, T17
  - F8_limits_definition.md (6-7h) + compliance_schema

Deliverables_Schemas:
  - compliance_framework_schema.yaml (6-8h)
  - jurisdiction_instances.yaml (10 mínimo) (4-6h)
  - context_pattern_schema.yaml (5-6h)
  - case_instances.yaml (6 casos) (6-8h)

Deliverables_Implementation:
  - F10_quick_wins.md (5-6h)
  - F11_fabric_deployment.md (8-10h)
  - F12_state_transition.md (5-6h)

Validation_Gate_2:
  ✅ 13/18 fases completas (72%)
  ✅ 2 schemas + instances validados
  ✅ 9 templates ejecutables
  ✅ Caso scaleup 200p validado
  ✅ Trayectoria Minimal documentada end-to-end
  Output: validation_expansion_report.md

Esfuerzo: 114-140h (~2 Sprints 1-2 personas)
```

---

## ETAPA 3: PLAYBOOKS + EVOLUTION (SPRINT 5) - P1_CRÍTICO

```yaml
Objetivo: "F14-F18 + Playbooks P01-P08 + Schema P09-P15"

Deliverables_Fases:
  - F14_incident_response.md (5-6h)
  - F15_continuous_execution.md (6-7h)
  - F16_learning_loops.md (5-6h)
  - F17_adaptation.md (5-6h)
  - F18_convergence_check.md (5-6h)

Deliverables_Playbooks:
  Recovery: P01-P04 (20-24h)
  Transformation: P05-P08 (20-24h)
  Schema: playbook_schema.yaml + instances P09-P15 (10-13h)

Validation_Gate_3:
  ✅ 18/18 fases completas (100%)
  ✅ 12 playbooks documentados
  ✅ Caso enterprise 2000p validado
  ✅ 3 trayectorias documentadas
  Output: validation_playbooks_report.md

Esfuerzo: 102-123h (~1 Sprint 2 personas)
```

---

## ETAPA 4: COMPLETION (SPRINT 6) - P2_IMPORTANTE

```yaml
Objetivo: "Trayectorias completas + Governance + Templates finales"

Deliverables:
  - 09_trayectorias/ (6 archivos) (30-38h)
  - 12_roles_governance/ (5 archivos) (24-30h)
  - 13_metricas_validacion/ (3 archivos) (14-17h)
  - Templates restantes T08-T15, T19-T20, context_specific (30-40h)
  - 6 ejemplos casos completos (20-25h)
  - 17_validacion_final/ I1-I8 (8-10h)

Validation_Gate_4_RELEASE:
  ✅ 100% completitud (18 fases + 15 playbooks + 3 trayectorias)
  ✅ Validación I1-I8 passed
  ✅ 6 casos uso completos
  ✅ 25 templates ejecutables
  ✅ RELEASE APPROVED

Esfuerzo: 126-160h (~1 Sprint 2-3 personas)
```

---

## DEPENDENCY SEQUENCING

```yaml
Kernel: F1 → F3 → F7,F9 → F13

Development:
  F2 ← F1
  F4 ← F1,F3
  F5 ← F1,F4
  F6 ← F1,F3
  F8 ← F1,F3

Implementation:
  F10 ← F3,F4,F8
  F11 ← F3-F6,F8,F9
  F12 ← F9,F11

Operation_Evolution:
  F14 ← F8,F10,F13
  F15 ← F7,F11
  F16 ← F13-F15
  F17 ← F3,F13,F16
  F18 ← F9,F12,F13

Regla: "NO desarrollar sin prerequisites completos"
```

---

## MÉTRICAS ÉXITO GLOBAL

```yaml
Completitud:
  - 18/18 fases
  - 15/15 playbooks
  - 3/3 trayectorias
  - 25 templates
  - 6 casos uso

Calidad:
  - Vocabulario canónico 100%
  - Dependency graph cerrado
  - Validación I1-I8 passed
  - 3 validaciones empíricas (startup, scaleup, enterprise)

Timeline: 6 Sprints rigurosas
Esfuerzo_Total: 425-530h (~3 meses 1 persona, 6 Sprints 2 personas)
```

