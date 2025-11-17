# PLAN ETAPA 1 KERNEL - ULTRA DETALLADO

**Horizonte sugerido:** 1–2 sprints de trabajo concentrado.  
**Objetivo:** MVP metodología validable F1→F3→F7→F9→F13  
**Modo de planificación:** organizado por sprints y bloques de trabajo (no por días ni horas).

---

## §-1. PROPÓSITO Y ALCANCE ETAPA 1 

La Etapa 1 implementa el **kernel metodológico** definido en `SPEC_ARQUITECTURA_DEFINITIVA.md` y
en el plan maestro `PLAN_DESARROLLO_OPERATIVO.md`. Su propósito es construir, documentar y validar
empíricamente el recorrido F1→F3→F7→F9→F13 sobre un caso real (startup ~50p), dejando listo el
terreno para la Etapa 2 (expansión) sin ambigüedades arquitectónicas.

**Alcance Etapa 1:**

- **Fundamentos kernel:** VOCABULARIO_CONTROLADO.yaml, DEPENDENCY_GRAPH.yaml (subset kernel),
  dependency_closure_script.py, CHECKLIST_VALIDACION.md, templates base (fase, playbook, schema).
- **Fases kernel:** Desarrollo MVO de F1, F3, F7, F9, F13 con §0–§1 completos y §2–§10 en estado MVO.
- **Caso empírico:** Ejecución end‑to‑end F1→F3→F7→F9→F13 para una startup 50p (Minimal trajectory).
- **Validation Gate 1:** Reporte de validación, fricciones documentadas y preparación explícita de Etapa 2.

Lo que NO entra en el alcance de esta etapa (pero se prepara para la siguiente):

- Desarrollo completo de F2, F4–F6, F8, F10–F12, F14–F18.
- Implementación full de TF1–TF3 (tejidos tecnológicos) más allá de lo necesario para el caso kernel.

---

## §1. ROADMAP DÍA A DÍA (13 DÍAS KERNEL)

Resumen operativo alineado con `PLAN_DESARROLLO_OPERATIVO.md` y `README_FUENTE_VERDAD.md`:

- **Día 1 – Fundamentos (mañana/tarde)**  
  Mañana: VOCABULARIO_CONTROLADO.yaml completo (Layer 0–3, 79 términos).  
  Tarde: DEPENDENCY_GRAPH.yaml (subset kernel F1,F3,F7,F9,F13) + reglas de validación.

- **Día 2 – Scripts + Templates**  
  dependency_closure_script.py, CHECKLIST_VALIDACION.md y templates:  
  TEMPLATE_FASE_WSLC.md, TEMPLATE_PLAYBOOK.md, TEMPLATE_SCHEMA.yaml.

- **Días 3–4 – F1_context_assessment**  
  Desarrollo MVO de F1 (`§0–§1 completos`), afinamiento de T01_context_assessment.yaml y
  conexión explícita con VOCAB/DEP_GRAPH.

- **Día 5 – F3_trajectory_selection**  
  Desarrollo MVO de F3 y uso de context_decision_matrix.xlsx para seleccionar trayectoria
  (Survival/Minimal/Avanzada) a partir de H_org y constraints.

- **Días 6–7 – F7_purpose_cascade**  
  Desarrollo MVO de F7 y llenado de T07_okr_cascade.xlsx con OKR L4→L3→L2→L1 (
  alignment_score medible).

- **Día 8 – F9_target_state_design**  
  Diseño de E6_target (estado arquitectónico objetivo) y definición de H_org_target y principales ADRs
  usando T12_adr_template.md.

- **Día 9 – F13_health_monitoring**  
  Definición de métricas, dashboards y health_score_calculator.xlsx para monitoreo continuo de H_org,
  handoff_ratio y okr_alignment.

- **Día 10 – Documentación Metodología**  
  Actualización de 00_introduccion_metodologia.md, READMEs de 30_/40_ y trazabilidad a Layers 0–2.

- **Días 11–12 – Validación Caso Startup 50p**  
  Ejecución end‑to‑end F1→F3→F7→F9→F13 sobre un caso real (startup 50p), generación de artefactos
  context.yaml, trajectory.yaml, okr_cascade.xlsx, e6_target.yaml, h_org_dashboard.yaml, y registro
  de fricciones en learnings_kernel.md.

- **Día 13 – Validation Gate 1**  
  Compilación de validation_kernel_report.md, revisión contra CHECKLIST_VALIDACION.md y criterios de
  VG1, decisión Go/No‑Go para Etapa 2.

---

## §0. ARQUITECTURA ETAPA 1

```yaml
Filosofía_Desarrollo:
  Kernel_First: "Núcleo mínimo funcional ANTES expansión"
  MVO_Not_Perfect: "§0-§1 completos > §2-§10 perfectos"
  Validate_Early: "Caso real ANTES finalizar todas fases"
  Iterate_Learn: "Learnings validación → refinamiento inmediato"
  Dependency_Strict: "NO avanzar sin prerequisites completos"

Principios_Ejecución:
  Focus_Deep: "Bloques de trabajo concentrados sin interrupciones"
  Parallel_When_Possible: "Trabajo paralelo si 2 devs (VOCAB + DEP_GRAPH)"
  Validate_Continuously: "Ejecutar closure script post cada cambio"
  Document_As_You_Go: "Learnings en tiempo real, no post-mortem"
  Pair_Complex: "F9 y validación en pair programming"

Entregables_Core:
  Fundamentos (Bloque 1):
    - VOCABULARIO_CONTROLADO.yaml
    - DEPENDENCY_GRAPH.yaml kernel subset
    - dependency_closure_script.py
    - CHECKLIST_VALIDACION.md
    - TEMPLATE_FASE_WSLC.md
    - TEMPLATE_PLAYBOOK.md
    - TEMPLATE_SCHEMA.yaml
  
  Kernel_Fases (Bloque 2):
    - F1_context_assessment.md + T01_context_assessment.yaml
    - F3_trajectory_selection.md + context_decision_matrix.xlsx
    - F7_purpose_cascade.md + T07_okr_cascade.xlsx
    - F9_target_state_design.md + T12_adr_template.md
    - F13_health_monitoring.md + health_score_calculator.xlsx
  
  Documentación (Bloque 3):
    - 00_introduccion_metodologia.md
    - 30_metodologia_orko/README.md
    - 01_fases_initiation/README.md
    - 40_implementacion_metodologia/README.md
  
  Validación_Empírica (Bloque 4):
    - Caso startup_50p_techco_saas ejecutado completo
    - Artefactos: context.yaml, trajectory.yaml, okr_cascade.xlsx, e6_target.yaml, h_org_dashboard.yaml
    - validation_kernel_report.md (análisis fricción + ajustes)
    - learnings_kernel.md
  
  Retrospective (Bloque 5):
    - Retrospective equipo
    - Refinamiento post-validación
    - Validation Gate 1
    - Preparación Etapa 2

Métricas_Éxito_Etapa_1:
  Completitud:
    - 5/5 fases kernel (100%)
    - 5/5 fundamentos (100%)
    - 5/5 artefactos kernel (100%)
    - 1/1 caso validado (100%)
  
  Calidad:
    - Vocabulario canónico: 100% (0 términos prohibidos)
    - Dependency graph: cerrado (0 errores)
    - Trazabilidad §0: 5/5 fases completas
    - Métricas calidad: cumplidas (líneas, secciones, ejemplos)
  
  Empirismo:
    - Caso startup ejecutable: 
    - Artefactos coherentes: 
    - H_org baseline→target path: 45→70 claro
    - Templates usables: (con fricción documentada)
  
  Timeline:
    - Target: 1–2 sprints
    - Buffer: ±1 sprint aceptable
    - Blocker crítico: >2 sprints = replantear approach

Riesgos_Mitigación:
  Riesgo_1_Perfeccionismo:
    Síntoma: "Iteraciones infinitas §2-§10"
    Mitigación: "Time-box 80% esfuerzo en §0-§1, solo 20% en §2-§10 MVO"
    
  Riesgo_2_Dependency_Rota:
    Síntoma: "F3 referencia F2 no desarrollado aún"
    Mitigación: "Ejecutar closure_script cada commit, fix inmediato"
    
  Riesgo_3_Validación_Tardía:
    Síntoma: "Descubrir templates no usables en Bloque 4"
    Mitigación: "Validación parcial Bloque 2 (F1+F3 en mini-caso)"
    
  Riesgo_4_Scope_Creep:
    Síntoma: "Agregar F2,F4-F6 a kernel"
    Mitigación: "Stick to kernel F1,F3,F7,F9,F13. Rest is Etapa 2."
    
  Riesgo_5_Burnout:
    Síntoma: "8h diarias sostenidas >5 días"
    Mitigación: "Max 6h focused, breaks 15min cada 90min, día libre si necesario"
```

---

## §1. BLOQUE 1 - VOCABULARIO + DEPENDENCY GRAPH

### CONTEXTO BLOQUE 1

**Objetivo bloque:** Fundamentos semánticos + estructura dependencies  
**Criticidad:** P0_BLOCKER (todo depende de esto)  
**Esfuerzo:** Bloque de trabajo concentrado  
**Puede parallelizar:** SÍ si 2 devs (1 VOCAB, 1 DEP_GRAPH)

**Pre-requisitos bloque:**

- Workspace limpio [/Users/felixsanhueza/fx_felixiando/orko/](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko:0:0-0:0)
- Acceso docs: `out/00_fundamentos_teoricos.md`, `out/10_arquitectura_orko.md`, `out/20_tejidos.md`
- SPEC_ARQUITECTURA_DEFINITIVA.md abierto como referencia
- Editor configurado: YAML syntax, 2-space indent, auto-save
- `yamllint` instalado: `brew install yamllint` (macOS)

**Outputs esperados bloque:**

- VOCABULARIO_CONTROLADO.yaml
- DEPENDENCY_GRAPH.yaml kernel subset
- Ambos archivos committed a repo

---

### SESIÓN BLOQUE 1 (VOCABULARIO_CONTROLADO.yaml)

#### Preparación (10min)

```bash
# Workspace setup
cd /Users/felixsanhueza/fx_felixiando/orko
mkdir -p 40_implementacion_metodologia/dev_specs
cd 40_implementacion_metodologia/dev_specs

# Crear archivo
touch VOCABULARIO_CONTROLADO.yaml

# Abrir en editor con split view
# Left: VOCABULARIO_CONTROLADO.yaml (edición)
# Right: out/00_fundamentos_teoricos.md (referencia)
```

**Referencias quick access:**

- `out/00_fundamentos_teoricos.md` → A1-A5, P1-P5, I1-I8 definitions
- `out/10_arquitectura_orko.md` → D1-D4, C1-C5, E6-E7
- `out/20_tejidos.md` → TF1-TF3
- [SPEC_ARQUITECTURA_DEFINITIVA.md](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/30_metodologia_orko/00_wip_desarrollo_metodologia/SPEC_ARQUITECTURA_DEFINITIVA.md:0:0-0:0) → ADRs, kernel definition

**Ambiente:** Música concentración (lo-fi, clásica, silencio), notificaciones OFF

---

#### Actividad 1.1: Estructura Base (25min)

**Objetivo:** Scaffold completo archivo con metadata + secciones

**Código a copiar:**

```yaml
# ================================================================
# VOCABULARIO CONTROLADO ORKO - DICCIONARIO CANÓNICO
# ================================================================
# 
# Propósito: Diccionario canónico términos técnicos ORKO Layers 0-3
# Enforcement: 100% obligatorio (0 términos prohibidos tolerados)
# Validación: grep, code review, CHECKLIST_VALIDACION.md
# 
# Version: 1.0.0
# Date: 2024-11-14
# Status: PRODUCTION
#
# ================================================================

metadata:
  version: "1.0.0"
  date: "2024-11-14"
  status: "production"
  scope: "layers_0_to_3"
  purpose: "Diccionario canónico términos ORKO para desarrollo metodología"
  enforcement: "mandatory_100_percent"
  
  validation_methods:
    - "grep términos prohibidos en todos archivos .md"
    - "code review peer obligatorio"
    - "CHECKLIST_VALIDACION.md pre-commit"
    - "yamllint VOCABULARIO_CONTROLADO.yaml"
  
  statistics:
    total_terms: null  # Completar al final
    axiomas: 5
    primitivos: 5
    invariantes: 8
    dominios: 4
    contratos: 5
    entidades: 2
    metricas_core: 3
    delegation_modes: 6
    tejidos: 3
    fases_wslc: 18
    playbooks: 15
    trayectorias: 3
    terminos_prohibidos: 6

  authors:
    - "Lead Architecture"
    - "Lead Methodology"
  
  maintainers:
    - "Equipo Arquitectura ORKO"

# ================================================================
# LAYER 0: FUNDAMENTOS TEÓRICOS (NO MODIFICABLE)
# ================================================================
# 
# Base axiomática, primitivos irreducibles, invariantes preservados
# Source: out/00_fundamentos_teoricos.md
#
# ================================================================

layer_0:
  
  # ------------------------------------------------------------
  # AXIOMAS A1-A5: Base conceptual irrefutable
  # ------------------------------------------------------------
  axiomas:
    # Se completa en Actividad 1.2
    
  # ------------------------------------------------------------
  # PRIMITIVOS P1-P5: Elementos irreducibles
  # ------------------------------------------------------------
  primitivos:
    # Se completa en Actividad 1.2
    
  # ------------------------------------------------------------
  # INVARIANTES I1-I8: Propiedades preservadas
  # ------------------------------------------------------------
  invariantes:
    # Se completa en Actividad 1.2

# ================================================================
# LAYER 1: ARQUITECTURA
# ================================================================
#
# Dominios, contratos, entidades, métricas
# Source: out/10_arquitectura_orko.md
#
# ================================================================

layer_1:
  
  dominios:
    # Se completa en Actividad 1.3
  
  contratos:
    # Se completa en Actividad 1.3
  
  entidades:
    # Se completa en Actividad 1.3
  
  metricas:
    # Se completa en Actividad 1.3
  
  delegation_modes:
    # Se completa en Actividad 1.3

# ================================================================
# LAYER 2: TEJIDOS (TF1-TF3)
# ================================================================
#
# Capacity, Flow, Information Fabrics
# Source: out/20_tejidos.md
#
# ================================================================

layer_2:
  tejidos:
    # Se completa en Actividad 1.3

# ================================================================
# LAYER 3: METODOLOGÍA
# ================================================================
#
# WSLC Phases, Playbooks, Trayectorias
# Source: SPEC_ARQUITECTURA_DEFINITIVA.md
#
# ================================================================

layer_3:
  
  wslc_phases:
    # Se completa en Actividad 1.3
  
  playbooks:
    # Se completa en Actividad 1.3
  
  trayectorias:
    # Se completa en Actividad 1.3

# ================================================================
# TÉRMINOS PROHIBIDOS (Ambiguos/Imprecisos)
# ================================================================
#
# Lista términos NO permitidos + alternativas canónicas
#
# ================================================================

terminos_prohibidos:
  # Se completa en Actividad 1.4

# ================================================================
# QUICK REFERENCE ALIASES
# ================================================================
#
# Mapeo alias → término canónico (auto-generated)
#
# ================================================================

quick_reference:
  # Se genera al final basado en alias declarados

# ================================================================
# CHANGELOG
# ================================================================

changelog:
  - version: "1.0.0"
    date: "2024-11-14"
    author: "Equipo Arquitectura ORKO"
    changes:
      - "Creación inicial vocabulario completo Layer 0-3"
      - "5 axiomas A1-A5 documentados exhaustivamente"
      - "5 primitivos P1-P5 con contratos + ejemplos"
      - "8 invariantes I1-I8 con tests compliance"
      - "4 dominios D1-D4 ortogonales"
      - "18 fases WSLC mapeadas"
      - "15 playbooks catalogados"
      - "6 términos prohibidos identificados"
```

**Validar estructura:**

```bash
# Verificar YAML syntax
yamllint VOCABULARIO_CONTROLADO.yaml

# Debe pasar sin errores
# Warnings de líneas largas son OK en comentarios
```

**Checklist Actividad 1.1:**

- [ ] Archivo creado en ruta correcta
- [ ] Metadata completa con statistics
- [ ] Estructura Layer 0-3 scaffolded
- [ ] Comentarios secciones claros
- [ ] Placeholders marcados para próximas actividades
- [ ] YAML syntax válido (yamllint pass)
- [ ] Changelog iniciado

**Output:** Base 180 líneas

---

## PARTE 2A: Actividad 1.2 - Axioma A1 Organización

```yaml
#### Actividad 1.2: Layer 0 Completo (2h 30min)

**Objetivo:** Documentar exhaustivamente A1-A5, P1-P5, I1-I8

##### Sub-actividad 2.1: Axiomas A1-A5 (45min total, ~9min por axioma)

**Método:** Por cada axioma completar estructura completa con derivación metodológica + ejemplos

**Axioma A1 - Organización:**

```yaml
  axiomas:
    
    A1_Organización:
      id: "A1"
      nombre: "Axioma Organización"
      enunciado: "Organización = colaboración personas transformando inputs→outputs"
      
      alias:
        - "Organization"
        - "Org"
        - "Work System"
      
      keywords:
        - "colaboración"
        - "personas"
        - "transformación"
        - "inputs"
        - "outputs"
      
      derivacion_metodologica:
        - fase: "F4_capability_mapping"
          relacion: "Mapea PERSONAS → P1.CapacityAsset substrate=Humano"
          rationale: "A1 establece personas como elemento central, F4 operacionaliza inventory"
        
        - fase: "F5_flow_design"
          relacion: "Mapea TRANSFORMACIONES → P2.FlowAsset"
          rationale: "A1 establece transformación, F5 diseña flujos específicos"
        
        - fase: "F6_information_architecture"
          relacion: "Mapea inputs/outputs → P3.InformationAsset"
          rationale: "A1 establece inputs/outputs, F6 arquitecta información"
      
      ejemplos:
        minimal_startup:
          descripcion: "Startup 50 personas colaborando desarrollo software"
          personas: 50
          transformaciones:
            - "Feature request → código deployed"
            - "Bug report → fix en producción"
          inputs: ["User stories", "Bug reports", "Market feedback"]
          outputs: ["Software features", "Bug fixes", "Product releases"]
        
        avanzada_enterprise:
          descripcion: "Enterprise 2000p múltiples productos"
          personas: 2000
          transformaciones:
            - "Oportunidad negocio → producto lanzado"
            - "Incidente cliente → resolución"
          inputs: ["Market research", "Customer demands", "Regulatory changes"]
          outputs: ["Products", "Services", "Compliance reports"]
      
      test_compliance:
        pregunta: "¿Metodología modela personas, transformaciones, inputs/outputs?"
        respuesta: "SÍ - F4 (personas), F5 (transformaciones), F6 (inputs/outputs)"
        status: "✅ PASS"
      
      referencias:
        - "00_fundamentos_teoricos.md#A1"
        - "Alter (2013) Work System Theory"
