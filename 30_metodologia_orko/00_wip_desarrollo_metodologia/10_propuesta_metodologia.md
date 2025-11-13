# METODOLOGÍA ORKO: ESTRUCTURA COMPLETA

---

## ÁRBOL DIRECTORIOS Y ARCHIVOS

```
30_metodologia_orko/
│
├── README.md                                          # Índice master + changelog evolución
├── 00_introduccion_metodologia.md                    # Filosofía, derivación, §0.5 I5≠Burocracia
├── 00b_mapeo_dominios_fases.md                       # Matriz D×F: Layer 1→Layer 3 (I3 Trazabilidad)
│
├── 01_fases_initiation/                              # F1-F3 (WSLC Initiation)
│   ├── README.md                                     # Navegación, prerequisitos, trazabilidad
│   ├── F1_context_assessment.md                      # 36 parámetros organizacionales
│   ├── F2_vision_definition.md                       # OKR L4, E6 Target state
│   └── F3_trajectory_selection.md                    # Decision matrix + overlays
│
├── 02_fases_development/                             # F4-F9 (WSLC Development)
│   ├── README.md                                     # Navegación desarrollo
│   ├── F4_capability_mapping.md                      # P1 Capacity inventory
│   ├── F5_flow_design.md                             # P2 Value Stream Mapping
│   ├── F6_information_architecture.md                # P3 Information + MGDE Apéndice
│   ├── F7_purpose_cascade.md                         # P5 OKR cascade L4→L1
│   ├── F8_limits_definition.md                       # P4 Limits (regulatory, tech, budget)
│   └── F9_target_state_design.md                     # E6 Target state completo
│
├── 03_fases_implementation/                          # F10-F12 (WSLC Implementation)
│   ├── README.md                                     # Navegación implementación
│   ├── F10_quick_wins.md                             # Victorias tempranas
│   ├── F11_fabric_deployment.md                      # TF1-TF3 + §11.6 Constrained Environments
│   └── F12_state_transition.md                       # E6 Current→Intermediate
│
├── 04_fases_operation/                               # F13-F15 (WSLC Operation)
│   ├── README.md                                     # Navegación operación
│   ├── F13_health_monitoring.md                      # H_org dashboard continuo
│   ├── F14_incident_response.md                      # Triggers remediation playbooks
│   └── F15_continuous_execution.md                   # Xanpan workflows completo
│
├── 05_fases_evolution/                               # F16-F18 (WSLC Evolution)
│   ├── README.md                                     # Navegación evolución
│   ├── F16_learning_loops.md                         # Retrospectives I6
│   ├── F17_adaptation.md                             # Trajectory adjustments
│   └── F18_convergence_check.md                      # E6 convergence validation
│
├── 06_playbooks_recovery/                            # Playbooks Remediation (P01-P04)
│   ├── README.md                                     # Catálogo recovery
│   ├── P01_low_h_org_recovery.md                     # H_org bajo recuperación
│   ├── P02_handoff_reduction.md                      # Handoff ratio reduction
│   ├── P03_okr_alignment.md                          # OKR alignment
│   └── P04_security_remediation.md                   # Security remediation
│
├── 07_playbooks_transformation/                      # Playbooks Transformation (P05-P08)
│   ├── README.md                                     # Catálogo transformación
│   ├── P05_bounded_autonomy_m6.md                    # M6 Bounds 6 dimensiones
│   ├── P06_pilot_transformation.md                   # Pilot transformation
│   ├── P07_scale_transformation.md                   # Scale transformation
│   └── P08_optimization_sustain.md                   # Optimization continua
│
├── 08_playbooks_operational/                         # Playbooks Operational (P09-P15)
│   ├── README.md                                     # Catálogo operational
│   ├── playbook_schema.yaml                          # ⭐ TIPO schema playbooks
│   ├── playbook_instances.yaml                       # ⭐ P09-P15 parametrizados
│   ├── P09_drift_detection_response.md               # I6 Trajectory drift
│   ├── P10_capacity_gap_resolution.md                # Skills/hiring gaps
│   ├── P11_flow_optimization.md                      # Cycle time reduction
│   └── P12_data_quality_recovery.md                  # TF3 quality issues
│
├── 09_trayectorias/                                  # Trajectories Decision Framework
│   ├── README.md                                     # Decision tree completo
│   ├── 01_minimal.md                                 # Tool-agnostic
│   ├── 02_avanzada.md                                # Con tejidos TF1-TF3
│   ├── 03_decision_matrix.md                         # IF-THEN rules + compliance overlay
│   ├── 04_survival.md                                # Crisis extrema F1-F3+F10
│   ├── 05_budget_parametric.md                       # Formula continua budget→scope
│   └── 06_transition_minimal_avanzada.md             # Upgrade path
│
├── 10_integracion_tejidos/                           # TF1-TF3 Integration
│   ├── README.md                                     # Navegación tejidos
│   ├── 01_metodologia_usa_tf1.md                     # Capacity fabric patterns
│   ├── 02_metodologia_usa_tf2.md                     # Flow orchestration
│   ├── 03_metodologia_usa_tf3.md                     # Information lakehouse
│   └── 04_casos_integracion_e2e.md                   # End-to-end examples
│
├── 11_artefactos_templates/                          # Templates & Artifacts
│   ├── README.md                                     # Catálogo completo T01-T25
│   ├── 01_templates_assessment.md                    # T01-T03 Context, Vision
│   ├── 02_templates_planning.md                      # T04-T07 Capacity, VSM, OKR
│   ├── 03_templates_execution.md                     # T08-T11 Checkin, Retro, Incidents
│   ├── 04_templates_evolution.md                     # T12-T15 ADR, User Stories, DORA
│   │
│   └── 05_regulatory_compliance/                     # ⭐ Compliance Framework (Tipo)
│       ├── README.md                                 # Catálogo jurisdicciones
│       ├── compliance_framework_schema.yaml          # ⭐ TIPO dimensiones regulatorias
│       └── jurisdiction_instances.yaml               # ⭐ Jurisdicciones parametrizadas
│
├── 12_roles_governance/                              # Roles & Governance
│   ├── README.md                                     # Navegación roles
│   ├── 01_team_structure_raci.md                     # Roles ORKO + RACI
│   ├── 02_capacity_planning.md                       # FTE estimation, skills matrix
│   ├── 03_escalation_paths.md                        # Decision authority chains
│   ├── 04_multi_authority_patterns.md                # Gobierno multinivel, vetos
│   └── 05_non_traditional_roles.md                   # Volunteers, contractors patterns
│
├── 13_metricas_validacion/                           # Metrics & Validation
│   ├── README.md                                     # Framework métricas
│   ├── 01_kpis_por_trayectoria.md                    # KPIs Minimal/Survival/Avanzada
│   ├── 02_health_gates.md                            # Thresholds críticos H_org
│   └── 03_dashboards_reporting.md                    # Grafana dashboards, cadence
│
├── 14_casos_uso/                                     # ⭐ Case Studies (Tipo)
│   ├── README.md                                     # Navegación casos + patterns
│   ├── context_pattern_schema.yaml                   # ⭐ TIPO dimensiones contextuales
│   ├── case_instances.yaml                           # ⭐ Casos parametrizados
│   ├── 01_pattern_library.md                         # Patrones trans-contextuales
│   └── 02_lecciones_aprendidas.md                    # Cross-context insights
│
├── 15_instrumentacion/                               # Metodología Meta-Metrics
│   ├── README.md                                     # Navegación instrumentación
│   ├── 01_metricas_adopcion_metodologia.md           # Adopción metodología
│   ├── 02_efectividad_metodologia.md                 # Efectividad metodología
│   └── 03_auditorias_coherencia.md                   # Trazabilidad I1-I8 checks
│
├── 16_evolucion_metodologia/                         # Meta-Learning
│   ├── README.md                                     # Meta-aprendizaje framework
│   ├── 01_feedback_loops_metodologia.md              # Cómo evoluciona ORKO
│   ├── 02_antipatrones_metodologicos.md              # What NOT to do
│   └── 03_contribuciones_comunidad.md                # Extension guidelines
│
└── 17_validacion_final/                              # Final Validation
    ├── README.md                                     # Navegación validación
    └── 01_validacion_trazabilidad_i1_i8.md           # Compliance I1-I8 formal

implementacion_metodologia/                            # Executable Assets
│
├── README.md                                         # Status implementación
│
├── templates/                                        # Template Files (ejecutables)
│   ├── assessment/
│   │   ├── T01_context_assessment.yaml               # 36 params + crisis/hypergrowth flags
│   │   ├── T02_vision_statement.md                   # Vision template
│   │   └── T03_stakeholder_matrix.csv                # Stakeholder mapping
│   │
│   ├── planning/
│   │   ├── T04_capacity_inventory.xlsx               # P1 inventory + volunteer/contractor fields
│   │   ├── T05_vsm_template.drawio                   # Value Stream Map canvas
│   │   ├── T06_data_catalog.xlsx                     # P3 Information catalog
│   │   └── T07_okr_cascade.xlsx                      # OKR L4→L1 template
│   │
│   ├── execution/
│   │   ├── T08_weekly_checkin.md                     # Check-in meeting template
│   │   ├── T09_retrospective.md                      # Retro template I6
│   │   ├── T10_incident_report.md                    # Incident response template
│   │   └── T11_xanpan_board.png                      # Xanpan board reference
│   │
│   ├── evolution/
│   │   ├── T12_adr_template.md                       # Architecture Decision Record
│   │   ├── T13_user_story.md                         # User story template
│   │   ├── T14_planning_poker.xlsx                   # Story estimation
│   │   └── T15_dora_dashboard.json                   # DORA metrics Grafana
│   │
│   └── compliance/                                   # Compliance Templates
│       ├── T16_siem_configuration.yaml               # Security monitoring config
│       ├── T17_mgde_compliance_matrix.xlsx           # Chile data mgmt compliance
│       ├── T18_privacy_checklist.xlsx                # Data privacy (GDPR, HIPAA)
│       ├── T19_safety_plan_template.md               # Safety critical systems
│       └── T20_donor_reporting_template.xlsx         # NGO multi-donor reporting
│
├── calculadoras/                                     # Decision Support Tools
│   ├── context_decision_matrix.xlsx                  # F3 trajectory selection
│   ├── health_score_calculator.xlsx                  # H_org calculation
│   ├── roi_estimator.xlsx                            # ROI projection
│   ├── convergence_tracker.xlsx                      # E6 convergence dashboard
│   ├── budget_parametric_allocator.xlsx              # Budget→Scope formula
│   └── regulatory_compliance_tracker.xlsx            # Multi-jurisdiction compliance
│
└── ejemplos/                                         # Reference Implementations
    ├── 01_startup_completo/
    ├── 02_scaleup_completo/
    ├── 03_enterprise_completo/
    ├── 04_fintech_completo/
    ├── 05_manufacturing_completo/
    └── 06_gore_nuble_completo/
```

