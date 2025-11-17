# ESPECIFICACIÓN ARQUITECTÓNICA DEFINITIVA - METODOLOGÍA ORKO

**Tipo:** Fuente de Verdad Arquitectónica  
**Estado:** DEFINITIVA - Production Spec  
**Fecha:** 14 Noviembre 2024  
**Propósito:** Consolidar todas las decisiones arquitectónicas Layer 3

---

## §0. DECISIONES ARQUITECTÓNICAS CONSOLIDADAS

```yaml
ADR_001_WSLC_Backbone:
  Decision: "Metodología estructura en Work System Life Cycle (5 etapas)"
  Rationale: 
    - Coherente con A5_Cambio (evolución continua)
    - Cubre todo ciclo vida sistema trabajo (no solo delivery)
    - Referencia Alter (90_referencias)
  Status: ✅ APROBADO
  
ADR_002_Tipo_vs_Instancia:
  Decision: "Schemas YAML tipo + instances parametrizadas"
  Rationale:
    - Preserva I1_Minimalidad (evita N archivos redundantes)
    - Permite I8_Adaptación (extensión sin crecimiento arquitectónico)
    - Probado exitosamente en Layer 2 (TF1-TF3)
  Ejemplos:
    - compliance_framework_schema.yaml + jurisdiction_instances.yaml
    - context_pattern_schema.yaml + case_instances.yaml
    - playbook_schema.yaml + playbook_instances.yaml (P09-P15)
  Status: ✅ APROBADO
  
ADR_003_Genoma_Fenotipo_Metodológico:
  Decision: "Separar semántica (30/) de artefactos ejecutables (40/)"
  Rationale:
    - 30_metodologia = [GENOMA] invariantes metodológicos
    - 40_implementacion = [FENOTIPO] contextualizable por organización
    - Permite reutilización sin modificar núcleo
  Status: ✅ APROBADO
  
ADR_004_Dominios_No_Fases:
  Decision: "D1-D4 son ejes ortogonales, NO etapas secuenciales"
  Rationale:
    - Cada fase usa combinación dominios (OODA, Architecture feedback loop)
    - Evita error "Decisión como fase singleton"
    - 00b_mapeo_dominios_fases.md operacionaliza trazabilidad
  Status: ✅ APROBADO
  
ADR_005_Kernel_First_Approach:
  Decision: "Desarrollar Kernel 5 fases (F1→F3→F7→F9→F13) PRIMERO"
  Rationale:
    - MVP metodología validable en 2 semanas
    - Dependency closure (ciclo completo diagnóstico→diseño→monitoreo)
    - Validación empírica temprana (caso startup)
    - Resto fases son expansiones nucleares
  Status: ✅ APROBADO (nuevo)
  
ADR_006_MVO_No_Perfectionism:
  Decision: "Target Minimum Viable Outcome (MVO), no perfección inicial"
  Rationale:
    - 69+ archivos = alto volumen cognitivo
    - Priorizar §0-§1 completos + contenido funcional vs 100% detalle
    - Validar empíricamente antes expandir
  Status: ✅ APROBADO (nuevo)
```

---

## §1. ARQUITECTURA CONSOLIDADA

### §1.1 Estructura Directorios Definitiva

```yaml
30_metodologia_orko/:
  
  [GENOMA] Núcleo_Metodológico:
    - README.md                         # Índice master
    - 00_introduccion_metodologia.md    # Derivación A→P→I→C→TF→F
    - 00b_mapeo_dominios_fases.md       # Matriz D×F (I3 trazabilidad)
  
  [GENOMA] Fases_WSLC:
    - 01_fases_initiation/              # F1-F3
    - 02_fases_development/             # F4-F9
    - 03_fases_implementation/          # F10-F12
    - 04_fases_operation/               # F13-F15
    - 05_fases_evolution/               # F16-F18
  
  [GENOMA] Playbooks:
    - 06_playbooks_recovery/            # P01-P04
    - 07_playbooks_transformation/      # P05-P08
    - 08_playbooks_operational/         # P09-P15 (schema + instances)
  
  [GENOMA] Trayectorias:
    - 09_trayectorias/                  # Survival, Minimal, Avanzada, Parametric
  
  [FENOTIPO] Templates_Governance_Casos:
    - 10_integracion_tejidos/           # TF1-TF3 integration patterns
    - 11_artefactos_templates/          # Templates T01-T25
    - 12_roles_governance/              # RACI, escalation, multi-authority
    - 13_metricas_validacion/           # KPIs, health gates, dashboards
    - 14_casos_uso/                     # Schemas + instances casos
    - 15_instrumentacion/               # Meta-metrics metodología
    - 16_evolucion_metodologia/         # Feedback loops, antipatrones
    - 17_validacion_final/              # Validación I1-I8 formal

40_implementacion_metodologia/:
  
  [FENOTIPO] Artefactos_Ejecutables:
    - templates/                        # 25 templates ejecutables
      - assessment/                     # T01-T03
      - planning/                       # T04-T07
      - execution/                      # T08-T11
      - evolution/                      # T12-T15
      - compliance/                     # T16-T20
      - context_specific/               # 6 templates contextuales
    
    - calculadoras/                     # 6 Excel decision support
    - ejemplos/                         # 6 casos completos
    
    - dev_specs/                        # [GENOMA] Desarrollo
      - VOCABULARIO_CONTROLADO.yaml
      - DEPENDENCY_GRAPH.yaml
      - TEMPLATE_FASE_WSLC.md
      - TEMPLATE_PLAYBOOK.md
      - TEMPLATE_SCHEMA.yaml
      - CHECKLIST_VALIDACION.md
    
    - README.md
    - CHANGELOG.md
```