```

---

## PARTE 2B: Axiomas A2 Propósito + A3 Flujo

```yaml
    A2_Propósito:
      id: "A2"
      nombre: "Axioma Propósito"
      enunciado: "Toda organización existe para objetivo específico"
      
      alias:
        - "Purpose"
        - "Mission"
        - "Raison d'être"
      
      keywords:
        - "objetivo"
        - "específico"
        - "intencionalidad"
        - "direccionalidad"
      
      derivacion_metodologica:
        - fase: "F2_vision_definition"
          relacion: "Define propósito organizacional OKR L4"
          rationale: "A2 exige propósito explícito, F2 operacionaliza definición"
        
        - fase: "F7_purpose_cascade"
          relacion: "Cascada propósito L4→L3→L2→L1"
          rationale: "A2 implica alineamiento jerárquico, F7 implementa cascade"
        
        - fase: "F18_convergence_check"
          relacion: "Valida cumplimiento propósito organizacional"
          rationale: "A2 establece propósito como éxito, F18 verifica alcance"
      
      ejemplos:
        minimal_startup:
          proposito: "Democratizar acceso crédito SMEs Latam"
          okr_l4:
            objective: "Alcanzar product-market fit Q3 2025"
            key_results:
              - "$500K ARR"
              - "100 paying customers"
              - "NPS >40"
              - "Churn <8%"
        
        avanzada_enterprise:
          proposito: "Líder transformación digital sector financiero"
          okr_l4:
            objective: "Capturar 25% mercado digital banking 2026"
            key_results:
              - "3M usuarios activos mensuales"
              - "NPS >50"
              - "Cost-to-income <35%"
              - "Zero downtime crítico"
      
      test_compliance:
        pregunta: "¿Metodología exige propósito explícito desde inicio?"
        respuesta: "SÍ - F2 obligatorio Initiation, F7 cascade, F18 validation"
        status: "✅ PASS"
      
      referencias:
        - "00_fundamentos_teoricos.md#A2"
        - "Sinek (2009) Start With Why"
    
    A3_Flujo:
      id: "A3"
      nombre: "Axioma Flujo"
      enunciado: "Organizaciones son redes flujo, NO jerarquías estáticas"
      
      alias:
        - "Flow"
        - "Network"
        - "Dynamic System"
      
      keywords:
        - "redes"
        - "flujo"
        - "dinámica"
        - "anti-jerarquía"
      
      derivacion_metodologica:
        - fase: "F5_flow_design"
          relacion: "VSM mapeo + handoff reduction"
          rationale: "A3 enfatiza flujo, F5 diseña optimización"
        
        - fase: "F13_health_monitoring"
          relacion: "Monitoring continuo flow efficiency"
          rationale: "A3 implica flujo variable, F13 monitorea performance"
        
        - playbook: "P02_handoff_reduction"
          relacion: "Remediation cuando handoff_ratio >30%"
          rationale: "A3 penaliza handoffs excesivos, P02 corrige"
      
      metricas_derivadas:
        handoff_ratio:
          formula: "handoffs / (capacities_involved - 1)"
          threshold_critical: ">0.40"
          threshold_warning: ">0.30"
          threshold_good: "≤0.30"
        
        cycle_time:
          measurement: "Duration ISO_8601"
          target: "Minimizar dentro calidad constraints"
        
        flow_efficiency:
          formula: "value_adding_time / total_cycle_time"
          threshold_poor: "<0.30"
          threshold_good: ">0.50"
      
      ejemplos:
        startup_feature_flow:
          flow: "Feature request → deployed production"
          capacities_involved: 7
          handoffs: 9
          handoff_ratio: 1.5  # 150% CRÍTICO
          cycle_time: "12 días"
          efficiency: 0.33
          diagnosis:
            problema: "Handoff ratio crítico"
            recomendacion: "P02: consolidar en full-stack teams"
      
      test_compliance:
        pregunta: "¿Metodología optimiza flujo vs jerarquía?"
        respuesta: "SÍ - F5 VSM, handoff_ratio métrica, P02 remediation"
        status: "✅ PASS"
      
      antipatron:
        nombre: "Jerarquía sobre flujo"
        deteccion: "handoff_ratio >40%, efficiency <30%"
        correccion: "Reestructurar por value streams, no funciones"
      
      referencias:
        - "00_fundamentos_teoricos.md#A3"
        - "Goldratt (1984) The Goal"
```

---

## PARTE 2C: Axiomas A4 Límite + A5 Cambio

```yaml
    A4_Límite:
      id: "A4"
      nombre: "Axioma Límite"
      enunciado: "Sistemas operan bajo restricciones que acotan posibilidades"
      
      alias:
        - "Constraint"
        - "Limit"
        - "Boundary"
      
      keywords:
        - "restricciones"
        - "acotar"
        - "feasibility"
      
      derivacion_metodologica:
        - fase: "F8_limits_definition"
          relacion: "Catálogo exhaustivo P4.LimitAsset"
          rationale: "A4 exige identificar límites, F8 operacionaliza"
        
        - fase: "F3_trajectory_selection"
          relacion: "Límites determinan trayectoria viable"
          rationale: "A4 implica constraints como gates decision"
        
        - schema: "compliance_framework_schema"
          relacion: "Límites jurisdiccionales parametrizados"
          rationale: "A4 incluye límites regulatorios"
      
      tipos_limites:
        Regulatory:
          enforcement: "Hard (violación = ilegal)"
          ejemplos: ["GDPR data residency", "HIPAA PII", "MGDE Chile"]
        
        Budget:
          enforcement: "Hard (violación = insolvencia)"
          ejemplos: ["$180K total", "Burn rate $50K/mes"]
        
        Technical:
          enforcement: "Hard/Soft según caso"
          ejemplos: ["API latency <200ms p99", "Max users 10K"]
        
        Time:
          enforcement: "Hard deadline"
          ejemplos: ["Go-live Q3 2025"]
        
        Security:
          enforcement: "Hard (violación = breach)"
          ejemplos: ["PII access restricted", "MFA obligatorio"]
        
        Political:
          enforcement: "Variable (poder stakeholder)"
          ejemplos: ["Board approval >$50K", "CEO veto"]
      
      ejemplos:
        startup_limits:
          regulatory: "GDPR compliance (opera EU)"
          budget: "$180K total → Trayectoria Minimal"
          time: "Go-live Q3 2025 (8 meses)"
          technical: "API latency <200ms"
      
      test_compliance:
        pregunta: "¿Metodología identifica + respeta límites?"
        respuesta: "SÍ - F8 catalog, F3 constraints gates, schemas compliance"
        status: "✅ PASS"
      
      referencias:
        - "00_fundamentos_teoricos.md#A4"
        - "Goldratt (1984) Theory of Constraints"
    
    A5_Cambio:
      id: "A5"
      nombre: "Axioma Cambio"
      enunciado: "Organizaciones evolucionan continuamente bajo presión selectiva"
      
      alias:
        - "Evolution"
        - "Change"
        - "Adaptation"
      
      keywords:
        - "evolución"
        - "continua"
        - "presión selectiva"
        - "adaptación"
      
      derivacion_metodologica:
        - fase: "F16_learning_loops"
          relacion: "Retrospectives I6 + aprendizaje continuo"
          rationale: "A5 exige learning, F16 operacionaliza"
        
        - fase: "F17_adaptation"
          relacion: "Trajectory adjustments basado en learnings"
          rationale: "A5 implica adaptación, F17 implementa pivots"
        
        - entidad: "E7_Trayectoria"
          relacion: "Entidad observable evolutiva"
          rationale: "A5 materializa en E7 trayectoria temporal"
      
      ejemplos:
        pivot_b2c_b2b:
          contexto: "Startup pivota de B2C a B2B tras 6 meses"
          presion_selectiva: "CAC B2C insostenible ($300), LTV bajo ($50)"
          adaptacion: "Pivotar B2B: CAC $2K, LTV $15K"
          resultado: "Supervivencia + PMF alcanzado"
      
      test_compliance:
        pregunta: "¿Metodología permite evolución continua?"
        respuesta: "SÍ - F16/F17 learning+adaptation, E7 trayectoria observable"
        status: "✅ PASS"
      
      referencias:
        - "00_fundamentos_teoricos.md#A5"
        - "Holland (1995) Hidden Order"
```

---

## PARTE 2D1: Primitivos P1 Capacidad + P2 Flujo + P3 Información

```yaml
##### Sub-actividad 2.2: Primitivos P1-P5 (1h 15min total, ~15min por primitivo)

**Método:** Por cada primitivo documentar contrato + atributos + uso metodológico + ejemplos

  # ------------------------------------------------------------
  # PRIMITIVOS P1-P5: Elementos irreducibles
  # ------------------------------------------------------------
  primitivos:
    
    P1_Capacidad:
      id: "P1"
      nombre: "Primitivo Capacidad"
      definicion: "Habilidad ejecutar transformaciones"
      contrato: "C1_CapacityAsset"
      
      alias:
        - "Capacity"
        - "CapacityAsset"
        - "Capability"
      
      atributos_core:
        capacity_type:
          values: [C0_Foundational, C1_Core, C2_Context, C3_Commodity]
          descripcion: "Clasificación ORKO capacidades"
        
        substrate:
          values: [Humano, Algorítmico, Mecánico, Mixto]
          descripcion: "Sustrato físico que ejecuta capacidad"
        
        ownership:
          values: [Internal, External, Hybrid]
          descripcion: "Propiedad organizacional"
        
        lifecycle:
          values: [Draft, Active, Deprecated, Sunset]
          descripcion: "Estado en ciclo vida"
        
        delegation_mode:
          values: [M1, M2, M3, M4, M5, M6]
          descripcion: "Modo delegación HAIC (I5)"
          referencia: "M1-M6 delegation_modes section"
      
      uso_metodologico:
        - fase: "F4_capability_mapping"
          uso: "Inventory completo P1 capacidades existentes"
        
        - fase: "F10_quick_wins"
          uso: "Identificar P1 mejora rápida"
        
        - playbook: "P10_capacity_gap_resolution"
          uso: "Remediar gaps P1 críticos"
        
        - tejido: "TF1_Capacity"
          uso: "Registry centralizado P1 + observability"
      
      ejemplos:
        c1_backend_dev:
          capacity_type: "C1_Core"
          substrate: "Humano"
          descripcion: "Desarrollo software backend"
          ownership: "Internal"
          lifecycle: "Active"
          delegation_mode: "M2"
        
        c2_compliance_gdpr:
          capacity_type: "C2_Context"
          substrate: "Mixto (humano + AI)"
          descripcion: "Compliance GDPR"
          ownership: "Hybrid"
          delegation_mode: "M4"
        
        c3_cicd_pipeline:
          capacity_type: "C3_Commodity"
          substrate: "Algorítmico"
          descripcion: "CI/CD automation"
          ownership: "External (GitHub Actions)"
          delegation_mode: "M6"
      
      referencias:
        - "00_fundamentos_teoricos.md#P1"
        - "10_arquitectura_orko.md#C1"
        - "20_tejidos/01_TF1_capacity.md"
    
    P2_Flujo:
      id: "P2"
      nombre: "Primitivo Flujo"
      definicion: "Movimiento información/materiales entre capacidades"
      contrato: "C2_FlowAsset"
      
      alias:
        - "Flow"
        - "FlowAsset"
        - "Workflow"
        - "Process"
      
      atributos_core:
        flow_type:
          values: [Sequential, Parallel, Conditional, Iterative]
          descripcion: "Patrón ejecución flujo"
        
        efficiency:
          type: "Float [0-1]"
          formula: "value_adding_time / total_cycle_time"
          descripcion: "Eficiencia flujo"
        
        handoff_ratio:
          type: "Float [0-1]"
          formula: "handoffs / (capacities - 1)"
          threshold_critical: ">0.40"
          descripcion: "Ratio handoffs (A3 métrica)"
        
        cycle_time:
          type: "Duration ISO_8601"
          descripcion: "Tiempo total inicio→fin"
      
      uso_metodologico:
        - fase: "F5_flow_design"
          uso: "VSM mapeo P2 flujos críticos"
        
        - fase: "F11_fabric_deployment"
          uso: "TF2 Flow orchestration deployment"
        
        - fase: "F15_continuous_execution"
          uso: "Xanpan workflows operacionales"
        
        - playbook: "P11_flow_optimization"
          uso: "Optimizar P2 con bottlenecks"
      
      ejemplos:
        feature_dev_flow:
          flow_type: "Sequential"
          descripcion: "Feature request → deployed"
          cycle_time: "P12D"  # 12 días
          handoff_ratio: 1.5  # 150%
          efficiency: 0.33
          status: "⚠️ Handoffs críticos"
        
        incident_response_flow:
          flow_type: "Conditional"
          descripcion: "Incident → resolution"
          cycle_time: "PT4H"  # 4 horas
          handoff_ratio: 0.25
          efficiency: 0.65
          status: "✅ Saludable"
      
      referencias:
        - "00_fundamentos_teoricos.md#P2"
        - "10_arquitectura_orko.md#C2"
        - "20_tejidos/02_TF2_flow.md"
    
    P3_Información:
      id: "P3"
      nombre: "Primitivo Información"
      definicion: "Datos estructurados con schema y governance"
      contrato: "C3_InformationAsset"
      
      alias:
        - "Information"
        - "InformationAsset"
        - "Data"
      
      atributos_core:
        schema:
          type: "URI JSON_Schema"
          descripcion: "Schema estructural datos"
        
        quality:
          values: [Verified, Trusted, Untrusted, Deprecated]
          descripcion: "Nivel confianza calidad"
        
        governance:
          values: [Open, Restricted, Confidential, Secret]
          descripcion: "Nivel control acceso"
        
        lifecycle:
          values: [Raw, Curated, Published, Archived]
          descripcion: "Estado procesamiento"
      
      uso_metodologico:
        - fase: "F6_information_architecture"
          uso: "Catálogo P3 + architecture blueprint"
        
        - fase: "F11_fabric_deployment"
          uso: "TF3 Information Lakehouse deployment"
        
        - playbook: "P12_data_quality_recovery"
          uso: "Remediar P3 quality issues"
        
        - compliance: "MGDE"
          uso: "Marco Gestión Datos Estado Chile"
      
      ejemplos:
        customer_profile:
          schema: "customer_v2.json"
          quality: "Verified"
          governance: "Restricted"
          lifecycle: "Published"
          uso: "CRM, analytics, personalization"
        
        transaction_log:
          schema: "transaction_v1.json"
          quality: "Verified"
          governance: "Confidential"
          lifecycle: "Published"
          retention: "P7Y"  # 7 años
          compliance: ["SOX", "Tax law"]
      
      referencias:
        - "00_fundamentos_teoricos.md#P3"
        - "10_arquitectura_orko.md#C3"
        - "20_tejidos/03_TF3_information.md"
```

---

## PARTE 2D2: Primitivos P4 Límite + P5 Propósito

```yaml
    P4_Límite:
      id: "P4"
      nombre: "Primitivo Límite"
      definicion: "Restricciones que acotan espacio posibilidades"
      contrato: "C4_LimitAsset"
      
      alias:
        - "Limit"
        - "LimitAsset"
        - "Constraint"
      
      atributos_core:
        limit_type:
          values: [Regulatory, Budget, Technical, Time, Security, Political]
          descripcion: "Categoría límite"
        
        enforcement:
          values: [Hard, Soft, Advisory]
          descripcion: "Nivel obligatoriedad"
          hard: "No violable (legal, física)"
          soft: "Evitable con justificación"
          advisory: "Recomendación"
        
        scope:
          values: [Global, Organizational, Team, Individual]
          descripcion: "Alcance aplicación"
      
      uso_metodologico:
        - fase: "F8_limits_definition"
          uso: "Catálogo completo P4 límites"
        
        - schema: "compliance_framework_schema"
          uso: "P4 jurisdiccionales parametrizados"
        
        - fase: "F3_trajectory_selection"
          uso: "P4 como gates decision trayectoria"
        
        - playbook: "P04_security_remediation"
          uso: "Remediar violaciones P4 security"
      
      ejemplos:
        gdpr_residency:
          limit_type: "Regulatory"
          enforcement: "Hard"
          scope: "Global"
          descripcion: "GDPR data residency EU"
          violation_consequence: "Multa hasta €20M o 4% revenue"
          validation_method: "Audit infra location"
        
        budget_total:
          limit_type: "Budget"
          enforcement: "Hard"
          scope: "Organizational"
          descripcion: "$180K total proyecto"
          violation_consequence: "Insolvencia"
        
        api_latency:
          limit_type: "Technical"
          enforcement: "Soft"
          scope: "Global"
          descripcion: "API p99 <200ms"
          violation_consequence: "SLA breach, degraded UX"
      
      referencias:
        - "00_fundamentos_teoricos.md#P4"
        - "10_arquitectura_orko.md#C4"
    
    P5_Propósito:
      id: "P5"
      nombre: "Primitivo Propósito"
      definicion: "Objetivo mensurable organizacional"
      contrato: "C5_PurposeAsset"
      
      alias:
        - "Purpose"
        - "PurposeAsset"
        - "OKR"
        - "Goal"
      
      atributos_core:
        level:
          values: [L4_Organization, L3_Division, L2_Team, L1_Individual]
          descripcion: "Nivel jerárquico OKR"
        
        objective:
          type: "String"
          descripcion: "Objetivo cualitativo aspiracional"
        
        key_results:
          type: "List[KeyResult]"
          descripcion: "Resultados clave cuantitativos"
          structure:
            metric: "String"
            baseline: "Number"
            target: "Number"
            deadline: "Date"
        
        alignment_score:
          type: "Float [0-1]"
          formula: "Weighted cascade alignment"
          threshold_critical: "<0.50"
          threshold_good: "≥0.70"
      
      uso_metodologico:
        - fase: "F2_vision_definition"
          uso: "Vision P5 OKR L4 definition"
        
        - fase: "F7_purpose_cascade"
          uso: "Cascade P5 L4→L3→L2→L1"
        
        - fase: "F18_convergence_check"
          uso: "Validar cumplimiento P5"
        
        - playbook: "P03_okr_alignment"
          uso: "Remediar alignment_score <70%"
      
      ejemplos:
        okr_l4_startup:
          level: "L4_Organization"
          objective: "Alcanzar product-market fit Q3 2025"
          key_results:
            - metric: "ARR"
              baseline: "$0"
              target: "$500K"
              deadline: "2025-09-30"
            - metric: "Paying customers"
              baseline: 0
              target: 100
              deadline: "2025-09-30"
            - metric: "NPS"
              baseline: null
              target: 40
              deadline: "2025-09-30"
            - metric: "Churn rate"
              baseline: null
              target: "8%"
              deadline: "2025-09-30"
        
        okr_l2_team:
          level: "L2_Team"
          objective: "Reducir cycle time desarrollo 40%"
          key_results:
            - metric: "Cycle time feature→prod"
              baseline: "12 días"
              target: "<3 días"
              deadline: "2025-06-30"
            - metric: "Handoff ratio"
              baseline: 1.5
              target: "<0.30"
              deadline: "2025-06-30"
          parent_okr: "L3 Engineering excellence"
          alignment_score: 0.85
      
      referencias:
        - "00_fundamentos_teoricos.md#P5"
        - "10_arquitectura_orko.md#C5"
        - "Doerr (2018) Measure What Matters"

---

## PARTE 2E: Invariantes I1-I8