---

## ANÁLISIS CRÍTICO: MAPEO DOMINIOS→FASES

### Gap Identificado

```yaml
Problema:
  Dominios D1-D4 (Layer 1) implícitos en fases F1-F18 (Layer 3)
  Violación I3 Trazabilidad (Layer 1→3 no auditable)

Propuesta_Incorrecta_Rechazada:
  Solución: 04_concerns_transversales/ con 4 archivos duplicación
  Problema: Duplica contenido YA presente en fases
  Violación: I1 Minimalidad

Solución_Correcta_Adoptada:
  Archivo: 00b_mapeo_dominios_fases.md (único)
  Contenido: Matriz D×F + patterns trans-dominio + validación I3
  
Test_Minimalidad_I1:
  ¿Metodología ejecutable SIN mapeo D→F? SÍ (fases completas) PERO I3 no verificable
  ¿Mapeo duplica contenido fases? NO (es puntero/referencia)
  ¿Existe subset más pequeño? NO (matriz + patterns mínimo suficiente)
  
Justificación:
  Mapeo es PROYECCIÓN, no duplicación
  Índice ortogonal que proyecta Layer 1 sobre Layer 3
  Similar a dependency_graph.yaml
```

---

## VALIDACIÓN INVARIANTES

```yaml
I1_Minimalidad:
  - Schemas tipo (no N archivos instancia)
  - Mapeo único D→F vs directorio completo (rechazado por duplicación)
  - Arquitectura minimalista preservada
  
I2_Ortogonalidad:
  - Schemas independientes (compliance ⊥ context ⊥ playbook)
  - Dominios D1-D4 cruzan fases independientemente
  - Sin contenido duplicado
  
I3_Trazabilidad:
  - Layer 0 (Axiomas/Primitivos) → Layer 1 (Dominios/Contratos) → Layer 3 (Fases)
  - 00b_mapeo_dominios_fases.md: Matriz D×F auditable
  - instances → schemas → primitivos → axiomas
  - Bidireccional navegable
  - Gap_Resuelto: Dominios D1-D4 explícitamente mapeados a F1-F18

I5_HAIC:
  - Delegation modes M1-M6 documentados
  - Human accountability explícito en playbooks
  
I8_Adaptación_Contextual:
  - Jurisdicciones parametrizadas
  - Casos parametrizados
  - Extensible sin crecimiento arquitectónico

Status: Arquitectura definitiva validada contra invariantes
```