---

### §1.2 Kernel Methodology (Núcleo Mínimo Funcional)

```yaml
Kernel_5_Fases:
  
  F1_Context_Assessment:
    Propósito: Sensing organizacional completo
    Layer_0: [A1, A2, A4, P1-P5, I8]
    Layer_1: [D2_Percepción_PRIMARY]
    Inputs: [] (fase inicial)
    Outputs: [context_profile_36_params, h_org_baseline]
    Consumers: [F2-F8, Playbooks]
    Artefactos: [T01_context_assessment.yaml]
    
  F3_Trajectory_Selection:
    Propósito: Decision gate crítico Survival/Minimal/Avanzada
    Layer_0: [A4, P4, I8]
    Layer_1: [D3_Decisión_PRIMARY, E7_Trajectory]
    Inputs: [F1.context, F1.h_org]
    Outputs: [trajectory_selected, timeline, budget]
    Consumers: [F4-F12]
    Artefactos: [context_decision_matrix.xlsx]
    
  F7_Purpose_Cascade:
    Propósito: Alignment OKR L4→L3→L2→L1
    Layer_0: [A2, P5, I3]
    Layer_1: [D1_Arquitectura_SECONDARY, C5]
    Inputs: [F2.okr_L4, F4.capacity_inventory]
    Outputs: [okr_cascade, alignment_score]
    Consumers: [F9, F13, F15, P03]
    Artefactos: [T07_okr_cascade.xlsx]
    
  F9_Target_State_Design:
    Propósito: E6_target blueprint (síntesis F2-F8)
    Layer_0: [A1, A2, P1-P5, I1-I3]
    Layer_1: [D1_Arquitectura_PRIMARY, E6]
    Inputs: [F2.vision, F4-F6.designs, F7.okr, F8.limits]
    Outputs: [e6_target_complete, architecture_blueprint]
    Consumers: [F11, F12, F18]
    Artefactos: [T12_adr_template.md]
    
  F13_Health_Monitoring:
    Propósito: Feedback loop continuo (H_org tracking)
    Layer_0: [A5, I6]
    Layer_1: [D2_Percepción_PRIMARY, D4_Operación_SECONDARY]
    Inputs: [F7.okr, F10.quick_wins, F11.observability, F12.intermediate]
    Outputs: [h_org_dashboard_live, drift_alerts]
    Consumers: [F14, F16-F18]
    Artefactos: [health_score_calculator.xlsx]

Dependency_Flow_Kernel:
  F1 → F3 → F7,F9 → F13
  
  Rationale:
    - F1 captura contexto → F3 decide trayectoria
    - F3 define scope → F7,F9 diseñan propósito+arquitectura
    - F7,F9 definen target → F13 monitorea convergencia
  
  Completitud:
    Con kernel puedo:
      ✅ Diagnosticar organización (F1)
      ✅ Decidir trayectoria viable (F3)
      ✅ Definir propósito aligned (F7)
      ✅ Diseñar estado objetivo (F9)
      ✅ Monitorear salud continua (F13)
    
    Sin F2,F4-F6,F8,F10-F12,F14-F18:
      ⚠️ Postponable sin romper ciclo core
      ⚠️ Pueden stub con "TBD - Ver F9" inicialmente
```

---

### §1.3 Fases Expansion (Post-Kernel)