```yaml
##### Sub-actividad 2.3: Invariantes I1-I8 (30min total, ~4min por invariante)

**Método:** Por cada invariante documentar aplicación + test + enforcement

  # ------------------------------------------------------------
  # INVARIANTES I1-I8: Propiedades preservadas
  # ------------------------------------------------------------
  invariantes:
    
    I1_Minimalidad:
      id: "I1"
      nombre: "Invariante Minimalidad"
      definicion: "Mínimo elementos necesarios y suficientes"
      
      aplicacion_metodologia:
        - contexto: "Schemas tipo vs N instancias"
          ejemplo: "compliance_framework_schema.yaml + 50 instances vs 50 archivos"
          beneficio: "Escalabilidad sin crecimiento arquitectónico"
        
        - contexto: "18 fases WSLC"
          test: "¿Existe subset menor suficiente?"
          respuesta: "NO - Kernel 5 fases es MVP, pero 18 es mínimo completo"
        
        - contexto: "Playbooks P09-P15 parametrizados"
          ejemplo: "playbook_schema.yaml + instances vs 7 markdown separados"
          beneficio: "Reducción duplicación 7x"
      
      test_compliance:
        pregunta: "¿Existe arquitectura más pequeña suficiente?"
        metodo: "Intentar eliminar cada elemento, verificar rompimiento"
        resultado: "NO - Cada fase/playbook/schema tiene propósito único"
        status: "✅ PASS"
      
      enforcement:
        code_review: "Rechazar nuevos elementos sin justificación I1"
        refactoring: "Consolidar elementos redundantes detectados"
      
      referencias:
        - "00_fundamentos_teoricos.md#I1"
        - "Occam's Razor principle"
    
    I2_Ortogonalidad:
      id: "I2"
      nombre: "Invariante Ortogonalidad"
      definicion: "Primitivos independientes, sin overlap semántico"
      
      aplicacion_metodologia:
        - contexto: "D1-D4 dominios"
          test: "¿Modificar D1 afecta D2?"
          respuesta: "NO - Arquitectura ⊥ Percepción ⊥ Decisión ⊥ Operación"
        
        - contexto: "Fases cruzan dominios"
          ejemplo: "F5 usa D1_PRIMARY + D4_SECONDARY sin contradicción"
        
        - contexto: "Schemas tipo independientes"
          test: "compliance ⊥ context ⊥ playbook"
          respuesta: "SÍ - No overlap dimensiones"
      
      test_compliance:
        pregunta: "¿Existe overlap semántico entre elementos?"
        metodo: "Matriz ortogonalidad D×F, P×P, schemas×schemas"
        resultado: "NO overlap detectado"
        status: "✅ PASS"
      
      enforcement:
        design_review: "Verificar nuevos elementos no overlap existentes"
        refactoring: "Separar elementos con overlap detectado"
      
      referencias:
        - "00_fundamentos_teoricos.md#I2"
        - "Modularity principle"
    
    I3_Trazabilidad:
      id: "I3"
      nombre: "Invariante Trazabilidad"
      definicion: "Todo elemento traza a fundamentos explícitamente"
      
      aplicacion_metodologia:
        - contexto: "§0 Fundamento obligatorio"
          enforcement: "Todas fases/playbooks DEBEN tener §0 con Layer 0-1-2 refs"
        
        - contexto: "Cadena derivacional"
          path: "A→P→I→C→TF→F verificable bidireccional"
        
        - contexto: "00b_mapeo_dominios_fases.md"
          uso: "Matriz D×F auditable para trazabilidad Layer 1→3"
      
      test_compliance:
        pregunta: "¿Cada fase/playbook traza a Layer 0?"
        metodo: "Verificar §0 Fundamento en 18 fases + 15 playbooks"
        target: "33/33 elementos con §0 completo"
        status: "✅ PASS"
      
      enforcement:
        mandatory: "§0 sin Layer 0 refs = code review rejection"
        validation: "CHECKLIST_VALIDACION.md verifica trazabilidad"
        script: "dependency_closure_script.py verifica layer coherence"
      
      referencias:
        - "00_fundamentos_teoricos.md#I3"
        - "ISO 9001 traceability"
    
    I4_Clasificación:
      id: "I4"
      nombre: "Invariante Clasificación"
      definicion: "Taxonomía exhaustiva y mutuamente excluyente"
      
      aplicacion_metodologia:
        - contexto: "capacity_type: {C0, C1, C2, C3}"
          test: "¿Toda capacidad clasificable en exactamente 1 tipo?"
          respuesta: "SÍ - Taxonomía MECE (Mutually Exclusive, Collectively Exhaustive)"
        
        - contexto: "substrate: {Humano, Algorítmico, Mecánico, Mixto}"
          test: "¿Existe substrate no clasificable?"
          respuesta: "NO - Set completo + Mixto catch-all"
        
        - contexto: "delegation_mode: {M1, M2, M3, M4, M5, M6}"
          test: "¿Cubre todo espectro delegación HAIC?"
          respuesta: "SÍ - Desde M1_human_only a M6_bounded_ai"
      
      test_compliance:
        pregunta: "¿Taxonomías completas y sin overlap?"
        metodo: "Verificar enums exhaustivos + mutuamente excluyentes"
        resultado: "SÍ - Todas taxonomías MECE"
        status: "✅ PASS"
      
      enforcement:
        design: "Nuevas categorías deben preservar MECE"
        validation: "Test edge cases clasificación"
      
      referencias:
        - "00_fundamentos_teoricos.md#I4"
        - "MECE principle (McKinsey)"
    
    I5_HAIC:
      id: "I5"
      nombre: "Invariante Human-AI Collaboration"
      definicion: "Humano siempre accountable, AI puede decidir bounded"
      
      aplicacion_metodologia:
        - contexto: "Delegation modes M1-M6"
          principio: "AI autonomía creciente M1→M6, accountability humano constante"
        
        - contexto: "P05_bounded_autonomy_m6"
          detalle: "6 dimensiones boundaries (scope, budget, time, quality, risk, escalation)"
        
        - contexto: "Playbooks accountability"
          enforcement: "Todos playbooks especifican human_accountable explícito"
      
      delegation_spectrum:
        M1_human_only: "Humano decide + ejecuta, AI 0%"
        M2_human_assisted: "Humano decide + ejecuta, AI recomienda"
        M3_human_gated: "AI recomienda, humano aprueba cada decisión"
        M4_human_oversight: "AI decide bounded, humano audita periódico"
        M5_human_exception: "AI decide bounded, humano interviene excepciones"
        M6_bounded_autonomy: "AI decide bounded 6D, humano accountable outcomes"
      
      test_compliance:
        pregunta: "¿Metodología preserva accountability humano?"
        verificacion:
          - "Playbooks declaran human_accountable: "
          - "M6 boundaries explícitos: "
          - "AI sin accountability final: "
        status: "✅ PASS"
      
      enforcement:
        mandatory: "Accountability humano explícito en todos procesos"
        validation: "P05 detalla boundaries M6"
      
      referencias:
        - "00_fundamentos_teoricos.md#I5"
        - "EU AI Act (human oversight)"
    
    I6_Trajectory:
      id: "I6"
      nombre: "Invariante Trayectoria"
      definicion: "Sistema evoluciona en trayectorias observables"
      
      aplicacion_metodologia:
        - entidad: "E7_Trayectoria"
          descripcion: "Entidad evolucionable observable temporal"
          atributos: "state_sequence, timeline, transitions"
        
        - fase: "F16_learning_loops"
          relacion: "Captura learnings → ajustes trayectoria"
        
        - fase: "F17_adaptation"
          relacion: "Trajectory adjustments basado en E7 observations"
      
      ejemplos:
        startup_trajectory:
          t0: "Survival mode (H_org 30)"
          t1: "Minimal execution (H_org 45→70, 9 meses)"
          t2: "Transition Minimal→Avanzada (H_org 70→85)"
          observable: "E7 state sequence completa"
      
      test_compliance:
        pregunta: "¿Metodología observa + adapta trayectoria?"
        verificacion:
          - "E7 entidad definida: "
          - "F16/F17 learning+adaptation: "
          - "F13 monitoring continuo: "
        status: "✅ PASS"
      
      enforcement:
        tracking: "E7 state sequence logged"
        feedback: "F16→F17→F3 feedback loop explícito"
      
      referencias:
        - "00_fundamentos_teoricos.md#I6"
        - "Complex Adaptive Systems"
    
    I7_Emergencia:
      id: "I7"
      nombre: "Invariante Emergencia"
      definicion: "Complejidad emerge de interacciones simples"
      
      aplicacion_metodologia:
        - principio: "Fases simples → Metodología completa emerge"
          ejemplo: "18 fases elementales → Transformación organizacional compleja"
        
        - principio: "Primitivos P1-P5 → Organizaciones complejas modelables"
          ejemplo: "5 primitivos irreducibles → Work systems arbitrariamente complejos"
        
        - metrica: "H_org como emergencia"
          formula: "H_org = f(H1, H2, H3, H4, H5)"
          emergence: "H_org emerge de interacción componentes, no suma simple"
      
      test_compliance:
        pregunta: "¿Metodología modela emergencia vs reduccionismo?"
        verificacion:
          - "H_org no linear: "
          - "Fases interactúan: "
          - "Complexity from simplicity: "
        status: "✅ PASS"
      
      referencias:
        - "00_fundamentos_teoricos.md#I7"
        - "Holland (1995) Emergence"
    
    I8_Adaptación_Contextual:
      id: "I8"
      nombre: "Invariante Adaptación Contextual"
      definicion: "Parametrización contextual preservando invariantes"
      
      aplicacion_metodologia:
        - mecanismo: "Schemas instances parametrizadas"
          ejemplo: "context_pattern_schema + 50 contexts sin modificar schema"
        
        - mecanismo: "Trayectorias adaptables"
          ejemplo: "Survival/Minimal/Avanzada según contexto, arquitectura constante"
        
        - test: "¿Nuevo contexto requiere modificar F1-F18?"
          respuesta: "NO - Solo agregar instance, no cambiar fases"
      
      ejemplos:
        nueva_jurisdiccion:
          accion: "Agregar jurisdicción India"
          cambio_requerido: "jurisdiction_instances.yaml + 1 entry"
          cambio_NO_requerido: "compliance_framework_schema.yaml (intacto)"
          invariante_preservado: "I1_Minimalidad, I8_Adaptación"
        
        nuevo_caso:
          accion: "Agregar caso NGO voluntarios"
          cambio_requerido: "case_instances.yaml + 1 entry"
          cambio_NO_requerido: "context_pattern_schema.yaml (intacto)"
      
      test_compliance:
        pregunta: "¿Extensibilidad sin crecimiento arquitectónico?"
        verificacion:
          - "Schemas tipo estables: "
          - "Instances extensibles: "
          - "Fases invariantes: "
        status: "✅ PASS"
      
      enforcement:
        guideline: "Nuevo contexto = instance, NO schema change"
        exception: "Schema change solo si dimensión faltante fundamental"
**Método:** Por cada invariante documentar aplicación + test + enforcement

  # ------------------------------------------------------------
  # INVARIANTES I1-I8: Propiedades preservadas
  # ------------------------------------------------------------
  invariantes:
    
    I1_Minimalidad:
      id: "I1"
      nombre: "Invariante Minimalidad"
      definicion: "Mínimo elementos necesarios y suficientes"
      
      aplicacion_metodologia:
        - contexto: "Schemas tipo vs N instancias"
          ejemplo: "compliance_framework_schema.yaml + 50 instances vs 50 archivos"
          beneficio: "Escalabilidad sin crecimiento arquitectónico"
        
        - contexto: "18 fases WSLC"
          test: "¿Existe subset menor suficiente?"
          respuesta: "NO - Kernel 5 fases es MVP, pero 18 es mínimo completo"
        
        - contexto: "Playbooks P09-P15 parametrizados"
          ejemplo: "playbook_schema.yaml + instances vs 7 markdown separados"
          beneficio: "Reducción duplicación 7x"
      
      test_compliance:
        pregunta: "¿Existe arquitectura más pequeña suficiente?"
        metodo: "Intentar eliminar cada elemento, verificar rompimiento"
        resultado: "NO - Cada fase/playbook/schema tiene propósito único"
        status: "✅ PASS"
      
      enforcement:
        code_review: "Rechazar nuevos elementos sin justificación I1"
        refactoring: "Consolidar elementos redundantes detectados"
      
      referencias:
        - "00_fundamentos_teoricos.md#I1"
        - "Occam's Razor principle"
    
    I2_Ortogonalidad:
      id: "I2"
      nombre: "Invariante Ortogonalidad"
      definicion: "Primitivos independientes, sin overlap semántico"
      
      aplicacion_metodologia:
        - contexto: "D1-D4 dominios"
          test: "¿Modificar D1 afecta D2?"
          respuesta: "NO - Arquitectura ⊥ Percepción ⊥ Decisión ⊥ Operación"
        
        - contexto: "Fases cruzan dominios"
          ejemplo: "F5 usa D1_PRIMARY + D4_SECONDARY sin contradicción"
        
        - contexto: "Schemas tipo independientes"
          test: "compliance ⊥ context ⊥ playbook"
          respuesta: "SÍ - No overlap dimensiones"
      
      test_compliance:
        pregunta: "¿Existe overlap semántico entre elementos?"
        metodo: "Matriz ortogonalidad D×F, P×P, schemas×schemas"
        resultado: "NO overlap detectado"
        status: "✅ PASS"
      
      enforcement:
        design_review: "Verificar nuevos elementos no overlap existentes"
        refactoring: "Separar elementos con overlap detectado"
      
      referencias:
        - "00_fundamentos_teoricos.md#I2"
        - "Modularity principle"
    
    I3_Trazabilidad:
      id: "I3"
      nombre: "Invariante Trazabilidad"
      definicion: "Todo elemento traza a fundamentos explícitamente"
      
      aplicacion_metodologia:
        - contexto: "§0 Fundamento obligatorio"
          enforcement: "Todas fases/playbooks DEBEN tener §0 con Layer 0-1-2 refs"
        
        - contexto: "Cadena derivacional"
          path: "A→P→I→C→TF→F verificable bidireccional"
        
        - contexto: "00b_mapeo_dominios_fases.md"
          uso: "Matriz D×F auditable para trazabilidad Layer 1→3"
      
      test_compliance:
        pregunta: "¿Cada fase/playbook traza a Layer 0?"
        metodo: "Verificar §0 Fundamento en 18 fases + 15 playbooks"
        target: "33/33 elementos con §0 completo"
        status: "✅ PASS"
      
      enforcement:
        mandatory: "§0 sin Layer 0 refs = code review rejection"
        validation: "CHECKLIST_VALIDACION.md verifica trazabilidad"
        script: "dependency_closure_script.py verifica layer coherence"
      
      referencias:
        - "00_fundamentos_teoricos.md#I3"
        - "ISO 9001 traceability"
    
    I4_Clasificación:
      id: "I4"
      nombre: "Invariante Clasificación"
      definicion: "Taxonomía exhaustiva y mutuamente excluyente"
      
      aplicacion_metodologia:
        - contexto: "capacity_type: {C0, C1, C2, C3}"
          test: "¿Toda capacidad clasificable en exactamente 1 tipo?"
          respuesta: "SÍ - Taxonomía MECE (Mutually Exclusive, Collectively Exhaustive)"
        
        - contexto: "substrate: {Humano, Algorítmico, Mecánico, Mixto}"
          test: "¿Existe substrate no clasificable?"
          respuesta: "NO - Set completo + Mixto catch-all"
        
        - contexto: "delegation_mode: {M1, M2, M3, M4, M5, M6}"
          test: "¿Cubre todo espectro delegación HAIC?"
          respuesta: "SÍ - Desde M1_human_only a M6_bounded_ai"
      
      test_compliance:
        pregunta: "¿Taxonomías completas y sin overlap?"
        metodo: "Verificar enums exhaustivos + mutuamente excluyentes"
        resultado: "SÍ - Todas taxonomías MECE"
        status: "✅ PASS"
      
      enforcement:
        design: "Nuevas categorías deben preservar MECE"
        validation: "Test edge cases clasificación"
      
      referencias:
        - "00_fundamentos_teoricos.md#I4"
        - "MECE principle (McKinsey)"
    
    I5_HAIC:
      id: "I5"
      nombre: "Invariante Human-AI Collaboration"
      definicion: "Humano siempre accountable, AI puede decidir bounded"
      
      aplicacion_metodologia:
        - contexto: "Delegation modes M1-M6"
          principio: "AI autonomía creciente M1→M6, accountability humano constante"
        
        - contexto: "P05_bounded_autonomy_m6"
          detalle: "6 dimensiones boundaries (scope, budget, time, quality, risk, escalation)"
        
        - contexto: "Playbooks accountability"
          enforcement: "Todos playbooks especifican human_accountable explícito"
      
      delegation_spectrum:
        M1_human_only: "Humano decide + ejecuta, AI 0%"
        M2_human_assisted: "Humano decide + ejecuta, AI recomienda"
        M3_human_gated: "AI recomienda, humano aprueba cada decisión"
        M4_human_oversight: "AI decide bounded, humano audita periódico"
        M5_human_exception: "AI decide bounded, humano interviene excepciones"
        M6_bounded_autonomy: "AI decide bounded 6D, humano accountable outcomes"
      
      test_compliance:
        pregunta: "¿Metodología preserva accountability humano?"
        verificacion:
          - "Playbooks declaran human_accountable: "
          - "M6 boundaries explícitos: "
          - "AI sin accountability final: "
        status: "✅ PASS"
      
      enforcement:
        mandatory: "Accountability humano explícito en todos procesos"
        validation: "P05 detalla boundaries M6"
      
      referencias:
        - "00_fundamentos_teoricos.md#I5"
        - "EU AI Act (human oversight)"
    
    I6_Trajectory:
      id: "I6"
      nombre: "Invariante Trayectoria"
      definicion: "Sistema evoluciona en trayectorias observables"
      
      aplicacion_metodologia:
        - entidad: "E7_Trayectoria"
          descripcion: "Entidad evolucionable observable temporal"
          atributos: "state_sequence, timeline, transitions"
        
        - fase: "F16_learning_loops"
          relacion: "Captura learnings → ajustes trayectoria"
        
        - fase: "F17_adaptation"
          relacion: "Trajectory adjustments basado en E7 observations"
      
      ejemplos:
        startup_trajectory:
          t0: "Survival mode (H_org 30)"
          t1: "Minimal execution (H_org 45→70, 9 meses)"
          t2: "Transition Minimal→Avanzada (H_org 70→85)"
          observable: "E7 state sequence completa"
      
      test_compliance:
        pregunta: "¿Metodología observa + adapta trayectoria?"
        verificacion:
          - "E7 entidad definida: "
          - "F16/F17 learning+adaptation: "
          - "F13 monitoring continuo: "
        status: "✅ PASS"
      
      enforcement:
        tracking: "E7 state sequence logged"
        feedback: "F16→F17→F3 feedback loop explícito"
      
      referencias:
        - "00_fundamentos_teoricos.md#I6"
        - "Complex Adaptive Systems"
    
    I7_Emergencia:
      id: "I7"
      nombre: "Invariante Emergencia"
      definicion: "Complejidad emerge de interacciones simples"
      
      aplicacion_metodologia:
        - principio: "Fases simples → Metodología completa emerge"
          ejemplo: "18 fases elementales → Transformación organizacional compleja"
        
        - principio: "Primitivos P1-P5 → Organizaciones complejas modelables"
          ejemplo: "5 primitivos irreducibles → Work systems arbitrariamente complejos"
        
        - metrica: "H_org como emergencia"
          formula: "H_org = f(H1, H2, H3, H4, H5)"
          emergence: "H_org emerge de interacción componentes, no suma simple"
      
      test_compliance:
        pregunta: "¿Metodología modela emergencia vs reduccionismo?"
        verificacion:
          - "H_org no linear: "
          - "Fases interactúan: "
          - "Complexity from simplicity: "
        status: "✅ PASS"
      
      referencias:
        - "00_fundamentos_teoricos.md#I7"
        - "Holland (1995) Emergence"
    
    I8_Adaptación_Contextual:
      id: "I8"
      nombre: "Invariante Adaptación Contextual"
      definicion: "Parametrización contextual preservando invariantes"
      
      aplicacion_metodologia:
        - mecanismo: "Schemas instances parametrizadas"
          ejemplo: "context_pattern_schema + 50 contexts sin modificar schema"
        
        - mecanismo: "Trayectorias adaptables"
          ejemplo: "Survival/Minimal/Avanzada según contexto, arquitectura constante"
        
        - test: "¿Nuevo contexto requiere modificar F1-F18?"
          respuesta: "NO - Solo agregar instance, no cambiar fases"
      
      ejemplos:
        nueva_jurisdiccion:
          accion: "Agregar jurisdicción India"
          cambio_requerido: "jurisdiction_instances.yaml + 1 entry"
          cambio_NO_requerido: "compliance_framework_schema.yaml (intacto)"
          invariante_preservado: "I1_Minimalidad, I8_Adaptación"
        
        nuevo_caso:
          accion: "Agregar caso NGO voluntarios"
          cambio_requerido: "case_instances.yaml + 1 entry"
          cambio_NO_requerido: "context_pattern_schema.yaml (intacto)"
      
      test_compliance:
        pregunta: "¿Extensibilidad sin crecimiento arquitectónico?"
        verificacion:
          - "Schemas tipo estables: "
          - "Instances extensibles: "
          - "Fases invariantes: "
        status: "✅ PASS"
      
      enforcement:
        guideline: "Nuevo contexto = instance, NO schema change"
        exception: "Schema change solo si dimensión faltante fundamental"
      
      referencias:
        - "00_fundamentos_teoricos.md#I8"
        - "Open-Closed Principle"
```