## DESCRIPCIÓN SINTÉTICA POR ARCHIVO

### **30_metodologia_orko/ (Núcleo Metodológico)**

| Archivo                          | Descripción                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------- |
| README.md                        | Índice navegacional master, changelog evolución, quick start por contexto        |
| `00_introduccion_metodologia.md` | Filosofía ORKO, derivación Layer 0→3, §0.5 "I5≠Burocracia"                       |
| `00b_mapeo_dominios_fases.md`    | Matriz D1-D4 × F1-F18, trazabilidad Layer 1→Layer 3, patterns trans-dominio (I3) |

### **01_fases_initiation/ (F1-F3)**

| Archivo                      | Descripción                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| `F1_context_assessment.md`   | 36 parámetros organizacionales, H_org estimación, context scoring |
| `F2_vision_definition.md`    | OKR L4 definición, E6 Target state, North Star metrics            |
| `F3_trajectory_selection.md` | Decision matrix (Survival/Minimal/Avanzada), compliance overlays  |

### **02_fases_development/ (F4-F9)**

| Archivo                          | Descripción                                                       |
| -------------------------------- | ----------------------------------------------------------------- |
| `F4_capability_mapping.md`       | P1 Capacity inventory completo, skills matrix, gaps analysis      |
| `F5_flow_design.md`              | P2 Value Stream Mapping, handoff reduction, flow efficiency       |
| `F6_information_architecture.md` | P3 Information design, TF3 Lakehouse, MGDE Compliance Apéndice    |
| `F7_purpose_cascade.md`          | P5 OKR cascade L4→L3→L2→L1, alignment scoring                     |
| `F8_limits_definition.md`        | P4 Limits (Regulatory, Budget, Tech, Time), P4.LimitAsset catalog |
| `F9_target_state_design.md`      | E6 Target state completo, architecture blueprint                  |