```yaml
Expansion_Layer_1_Development:
  F2_Vision_Definition:
    Prerequisitos: [F1]
    Outputs: [okr_L4, north_star, e6_target_vision]
    Nota: "Kernel usa F7.OKR interim, pero F2 formal necesario post-kernel"
  
  F4_Capability_Mapping:
    Prerequisitos: [F1, F3]
    Outputs: [p1_inventory, skills_matrix, capacity_gaps]
    Layer_2: [TF1_reference]
  
  F5_Flow_Design:
    Prerequisitos: [F1, F4]
    Outputs: [vsm_maps, handoff_ratio, flow_optimization]
    Layer_2: [TF2_reference]
  
  F6_Information_Architecture:
    Prerequisitos: [F1, F3]
    Outputs: [p3_catalog, data_architecture, mgde_compliance]
    Layer_2: [TF3_PRIMARY]
  
  F8_Limits_Definition:
    Prerequisitos: [F1, F3]
    Outputs: [p4_limit_catalog, compliance_requirements]
    Schemas: [compliance_framework_schema, jurisdiction_instances]

Expansion_Layer_2_Implementation:
  F10_Quick_Wins:
    Prerequisitos: [F3, F4, F8]
    Outputs: [quick_wins_prioritized, h_org_improvement_plan]
  
  F11_Fabric_Deployment:
    Prerequisitos: [F3-F6, F8, F9]
    Outputs: [tf1_tf2_tf3_deployed, tech_stack, observability]
    Secciones_Especiales:
      - §11.4: TF1-TF3 (Avanzada)
      - §11.5: Tool-agnostic (Minimal)
      - §11.6: Constrained environments
  
  F12_State_Transition:
    Prerequisitos: [F9, F11]
    Outputs: [e6_intermediate, transition_validation]

Expansion_Layer_3_Operation_Evolution:
  F14_Incident_Response:
    Prerequisitos: [F8, F10, F13]
    Outputs: [incident_reports, playbook_activations]
  
  F15_Continuous_Execution:
    Prerequisitos: [F7, F11]
    Outputs: [sprint_deliveries, xanpan_board, velocity]
  
  F16_Learning_Loops:
    Prerequisitos: [F13-F15]
    Outputs: [retrospective_insights, improvement_backlog]
  
  F17_Adaptation:
    Prerequisitos: [F3, F13, F16]
    Outputs: [trajectory_adjustments, replan_decisions]
    Nota: "Feedback loop a F3 (ajuste trayectoria)"
  
  F18_Convergence_Check:
    Prerequisitos: [F9, F12, F13]
    Outputs: [convergence_score, e6_validation, success_criteria_met]
    Nota: "Fase final, no consumers"
```

---

### §1.4 Playbooks Prioritization

```yaml
Playbooks_Críticos_MVO:
  
  Recovery (P01-P04):
    P01_low_h_org_recovery:
      Trigger: "H_org < 70"
      Phases: [Triage, Stabilization, Recovery]
      Priority: P1_CRÍTICO
    
    P02_handoff_reduction:
      Trigger: "handoff_ratio > 30%"
      Phases: [Analysis, Consolidation, Optimization]
      Priority: P1_CRÍTICO
    
    P03_okr_alignment:
      Trigger: "alignment_score < 70%"
      Phases: [Diagnosis, Realignment, Validation]
      Priority: P2_IMPORTANTE
    
    P04_security_remediation:
      Trigger: "Security incident OR compliance gap"
      Phases: [Assessment, Remediation, Hardening]
      Priority: P1_CRÍTICO
  
  Transformation (P05-P08):
    P05_bounded_autonomy_m6:
      Purpose: "M6 delegation 6 dimensiones boundaries"
      Priority: P1_CRÍTICO (HAIC core)
    
    P06_pilot_transformation:
      Purpose: "Pilot bounded scope transformation"
      Priority: P2_IMPORTANTE
    
    P07_scale_transformation:
      Purpose: "Scale pilot → organization"
      Priority: P3_EXTENSIÓN
    
    P08_optimization_sustain:
      Purpose: "Continuous optimization post-scale"
      Priority: P3_EXTENSIÓN
  
  Operational_Schema_Parametrizado (P09-P15):
    Implementation: "playbook_schema.yaml + playbook_instances.yaml"
    
    P09_drift_detection_response:
      Trigger: "Drift alert from F13"
      Priority: P1_CRÍTICO
    
    P10_capacity_gap_resolution:
      Trigger: "Skills/FTE gap from F4"
      Priority: P2_IMPORTANTE
    
    P11_flow_optimization:
      Trigger: "Cycle time degradation"
      Priority: P2_IMPORTANTE
    
    P12_data_quality_recovery:
      Trigger: "TF3 quality metrics < threshold"
      Priority: P2_IMPORTANTE
    
    P13_political_alignment:
      Trigger: "Stakeholder conflict"
      Priority: P3_CONTEXTO_ESPECÍFICO
    
    P14_client_expectation_mgmt:
      Trigger: "Expectation mismatch"
      Priority: P2_IMPORTANTE
    
    P15_adaptive_cadence:
      Trigger: "Context shift (crisis/hypergrowth)"
      Priority: P1_CRÍTICO

Nota_Implementación:
  "P09-P15 NO necesitan 7 archivos markdown separados en MVO"
  "Schema YAML + instances es suficiente inicialmente"
  "Expandir a markdown individual solo si uso real lo demanda"
```