---

## PARTE 3A: Layer 1 - Dominios + Contratos + Entidades

```yaml
#### Actividad 1.3: Layer 1-3 Básico (60min)

**Objetivo:** Documentar estructuras Layer 1 (Arquitectura), Layer 2 (Tejidos), Layer 3 (Metodología)

##### Sub-actividad 3.1: Layer 1 Arquitectura (25min)

# ================================================================
# LAYER 1: ARQUITECTURA
# ================================================================

layer_1:
  
  # ------------------------------------------------------------
  # DOMINIOS D1-D4: Concerns ortogonales
  # ------------------------------------------------------------
  dominios:
    
    D1_Arquitectura:
      id: "D1"
      nombre: "Dominio Arquitectura"
      definicion: "Diseño estructura sistemas trabajo"
      alcance: "Modelado, especificación, blueprints, decisiones estructurales"
      
      fases_primarias: [F4, F5, F6, F9]
      fases_secundarias: [F2, F8, F11]
      
      preocupaciones:
        - "¿Cómo estructurar capacidades?"
        - "¿Cómo diseñar flujos óptimos?"
        - "¿Cómo arquitectar información?"
        - "¿Qué decisiones arquitectónicas tomar?"
      
      outputs_tipicos:
        - "Architecture blueprints"
        - "ADRs (Architecture Decision Records)"
        - "Capacity inventories"
        - "Flow maps"
        - "Data catalogs"
      
      referencias:
        - "10_arquitectura_orko.md#D1"
    
    D2_Percepción:
      id: "D2"
      nombre: "Dominio Percepción"
      definicion: "Captura información entorno organizacional"
      alcance: "Sensing, assessment, monitoring, feedback, observability"
      
      fases_primarias: [F1, F13, F16]
      fases_secundarias: [F14, F17, F18]
      
      preocupaciones:
        - "¿Cuál es el contexto actual?"
        - "¿Cómo está la salud organizacional?"
        - "¿Qué estamos aprendiendo?"
        - "¿Qué señales ambientales capturar?"
      
      outputs_tipicos:
        - "Context profiles"
        - "H_org dashboards"
        - "Learning insights"
        - "Drift alerts"
      
      referencias:
        - "10_arquitectura_orko.md#D2"
    
    D3_Decisión:
      id: "D3"
      nombre: "Dominio Decisión"
      definicion: "Elección informada bajo constraints"
      alcance: "Trade-offs, priorización, selection, judgment"
      
      fases_primarias: [F2, F3, F8]
      fases_secundarias: [F10, F14, F17]
      
      preocupaciones:
        - "¿Qué trayectoria seguir?"
        - "¿Qué límites respetar?"
        - "¿Qué priorizar primero?"
        - "¿Cuándo pivotar?"
      
      outputs_tipicos:
        - "Trajectory selection"
        - "Vision statements"
        - "Limits catalog"
        - "Decision matrices"
        - "Prioritization backlogs"
      
      referencias:
        - "10_arquitectura_orko.md#D3"
    
    D4_Operación:
      id: "D4"
      nombre: "Dominio Operación"
      definicion: "Ejecución transformaciones"
      alcance: "Implementación, delivery, rituals, execution"
      
      fases_primarias: [F10, F11, F12, F15]
      fases_secundarias: [F13, F14, F18]
      
      preocupaciones:
        - "¿Cómo implementar cambios?"
        - "¿Cómo desplegar tejidos?"
        - "¿Qué rituals ejecutar?"
        - "¿Cómo transicionar estados?"
      
      outputs_tipicos:
        - "Quick wins executed"
        - "Fabric deployments"
        - "State transitions"
        - "Sprint deliveries"
      
      referencias:
        - "10_arquitectura_orko.md#D4"
  
  # ------------------------------------------------------------
  # CONTRATOS C1-C5: Interfaces primitivos
  # ------------------------------------------------------------
  contratos:
    
    C1_CapacityAsset:
      primitivo: "P1"
      fields_core:
        - "capacity_id: UUID"
        - "capacity_type: Enum"
        - "substrate: Enum"
        - "ownership: Enum"
        - "lifecycle: Enum"
        - "delegation_mode: Enum"
      referencia: "10_arquitectura_orko.md#C1"
    
    C2_FlowAsset:
      primitivo: "P2"
      fields_core:
        - "flow_id: UUID"
        - "flow_type: Enum"
        - "efficiency: Float"
        - "handoff_ratio: Float"
        - "cycle_time: Duration"
      referencia: "10_arquitectura_orko.md#C2"
    
    C3_InformationAsset:
      primitivo: "P3"
      fields_core:
        - "info_id: UUID"
        - "schema: URI"
        - "quality: Enum"
        - "governance: Enum"
        - "lifecycle: Enum"
      referencia: "10_arquitectura_orko.md#C3"
    
    C4_LimitAsset:
      primitivo: "P4"
      fields_core:
        - "limit_id: UUID"
        - "limit_type: Enum"
        - "enforcement: Enum"
        - "scope: Enum"
      referencia: "10_arquitectura_orko.md#C4"
    
    C5_PurposeAsset:
      primitivo: "P5"
      fields_core:
        - "purpose_id: UUID"
        - "level: Enum"
        - "objective: String"
        - "key_results: List"
        - "alignment_score: Float"
      referencia: "10_arquitectura_orko.md#C5"
  
  # ------------------------------------------------------------
  # ENTIDADES E6-E7: Composiciones complejas
  # ------------------------------------------------------------
  entidades:
    
    E6_State:
      nombre: "Architectural State"
      definicion: "Estado completo work system en momento t"
      composicion:
        - "P1_capacities: List[CapacityAsset]"
        - "P2_flows: List[FlowAsset]"
        - "P3_information: List[InformationAsset]"
        - "P4_limits: List[LimitAsset]"
        - "P5_purposes: List[PurposeAsset]"
        - "H_org: Float [0-100]"
        - "timestamp: DateTime"
      
      estados_tipicos:
        - "E6_current: Estado actual"
        - "E6_target: Estado objetivo"
        - "E6_intermediate: Estado intermedio"
      
      fases_uso: [F9, F12, F18]
      referencia: "10_arquitectura_orko.md#E6"
    
    E7_Trajectory:
      nombre: "Trayectoria Evolutiva"
      definicion: "Secuencia E6 states en timeline"
      composicion:
        - "trajectory_id: UUID"
        - "state_sequence: List[E6_State]"
        - "timeline: List[DateTime]"
        - "transitions: List[Transition]"
        - "trajectory_type: Enum [Survival, Minimal, Avanzada]"
      
      observables:
        - "H_org evolution curve"
        - "Capacity additions/removals"
        - "Flow optimizations"
        - "Limit changes"
      
      fases_uso: [F3, F17, F18]
      referencia: "10_arquitectura_orko.md#E7"
  
  # ------------------------------------------------------------
  # MÉTRICAS CORE
  # ------------------------------------------------------------
  metricas:
    
    H_org:
      nombre: "Organizational Health Score"
      tipo: "Float [0-100]"
      componentes:
        - "H1_humano: Float [0-100]"
        - "H2_arquitectura: Float [0-100]"
        - "H3_tecnico: Float [0-100]"
        - "H4_flujo: Float [0-100]"
        - "H5_proposito: Float [0-100]"
      
      formula: "Weighted average H1-H5"
      pesos_default: [0.25, 0.20, 0.20, 0.20, 0.15]
      
      thresholds:
        critical: "<50"
        low: "<70"
        good: "≥70"
        excellent: "≥85"
      
      fases_uso: [F1, F13, F18]
      playbooks_trigger: [P01]
      referencia: "10_arquitectura_orko.md#H_org"
    
    handoff_ratio:
      nombre: "Handoff Ratio (A3 metric)"
      tipo: "Float [0-1+]"
      formula: "handoffs / (capacities_involved - 1)"
      
      thresholds:
        critical: ">0.40"
        warning: ">0.30"
        good: "≤0.30"
        excellent: "≤0.20"
      
      derivacion: "A3_Flujo"
      fases_uso: [F5, F13]
      playbooks_trigger: [P02]
      referencia: "10_arquitectura_orko.md#handoff_ratio"
    
    okr_alignment:
      nombre: "OKR Alignment Score"
      tipo: "Float [0-1]"
      formula: "Weighted cascade alignment L4→L1"
      
      thresholds:
        critical: "<0.50"
        warning: "<0.70"
        good: "≥0.70"
        excellent: "≥0.85"
      
      derivacion: "A2_Propósito + P5_Propósito"
      fases_uso: [F7, F13, F18]
      playbooks_trigger: [P03]
      referencia: "10_arquitectura_orko.md#okr_alignment"
  
  # ------------------------------------------------------------
  # DELEGATION MODES M1-M6 (HAIC)
  # ------------------------------------------------------------
  delegation_modes:
    
    M1_human_only:
      nombre: "Human Only"
      autonomia_ai: "0%"
      descripcion: "Humano decide + ejecuta, AI no involucrado"
      uso_tipico: "Decisiones estratégicas críticas, ethical dilemmas"
    
    M2_human_assisted:
      nombre: "Human Assisted"
      autonomia_ai: "10-20%"
      descripcion: "Humano decide + ejecuta, AI recomienda/sugiere"
      uso_tipico: "Análisis complejos con AI insights"
    
    M3_human_gated:
      nombre: "Human Gated"
      autonomia_ai: "30-40%"
      descripcion: "AI recomienda, humano aprueba cada decisión"
      uso_tipico: "Code reviews, pull request approvals"
    
    M4_human_oversight:
      nombre: "Human Oversight"
      autonomia_ai: "50-60%"
      descripcion: "AI decide bounded, humano audita periódico"
      uso_tipico: "Automated deployments con audit trail"
    
    M5_human_exception:
      nombre: "Human Exception"
      autonomia_ai: "70-80%"
      descripcion: "AI decide bounded, humano interviene excepciones"
      uso_tipico: "AI customer support, escalation a humano"
    
    M6_bounded_autonomy:
      nombre: "Bounded Autonomy"
      autonomia_ai: "85-95%"
      descripcion: "AI decide bounded 6 dimensiones, humano accountable outcomes"
      uso_tipico: "AI aprueba PRs <100 LOC, humano accountable quality"
      
      boundaries_6d:
        - "Scope boundary"
        - "Budget boundary"
        - "Time boundary"
        - "Quality boundary"
        - "Risk boundary"
        - "Escalation boundary"
      
      detalle: "Ver P05_bounded_autonomy_m6.md"
      referencia: "10_arquitectura_orko.md#M6"
```

---

## PARTE 3B: Layer 2 Tejidos + Layer 3 Metodología

```yaml
# ================================================================
# LAYER 2: TEJIDOS (TF1-TF3)
# ================================================================

layer_2:
  tejidos:
    
    TF1_Capacity:
      nombre: "Capacity Fabric"
      primitivo: "P1"
      proposito: "Registry centralizado + observability capacidades"
      
      componentes:
        - "Capacity registry (P1 instances)"
        - "Skills matrix"
        - "Utilization tracking"
        - "Delegation modes monitoring"
        - "Lifecycle management"
      
      fases_uso: [F4, F10, F11]
      trayectoria_aplicable: "Avanzada"
      alternativa_minimal: "Spreadsheet-based inventory"
      
      referencia: "20_tejidos/01_TF1_capacity.md"
      openapi: "contracts/openapi/tf1_capacity.yaml"
    
    TF2_Flow:
      nombre: "Flow Fabric"
      primitivo: "P2"
      proposito: "Orchestration + observability flujos"
      
      componentes:
        - "Flow orchestration"
        - "HITL checkpoints"
        - "Guardrails enforcement"
        - "Metrics collection (handoff, cycle time)"
        - "Bottleneck detection"
      
      fases_uso: [F5, F11, F15]
      trayectoria_aplicable: "Avanzada"
      alternativa_minimal: "Zapier/Make low-code"
      
      referencia: "20_tejidos/02_TF2_flow.md"
      openapi: "contracts/openapi/tf2_flow.yaml"
    
    TF3_Information:
      nombre: "Information Fabric"
      primitivo: "P3"
      proposito: "Lakehouse + governance información"
      
      componentes:
        - "Data lakehouse (Bronze/Silver/Gold)"
        - "Schema registry"
        - "Data quality monitoring"
        - "Governance enforcement"
        - "Lineage tracking"
      
      fases_uso: [F6, F11]
      trayectoria_aplicable: "Avanzada"
      alternativa_minimal: "BigQuery + dbt basic"
      
      compliance_frameworks:
        - "MGDE (Chile)"
        - "GDPR (EU)"
        - "CCPA (US)"
      
      referencia: "20_tejidos/03_TF3_information.md"
      openapi: "contracts/openapi/tf3_information.yaml"

# ================================================================
# LAYER 3: METODOLOGÍA
# ================================================================

layer_3:
  
  # ------------------------------------------------------------
  # WSLC PHASES F1-F18
  # ------------------------------------------------------------
  wslc_phases:
    
    Initiation: [F1, F2, F3]
    Development: [F4, F5, F6, F7, F8, F9]
    Implementation: [F10, F11, F12]
    Operation: [F13, F14, F15]
    Evolution: [F16, F17, F18]
    
    fases:
      F1: "Context Assessment"
      F2: "Vision Definition"
      F3: "Trajectory Selection"
      F4: "Capability Mapping"
      F5: "Flow Design"
      F6: "Information Architecture"
      F7: "Purpose Cascade"
      F8: "Limits Definition"
      F9: "Target State Design"
      F10: "Quick Wins"
      F11: "Fabric Deployment"
      F12: "State Transition"
      F13: "Health Monitoring"
      F14: "Incident Response"
      F15: "Continuous Execution"
      F16: "Learning Loops"
      F17: "Adaptation"
      F18: "Convergence Check"
    
    kernel: [F1, F3, F7, F9, F13]
    expansion: [F2, F4, F5, F6, F8, F10, F11, F12, F14, F15, F16, F17, F18]
  
  # ------------------------------------------------------------
  # PLAYBOOKS P01-P15
  # ------------------------------------------------------------
  playbooks:
    
    Recovery: [P01, P02, P03, P04]
    Transformation: [P05, P06, P07, P08]
    Operational: [P09, P10, P11, P12, P13, P14, P15]
    
    playbooks_individual:
      P01: "Low H_org Recovery"
      P02: "Handoff Reduction"
      P03: "OKR Alignment"
      P04: "Security Remediation"
      P05: "Bounded Autonomy M6"
      P06: "Pilot Transformation"
      P07: "Scale Transformation"
      P08: "Optimization Sustain"
    
    playbooks_schema_parametrizado:
      P09: "Drift Detection Response"
      P10: "Capacity Gap Resolution"
      P11: "Flow Optimization"
      P12: "Data Quality Recovery"
      P13: "Political Alignment"
      P14: "Client Expectation Mgmt"
      P15: "Adaptive Cadence"
      
      nota: "P09-P15 implementados como playbook_schema.yaml + playbook_instances.yaml"
  
  # ------------------------------------------------------------
  # TRAYECTORIAS
  # ------------------------------------------------------------
  trayectorias:
    
    Survival:
      timeline: "8-12 semanas"
      budget: "$0-10K"
      scope: "F1-F3 + F10_micro"
      h_org_delta: "Crisis → 50-60"
      context: "Crisis extrema, supervivencia"
    
    Minimal:
      timeline: "6-12 meses"
      budget: "$150-200K"
      scope: "F1-F18 tool-agnostic, sin TF1-TF3"
      h_org_delta: "45 → 70"
      context: "Presupuesto limitado, startup/scaleup"
    
    Avanzada:
      timeline: "18-36 meses"
      budget: "$2M+"
      scope: "F1-F18 + TF1-TF3 full deployment"
      h_org_delta: "70 → 85"
      context: "Enterprise, regulado, hipergrowth"
    
    Parametric:
      formula: "budget_parametric_allocator.xlsx"
      scope: "Continuo [Survival, Minimal, Avanzada]"
      budget_range: "[$10K, $10M]"
```

---

## PARTE 3C: Términos Prohibidos + Validación Final

```yaml
# ================================================================
# TÉRMINOS PROHIBIDOS (Ambiguos/Imprecisos)
# ================================================================

terminos_prohibidos:
  
  sistema:
    razon: "Ambiguo: ¿work system? ¿IT system? ¿organization?"
    usar_en_lugar:
      - "work_system (cuando A1 organización como sistema trabajo)"
      - "E6_state (cuando estado arquitectónico)"
      - "organization (cuando se refiere directamente a A1)"
      - "IT_system (cuando específicamente tecnología)"
    
    deteccion: "grep -r 'sistema' *.md"
    penalizacion: "Code review rejection"
  
  proceso:
    razon: "Ambiguo: ¿workflow? ¿procedure? ¿method?"
    usar_en_lugar:
      - "P2_flow (cuando flujo trabajo)"
      - "workflow (cuando secuencia actividades)"
      - "procedure (cuando instructivo específico)"
      - "method (cuando metodología)"
    
    excepcion_permitida: "proceso judicial, proceso químico (contextos no-ORKO)"
  
  datos:
    razon: "Genérico, impreciso"
    usar_en_lugar:
      - "P3_information (información estructurada)"
      - "InformationAsset (activo catalogado)"
      - "dataset (conjunto específico)"
      - "data_point (punto dato individual)"
  
  gente:
    razon: "Impreciso, coloquial"
    usar_en_lugar:
      - "P1_capacity substrate=Humano (capacidad humana)"
      - "person / people (cuando individuos)"
      - "human_accountable (contextos I5)"
      - "team / stakeholders (según contexto)"
  
  AI:
    razon: "Incompleto sin contexto I5 accountability"
    usar_en_lugar:
      - "P1_capacity substrate=Algorítmico"
      - "M1-M6 delegation_mode (con accountability humano)"
      - "AI_agent (cuando específico con M{N})"
    
    nunca_solo: "AI nunca aparece sin especificar delegation mode + human accountability"
  
  herramienta:
    razon: "Demasiado genérico"
    usar_en_lugar:
      - "tech_stack (infraestructura tecnológica)"
      - "platform (plataforma específica: Jira, GitHub)"
      - "tool (cuando específico: 'Jira tool', 'pytest tool')"
      - "P1_capacity substrate=Algorítmico (cuando automatización)"

# ================================================================
# VALIDACIÓN FINAL VOCABULARIO
# ================================================================

validation:
  
  syntax:
    command: "yamllint VOCABULARIO_CONTROLADO.yaml"
    expected: "0 errors (warnings OK)"
  
  coverage:
    layer_0:
      axiomas: 5
      primitivos: 5
      invariantes: 8
    layer_1:
      dominios: 4
      contratos: 5
      entidades: 2
      metricas: 3
      delegation_modes: 6
    layer_2:
      tejidos: 3
    layer_3:
      wslc_phases: 18
      playbooks: 15
      trayectorias: 3
    terminos_prohibidos: 6
    
    total_terms: 79
  
  completeness:
    - "Todos términos con definicion"
    - "Todos términos con alias"
    - "Ejemplos Minimal + Avanzada donde aplique"
    - "Referencias bibliográficas donde aplique"
  
  grep_test:
    command: "grep -c 'definicion:' VOCABULARIO_CONTROLADO.yaml"
    expected: "≥79"

# ================================================================
# CHANGELOG (actualizar statistics)
# ================================================================

changelog:
  - version: "1.0.0"
    date: "2024-11-14"
    author: "Equipo Arquitectura ORKO"
    changes:
      - "Creación inicial vocabulario completo Layer 0-3"
      - "5 axiomas A1-A5 exhaustivos con derivación + ejemplos"
      - "5 primitivos P1-P5 con C1-C5 contratos + uso metodológico"
      - "8 invariantes I1-I8 con tests compliance + enforcement"
      - "4 dominios D1-D4 ortogonales"
      - "2 entidades E6-E7 complejas"
      - "3 métricas core H_org, handoff_ratio, okr_alignment"
      - "6 delegation modes M1-M6 HAIC spectrum"
      - "3 tejidos TF1-TF3 con referencias OpenAPI"
      - "18 fases WSLC F1-F18 kernel + expansion"
      - "15 playbooks P01-P15 (8 individual + 7 schema)"
      - "3 trayectorias Survival/Minimal/Avanzada"
      - "6 términos prohibidos identificados + alternativas"
    
    statistics:
      total_terms: 79
      total_lines: ~2200
      coverage: "100% Layer 0-3"
```