### **03_fases_implementation/ (F10-F12)**

| Archivo                    | Descripción                                                   |
| -------------------------- | ------------------------------------------------------------- |
| `F10_quick_wins.md`        | Victorias tempranas 3-6 meses, H_org +10-15 puntos            |
| `F11_fabric_deployment.md` | TF1-TF3 deployment (Avanzada), §11.6 Constrained Environments |
| `F12_state_transition.md`  | E6 Current→Intermediate transition, validation gates          |

### **04_fases_operation/ (F13-F15)**

| Archivo                       | Descripción                                        |
| ----------------------------- | -------------------------------------------------- |
| `F13_health_monitoring.md`    | H_org dashboard continuo, alerts, drift detection  |
| `F14_incident_response.md`    | Incident triggers, playbook activation, escalation |
| `F15_continuous_execution.md` | Xanpan workflows completo, rituals, ceremonies     |

### **05_fases_evolution/ (F16-F18)**

| Archivo                    | Descripción                                               |
| -------------------------- | --------------------------------------------------------- |
| `F16_learning_loops.md`    | Retrospectives I6, feedback loops, continuous improvement |
| `F17_adaptation.md`        | Trajectory adjustments, replanning, pivot decisions       |
| `F18_convergence_check.md` | E6 convergence validation, success criteria, exit gates   |