---

### §1.5 Trayectorias Definitivas

```yaml
Trayectorias_Core:
  
  Survival:
    Timeline: "8-12 semanas"
    Budget: "$0-10K"
    Scope: "F1-F3 + F10_micro"
    H_org_Delta: "Crisis → 50-60"
    Context: "Crisis extrema, supervivencia"
    Priority: P1_MVO
  
  Minimal:
    Timeline: "6-12 meses"
    Budget: "$150-200K"
    Scope: "F1-F18 (tool-agnostic, sin TF1-TF3)"
    H_org_Delta: "45 → 70"
    Context: "Presupuesto limitado, startup/scaleup"
    Priority: P1_MVO
  
  Avanzada:
    Timeline: "18-36 meses"
    Budget: "$2M+"
    Scope: "F1-F18 + TF1-TF3 full deployment"
    H_org_Delta: "70 → 85"
    Context: "Enterprise, regulado, hipergrowth"
    Priority: P2_IMPORTANTE
  
  Parametric:
    Formula: "budget_parametric_allocator.xlsx"
    Scope: "Continuo [Survival, Minimal, Avanzada]"
    Context: "Cualquier presupuesto [$10K, $10M]"
    Priority: P2_IMPORTANTE
  
  Transition_Minimal_Avanzada:
    Purpose: "Upgrade path Minimal → Avanzada"
    Trigger: "H_org ≥ 70 AND budget disponible"
    Priority: P3_EXTENSIÓN

MVO_Focus:
  "Desarrollar Minimal PRIMERO (validación caso startup)"
  "Survival y Avanzada como variantes Minimal"
  "Parametric como fórmula continua post-validación"
```

---

## §2. SCHEMAS TIPO DEFINITIVOS

```yaml
Schema_1_Compliance_Framework:
  Archivo: compliance_framework_schema.yaml
  Propósito: "Dimensiones regulatorias P4_Límite jurisdiccionales"
  
  Dimensiones (9):
    - data_residency
    - privacy_regime
    - labor_law
    - financial_regulation
    - sector_specific
    - ai_regulation
    - sanctions_compliance
    - audit_requirements
    - enforcement_level
  
  Instances: jurisdiction_instances.yaml (50 países)
  Consumers: [F8_Limits, P04_Security, Templates T16-T20]
  Priority: P1_MVO

Schema_2_Context_Pattern:
  Archivo: context_pattern_schema.yaml
  Propósito: "Dimensiones contextuales I8_Adaptación"
  
  Dimensiones (8):
    - organization_size
    - industry_sector
    - regulatory_context
    - maturity_level
    - crisis_flags
    - hypergrowth_flags
    - tech_stack_maturity
    - cultural_context
  
  Instances: case_instances.yaml (10 casos iniciales MVO)
  Consumers: [F1_Context, F3_Trajectory]
  Priority: P1_MVO

Schema_3_Playbook:
  Archivo: playbook_schema.yaml
  Propósito: "Estructura genérica playbooks operacionales"
  
  Campos:
    - playbook_id
    - trigger_conditions (thresholds numéricos)
    - phases (Triage, Stabilize, Recover/Validate)
    - steps (por phase)
    - integration_fases
    - accountability (I5)
    - duration_iso8601
    - outputs
  
  Instances: playbook_instances.yaml (P09-P15)
  Priority: P2_IMPORTANTE (post-kernel)
```

---

## §3. MÉTRICAS CALIDAD DEFINITIVAS