**Checklist Final Sesión Mañana:**

- [ ] VOCABULARIO_CONTROLADO.yaml completo (~2200L)
- [ ] YAML syntax válido (yamllint pass)
- [ ] 79 términos documentados
- [ ] Cobertura 100% Layer 0-3
- [ ] Términos prohibidos + alternativas
- [ ] Archivo committed a repo

**Output:** VOCABULARIO_CONTROLADO.yaml COMPLETO

---

## PARTE 4A: DEPENDENCY_GRAPH.yaml - Estructura Base + F1

```yaml
### SESIÓN TARDE (4h): DEPENDENCY_GRAPH.yaml (kernel)

#### Preparación (10min)

```bash
# Ya en: /Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs
touch DEPENDENCY_GRAPH.yaml

# Referencias abrir:
# - VOCABULARIO_CONTROLADO.yaml (recién creado)
# - SPEC_ARQUITECTURA_DEFINITIVA.md (kernel definition)
# - GUIA_AUTOR_CONTENIDO.md (§1 Interfaz structure)
```

---

#### Actividad 1.4: DEPENDENCY_GRAPH.yaml Kernel (3h 50min)

**Objetivo:** Modelar dependencies kernel F1→F3→F7→F9→F13 con detalle exhaustivo

##### Sub-actividad 4.1: Estructura Base (30min)

```yaml
# ================================================================
# DEPENDENCY GRAPH ORKO - KERNEL SUBSET
# ================================================================
#
# Propósito: Modelar dependencies fases metodología
# Scope: Kernel F1, F3, F7, F9, F13 (MVP validable)
# Expansion: Agregar F2,F4-F6,F8,F10-F12,F14-F18 en Etapa 2
#
# Version: 1.0.0-kernel
# Date: 2024-11-14
# Status: KERNEL_ONLY
#
# ================================================================

metadata:
  version: "1.0.0-kernel"
  date: "2024-11-14"
  status: "kernel_only"
  scope: "F1, F3, F7, F9, F13"
  purpose: "Dependency graph kernel metodología ORKO"
  
  expansion_plan:
    etapa_2: "Agregar F2, F4-F6, F8, F10-F12"
    etapa_3: "Agregar F14-F18"
    playbooks: "Agregar P01-P15 dependencies"
  
  validation:
    - "dependency_closure_script.py"
    - "No ciclos (excepto feedback loops anotados)"
    - "DAG válido"
    - "No orphan outputs"
    - "Layer coherence vs VOCABULARIO"

# ================================================================
# KERNEL DEFINITION
# ================================================================

kernel:
  phases: [F1, F3, F7, F9, F13]
  dependency_flow: "F1 → F3 → F7,F9 → F13"
  
  rationale:
    kernel_first: "Desarrollar núcleo mínimo funcional PRIMERO"
    mvp_validable: "5 fases suficientes para caso startup validación"
    dependency_closure: "F1 no inputs, F13 no consumers externos (ciclo cerrado)"
  
  completeness:
    con_kernel_puedo:
      - "Diagnosticar organización (F1)"
      - "Decidir trayectoria (F3)"
      - "Definir propósito aligned (F7)"
      - "Diseñar estado objetivo (F9)"
      - "Monitorear salud continua (F13)"
    
    sin_expansion_postponable:
      - "F2 vision formal (usar F7 OKR interim)"
      - "F4-F6 designs detallados (usar F9 synthesis simplificado)"
      - "F8 limits (implicitos en F3 constraints)"
      - "F10-F12 implementation (posponer)"
      - "F14-F18 operation/evolution (posponer)"

# ================================================================
# FASES KERNEL DETALLE
# ================================================================

fases:
```

---

##### Sub-actividad 4.2: F1_context_assessment (45min)

```yaml
  # ------------------------------------------------------------------
  # F1 CONTEXT ASSESSMENT
  # ------------------------------------------------------------------
  
  F1_context_assessment:
    type: "Fase_WSLC"
    id: "F1"
    nombre: "Context Assessment"
    wslc_stage: "Initiation"
    
    # Layer 0-1-2 refs (trazabilidad I3)
    layer_0:
      axiomas: [A1, A2, A4]
      primitivos: [P1, P2, P3, P4, P5]
      invariantes: [I8]
      justificacion: |
        A1: Sensing organización completa (personas, transformaciones, inputs/outputs)
        A2: Captura propósito actual
        A4: Identifica límites contextuales
        P1-P5: Assessment todos primitivos presentes
        I8: Parametrización contextual
    
    layer_1:
      dominios:
        - dominio: "D2_Percepción"
          rol: "PRIMARY"
          rationale: "Sensing es esencia F1"
        - dominio: "D3_Decisión"
          rol: "SECONDARY"
          rationale: "Assessment informa decisiones downstream"
      
      entidades: []
      metricas:
        - "H_org (baseline estimation)"
    
    layer_2: []  # F1 no usa TF1-TF3
    
    # Dependencies
    dependencies:
      reads_from: []  # F1 es fase inicial, sin prerequisitos
      writes_to:
        - "F2_vision_definition"
        - "F3_trajectory_selection"
        - "F4_capability_mapping"
        - "F5_flow_design"
        - "F6_information_architecture"
        - "F7_purpose_cascade"
        - "F8_limits_definition"
      
      coordinates_with: []  # F1 no coordina, solo alimenta
      
      feedback_loops: []  # F1 no recibe feedback
    
    # Inputs detallados
    inputs:
      descripcion: "F1 fase inicial, inputs externos (no otras fases)"
      
      sources:
        - source: "Stakeholder workshops"
          tipo: "Primary research"
          metodo: "Facilitados, participativos"
          participantes: "C-level, managers, IC representatives"
          duration: "4-8 sesiones 2-3h cada una"
        
        - source: "Interviews individuales"
          tipo: "Primary research"
          metodo: "Semi-estructuradas"
          participantes: "Key personas (10-15)"
          duration: "1h cada una"
        
        - source: "Análisis documental"
          tipo: "Secondary research"
          documentos:
            - "Org charts"
            - "Strategy docs"
            - "Financial statements"
            - "Tech stack inventory"
            - "Process maps (si existen)"
            - "Previous assessments"
        
        - source: "Observación directa"
          tipo: "Ethnographic"
          actividades:
            - "Shadow key workflows"
            - "Attend rituals (standups, retros)"
            - "Observe collaboration patterns"
    
    # Outputs detallados
    outputs:
      
      primary:
        - output_id: "context_profile_36_params"
          type: "Dataset"
          format: "YAML"
          
          structure:
            organization:
              - "size: Integer (headcount)"
              - "industry_sector: Enum"
              - "maturity_level: Integer [0-5]"
              - "geographic_scope: Enum [Local, Regional, National, Global]"
              - "revenue_range: Enum"
              - "funding_stage: Enum [Bootstrap, Seed, SeriesA, SeriesB+, IPO, Public]"
              - "age_years: Integer"
              - "growth_rate_yoy: Float"
              - "organizational_structure: Enum [Flat, Hierarchical, Matrix, Hybrid]"
              - "remote_policy: Enum [Office, Hybrid, Remote_first, Distributed]"
            
            technical:
              - "stack_maturity: Integer [0-5]"
              - "legacy_debt_level: Enum [Low, Medium, High, Critical]"
              - "automation_level: Integer [0-5]"
              - "observability_level: Integer [0-5]"
              - "deployment_frequency: Enum [OnDemand, Daily, Weekly, Monthly, Quarterly]"
              - "cicd_maturity: Integer [0-5]"
              - "cloud_adoption: Enum [OnPrem, Hybrid, Cloud_first]"
              - "data_infrastructure: Enum [Ad_hoc, Centralized, Federated, Lakehouse]"
            
            culture:
              - "decision_speed: Enum [Fast, Medium, Slow]"
              - "risk_tolerance: Integer [0-5]"
              - "innovation_appetite: Integer [0-5]"
              - "collaboration_culture: Integer [0-5]"
              - "psychological_safety: Integer [0-5]"
              - "transparency_level: Integer [0-5]"
            
            constraints:
              - "budget_range: Enum [$0-50K, $50K-150K, $150K-500K, $500K-2M, $2M+]"
              - "timeline_urgency: Enum [Flexible, Normal, Urgent, Crisis]"
              - "regulatory_level: Enum [Low, Medium, High, Critical]"
              - "political_complexity: Integer [0-5]"
              - "union_presence: Boolean"
              - "board_oversight: Enum [Light, Medium, Heavy]"
              - "compliance_requirements: List[Enum]"
              - "data_residency_restrictions: List[String]"
            
            flags:
              - "crisis_mode: Boolean"
              - "hypergrowth: Boolean"
              - "restructuring: Boolean"
              - "m_and_a_active: Boolean"
              - "founder_conflict: Boolean"
              - "layoffs_recent: Boolean"
          
          validation:
            completeness: "36/36 params captured"
            stakeholder_consensus: "≥80%"
            internal_consistency: "No contradicciones detectadas"
        
        - output_id: "h_org_baseline"
          type: "Metric"
          format: "Float [0-100]"
          
          structure:
            H1_humano:
              type: "Float [0-100]"
              signals:
                - "Burnout indicators"
                - "Turnover rate"
                - "Psychological safety"
                - "Skills coverage"
            
            H2_arquitectura:
              type: "Float [0-100]"
              signals:
                - "Tech debt level"
                - "Architecture clarity"
                - "Modularity"
                - "Documentation quality"
            
            H3_tecnico:
              type: "Float [0-100]"
              signals:
                - "Stack modernity"
                - "Automation level"
                - "Observability"
                - "Deployment frequency"
            
            H4_flujo:
              type: "Float [0-100]"
              signals:
                - "Handoff ratio"
                - "Cycle time"
                - "Flow efficiency"
                - "Bottlenecks count"
            
            H5_proposito:
              type: "Float [0-100]"
              signals:
                - "OKR clarity"
                - "Alignment score"
                - "Strategy understanding"
                - "Purpose articulation"
            
            H_org_total:
              type: "Float [0-100]"
              formula: "weighted_average(H1, H2, H3, H4, H5)"
              pesos: [0.25, 0.20, 0.20, 0.20, 0.15]
          
          thresholds:
            critical: "<50 → Crisis, requiere Survival"
            low: "<70 → Requiere transformación"
            good: "≥70 → Mantener + optimizar"
            excellent: "≥85 → Best-in-class"
    
    # Consumers (quién usa outputs F1)
    consumers:
      fases_downstream:
        - "F2_vision_definition: usa context para vision realista"
        - "F3_trajectory_selection: usa context + H_org para decision"
        - "F4_capability_mapping: usa context.technical para scope"
        - "F5_flow_design: usa context.culture + constraints"
        - "F6_information_architecture: usa context.regulatory"
        - "F7_purpose_cascade: usa H_org baseline + context.culture"
        - "F8_limits_definition: usa context.constraints + regulatory"
      
      playbooks:
        - "P01_low_h_org_recovery: trigger si H_org <70"
        - "P09_drift_detection: baseline para comparación futura"
        - "P10_capacity_gap: usa context para priorización"
        - "P14_client_expectation: usa context para realismo"
      
      artifacts:
        - "T01_context_assessment.yaml: template population"
        - "context_decision_matrix.xlsx: input principal F3"
    
    # Métricas éxito F1
    metricas_exito:
      completitud:
        metric: "36/36 params captured"
        threshold: "100%"
      
      calidad:
        metric: "Stakeholder consensus"
        threshold: "≥80%"
      
      consistencia:
        metric: "Internal contradictions"
        threshold: "0"
      
      h_org_confidence:
        metric: "H_org estimation confidence"
        threshold: "≥70%"
    
    # Artefactos F1
    artefactos:
      templates:
        - "T01_context_assessment.yaml"
      
      tools:
        - "Workshop facilitation guide"
        - "Interview protocol"
        - "H_org calculation spreadsheet"
    
    # Tiempo estimado
    estimated_effort:
      desarrollo_fase: "6-8h"
      ejecucion_real: "2-4 semanas (workshops + interviews + synthesis)"
    
    # Estado MVO
    mvo_requirements:
      seccion_0_fundamento: "COMPLETO (Layer 0-1-2 refs + justificación)"
      seccion_1_interfaz: "COMPLETO (Inputs/Outputs/Dependencies detallados)"
      secciones_2_10: "MVO (funcional, no perfecto)"
```

---

## PARTE 4B: F3 Trajectory Selection + F7 Purpose Cascade

```yaml
  # ------------------------------------------------------------------
  # F3 TRAJECTORY SELECTION
  # ------------------------------------------------------------------
  
  F3_trajectory_selection:
    type: "Fase_WSLC"
    id: "F3"
    nombre: "Trajectory Selection"
    wslc_stage: "Initiation"
    
    # Layer 0-1-2 refs
    layer_0:
      axiomas: [A4]
      primitivos: [P4]
      invariantes: [I8]
      justificacion: |
        A4: Decisión bajo restricciones (límites acotan trayectoria)
        P4: Constraints como gates decision
        I8: Trayectorias parametrizadas por contexto
    
    layer_1:
      dominios:
        - dominio: "D3_Decisión"
          rol: "PRIMARY"
          rationale: "F3 es decision gate crítico"
        - dominio: "D2_Percepción"
          rol: "SECONDARY"
          rationale: "Usa sensing F1 para informar decisión"
      
      entidades: []
      metricas: []
    
    layer_2: []
    
    # Dependencies
    dependencies:
      reads_from:
        - phase: "F1_context_assessment"
          inputs:
            - "context_profile_36_params"
            - "h_org_baseline"
          rationale: "F3 decision basada en contexto capturado F1"
          criticality: "BLOCKER"
      
      writes_to:
        - "F4_capability_mapping"
        - "F5_flow_design"
        - "F6_information_architecture"
        - "F7_purpose_cascade"
        - "F8_limits_definition"
        - "F9_target_state_design"
        - "F10_quick_wins"
        - "F11_fabric_deployment"
        - "F12_state_transition"
      
      coordinates_with: []
      
      feedback_loops:
        - phase: "F17_adaptation"
          direction: "F17 → F3"
          tipo: "Trajectory adjustment"
          annotation: "F17 puede recomendar re-ejecutar F3 si drift significativo"
          frequency: "Ad-hoc (crisis) o 6-12 meses (normal)"
    
    # Inputs detallados
    inputs:
      required:
        - input_id: "context_profile"
          source: "F1.context_profile_36_params"
          fields_used:
            organization: [size, maturity_level, funding_stage, growth_rate]
            technical: [stack_maturity, automation_level]
            culture: [decision_speed, risk_tolerance]
            constraints: [budget_range, timeline_urgency, regulatory_level]
            flags: [crisis_mode, hypergrowth]
        
        - input_id: "h_org_baseline"
          source: "F1.h_org_baseline"
          usage: "Determina delta H_org requerido"
    
    # Outputs detallados
    outputs:
      primary:
        - output_id: "trajectory_selected"
          type: "Enum"
          values: [Survival, Minimal, Avanzada]
          format: "YAML"
          
          decision_logic:
            Survival:
              triggers:
                - "crisis_mode == true"
                - "h_org < 50"
                - "budget < $10K"
                - "timeline_urgency == Crisis"
              scope: "F1-F3 + F10_micro"
              timeline: "8-12 semanas"
              h_org_target: "50-60"
            
            Minimal:
              triggers:
                - "budget: $150K-200K"
                - "maturity_level: 1-3"
                - "size: <500p"
                - "h_org: 40-70"
              scope: "F1-F18 tool-agnostic (sin TF1-TF3)"
              timeline: "6-12 meses"
              h_org_target: "70"
            
            Avanzada:
              triggers:
                - "budget: >$2M"
                - "regulatory_level: High/Critical"
                - "size: >500p"
                - "h_org target: >85"
              scope: "F1-F18 + TF1-TF3 full"
              timeline: "18-36 meses"
              h_org_target: "85"
        
        - output_id: "timeline_commitment"
          type: "ISO_8601_Duration"
          ranges:
            Survival: "P8W - P12W"
            Minimal: "P6M - P12M"
            Avanzada: "P18M - P36M"
        
        - output_id: "budget_allocation"
          type: "Float USD"
          structure:
            total: "Float"
            breakdown:
              people: "% allocation"
              tools: "% allocation"
              external: "% allocation"
              contingency: "% allocation"
        
        - output_id: "justification_rationale"
          type: "Markdown"
          content:
            - "Context summary"
            - "Decision matrix application"
            - "Constraints identified"
            - "Risk assessment"
            - "Confidence score [0-1]"
    
    # Consumers
    consumers:
      fases_downstream:
        - "F4-F12: Scope work según trajectory"
        - "F7: Timeline cascade según trajectory"
        - "F9: E6_target ambición según trajectory"
        - "F11: TF1-TF3 deploy si Avanzada, skip si Minimal"
      
      playbooks:
        - "P06_pilot_transformation: Si trajectory cambio necesario"
        - "P15_adaptive_cadence: Ajusta rituals según timeline"
      
      artifacts:
        - "context_decision_matrix.xlsx: Decision support tool"
        - "trajectory_{type}.yaml: Plantilla específica"
    
    # Métricas éxito F3
    metricas_exito:
      decision_confidence:
        metric: "Confidence score decisión"
        threshold: "≥70%"
      
      stakeholder_consensus:
        metric: "% stakeholders aligned"
        threshold: "≥80%"
      
      budget_realistic:
        metric: "Budget dentro rango contexto"
        threshold: "100%"
      
      timeline_achievable:
        metric: "Timeline feasible dado constraints"
        threshold: "100%"
    
    # Artefactos F3
    artefactos:
      templates:
        - "context_decision_matrix.xlsx"
        - "trajectory_survival.yaml"
        - "trajectory_minimal.yaml"
        - "trajectory_avanzada.yaml"
      
      tools:
        - "Decision tree diagram"
        - "Budget allocator calculator"
    
    # Tiempo estimado
    estimated_effort:
      desarrollo_fase: "6-8h"
      ejecucion_real: "1-2 días (análisis + alignment)"
    
    # Estado MVO
    mvo_requirements:
      seccion_0_fundamento: "COMPLETO"
      seccion_1_interfaz: "COMPLETO"
      secciones_2_10: "MVO"
  
  # ------------------------------------------------------------------
  # F7 PURPOSE CASCADE
  # ------------------------------------------------------------------
  
  F7_purpose_cascade:
    type: "Fase_WSLC"
    id: "F7"
    nombre: "Purpose Cascade"
    wslc_stage: "Development"
    
    # Layer 0-1-2 refs
    layer_0:
      axiomas: [A2]
      primitivos: [P5]
      invariantes: [I3]
      justificacion: |
        A2: Propósito organizacional explícito
        P5: OKR cascade L4→L3→L2→L1
        I3: Trazabilidad propósito jerárquica
    
    layer_1:
      dominios:
        - dominio: "D3_Decisión"
          rol: "PRIMARY"
          rationale: "Decisión priorización + alignment"
        - dominio: "D2_Percepción"
          rol: "SECONDARY"
          rationale: "Observa alignment actual"
      
      entidades: []
      
      metricas:
        - "okr_alignment (primaria F7)"
    
    layer_2: []
    
    # Dependencies
    dependencies:
      reads_from:
        - phase: "F2_vision_definition"
          inputs:
            - "okr_L4"
            - "north_star_metrics"
          rationale: "F7 cascadea desde vision F2"
          criticality: "BLOCKER"
          nota_kernel: "F2 NO en kernel → F7 usa OKR L4 simplificado interim"
        
        - phase: "F4_capability_mapping"
          inputs:
            - "p1_inventory"
            - "skills_matrix"
          rationale: "F7 asigna OKRs a capacidades existentes"
          criticality: "MEDIUM"
          nota_kernel: "F4 NO en kernel → F7 usa roles genéricos"
      
      writes_to:
        - "F9_target_state_design"
        - "F13_health_monitoring"
        - "F15_continuous_execution"
      
      coordinates_with:
        - "F3_trajectory_selection: Timeline cascade coherente"
      
      feedback_loops: []
    
    # Inputs detallados
    inputs:
      required_kernel:
        - input_id: "okr_L4_simplified"
          source: "Manual (F2 no disponible en kernel)"
          structure:
            objective: "String aspiracional"
            key_results:
              - kr_1: {metric, baseline, target, deadline}
              - kr_2: {metric, baseline, target, deadline}
              - kr_3: {metric, baseline, target, deadline}
          ejemplo_startup:
            objective: "Alcanzar product-market fit Q3 2025"
            key_results:
              - {metric: "ARR", baseline: "$0", target: "$500K", deadline: "2025-09-30"}
              - {metric: "Customers", baseline: 0, target: 100, deadline: "2025-09-30"}
              - {metric: "NPS", baseline: null, target: 40, deadline: "2025-09-30"}
      
      optional_expansion:
        - input_id: "capacity_inventory"
          source: "F4.p1_inventory"
          available_in: "Etapa 2"
          usage: "Asignar OKRs a capacidades específicas"
    
    # Outputs detallados
    outputs:
      primary:
        - output_id: "okr_cascade"
          type: "Hierarchical structure"
          format: "YAML"
          
          structure:
            L4_Organization:
              objective: "String"
              key_results: "List[KR]"
              owner: "CEO / C-level"
              review_cadence: "Quarterly"
            
            L3_Division:
              parent: "L4"
              objectives: "List[Objective]"
              cascade_logic: "L4_KR → L3_Objective mapping"
              owners: "VPs / Directors"
            
            L2_Team:
              parent: "L3"
              objectives: "List[Objective]"
              cascade_logic: "L3_KR → L2_Objective mapping"
              owners: "Managers / Leads"
            
            L1_Individual:
              parent: "L2"
              objectives: "List[Objective]"
              cascade_logic: "L2_KR → L1_Objective mapping"
              owners: "Individual contributors"
        
        - output_id: "alignment_score"
          type: "Float [0-1]"
          formula: "weighted_alignment_cascade(L4→L3→L2→L1)"
          
          calculation:
            L4_L3: "% L3 objectives aligned to L4 KRs"
            L3_L2: "% L2 objectives aligned to L3 KRs"
            L2_L1: "% L1 objectives aligned to L2 KRs"
            total: "weighted_average([L4_L3, L3_L2, L2_L1])"
          
          thresholds:
            critical: "<0.50 → P03_okr_alignment playbook"
            warning: "<0.70 → Review + realign"
            good: "≥0.70 → Mantener"
            excellent: "≥0.85 → Best practice"
    
    # Consumers
    consumers:
      fases_downstream:
        - "F9_target_state_design: OKRs como success criteria E6_target"
        - "F13_health_monitoring: okr_alignment como H5_proposito input"
        - "F15_continuous_execution: OKRs guían sprints"
      
      playbooks:
        - "P03_okr_alignment: Trigger si alignment <70%"
        - "P13_political_alignment: Usa OKR conflicts para mediar"
      
      artifacts:
        - "T07_okr_cascade.xlsx: Template Excel con formulas"
    
    # Métricas éxito F7
    metricas_exito:
      cascade_completeness:
        metric: "% niveles L4→L1 con OKRs"
        threshold: "100%"
      
      alignment_score:
        metric: "okr_alignment total"
        threshold: "≥70%"
      
      owner_clarity:
        metric: "% OKRs con owner explícito"
        threshold: "100%"
    
    # Artefactos F7
    artefactos:
      templates:
        - "T07_okr_cascade.xlsx"
      
      tools:
        - "OKR alignment calculator"
        - "RACI matrix OKRs"
    
    # Tiempo estimado
    estimated_effort:
      desarrollo_fase: "6-8h"
      ejecucion_real: "1-2 semanas (cascade + alignment sessions)"
    
    # Estado MVO
    mvo_requirements:
      seccion_0_fundamento: "COMPLETO"
      seccion_1_interfaz: "COMPLETO"
      secciones_2_10: "MVO"
    
    # Nota kernel
    kernel_workaround:
      problema: "F7 reads_from F2, pero F2 NO en kernel"
      solucion: "F7 usa OKR L4 simplificado manual interim"
      expansion_etapa_2: "F2 desarrollado → F7 consume F2.okr_L4 formal"