### **06-08_playbooks/ (P01-P15)**

| Archivo                      | Descripción                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| `playbook_schema.yaml`       | **⭐ TIPO** Schema genérico playbooks (triggers, phases, outputs) |
| `playbook_instances.yaml`    | **⭐** P09-P15 parametrizados (7 playbooks operacionales)         |
| `P01_low_h_org_recovery.md`  | H_org <70 recovery (triage, stabilization, recovery)              |
| `P05_bounded_autonomy_m6.md` | M6 Bounds 6 dimensiones (Financial, Legal, Scope, etc)            |

### **09_trayectorias/ (Trajectories)**

| Archivo                      | Descripción                                        |
| ---------------------------- | -------------------------------------------------- |
| `01_minimal_6_12_meses.md`   | Tool-agnostic, $150-200K, H_org 45→70              |
| `02_avanzada_18_36_meses.md` | Con TF1-TF3, $2M+, H_org 70→85                     |
| `03_decision_matrix.md`      | IF-THEN rules, compliance overlay, context filters |
| `04_survival_0_10K.md`       | Crisis extrema $0-10K, F1-F3+F10 micro, 8 semanas  |
| `05_budget_parametric.md`    | **⭐** Formula continua budget→scope (6 bandas)    |

### **11_artefactos_templates/05_regulatory_compliance/**

| Archivo                            | Descripción                                                         |
| ---------------------------------- | ------------------------------------------------------------------- |
| `compliance_framework_schema.yaml` | **⭐ TIPO** Dimensiones regulatorias (9), enforcement modes, schema |
| `jurisdiction_instances.yaml`      | **⭐** 50 jurisdicciones (CL, US, RU, PE, BW, DE, CN, etc)          |

### **14_casos_uso/ (Case Studies)**

| Archivo                       | Descripción                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| `context_pattern_schema.yaml` | **⭐ TIPO** 8 dimensiones contextuales (D1-D8), pattern types            |
| `case_instances.yaml`         | **⭐** 50+ casos parametrizados (startup, ONG, minera, etc)              |
| `01_pattern_library.md`       | Patrones trans-contextuales abstractos (hypergrowth, crisis, compliance) |

---

## ROADMAP IMPLEMENTACIÓN

```yaml
Sprint_1_Estructura:
  - Crear 17 directorios
  - Crear 17 README.md navegacionales
  - Crear 00_introduccion_metodologia.md

Sprint_2_Fases:
  - 01-05 fases/ (F1-F18, 18 archivos)
  - Migrar contenido propuesta original

Sprint_3_Playbooks:
  - 06-08 playbooks/ (P01-P12 archivos individuales)
  - Crear playbook_schema.yaml
  - Crear playbook_instances.yaml

Sprint_4_Schemas:
  - Crear compliance_framework_schema.yaml
  - Crear jurisdiction_instances.yaml (50 países)
  - Crear context_pattern_schema.yaml
  - Crear case_instances.yaml (50 casos)

Sprint_5_Templates:
  - 11_artefactos_templates
  - implementacion_metodologia/templates/ (25 templates ejecutables)

Sprint_6_Finales:
  - 09_trayectorias
  - 12-17 roles, métricas, instrumentación, validación
  - Calculadoras (6 Excel)
```

## ✅ ESTRUCTURA IMPLEMENTACIÓN METODOLOGÍA

### Estructura Detallada

#### 📁 templates/