```yaml
Fases_WSLC:
  Líneas: 200-350L
  Secciones_Obligatorias: 11 (§0-§10)
  §0_Fundamento:
    - Layer 0: ≥3 refs (A, P, I)
    - Layer 1: ≥1 dominio PRIMARY
    - Justificación: 2-3 líneas clara
  §1_Interfaz:
    - Inputs: Lista IDs archivos prerequisitos
    - Outputs: ≥2 artefactos con consumers
    - Dependencies: reads_from/writes_to
  Ejemplos: ≥2 (Minimal + Avanzada)
  Vocabulario_Canónico: 100% (0 términos prohibidos)
  Navegación: 4 links (anterior, siguiente, índice, relacionados)

Playbooks:
  Líneas: 150-250L
  Secciones_Obligatorias: 8 (§0-§7)
  Phases: 3 (Triage, Stabilization, Recovery/Validation)
  Triggers: ≥2 conditions con threshold numérico
  Accountability_I5: Explícito (human accountable)
  Integration: ≥2 fases consumidoras
  Antipatrón: ≥1 documentado

Schemas_YAML:
  Sintaxis: YAML válido (yamllint)
  Dimensiones: ≥3 (schemas complejos)
  Tipos: 100% explícitos (no any)
  Ejemplos: ≥2 inline instanciación
  Comentarios: ≥30% líneas

Templates:
  Formato: Ejecutable (YAML/Excel/CSV/Markdown)
  Campos: Completos (no TBD en MVO)
  Validación: ≥1 caso uso aplicado
  Documentación: Inline comments suficientes

MVO_Exception:
  "§2-§10 pueden ser MVO (contenido funcional, no perfectionism)"
  "§0-§1 DEBEN ser 100% completos (trazabilidad + interfaz)"
  "Ejemplos pueden ser 1 inicialmente si MVO urgente"
```

---

## §4. VALIDACIÓN INVARIANTES I1-I8

```yaml
I1_Minimalidad:
  ✅ 18 fases WSLC son mínimas (no eliminables)
  ✅ Schemas tipo vs N instancias (no explosión archivos)
  ✅ Playbooks P09-P15 parametrizados (no 7 markdown)
  ✅ 00b_mapeo es proyección, no duplicación
  
I2_Ortogonalidad:
  ✅ D1-D4 cruzan F1-F18 independientemente
  ✅ Schemas tipo son independientes (compliance ⊥ context ⊥ playbook)
  ✅ Templates por concern (assessment ⊥ planning ⊥ execution)
  
I3_Trazabilidad:
  ✅ Layer 0→1→2→3 verificable
  ✅ §0 Fundamento obligatorio en todos archivos
  ✅ 00b_mapeo_dominios_fases.md auditable
  ✅ DEPENDENCY_GRAPH.yaml closure verificable
  
I5_HAIC:
  ✅ M1-M6 delegation documentado
  ✅ P05_bounded_autonomy_m6 detalla 6 dimensiones
  ✅ Playbooks especifican accountability explícita
  
I6_Trajectory:
  ✅ E7_Trayectoria entidad evolucionable
  ✅ F16/F17 learning + adaptation explícitos
  ✅ F13 monitoring continuo drift detection
  
I8_Adaptación:
  ✅ Parametrización contextual (schemas instances)
  ✅ Trayectorias adaptables (Survival/Minimal/Avanzada)
  ✅ Extensibilidad sin crecimiento arquitectónico
```

---

## §5. DEPENDENCY GRAPH COMPLETO

```yaml
Kernel_Dependencies:
  F1 → F3 → F7,F9 → F13

Expansion_Development:
  F2 ← F1
  F4 ← F1,F3
  F5 ← F1,F4
  F6 ← F1,F3
  F8 ← F1,F3

Expansion_Implementation:
  F10 ← F3,F4,F8
  F11 ← F3-F6,F8,F9
  F12 ← F9,F11

Expansion_Operation_Evolution:
  F14 ← F8,F10,F13
  F15 ← F7,F11
  F16 ← F13-F15
  F17 ← F3,F13,F16 (feedback loop!)
  F18 ← F9,F12,F13

Playbooks_Dependencies:
  P01-P04 ← F13 (triggers)
  P05-P08 ← F3,F9 (trajectory + design)
  P09-P15 ← F13-F15 (operational triggers)

Schemas_Dependencies:
  compliance_schema ← F8
  context_schema ← F1,F3
  playbook_schema ← Playbooks_ALL

Regla_Oro:
  "NO desarrollar fase sin prerequisitos completos"
  "DAG válido obligatorio (no ciclos excepto feedback loops anotados)"
```

---

## CONCLUSIÓN

**Especificación arquitectónica consolidada y definitiva.**

**Decisiones ADR-001 a ADR-006 aprobadas.**

**Kernel 5 fases (F1→F3→F7→F9→F13) es MVP validable.**

**Schemas tipo-based preservan I1/I2/I8.**

**Dependency graph completo y cerrado.**

**READY para desarrollo Parte 2: Plan Operativo.**