```

---

## PARTE 4C: F9 Target State + F13 Health Monitoring + Validación

```yaml
  # ------------------------------------------------------------------
  # F9 TARGET STATE DESIGN
  # ------------------------------------------------------------------
  
  F9_target_state_design:
    type: "Fase_WSLC"
    id: "F9"
    nombre: "Target State Design"
    wslc_stage: "Development"
    
    # Layer 0-1-2 refs
    layer_0:
      axiomas: [A1, A2]
      primitivos: [P1, P2, P3, P4, P5]
      invariantes: [I1, I2, I3]
      justificacion: |
        A1: E6_target modela organización completa (P1-P5)
        A2: E6_target cumple propósito organizacional
        P1-P5: Target state contiene todos primitivos
        I1: Target minimal suficiente
        I2: Primitivos ortogonales en E6
        I3: Target traza a fundamentos
    
    layer_1:
      dominios:
        - dominio: "D1_Arquitectura"
          rol: "PRIMARY"
          rationale: "F9 es diseño arquitectónico central"
        - dominio: "D3_Decisión"
          rol: "SECONDARY"
          rationale: "Decisiones arquitectónicas (ADRs)"
      
      entidades:
        - "E6_State (E6_target específicamente)"
      
      metricas:
        - "H_org (target value)"
    
    layer_2:
      note: "F9 referencia TF1-TF3 si trajectory=Avanzada"
      conditional:
        - "Si Minimal → architecture tool-agnostic"
        - "Si Avanzada → architecture con TF1-TF3"
    
    # Dependencies (F9 es SYNTHESIS phase)
    dependencies:
      reads_from:
        - phase: "F2_vision_definition"
          inputs: ["okr_L4", "north_star"]
          criticality: "MEDIUM"
          nota_kernel: "F2 NO en kernel → F9 usa F7.okr_L4"
        
        - phase: "F3_trajectory_selection"
          inputs: ["trajectory", "timeline", "budget"]
          criticality: "BLOCKER"
          rationale: "Trajectory determina scope E6_target"
        
        - phase: "F4_capability_mapping"
          inputs: ["p1_inventory", "capacity_gaps"]
          criticality: "MEDIUM"
          nota_kernel: "F4 NO en kernel → F9 usa assumptions"
        
        - phase: "F5_flow_design"
          inputs: ["vsm_maps", "handoff_ratio"]
          criticality: "MEDIUM"
          nota_kernel: "F5 NO en kernel → F9 usa targets genéricos"
        
        - phase: "F6_information_architecture"
          inputs: ["data_catalog", "architecture_blueprint"]
          criticality: "MEDIUM"
          nota_kernel: "F6 NO en kernel → F9 usa patterns estándar"
        
        - phase: "F7_purpose_cascade"
          inputs: ["okr_cascade", "alignment_score"]
          criticality: "BLOCKER"
          rationale: "OKRs son success criteria E6_target"
        
        - phase: "F8_limits_definition"
          inputs: ["p4_limit_catalog"]
          criticality: "MEDIUM"
          nota_kernel: "F8 NO en kernel → F9 usa F3.constraints"
      
      writes_to:
        - "F10_quick_wins"
        - "F11_fabric_deployment"
        - "F12_state_transition"
        - "F18_convergence_check"
      
      coordinates_with:
        - "F3: Scope coherente con trajectory"
        - "F7: Success criteria = OKRs"
      
      feedback_loops: []
    
    # Inputs detallados (SYNTHESIS)
    inputs:
      synthesis_strategy:
        description: "F9 sintetiza F2-F8 → E6_target único coherente"
        kernel_adaptation: "F9 sintetiza F3+F7 principalmente (F2,F4-F6,F8 postponed)"
        expansion_etapa_2: "F9 re-ejecutado con F2,F4-F6,F8 completos"
      
      inputs_kernel:
        - "F3.trajectory (scope determina ambición)"
        - "F3.budget (constraints arquitectura)"
        - "F3.timeline (phasing decisions)"
        - "F7.okr_cascade (success criteria)"
        - "F7.alignment_score (target ≥70%)"
      
      inputs_expansion:
        - "F2.vision (guía arquitectura)"
        - "F4.capacity_gaps (remediar en E6_target)"
        - "F5.handoff_ratio (target <30%)"
        - "F6.data_catalog (información scope)"
        - "F8.limits (constraints decisiones ADR)"
    
    # Outputs detallados
    outputs:
      primary:
        - output_id: "e6_target"
          type: "E6_State"
          format: "YAML"
          
          structure:
            metadata:
              state_id: "UUID"
              state_type: "Target"
              timestamp: "DateTime horizon (18-36 meses)"
              confidence: "Float [0-1]"
            
            P1_capacities_target:
              total_count: "Integer"
              by_type:
                C0: "Count"
                C1: "Count"
                C2: "Count"
                C3: "Count"
              
              gaps_to_fill:
                - capacity_needed: "String"
                  criticality: "Enum"
                  resolution: "Enum [Hire, Train, Outsource, Automate]"
              
              delegation_modes_target:
                M1: "% capacities"
                M2: "% capacities"
                M3: "% capacities"
                M4: "% capacities"
                M5: "% capacities"
                M6: "% capacities"
            
            P2_flows_target:
              critical_flows: "List[Flow]"
              
              metrics_target:
                handoff_ratio: "<0.30"
                cycle_time_reduction: "40-60%"
                flow_efficiency: ">0.50"
            
            P3_information_target:
              architecture_pattern:
                - "Si Minimal: BigQuery + dbt basic"
                - "Si Avanzada: TF3 Lakehouse Bronze/Silver/Gold"
              
              quality_target: "Verified ≥80%"
              governance_target: "100% catalogado"
            
            P4_limits_target:
              compliance_achieved: "List[Compliance]"
              constraints_respected: "100%"
            
            P5_purposes_target:
              okr_alignment: "≥0.70"
              h5_proposito: "≥70"
            
            H_org_target:
              H1: "Float"
              H2: "Float"
              H3: "Float"
              H4: "Float"
              H5: "Float"
              H_org_total:
                - "Minimal: 70"
                - "Avanzada: 85"
            
            TF1_TF3_scope:
              condition: "Si trajectory == Avanzada"
              TF1: "Capacity registry deployed"
              TF2: "Flow orchestration deployed"
              TF3: "Information lakehouse deployed"
        
        - output_id: "adrs_architecture"
          type: "List[ADR]"
          format: "Markdown"
          
          structure:
            - adr_id: "UUID"
              title: "String"
              status: "Enum [Proposed, Accepted, Rejected, Superseded]"
              context: "String (problema a resolver)"
              decision: "String (decisión tomada)"
              consequences: "String (implicaciones)"
              alternatives_considered: "List[String]"
          
          ejemplos_tipicos:
            - "ADR-001: Monolith vs Microservices"
            - "ADR-002: SQL vs NoSQL data store"
            - "ADR-003: Build vs Buy TF3"
    
    # Consumers
    consumers:
      fases_downstream:
        - "F10_quick_wins: Identifica gaps E6_current → E6_target"
        - "F11_fabric_deployment: Deploy TF1-TF3 si Avanzada"
        - "F12_state_transition: Path E6_current → E6_target"
        - "F18_convergence_check: Valida E6_actual vs E6_target"
      
      playbooks:
        - "P06_pilot_transformation: E6_target como north star"
        - "P07_scale_transformation: Phasing basado en E6_target"
      
      artifacts:
        - "T12_adr_template.md"
        - "e6_target.yaml"
    
    # Métricas éxito F9
    metricas_exito:
      completeness_e6:
        metric: "E6_target cubre P1-P5"
        threshold: "100%"
      
      coherence:
        metric: "E6_target coherente con F3.trajectory"
        threshold: "100%"
      
      adrs_count:
        metric: "ADRs documentados decisiones críticas"
        threshold: "≥3"
      
      stakeholder_buy_in:
        metric: "% stakeholders aligned E6_target"
        threshold: "≥80%"
    
    # Artefactos F9
    artefactos:
      templates:
        - "T12_adr_template.md"
        - "e6_target.yaml"
      
      tools:
        - "Architecture blueprint canvas"
        - "ADR decision tree"
    
    # Tiempo estimado
    estimated_effort:
      desarrollo_fase: "8-10h"
      ejecucion_real: "2-4 semanas (synthesis + ADRs + alignment)"
    
    # Estado MVO
    mvo_requirements:
      seccion_0_fundamento: "COMPLETO"
      seccion_1_interfaz: "COMPLETO"
      secciones_2_10: "MVO"
    
    # Nota complejidad
    complexity:
      high: "F9 es SYNTHESIS phase, más compleja kernel"
      pair_programming: "Recomendado para F9"


  # ------------------------------------------------------------------
  # F13 HEALTH MONITORING
  # ------------------------------------------------------------------
  
  F13_health_monitoring:
    type: "Fase_WSLC"
    id: "F13"
    nombre: "Health Monitoring"
    wslc_stage: "Operation"
    
    # Layer 0-1-2 refs
    layer_0:
      axiomas: [A5]
      primitivos: []
      invariantes: [I6]
      justificacion: |
        A5: Monitoreo continuo cambio organizacional
        I6: E7 trayectoria observable requiere monitoring
    
    layer_1:
      dominios:
        - dominio: "D2_Percepción"
          rol: "PRIMARY"
          rationale: "F13 es observability continua"
        - dominio: "D4_Operación"
          rol: "SECONDARY"
          rationale: "Monitoring operacional"
      
      entidades: []
      
      metricas:
        - "H_org (continuous tracking)"
        - "handoff_ratio (continuous)"
        - "okr_alignment (continuous)"
    
    layer_2: []
    
    # Dependencies
    dependencies:
      reads_from:
        - phase: "F1_context_assessment"
          inputs: ["h_org_baseline"]
          criticality: "BLOCKER"
          rationale: "Baseline para comparación drift"
        
        - phase: "F7_purpose_cascade"
          inputs: ["okr_cascade", "alignment_score"]
          criticality: "BLOCKER"
          rationale: "Monitorear alignment continuo"
        
        - phase: "F9_target_state_design"
          inputs: ["e6_target", "H_org_target"]
          criticality: "BLOCKER"
          rationale: "Target para convergence tracking"
        
        - phase: "F10_quick_wins"
          inputs: ["quick_wins_executed"]
          criticality: "MEDIUM"
          rationale: "Impact tracking quick wins"
        
        - phase: "F11_fabric_deployment"
          inputs: ["fabric_status"]
          criticality: "MEDIUM"
          nota_kernel: "F10-F11 NO en kernel, monitoreados post Etapa 2"
        
        - phase: "F12_state_transition"
          inputs: ["transition_status"]
          criticality: "MEDIUM"
          nota_kernel: "F12 NO en kernel"
      
      writes_to:
        - "F14_incident_response"
        - "F16_learning_loops"
        - "F17_adaptation"
        - "F18_convergence_check"
      
      coordinates_with:
        - "F15_continuous_execution: Dashboards compartidos"
      
      feedback_loops:
        - phase: "F1_context_assessment"
          direction: "F13 → F1"
          tipo: "Re-assessment trigger"
          annotation: "F13 puede disparar re-assessment F1 si drift >30%"
    
    # Inputs detallados
    inputs:
      continuous_sources:
        - source: "H_org calculation"
          frequency: "Semanal (automated)"
          method: "Dashboard actualización automática"
        
        - source: "Handoff ratio"
          frequency: "Bi-semanal"
          method: "VSM metrics tracking"
        
        - source: "OKR alignment"
          frequency: "Quincenal"
          method: "Check-ins OKR progress"
        
        - source: "Stakeholder sentiment"
          frequency: "Mensual"
          method: "Pulse surveys NPS"
    
    # Outputs detallados
    outputs:
      primary:
        - output_id: "h_org_dashboard"
          type: "Dashboard config"
          format: "YAML + visualization"
          
          structure:
            metrics:
              H1_humano:
                current: "Float"
                baseline: "Float"
                target: "Float"
                delta: "Float"
                trend: "Enum [Up, Down, Stable]"
              
              H2_arquitectura:
                # Same structure
              
              H3_tecnico:
                # Same structure
              
              H4_flujo:
                current: "Float"
                baseline: "Float"
                target: "Float"
                handoff_ratio_current: "Float"
                handoff_ratio_target: "<0.30"
              
              H5_proposito:
                current: "Float"
                baseline: "Float"
                target: "Float"
                okr_alignment_current: "Float"
                okr_alignment_target: "≥0.70"
              
              H_org_total:
                current: "Float"
                baseline: "Float (from F1)"
                target: "Float (from F9)"
                delta: "current - baseline"
                progress: "(current - baseline) / (target - baseline)"
                eta: "Estimated time to target"
            
            alerts:
              - condition: "H_org < 70"
                severity: "Critical"
                action: "Trigger P01_low_h_org_recovery"
              
              - condition: "handoff_ratio > 0.40"
                severity: "Critical"
                action: "Trigger P02_handoff_reduction"
              
              - condition: "okr_alignment < 0.70"
                severity: "Warning"
                action: "Trigger P03_okr_alignment"
              
              - condition: "drift > 30%"
                severity: "Warning"
                action: "Consider F1 re-assessment"
        
        - output_id: "drift_alerts"
          type: "List[Alert]"
          format: "JSON"
          
          alert_types:
            positive_drift:
              description: "Métrica mejorando más rápido que esperado"
              action: "Document learnings, scale practices"
            
            negative_drift:
              description: "Métrica empeorando o estancada"
              action: "Root cause analysis, playbook activation"
            
            trajectory_deviation:
              description: "Desviación significativa trayectoria planeada"
              action: "F17_adaptation considerar"
    
    # Consumers
    consumers:
      fases_downstream:
        - "F14_incident_response: Alerts trigger incidents"
        - "F16_learning_loops: Dashboard informa retrospectives"
        - "F17_adaptation: Drift signals trigger adaptation"
        - "F18_convergence_check: Final validation vs target"
      
      playbooks:
        - "P01_low_h_org_recovery: H_org <70"
        - "P02_handoff_reduction: handoff_ratio >40%"
        - "P03_okr_alignment: alignment <70%"
        - "P09_drift_detection: Drift >30%"
      
      artifacts:
        - "health_score_calculator.xlsx"
        - "h_org_dashboard.yaml"
    
    # Métricas éxito F13
    metricas_exito:
      dashboard_uptime:
        metric: "% tiempo dashboard actualizado"
        threshold: "≥95%"
      
      alert_precision:
        metric: "% alerts actionable (no false positives)"
        threshold: "≥80%"
      
      cadence_adherence:
        metric: "% métricas capturadas en schedule"
        threshold: "≥90%"
    
    # Artefactos F13
    artefactos:
      templates:
        - "health_score_calculator.xlsx"
        - "h_org_dashboard_config.yaml"
      
      tools:
        - "Grafana dashboard template"
        - "Google Sheets automated (alternativa low-tech)"
    
    # Tiempo estimado
    estimated_effort:
      desarrollo_fase: "6-8h"
      setup_inicial: "1 semana (dashboard + data sources)"
      ejecucion_continua: "2-4h/semana (mantenimiento)"
    
    # Estado MVO
    mvo_requirements:
      seccion_0_fundamento: "COMPLETO"
      seccion_1_interfaz: "COMPLETO"
      secciones_2_10: "MVO"