```yaml
assessment/ (3):
  - T01_context_assessment.yaml        # 36 parámetros organizacionales
  - T02_vision_statement.md             # Template visión OKR L4
  - T03_stakeholder_matrix.csv          # Matriz stakeholders

planning/ (4):
  - T04_capacity_inventory.xlsx         # Inventario P1 capacidades
  - T05_vsm_template.drawio             # Value Stream Mapping
  - T06_data_catalog.xlsx               # Catálogo P3 información
  - T07_okr_cascade.xlsx                # Cascada OKR L4→L1

execution/ (4):
  - T08_weekly_checkin.md               # Template check-in semanal
  - T09_retrospective.md                # Retrospectiva I6
  - T10_incident_report.md              # Reporte incidentes
  - T11_xanpan_board.png                # Referencia tablero Xanpan

evolution/ (4):
  - T12_adr_template.md                 # Architecture Decision Record
  - T13_user_story.md                   # User story template
  - T14_planning_poker.xlsx             # Story estimation
  - T15_dora_dashboard.json             # DORA metrics Grafana

compliance/ (5):
  - T16_siem_configuration.yaml         # Security monitoring config
  - T17_mgde_compliance_matrix.xlsx     # MGDE Chile compliance
  - T18_privacy_checklist.xlsx          # GDPR/HIPAA privacy
  - T19_safety_plan_template.md         # Safety critical systems
  - T20_donor_reporting_template.xlsx   # NGO multi-donor reporting

context_specific/ (6):
  - crisis_mode_checklist.md            # Crisis survival operations
  - contractor_raci_matrix.csv          # Multi-contractor RACI
  - fda_510k_application_template.md    # FDA 510(k) AI medical device
  - hypergrowth_capacity_model.xlsx     # Hypergrowth capacity planning
  - sanctions_vendor_whitelist.xlsx     # Sanctions-compliant vendors
  - volunteer_capacity_template.xlsx    # Volunteer management NGO
```

#### 📊 calculadoras/

```yaml
Calculadoras_Decision_Support:
  - context_decision_matrix.xlsx          # F3 trajectory selection
  - health_score_calculator.xlsx          # H_org calculation
  - roi_estimator.xlsx                    # ROI projection
  - convergence_tracker.xlsx              # E6 convergence dashboard
  - budget_parametric_allocator.xlsx      # Budget→Scope formula
  - regulatory_compliance_tracker.xlsx    # Multi-jurisdiction tracking
```

#### 📚 ejemplos/

```yaml
Casos_Referencia_Completos:
  
  01_startup_50p_completo/:
    - README.md          # Overview caso
    - context.yaml       # Context 36 params
    - trajectory.md      # Trayectoria aplicada
    - artefactos.md      # Artefactos generados
  
  02_scaleup_200p_completo/:     # Scale-up 200 personas
  03_enterprise_2000p_completo/: # Enterprise 2000+ personas
  04_fintech_500p_completo/:     # Fintech regulated 500p
  05_manufacturing_800p_completo/: # Manufacturing 800p
  06_gore_nuble_completo/:       # Gobierno Regional Chile

Estructura_Uniforme:
  Cada ejemplo contiene 4 archivos estándar
  Facilita comparación cross-context
  Templates instance-based (parametrizados)
```

#### 🛠️ dev_specs/

```yaml
Documentos_Desarrollo_Paralelo:
  
  VOCABULARIO_CONTROLADO.yaml:
    Propósito: Diccionario canónico términos ORKO
    Contenido: P1-P5, D1-D4, I1-I8, términos prohibidos
    Uso: Validación vocabulario 100%
  
  DEPENDENCY_GRAPH.yaml:
    Propósito: Mapeo interdependencias F↔F, F↔P
    Contenido: reads_from, writes_to, consumers
    Uso: Validación referencias cruzadas
  
  TEMPLATE_FASE_WSLC.md:
    Propósito: Estructura uniforme fases F1-F18
    Secciones: §0 Fundamento, §1 Interfaz, etc
    Uso: Autor fases sigue template
  
  TEMPLATE_PLAYBOOK.md:
    Propósito: Estructura uniforme playbooks P01-P15
    Secciones: Triggers, Phases, Steps, etc
    Uso: Autor playbooks sigue template
  
  TEMPLATE_SCHEMA.yaml:
    Propósito: Estructura schemas tipo (compliance, context)
    Contenido: Dimensiones, tipos, ejemplos
    Uso: Autor schemas YAML
  
  CHECKLIST_VALIDACION.md:
    Propósito: Validación I1-I8 por archivo
    Contenido: Checklist completitud, coherencia
    Uso: Peer review y QA
```

#### 📄 Root Files

```yaml
README.md:
  Propósito: Índice maestro implementación
  Contenido: Status, roadmap, instrucciones uso
  
CHANGELOG.md:
  Propósito: Historial evolución metodología
  Contenido: Registro cambios arquitectónicos y refinamientos
```