# ================================================================
# VALIDATION RULES
# ================================================================

validation_rules:
  
  no_orphan_outputs:
    rule: "Todo output tiene ≥1 consumer"
    exception: "F13 outputs a F14-F18 (expansion Etapa 3)"
    validation: "dependency_closure_script.py --check-orphans"
  
  no_invalid_references:
    rule: "Todos reads_from/writes_to referencian fase válida"
    validation: "dependency_closure_script.py --check-refs"
  
  dag_structure:
    rule: "Grafo es DAG (sin ciclos)"
    exception: "Feedback loops anotados (F17→F3, F13→F1)"
    validation: "NetworkX topological_sort"
  
  layer_coherence:
    rule: "Layer refs coherentes con VOCABULARIO_CONTROLADO.yaml"
    validation: "dependency_closure_script.py --check-layers"
  
  kernel_closure:
    rule: "Kernel F1-F3-F7-F9-F13 forma subgrafo cerrado ejecutable"
    validation:
      - "F1 no inputs externos fases"
      - "F13 writes to expansion phases (OK, postponed)"
      - "F3,F7,F9 intermedias conectadas"

# ================================================================
# EXPANSION PLAN ETAPA 2
# ================================================================

expansion_etapa_2:
  fases_agregar: [F2, F4, F5, F6, F8, F10, F11, F12]
  
  dependencies_nuevas:
    - "F2 → F7 (formal vision)"
    - "F4 → F7,F9 (capacities detail)"
    - "F5 → F9 (flows detail)"
    - "F6 → F9 (information detail)"
    - "F8 → F9 (limits detail)"
    - "F10 → F13 (quick wins impact)"
    - "F11 → F13 (fabric status)"
    - "F12 → F13,F18 (transition tracking)"
  
  re_ejecutar_kernel:
    F9: "Re-synthesis con F2,F4-F6,F8 completos"
    F13: "Agregar monitoring F10-F12"

# ================================================================
# CHANGELOG
# ================================================================

changelog:
  - version: "1.0.0-kernel"
    date: "2024-11-14"
    author: "Equipo Arquitectura ORKO"
    changes:
      - "DEPENDENCY_GRAPH kernel F1,F3,F7,F9,F13 completo"
      - "Inputs/Outputs detallados por fase"
      - "Consumers explícitos"
      - "Kernel workarounds documentados (F2,F4-F6,F8 postponed)"
      - "Validation rules definidas"
      - "Expansion plan Etapa 2 especificado"
```

---

**Checklist Final Sesión Tarde:**

- [ ] DEPENDENCY_GRAPH.yaml kernel completo (~900L)
- [ ] 5 fases detalladas (F1, F3, F7, F9, F13)
- [ ] Dependencies explícitas reads_from/writes_to
- [ ] Layer 0-1-2 refs en cada fase
- [ ] Consumers documentados
- [ ] Validation rules definidas
- [ ] Expansion plan Etapa 2
- [ ] YAML syntax válido
- [ ] Archivo committed a repo

**Output:** ✅ DEPENDENCY_GRAPH.yaml KERNEL COMPLETO

---

## PARTE 5C: Templates Prescriptivos (Tarde DÍA 2, 4h)

```markdown
### SESIÓN TARDE (4h): TEMPLATES PRESCRIPTIVOS

#### Actividad 2.2: TEMPLATE_FASE_WSLC.md (1h 15min)

**Preparación (5min):**

```bash
cd /Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs
touch TEMPLATE_FASE_WSLC.md
touch TEMPLATE_PLAYBOOK.md
touch TEMPLATE_SCHEMA.yaml
touch CHECKLIST_VALIDACION.md
```

---

##### TEMPLATE_FASE_WSLC.md (completo)

```markdown
# F{N}_{nombre_fase}

> **TEMPLATE Version:** 1.0.0  
> **Status:** [Draft | MVO | Complete]  
> **Last Updated:** YYYY-MM-DD  
> **Author:** {nombre_autor}

---

## §0. FUNDAMENTO

### Layer 0: Teoría Pura

**Axiomas aplicados:**
- **A{N}_{nombre}:** {justificación específica cómo este axioma fundamenta la fase}
- **A{M}_{nombre}:** {justificación}

**Primitivos involucrados:**
- **P{N}_{nombre}:** {cómo se usa en esta fase}
- **P{M}_{nombre}:** {cómo se usa}

**Invariantes preservados:**
- **I{N}_{nombre}:** {cómo la fase preserva este invariante}
- **I{M}_{nombre}:** {cómo preserva}

**Derivación metodológica:**
```

A{N} → P{M} → F{X}_{esta_fase}
{Explicación cadena derivacional completa}

```

---

### Layer 1: Arquitectura

**Dominios:**
- **D{N}_{nombre}:** `[PRIMARY | SECONDARY]` - {rationale}
- **D{M}_{nombre}:** `[PRIMARY | SECONDARY]` - {rationale}

**Contratos involucrados:**
- **C{N}_{nombre}:** {uso específico}

**Entidades:**
- **E{N}_{nombre}:** {rol en fase}

**Métricas relevantes:**
- **{metrica_nombre}:** {cómo se calcula/usa}

---

### Layer 2: Tejidos (si aplica)

**Tejidos involucrados:**
- **TF{N}_{nombre}:** {dependencia/uso}
- **Alternativa tool-agnostic:** {si trajectory=Minimal}

**Nota:** Si trajectory=Minimal, esta sección especifica alternativas low-tech.

---

### Layer 3: Metodología

**Ubicación WSLC:**
- **Stage:** {Initiation | Development | Implementation | Operation | Evolution}
- **Precedencia:** Fases {lista}
- **Consecuencia:** Fases {lista}

**Trayectorias aplicables:**
- ✅ Survival: {si/no + adaptación}
- ✅ Minimal: {si/no + adaptación}
- ✅ Avanzada: {si/no + adaptación}

---

## §1. INTERFAZ

### 1.1. Inputs

**Prerequisitos obligatorios:**

| Input | Source | Criticality | Formato | Validación |
|-------|--------|-------------|---------|------------|
| `{input_id}` | `F{N}.{output}` | `BLOCKER` | `{formato}` | `{criterio}` |
| `{input_id}` | `F{M}.{output}` | `MEDIUM` | `{formato}` | `{criterio}` |

**Inputs opcionales:**

| Input | Source | Uso | Disponible en |
|-------|--------|-----|---------------|
| `{input_id}` | `F{X}` | {descripción} | Etapa {N} |

**Nota kernel:** {si fase en kernel pero depende de fase expansion, documentar workaround}

---

### 1.2. Outputs

**Outputs primarios:**

| Output ID | Tipo | Formato | Consumidores | Validación |
|-----------|------|---------|--------------|------------|
| `{output_id}` | `{tipo}` | `{formato}` | `F{X}, F{Y}` | `{criterio}` |
| `{output_id}` | `{tipo}` | `{formato}` | `P{N}` | `{criterio}` |

**Estructura detallada outputs:**

```yaml
output_principal:
  field_1: {type, description, validation}
  field_2: {type, description, validation}
  field_3:
    nested_1: {type, description}
    nested_2: {type, description}
```

**Ejemplos concretos:**

```yaml
# Ejemplo Minimal (startup 30p)
output_minimal:
  {campos con valores ejemplo}

# Ejemplo Avanzada (enterprise 2000p)
output_avanzada:
  {campos con valores ejemplo}
```

---

### 1.3. Dependencies

**Reads from (prerequisitos):**

```yaml
- phase: "F{N}_{nombre}"
  inputs: ["output_1", "output_2"]
  criticality: "BLOCKER"
  rationale: "{por qué necesario}"
```

**Writes to (consumers):**

```yaml
- "F{X}_{nombre}"
- "F{Y}_{nombre}"
- "P{N}_{playbook}"
```

**Coordinates with:**

```yaml
- phase: "F{Z}_{nombre}"
  coordination: "{tipo coordinación}"
```

**Feedback loops:**

```yaml
- phase: "F{W}_{nombre}"
  direction: "F{W} → F{N}"
  tipo: "{tipo feedback}"
  frequency: "{cuándo ocurre}"
```

---

## §2. CONTEXTO

### 2.1. Propósito

{1-2 párrafos explicando claramente QUÉ resuelve esta fase y POR QUÉ es necesaria}

**Pregunta clave respondida:** "{pregunta que la fase responde}"

---

### 2.2. Alcance

**Incluye:**

- ✅ {actividad 1}
- ✅ {actividad 2}
- ✅ {actividad 3}

**Excluye (antipatrones):**

- ❌ {actividad fuera de scope}
- ❌ {actividad fuera de scope}

---

### 2.3. Stakeholders

**Roles involucrados:**

| Rol | Responsabilidad | Accountability | Tiempo dedicación |
|-----|-----------------|----------------|-------------------|
| `{rol_1}` | `{responsabilidad}` | `{accountable_si/no}` | `{horas}` |
| `{rol_2}` | `{responsabilidad}` | `{accountable_si/no}` | `{horas}` |

---

## §3. PROCESO

### 3.1. Actividades

**Secuencia completa:**

#### Actividad 1: {nombre} (duración)

**Inputs:** {listar}  
**Método:** {técnica específica}  
**Participantes:** {roles}

**Pasos detallados:**

1. {paso 1 con detalle operativo}
2. {paso 2}
3. {paso 3}

**Output:** {artefacto producido}

**Checklist:**

- [ ] {criterio completitud 1}
- [ ] {criterio completitud 2}

---

#### Actividad 2: {nombre} (duración)

{misma estructura}

---

### 3.2. Técnicas y herramientas

**Técnicas recomendadas:**

| Técnica | Uso | Referencia |
|---------|-----|------------|
| `{técnica_1}` | `{cuándo usarla}` | `{paper/libro}` |
| `{técnica_2}` | `{cuándo usarla}` | `{paper/libro}` |

**Herramientas:**

**Minimal (tool-agnostic):**

- {herramienta simple: Google Sheets, Miro, etc.}

**Avanzada (con TF{N}):**

- {herramienta enterprise: plataforma específica}

---

## §4. ARTEFACTOS

### 4.1. Templates

| Template | Propósito | Formato | Ubicación |
|----------|-----------|---------|-----------|
| `T{N}_{nombre}` | `{propósito}` | `{YAML/MD/Excel}` | `04_templates/` |

**Instrucciones uso template:**

1. {paso 1}
2. {paso 2}
3. {paso 3}

---

### 4.2. Ejemplos completos

**Caso Minimal (startup 30p):**

```yaml
{ejemplo completo T{N} poblado con datos realistas startup}
```

**Caso Avanzada (enterprise 2000p):**

```yaml
{ejemplo completo T{N} poblado con datos realistas enterprise}
```

---

## §5. VALIDACIÓN

### 5.1. Criterios entrada (Entry criteria)

- [ ] {prerequisito 1 verificable}
- [ ] {prerequisito 2 verificable}
- [ ] {prerequisito 3 verificable}

**Validation gate:** {si aplica, referencia a VG{N}}

---

### 5.2. Criterios salida (Exit criteria)

- [ ] {deliverable 1 completo}
- [ ] {deliverable 2 validado}
- [ ] {deliverable 3 aprobado}

**Métricas éxito:**

| Métrica | Threshold | Medición |
|---------|-----------|----------|
| `{metrica_1}` | `{valor}` | `{cómo medir}` |
| `{metrica_2}` | `{valor}` | `{cómo medir}` |

---

### 5.3. Quality assurance

**Checklist QA completo:**

- [ ] §0 Fundamento: Layer 0-1-2 refs completas
- [ ] §1 Interfaz: Inputs/outputs/dependencies verificados
- [ ] Vocabulario: Sin términos prohibidos
- [ ] Trazabilidad: Cadena A→P→I→F documentada
- [ ] Ejemplos: Minimal + Avanzada completos
- [ ] Coherencia: No contradicciones con otras fases
- [ ] Tests: Validation scripts passed

---

## §6. ESTIMACIONES

### 6.1. Esfuerzo desarrollo fase

**Desarrollo esta fase markdown:**

- Autor experimentado: {X-Y}h
- Autor nuevo: {X+50%}h

**MVO requirements:**

- §0-§1 completos: {X}h
- §2-§10 MVO funcional: {Y}h

---

### 6.2. Ejecución real

**En proyecto real (aplicar la fase):**

| Contexto | Duración | Team size | Setup |
|----------|----------|-----------|-------|
| Survival | `{duración}` | `{personas}` | `{setup}` |
| Minimal | `{duración}` | `{personas}` | `{setup}` |
| Avanzada | `{duración}` | `{personas}` | `{setup}` |

---

## §7. RIESGOS Y MITIGACIÓN

### 7.1. Riesgos comunes

**Riesgo 1:** {descripción}

- **Probabilidad:** {Low/Medium/High}
- **Impacto:** {Low/Medium/High}
- **Mitigación:** {estrategia}
- **Contingencia:** {plan B}

**Riesgo 2:** {descripción}

- {misma estructura}

---

### 7.2. Antipatrones detectados

**Antipatrón:** "{nombre antipatrón}"

- **Descripción:** {qué es}
- **Por qué falla:** {rationale}
- **Alternativa correcta:** {qué hacer en su lugar}

---

## §8. ADAPTACIONES CONTEXTUALES

### 8.1. Por tamaño organización

**Startup <50p:**

- {adaptación específica}

**Scaleup 50-500p:**

- {adaptación específica}

**Enterprise >500p:**

- {adaptación específica}

---

### 8.2. Por trayectoria

**Survival (crisis):**

- Scope reducido: {qué omitir}
- Fast-track: {atajos razonables}

**Minimal (presupuesto limitado):**

- Tool-agnostic: {alternativas low-tech}
- Pragmatic: {simplificaciones aceptables}

**Avanzada (enterprise):**

- Comprehensive: {rigor completo}
- TF1-TF3: {integración tejidos}

---

## §9. DEPENDENCIAS CRÍTICAS

### 9.1. Prerequisitos BLOQUEADORES

```yaml
blocker_1:
  fase: "F{N}_{nombre}"
  outputs_required: ["output_1", "output_2"]
  rationale: "{por qué bloqueante}"
  workaround_kernel: "{si aplica}"
```

---

### 9.2. Prerequisitos RECOMENDADOS

```yaml
recommended_1:
  fase: "F{M}_{nombre}"
  outputs_used: ["output_X"]
  benefit: "{mejora si disponible}"
  alternative: "{qué hacer si no disponible}"
```

---

## §10. REFERENCIAS

### 10.1. Documentos ORKO

- `00_fundamentos_teoricos.md#{seccion}`
- `10_arquitectura_orko.md#{seccion}`
- `SPEC_ARQUITECTURA_DEFINITIVA.md#{seccion}`
- `VOCABULARIO_CONTROLADO.yaml#{path}`
- `DEPENDENCY_GRAPH.yaml#F{N}`

---

### 10.2. Literatura académica/práctica

- {Autor (Año). "Título". Publisher. DOI/ISBN}
- {Autor (Año). "Título". Journal. DOI}

**Conceptos clave aplicados:**

- **{concepto_1}:** {cómo se usa en fase}
- **{concepto_2}:** {cómo se usa}

---

## CHANGELOG

### Version 1.0.0 (YYYY-MM-DD)

- Creación inicial fase
- §0-§1 completos (MVO)
- Ejemplos Minimal + Avanzada

### Version 1.1.0 (YYYY-MM-DD)

- {cambios realizados}

---

## METADATA

```yaml
fase_id: "F{N}_{nombre_fase}"
version: "1.0.0"
status: "MVO"
wslc_stage: "{stage}"
kernel: {true/false}
dependencies_count:
  reads_from: {N}
  writes_to: {M}
estimated_lines: {~XXX}
complexity: {Low/Medium/High}
pair_programming_recommended: {true/false}
```

---

**CHECKLIST PRE-COMMIT:**

- [ ] §0 Fundamento completo (Layer 0-1-2)
- [ ] §1 Interfaz completo (I/O/Dependencies)
- [ ] Sin términos prohibidos (grep check)
- [ ] Ejemplos Minimal + Avanzada
- [ ] YAML syntax válido
- [ ] References actualizadas
- [ ] CHANGELOG actualizado
- [ ] dependency_closure_script.py PASS
- [ ] Peer review completado

---

## PARTE 5D: TEMPLATE_PLAYBOOK.md + TEMPLATE_SCHEMA.yaml + CHECKLIST

```markdown
##### TEMPLATE_PLAYBOOK.md (45min)

**Propósito:** Template para playbooks P01-P08 individuales + base para P09-P15 schema

```markdown
# P{NN}_{nombre_playbook}

> **TEMPLATE Version:** 1.0.0  
> **Status:** [Draft | MVO | Complete]  
> **Tipo:** [Recovery | Transformation | Operational]  
> **Last Updated:** YYYY-MM-DD

---

## §0. FUNDAMENTO

### Layer 0-1 refs

**Primitivos afectados:**
- **P{N}_{nombre}:** {cómo playbook modifica/restaura este primitivo}

**Métricas relacionadas:**
- **{metrica_nombre}:** {threshold trigger playbook}

**Invariantes preservados:**
- **I{N}_{nombre}:** {cómo playbook preserva invariante durante remediation}

---

## §1. TRIGGER

### 1.1. Condición activación

**Trigger primario:**
```yaml
condition: "{expresión booleana específica}"
threshold: "{valor numérico preciso}"
source: "{fase/métrica que detecta}"
```

**Ejemplo concreto:**

```yaml
# P01 Low H_org Recovery
condition: "H_org < 70"
threshold: "69.9"
source: "F13_health_monitoring.h_org_dashboard"
detection_latency: "Semanal (dashboard update)"
```

---

### 1.2. Severidad e impacto

| Severidad | Impacto si no actuar | Timeline degradación | Costo inacción |
|-----------|---------------------|---------------------|----------------|
| `{Critical/High/Medium}` | `{descripción impacto}` | `{timeframe}` | `{estimación}` |

---

## §2. CONTEXTO

### 2.1. Propósito playbook

{1-2 párrafos: QUÉ problema resuelve, POR QUÉ crítico, CUÁNDO aplicar}

**Root cause típico:** {análisis causa raíz común}

---

### 2.2. Alcance intervención

**Incluye:**

- {acción 1 específica}
- {acción 2 específica}

**Excluye:**

- {fuera de scope playbook}
- {delegar a otro playbook}

---

## §3. PROCESO REMEDIATION

### 3.1. Assessment inicial (Bloque 1)

**Inputs necesarios:**

- {artefacto 1 desde fase X}
- {artefacto 2 desde fase Y}

**Análisis ejecutar:**

#### Análisis 1: {nombre}

**Método:** {técnica específica}  
**Duración:** {estimación}  
**Output:** {diagnóstico esperado}

**Checklist diagnóstico:**

- [ ] {criterio verificación 1}
- [ ] {criterio verificación 2}

---

### 3.2. Plan remediation (Bloque 2)

**Estrategias disponibles:**

| Estrategia | Contexto aplicable | Esfuerzo | Riesgo | Tiempo recovery |
|------------|-------------------|----------|--------|-----------------|
| `{estrategia_1}` | `{cuándo usar}` | `{esfuerzo}` | `{riesgo}` | `{tiempo}` |
| `{estrategia_2}` | `{cuándo usar}` | `{esfuerzo}` | `{riesgo}` | `{tiempo}` |

**Decision tree:**

```yaml
if {condición_1}:
  → Estrategia A
elif {condición_2}:
  → Estrategia B
else:
  → Escalate a {stakeholder}
```

---

### 3.3. Ejecución (Bloque 3)

**Actividades secuenciales:**

#### Actividad 1: {nombre}

**Responsable:** {rol RACI}  
**Accountable:** {rol RACI}  
**Inputs:** {listar}  
**Método:** {técnica}

**Pasos detallados:**

1. {paso operativo 1}
2. {paso operativo 2}
3. {paso operativo 3}

**Output:** {artefacto producido}

**Validation checkpoint:**

- [ ] {criterio exit 1}
- [ ] {criterio exit 2}

---

### 3.4. Validación recovery (Bloque 4)

**Métricas post-remediation:**

| Métrica | Pre-playbook | Target post | Medición | Timeline verificación |
|---------|--------------|-------------|----------|----------------------|
| `{metrica_1}` | `{valor_pre}` | `{valor_target}` | `{cómo medir}` | `{cuándo verificar}` |

**Criterios éxito:**

- [ ] Métrica principal restaurada a threshold
- [ ] Sin efectos secundarios detectados
- [ ] Sostenibilidad validada (no regresión)

---

## §4. STAKEHOLDERS

### 4.1. Roles involucrados

| Rol | Responsabilidad | Accountability | Delegation Mode |
|-----|-----------------|----------------|-----------------|
| `{rol_1}` | `{responsabilidad}` | `{accountable_si/no}` | `{M1-M6}` |
| `{rol_2}` | `{responsabilidad}` | `{accountable_si/no}` | `{M1-M6}` |

**Human accountable final:** `{rol específico}`

---

### 4.2. Comunicación

**Stakeholders notificar:**

- **Trigger detectado:** {quién notificar inmediatamente}
- **Plan aprobado:** {quién debe aprobar}
- **Ejecución iniciada:** {quién debe saber}
- **Recovery completado:** {quién recibe reporte}

**Templates comunicación:**

- `playbook_trigger_notification.md`
- `remediation_plan_approval.md`
- `recovery_completion_report.md`

---

## §5. ARTEFACTOS

### 5.1. Templates usados

| Template | Uso | Formato | Ubicación |
|----------|-----|---------|-----------|
| `T{N}_{nombre}` | `{propósito}` | `{formato}` | `04_templates/` |

---

### 5.2. Outputs generados

**Artefactos obligatorios:**

- `{playbook_id}_assessment.yaml`: Diagnóstico inicial
- `{playbook_id}_plan.md`: Plan remediation aprobado
- `{playbook_id}_report.md`: Reporte final recovery

**Ejemplos completos:**

```yaml
# P01_low_h_org_assessment.yaml (Startup 30p)
{ejemplo poblado con datos realistas}
```

---

## §6. ADAPTACIONES CONTEXTUALES

### 6.1. Por severidad

**Crisis (H_org <50):**

- Fast-track: {atajos razonables crisis}
- Scope mínimo: {qué omitir temporalmente}

**Degradación (H_org 50-70):**

- Comprehensive: {proceso completo}
- Root cause: {análisis profundo}

---

### 6.2. Por tamaño org

**Startup <50p:**

- {adaptación específica}

**Enterprise >500p:**

- {adaptación específica}

---

## §7. MÉTRICAS E INSTRUMENTACIÓN

### 7.1. KPIs playbook

| KPI | Threshold | Medición | Frequency |
|-----|-----------|----------|-----------|
| `time_to_detect` | `{valor}` | `{método}` | `{frecuencia}` |
| `time_to_recovery` | `{valor}` | `{método}` | `{frecuencia}` |
| `recurrence_rate` | `{valor}` | `{método}` | `{frecuencia}` |

---

### 7.2. Observability

**Dashboards integrar:**

- F13_health_monitoring (trigger source)
- Playbook execution tracking
- Recovery validation metrics

---

## §8. RIESGOS Y MITIGACIÓN

**Riesgo 1:** {descripción}

- **Probabilidad:** {Low/Medium/High}
- **Mitigación:** {estrategia}

**Riesgo 2:** {descripción}

- {misma estructura}

---

## §9. ESCALATION

### 9.1. Criterios escalation

**Escalar si:**

- Recovery no logrado en {timeframe}
- Métrica empeora durante remediation
- Efectos secundarios críticos detectados
- Recursos insuficientes para continuar

**Escalar a:** {rol/comité específico}

---

### 9.2. Contingencia

**Plan B si playbook falla:**

1. {acción contingencia 1}
2. {acción contingencia 2}
3. {punto no-retorno: considerar {alternativa drástica}}

---

## §10. REFERENCIAS

**Documentos ORKO:**

- `{fase_relacionada}.md`
- `{playbook_complementario}.md`

**Literatura:**

- {referencias académicas/prácticas}

---

## CHANGELOG

### Version 1.0.0 (YYYY-MM-DD)

- Creación inicial playbook
- Proceso remediation MVO

---

## METADATA

```yaml
playbook_id: "P{NN}_{nombre}"
version: "1.0.0"
status: "MVO"
tipo: "{Recovery/Transformation/Operational}"
trigger_automated: {true/false}
human_accountable: "{rol}"
estimated_recovery_time:
  best_case: "{timeframe}"
  worst_case: "{timeframe}"
complexity: "{Low/Medium/High}"
```

---

##### TEMPLATE_SCHEMA.yaml (30min)

**Propósito:** Template para schemas parametrizables (compliance, context, playbook instances)

```yaml
# ================================================================
# {SCHEMA_NAME}_SCHEMA.YAML
# ================================================================
#
# Propósito: {descripción propósito schema}
# Tipo: {compliance_framework | context_pattern | playbook_schema}
# Instancias esperadas: {N aprox}
# Version: 1.0.0
# Date: YYYY-MM-DD
#
# ================================================================

metadata:
  schema_id: "{schema_name}_schema"
  version: "1.0.0"
  date: "YYYY-MM-DD"
  status: "production"
  
  purpose: "{descripción clara propósito}"
  
  instances_location: "instances/{schema_name}_instances.yaml"
  
  validation:
    - "yamllint {schema_name}_instances.yaml"
    - "JSON Schema validation si aplica"

# ================================================================
# SCHEMA DEFINITION
# ================================================================

# Nota: Este es SCHEMA, NO instancia
# Instancias van en instances/{schema_name}_instances.yaml

schema_structure:
  
  # Campo 1: Identificador único
  id:
    type: "String UUID"
    required: true
    unique: true
    description: "{descripción campo}"
    validation: "{regex o regla}"
    ejemplo: "compliance_gdpr_eu"
  
  # Campo 2: Nombre display
  nombre:
    type: "String"
    required: true
    max_length: 100
    description: "{descripción}"
    ejemplo: "GDPR - General Data Protection Regulation"
  
  # Campo 3: Enum categórico
  categoria:
    type: "Enum"
    required: true
    values: ["{val1}", "{val2}", "{val3}"]
    description: "{descripción categorías}"
    ejemplo: "{val1}"
  
  # Campo 4: Lista strings
  aplicable_jurisdictions:
    type: "List[String]"
    required: false
    min_items: 1
    description: "{descripción}"
    ejemplo: ["EU", "EEA", "UK"]
  
  # Campo 5: Objeto anidado
  enforcement:
    type: "Object"
    required: true
    structure:
      level:
        type: "Enum"
        values: ["Hard", "Soft", "Advisory"]
      penalty_max:
        type: "String"
        description: "Multa máxima potencial"
      audit_frequency:
        type: "Enum"
        values: ["Annual", "Biannual", "Quarterly"]
    
    ejemplo:
      level: "Hard"
      penalty_max: "€20M or 4% annual revenue"
      audit_frequency: "Annual"
  
  # Campo 6: Boolean flags
  flags:
    type: "Object"
    required: false
    structure:
      data_residency_required:
        type: "Boolean"
      consent_explicit_required:
        type: "Boolean"
      right_to_be_forgotten:
        type: "Boolean"
    
    ejemplo:
      data_residency_required: true
      consent_explicit_required: true
      right_to_be_forgotten: true
  
  # Campo 7: Referencias
  references:
    type: "List[Object]"
    required: false
    structure:
      tipo:
        type: "Enum"
        values: ["Ley", "Reglamento", "Norma", "Guía"]
      titulo:
        type: "String"
      url:
        type: "URI"
      fecha:
        type: "Date YYYY-MM-DD"
    
    ejemplo:
      - tipo: "Ley"
        titulo: "Regulation (EU) 2016/679"
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
        fecha: "2016-04-27"

# ================================================================
# VALIDATION RULES
# ================================================================

validation_rules:
  
  unique_ids:
    rule: "Todos IDs únicos en instances"
    validation: "No duplicados"
  
  required_fields:
    rule: "Campos required presentes"
    validation: "No nulls en required"
  
  enum_values:
    rule: "Enums dentro valores permitidos"
    validation: "Reject invalid enums"
  
  cross_field:
    rule: "{regla específica cross-field si aplica}"
    validation: "{método validación}"

# ================================================================
# USAGE INSTRUCTIONS
# ================================================================

usage:
  
  crear_nueva_instancia:
    paso_1: "Copiar example_instance a instances/{schema_name}_instances.yaml"
    paso_2: "Modificar campos según nueva instancia"
    paso_3: "Validar yamllint + closure script"
    paso_4: "Commit a repo"
  
  referenciar_desde_fase:
    paso_1: "Fase usa schema como input"
    paso_2: "Load instances.yaml"
    paso_3: "Filter/query según criteria"
    ejemplo_yaml: |
      # En F8_limits_definition.md
      inputs:
        - compliance_frameworks:
            source: "schemas/compliance_framework_instances.yaml"
            filter: "jurisdiction == 'EU'"

# ================================================================
# EXAMPLE INSTANCE
# ================================================================

example_instance:
  id: "compliance_gdpr_eu"
  nombre: "GDPR - General Data Protection Regulation"
  categoria: "Data Privacy"
  aplicable_jurisdictions: ["EU", "EEA", "UK"]
  
  enforcement:
    level: "Hard"
    penalty_max: "€20M or 4% annual revenue"
    audit_frequency: "Annual"
  
  flags:
    data_residency_required: true
    consent_explicit_required: true
    right_to_be_forgotten: true
  
  references:
    - tipo: "Ley"
      titulo: "Regulation (EU) 2016/679"
      url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
      fecha: "2016-04-27"

# ================================================================
# CHANGELOG
# ================================================================

changelog:
  - version: "1.0.0"
    date: "YYYY-MM-DD"
    author: "{nombre}"
    changes:
      - "Creación schema inicial"
      - "{N} campos definidos"
      - "Validation rules especificadas"
```

---

##### CHECKLIST_VALIDACION.md (30min)

```markdown
# CHECKLIST VALIDACIÓN - METODOLOGÍA ORKO

**Propósito:** Checklist unificado pre-commit para TODA entrega  
**Aplicable a:** Fases, Playbooks, Schemas, Templates, Docs  
**Uso:** Ejecutar ANTES de commit a repo

---

## §1. VALIDACIÓN ESTRUCTURAL

### 1.1. Formato y sintaxis

**Archivos Markdown (.md):**
- [ ] Frontmatter correcto (si aplica)
- [ ] Headings jerárquicos (no saltos nivel)
- [ ] Links internos válidos (no broken)
- [ ] Code blocks con language tag
- [ ] Tablas bien formateadas

**Archivos YAML (.yaml):**
- [ ] `yamllint {archivo}` PASS (0 errors)
- [ ] Indentación consistente (2 spaces)
- [ ] Strings quoted apropiadamente
- [ ] No tabs (solo spaces)

**Archivos Python (.py):**
- [ ] `black {archivo}` formatted
- [ ] `flake8 {archivo}` PASS
- [ ] `mypy {archivo}` type hints OK
- [ ] Docstrings presentes

---

### 1.2. Nomenclatura

- [ ] IDs coherentes (F{NN}_{snake_case})
- [ ] Sin espacios en filenames
- [ ] Lowercase filenames (excepto README)
- [ ] Extensions correctas (.md, .yaml, .py)

---

## §2. VALIDACIÓN SEMÁNTICA

### 2.1. Vocabulario canónico

**Sin términos prohibidos:**
- [ ] No "sistema" (usar work_system, E6_state, organization)
- [ ] No "proceso" genérico (usar P2_flow, workflow, procedure)
- [ ] No "datos" (usar P3_information, InformationAsset)
- [ ] No "gente" (usar P1_capacity substrate=Humano, person, team)
- [ ] No "AI" sin contexto (usar M1-M6, substrate=Algorítmico)
- [ ] No "herramienta" genérico (usar tool específico, platform)

**Validación automática:**
```bash
# Ejecutar desde root
grep -r "sistema\|proceso\|datos\|gente" --include="*.md" 40_implementacion_metodologia/
# Output esperado: 0 matches (o matches permitidos en contextos específicos)
```

---

### 2.2. Referencias Layer 0-1-2

**Fases WSLC (F{NN}):**

- [ ] §0 Fundamento presente
- [ ] Layer 0: Axiomas, Primitivos, Invariantes listados
- [ ] Layer 0: Justificación derivacional explícita
- [ ] Layer 1: Dominios PRIMARY/SECONDARY clarificados
- [ ] Layer 1: Contratos/Entidades/Métricas si aplica
- [ ] Layer 2: Tejidos si aplica (o alternativa tool-agnostic)

**Playbooks (P{NN}):**

- [ ] Layer 0: Primitivos afectados clarificados
- [ ] Métricas trigger documentadas
- [ ] Invariantes preservados verificados

**Schemas:**

- [ ] Referencias a fases consumidoras
- [ ] Validation rules explícitas

---

## §3. VALIDACIÓN DEPENDENCIES

### 3.1. DEPENDENCY_GRAPH coherence

**Ejecutar script:**

```bash
cd 40_implementacion_metodologia/dev_specs
python scripts/dependency_closure_script.py \
  --graph DEPENDENCY_GRAPH.yaml \
  --vocab VOCABULARIO_CONTROLADO.yaml \
  --output closure_report.md
```

**Resultado esperado:**

- [ ] 0 errors (validation PASSED)
- [ ] Warnings aceptables documentados
- [ ] Info logs revisados

---

### 3.2. Prerequisites verificados

**Para fase F{NN}:**

- [ ] Inputs reads_from existen en graph
- [ ] Outputs writes_to válidos
- [ ] Coordinates_with coherentes
- [ ] Feedback_loops anotados

---

## §4. VALIDACIÓN COMPLETITUD

### 4.1. Secciones obligatorias

**Fases WSLC:**

- [ ] §0 Fundamento: COMPLETO
- [ ] §1 Interfaz: COMPLETO (Inputs/Outputs/Dependencies)
- [ ] §2-§10: MVO funcional (pueden mejorarse post-VG1)
- [ ] Ejemplos: Minimal + Avanzada presentes
- [ ] References: Actualizadas
- [ ] Changelog: Presente
- [ ] Metadata: Completo

**Playbooks:**

- [ ] §0 Fundamento
- [ ] §1 Trigger clarificado
- [ ] §3 Proceso remediation detallado
- [ ] §4 Stakeholders + accountability
- [ ] Ejemplos concretos

**Schemas:**

- [ ] Schema structure completo
- [ ] Validation rules definidas
- [ ] Example instance válido
- [ ] Usage instructions presentes

---

### 4.2. Métricas cuantitativas

**Fases WSLC:**

- [ ] Líneas: ≥250L (MVO aceptable ~200-280L)
- [ ] §0: ≥30L (fundamento robusto)
- [ ] §1: ≥50L (interfaz detallada)
- [ ] Ejemplos: ≥2 (Minimal + Avanzada)

**Playbooks:**

- [ ] Líneas: ≥180L (MVO ~150-200L)
- [ ] Proceso: ≥80L (suficiente detalle)
- [ ] Ejemplos: ≥1

---

## §5. VALIDACIÓN CALIDAD

### 5.1. Claridad

- [ ] Lenguaje preciso (no ambiguo)
- [ ] Jargon explicado (no assumed knowledge)
- [ ] Acrónimos definidos primera mención
- [ ] Ejemplos ilustrativos presentes

---

### 5.2. Consistencia

- [ ] Terminología coherente intra-documento
- [ ] IDs coherentes inter-documentos
- [ ] No contradicciones detectadas
- [ ] Tone of voice profesional uniforme

---

### 5.3. Usabilidad

- [ ] Templates copy-pasteable
- [ ] Checklists accionables
- [ ] Diagramas si añaden valor
- [ ] TODOs/FIXMEs resueltos (no en commit)

---

## §6. VALIDACIÓN TRAZABILIDAD

### 6.1. Cadena derivacional

- [ ] A{N} → P{M} → F{X} explícita
- [ ] Rationale documentado
- [ ] No "huérfanos" (elements sin trace)

---

### 6.2. Cross-references

- [ ] Links internos válidos
- [ ] Referencias externas verificadas
- [ ] DOI/ISBN para papers

---

## §7. VALIDACIÓN EMPÍRICA (Post VG1)

### 7.1. Caso startup_50p

- [ ] F1 ejecutable con context_profile
- [ ] F3 trajectory_selection funcional
- [ ] F7 okr_cascade generable
- [ ] F9 e6_target designable
- [ ] F13 h_org_dashboard trackeable

---

### 7.2. Fricción documentada

- [ ] Pain points capturados
- [ ] Workarounds necesarios listados
- [ ] Mejoras propuestas priorizadas

---

## §8. PEER REVIEW (si aplica)

- [ ] 1+ reviewer aprobó cambios
- [ ] Comentarios addressados
- [ ] Pair programming si complejidad alta

---

## §9. PRE-COMMIT FINAL

```bash
# Checklist ejecutar commands
cd 40_implementacion_metodologia

# 1. Lint YAML
yamllint dev_specs/*.yaml

# 2. Closure script
python dev_specs/scripts/dependency_closure_script.py \
  --graph dev_specs/DEPENDENCY_GRAPH.yaml \
  --vocab dev_specs/VOCABULARIO_CONTROLADO.yaml

# 3. Grep términos prohibidos
grep -r "sistema\|proceso\|datos\|gente" --include="*.md" .

# 4. Git status clean
git status
```

**Resultado esperado:**

- [ ] yamllint: 0 errors
- [ ] closure_script: VALIDATION PASSED
- [ ] grep: 0 prohibited terms (o explicados)
- [ ] git: clean working tree o changes staged

---

## §10. COMMIT

```bash
git add {archivos}
git commit -m "{mensaje descriptivo}"

# Mensaje format:
# [TIPO] Descripción concisa
#
# - Detalle cambio 1
# - Detalle cambio 2
#
# TIPOS: [FEAT|FIX|DOCS|REFACTOR|TEST|CHORE]
```

---

**CHECKLIST MASTER STATUS:**

Fase/Playbook/Schema: `{nombre}`  
Autor: `{nombre}`  
Date: `{YYYY-MM-DD}`

- [ ] §1 Estructural PASS
- [ ] §2 Semántico PASS
- [ ] §3 Dependencies PASS
- [ ] §4 Completitud PASS
- [ ] §5 Calidad PASS
- [ ] §6 Trazabilidad PASS
- [ ] §7 Empírico PASS (post VG1)
- [ ] §8 Peer Review PASS
- [ ] §9 Pre-commit commands PASS
- [ ] §10 Committed to repo

**STATUS FINAL: [READY | NEEDS_WORK | BLOCKED]**

---

**Checklist Final Sesión BLOQUE 1:**

- [ ] TEMPLATE_FASE_WSLC.md completo (~500L)
- [ ] TEMPLATE_PLAYBOOK.md completo (~400L)
- [ ] TEMPLATE_SCHEMA.yaml completo (~200L)
- [ ] CHECKLIST_VALIDACION.md completo (~400L)
- [ ] Todos templates validados yamllint/markdown
- [ ] Templates committed a repo

**Output:** TEMPLATES + CHECKLIST COMPLETOS
