## SPRINT 3: DEVELOPMENT + SCHEMAS

### CONTEXTO SPRINT 3

**Objetivo sprint:**  
Completar el **núcleo de diseño “Development”** de la metodología (F2, F4, F5, F6, F8) y dejar listos los **schemas parametrizables** para expansión (compliance, contextos, casos).

**FASEs del sprint:**
- **FASE 1:** F2_vision_definition + F4_capability_mapping  
- **FASE 2:** F5_flow_design + Template T05_vsm  
- **FASE 3:** F8_limits_definition + compliance_framework_schema  
- **FASE 4:** jurisdiction_instances + context_pattern_schema  
- **FASE 5:** F6_information_architecture + case_instances

**Dependencias (resumen):**

```yaml
F2  ← F1
F4  ← F1,F3
F5  ← F1,F4
F6  ← F1,F3
F8  ← F1,F3
```

**Pre-requisitos SPRINT 3:**

- Kernel completo (Etapa 1):
  - F1, F3, F7, F9, F13 en estado MVO o mejor
  - VOCABULARIO_CONTROLADO.yaml listo
  - DEPENDENCY_GRAPH.yaml kernel validado (`dependency_closure_script.py` PASS)
  - Templates y checklist:
    - TEMPLATE_FASE_WSLC.md
    - TEMPLATE_PLAYBOOK.md
    - TEMPLATE_SCHEMA.yaml
    - CHECKLIST_VALIDACION.md

**Output esperado del sprint:**

- 5 fases **development** completas: `F2, F4, F5, F6, F8`  
- 5 templates instanciados: `T02, T04, T05, T06, T17`  
- 2 schemas tipo + instances clave:
  - `compliance_framework_schema.yaml` + `compliance_framework_instances.yaml`
  - `context_pattern_schema.yaml` + `jurisdiction_instances.yaml` + `case_instances.yaml`

---

### FASE 1: F2_vision_definition + F4_capability_mapping

**Objetivo FASE 1:**  
Definir **visión y marco de propósito** (F2) y conectar esa visión con un **inventario estructurado de capacidades** (F4).

#### 1. Preparación FASE 1

```bash
cd 40_implementacion_metodologia/dev_specs

# Crear archivos si no existen
touch 01_fases/F2_vision_definition.md
touch 01_fases/F4_capability_mapping.md

# Abrir en el editor:
# - TEMPLATE_FASE_WSLC.md
# - VOCABULARIO_CONTROLADO.yaml
# - DEPENDENCY_GRAPH.yaml
```

**Inputs obligatorios (desde kernel):**

- De `F1_context_assessment`:
  - `context_profile_36_params` (tamaño, industria, constraints, flags)
  - `h_org_baseline`
- De `F3_trajectory_selection`:
  - `trajectory_selected` (Survival / Minimal / Avanzada)
  - `timeline_commitment`
  - `budget_allocation`
- De `F7_purpose_cascade` (aunque no esté perfecto):
  - `okr_L4` o `okr_L4_simplified`
  - Primer borrador de `okr_cascade` si existe

#### 2. Sub‑bloque A: F2_vision_definition

**Pasos para F2 (usando TEMPLATE_FASE_WSLC.md):**

1. **Copiar template base**
   - Copiar `TEMPLATE_FASE_WSLC.md` → `01_fases/F2_vision_definition.md`
   - Ajustar `fase_id`, `wslc_stage: Initiation`, `kernel: false`

2. **Completar §0 Fundamento (F2)**  
   - Axiomas: centrarse en **A2_Propósito**, referenciar **P5_Propósito**
   - Invariantes clave: **I3_Trazabilidad**, **I5_HAIC** (para cómo se bajan OKR)
   - Explicar explícitamente:
     - Cómo F2 se apoya en F1/F3
     - Cómo F2 prepara el terreno para F7 y F9

3. **Completar §1 Interfaz (F2)**  
   - Inputs:
     - `F1.context_profile_36_params`
     - `F1.h_org_baseline`
     - `F3.trajectory_selected`, `F3.timeline_commitment`, `F3.budget_allocation`
   - Outputs mínimos:
     - `vision_statement.md` (1–2 páginas, narrativa)
     - `vision_constraints.yaml` (límites macro de visión)
     - `okr_L4_refined` (versión iterada de OKR de organización)
   - Declarar `writes_to: ["F3","F7","F9"]` coherente con DEP_GRAPH (F2 mejora insumos ya usados por F3/F7/F9)

4. **§2–§5 Proceso F2 (nivel MVO)**
   - Definir al menos 3 actividades:
     - **Actividad 1:** síntesis de contexto (resume F1 en 1 página)
     - **Actividad 2:** co‑creación de visión con stakeholders clave
     - **Actividad 3:** traducción de visión a 3–5 resultados medibles (pre‑OKR L4)
   - Para cada actividad:
     - Inputs, método, participantes, output, checklist

5. **§7 Adaptaciones contextuales (F2)**
   - Diferenciar explícitamente:
     - Startup Survival vs Minimal vs Avanzada
     - Cómo cambia profundidad / artefactos según trayectoria

6. **Checklist rápido F2**
   - Visión clara en ≤2 páginas
   - 3–5 resultados clave asociados
   - Alineado con `trajectory_selected` (no prometer más de lo posible)

#### 3. Sub‑bloque B: F4_capability_mapping

**Pasos para F4 (inventario capacidades) usando TEMPLATE_FASE_WSLC.md:**

1. **Copiar template base**
   - `TEMPLATE_FASE_WSLC.md` → `01_fases/F4_capability_mapping.md`
   - Ajustar `fase_id`, `wslc_stage: Development`

2. **Completar §0 Fundamento (F4)**
   - Axiomas: **A1_Organización**, **A3_Flujo** (capacidad como nodo en red de trabajo)
   - Primitivos: **P1_Capacidad**, referencias a `C1_CapacityAsset`
   - Invariantes: **I4_Clasificación**, **I5_HAIC**

3. **§1 Interfaz (F4)**
   - Inputs:
     - `F1.context_profile_36_params` (especialmente sección technical y organization)
     - `F3.trajectory_selected` (determina profundidad inventario)
     - `F2.vision_statement` (prioriza capacidades estratégicas)
   - Outputs:
     - `capacity_inventory.yaml` (estructura basada en P1/C1)
     - `skills_matrix.xlsx` (opcional pero recomendado)
     - `capacity_gaps.yaml` (lista de capacidades faltantes/insuficientes)

4. **Definir estructura de `capacity_inventory.yaml`**
   - Reutilizar vocab P1:

   ```yaml
   - capacity_id: UUID
     name: string
     capacity_type: {C0_Foundational|C1_Core|C2_Context|C3_Commodity}
     substrate: {Humano|Algorítmico|Mecánico|Mixto}
     ownership: {Internal|External|Hybrid}
     lifecycle: {Draft|Active|Deprecated|Sunset}
     delegation_mode: {M1|M2|M3|M4|M5|M6}
     description: string
     domain_primary: {D1|D2|D3|D4}
     domain_secondary: [D1|D2|D3|D4]?
   ```

5. **Actividades clave F4**
   - **Actividad 1:** extracción inicial desde sistemas existentes (Jira, HR, tools)
   - **Actividad 2:** normalización a taxonomía P1 / C1
   - **Actividad 3:** identificación de gaps críticos alineados con visión (F2) y trayectoria (F3)

6. **Checklist FASE 1**

- [ ] `F2_vision_definition.md` creado y poblado hasta §5  
- [ ] `F4_capability_mapping.md` creado y poblado hasta §5  
- [ ] `capacity_inventory.yaml` con ≥80% capacidades relevantes  
- [ ] `capacity_gaps.yaml` con top 5–10 gaps priorizados  
- [ ] CHECKLIST_VALIDACION.md aplicado a ambos archivos  

---

### FASE 2: F5_flow_design + T05_vsm

**Objetivo FASE 2:**  
Diseñar los **flujos de trabajo críticos** (F5) y crear el **template de Value Stream Mapping T05_vsm** listo para casos futuros.

#### 1. Preparación FASE 2

```bash
cd 40_implementacion_metodologia/dev_specs
touch 01_fases/F5_flow_design.md
touch 04_templates/T05_vsm.md   # o .xlsx si prefieres hoja de cálculo
```

**Inputs obligatorios:**

- `capacity_inventory.yaml` y `capacity_gaps.yaml` (F4)
- `context_profile_36_params` (F1)
- `trajectory_selected` (F3)
- `okr_L4` y, si disponible, primeros KRs L3/L2 (F7)

#### 2. F5_flow_design (fase)

1. **Copiar template base**
   - `TEMPLATE_FASE_WSLC.md` → `01_fases/F5_flow_design.md`
   - `wslc_stage: Development`, dominios PRIMARY: D1_Arquitectura, D4_Operación

2. **§0 Fundamento F5**
   - Axiomas: **A3_Flujo**
   - Primitivos: **P2_Flujo**, métricas: `handoff_ratio`, `cycle_time`, `efficiency`
   - Invariantes: **I2_Ortogonalidad**, **I7_Emergencia**

3. **§1 Interfaz F5**
   - Inputs:
     - `capacity_inventory.yaml`
     - Lista de 3–5 flujos críticos (negocio/tecnología) acordados con stakeholders
   - Outputs:
     - `flow_map_{nombre}.yaml` para cada flujo crítico
     - Métricas base:
       - `handoff_ratio_baseline`
       - `cycle_time_baseline`
       - `bottlenecks_detected`

4. **Definir estructura de `flow_map`**

   ```yaml
   flow_id: "feature_delivery_v1"
   name: "Delivery de feature a producción"
   steps:
     - step_id: "S1"
       name: "Discovery"
       owner_capacity_id: UUID
       handoff_to: "S2"
     - step_id: "S2"
       name: "Design"
       owner_capacity_id: UUID
       handoff_to: "S3"
   metrics:
     handoff_ratio: float
     cycle_time: "P..D / PT..H"
     efficiency: float
   bottlenecks:
     - step_id: "S3"
       reason: "Esperas QA"
   ```

#### 3. Template T05_vsm

- Crear `04_templates/T05_vsm.md` con:
  - Sección para **mapa de flujo** (steps, owners, tiempos)
  - Sección para **métricas A3**:
    - `handoff_ratio`
    - `cycle_time`
    - `value_adding_time`
  - Dos ejemplos mínimos:
    - Startup 30p (flow simple)
    - Scaleup 200p (flow más complejo)

#### 4. Checklist FASE 2

- [ ] `F5_flow_design.md` hasta §5 completo (al menos 3 flujos críticos)
- [ ] `T05_vsm` creado con estructura clara + 2 ejemplos
- [ ] `handoff_ratio_baseline` calculado para cada flujo
- [ ] Inputs/outputs coherentes con DEPENDENCY_GRAPH.yaml

---

### FASE 3: F8_limits_definition + compliance_framework_schema

**Objetivo FASE 3:**  
Definir y modelar los **límites/constraints** (F8) y crear el **schema de compliance** reutilizable.

#### 1. Preparación FASE 3

```bash
cd 40_implementacion_metodologia/dev_specs
touch 01_fases/F8_limits_definition.md
mkdir -p schemas
touch schemas/compliance_framework_schema.yaml
touch schemas/compliance_framework_instances.yaml
```

**Inputs obligatorios:**

- `context_profile_36_params.constraints` (F1)
- `trajectory_selected`, `budget_allocation` (F3)
- Cualquier requerimiento regulatorio conocido (GDPR, SOX, MGDE, etc.)

#### 2. F8_limits_definition (fase)

1. **Copiar template base**
   - `TEMPLATE_FASE_WSLC.md` → `01_fases/F8_limits_definition.md`
   - Dominios PRIMARY: D3_Decisión, SECONDARY: D2_Percepción

2. **§0 Fundamento F8**
   - Ax: **A4_Límites**
   - Prim: **P4_Límite**
   - Invar: **I4_Clasificación**, **I8_Adaptación_Contextual**

3. **§1 Interfaz F8**
   - Inputs:
     - constraints de `context_profile`
     - `trajectory_selected`
   - Outputs:
     - `limit_catalog.yaml` (catálogo de límites codificados)
     - Referencias a instancias de `compliance_framework_instances.yaml`
     - Matriz “límite → fases afectadas”

4. **Estructura sugerida `limit_catalog.yaml`**

   ```yaml
   - limit_id: "gdpr_residency"
     limit_type: "Regulatory"
     enforcement: "Hard"
     scope: "Global"
     description: "Datos EU deben residir en EU"
     applies_to:
       - F6_information_architecture
       - F11_fabric_deployment
   ```

#### 3. compliance_framework_schema.yaml

- Basarse en `TEMPLATE_SCHEMA.yaml`, especializando a **compliance_framework**:
  - Campos mínimos:
    - `id`, `nombre`, `categoria`, `aplicable_jurisdictions`
    - `enforcement.level`, `penalty_max`, `audit_frequency`
    - `flags` (data_residency, consent_required, etc.)
- Crear 2–3 **example_instance** dentro del archivo para:
  - `compliance_gdpr_eu`
  - `compliance_sox_us`
  - `compliance_mgde_cl`

#### 4. compliance_framework_instances.yaml

- Crear instancias concretas (1 por framework):
  - Copiar `example_instance` y adaptarlo por jurisdicción.
- Mantener `ids` únicos y coherentes con `limit_catalog.yaml`.

#### 5. Checklist FASE 3

- [ ] `F8_limits_definition.md` con §0–§5 completos
- [ ] `compliance_framework_schema.yaml` definido y documentado
- [ ] `compliance_framework_instances.yaml` con ≥3 frameworks
- [ ] `limit_catalog.yaml` con top 5–10 límites críticos
- [ ] Validado con CHECKLIST_VALIDACION.md (sección schemas)

---

### FASE 4: jurisdiction_instances + context_pattern_schema

**Objetivo FASE 4:**  
Modelar contextos y jurisdicciones sin romper minimalidad (I1/I8), usando schemas parametrizables.

#### 1. Preparación FASE 4

```bash
cd 40_implementacion_metodologia/dev_specs/schemas
touch context_pattern_schema.yaml
touch jurisdiction_instances.yaml
```

**Inputs:**

- `compliance_framework_instances.yaml` (FASE 3)
- `context_profile_36_params` (F1)
- Conocimiento de mercados/países objetivo (e.g. EU, US, Chile, India)

#### 2. context_pattern_schema.yaml

- Especializar `TEMPLATE_SCHEMA.yaml` a **context_pattern**:
  - Campos sugeridos:
    - `id`, `nombre`, `tipo_contexto` (startup, scaleup, enterprise, NGO)
    - `jurisdiction_ids` (referencias a `jurisdiction_instances.yaml`)
    - `risk_profile`, `funding_stage`, `team_size_range`
    - `default_trajectory` (Survival/Minimal/Avanzada)

#### 3. jurisdiction_instances.yaml

- Definir al menos **10 jurisdicciones** (como pide el plan):
  - Ej: `chile`, `eu`, `us`, `uk`, `india`, `mexico`, etc.
- Cada jurisdicción:
  - `id`, `nombre`, `region`, `compliance_ids` (list de frameworks aplicables)
  - Flags clave (`data_residency_required`, `high_regulation`)

```yaml
- id: "chile"
  nombre: "Chile"
  region: "LATAM"
  compliance_ids: ["compliance_mgde_cl"]
  flags:
    data_residency_required: true
    high_regulation: true
```

#### 4. Checklist FASE 4

- [ ] `context_pattern_schema.yaml` definido
- [ ] `jurisdiction_instances.yaml` con ≥10 entradas
- [ ] Referencias cruzadas coherentes con `compliance_framework_instances.yaml`
- [ ] Validaciones básicas: IDs únicos, enums válidos

---

### FASE 5: F6_information_architecture + case_instances

**Objetivo FASE 5:**  
Diseñar la **arquitectura de información** (F6) y dejar **casos de referencia** que conecten contexto, límites y datos.

#### 1. Preparación FASE 5

```bash
cd 40_implementacion_metodologia/dev_specs
touch 01_fases/F6_information_architecture.md
touch schemas/case_instances.yaml
```

**Inputs:**

- `context_profile_36_params` (F1)
- `trajectory_selected` (F3)
- `okr_cascade` preliminar (F7)
- `limit_catalog.yaml` + compliance/context schemas (FASE 3–4)

#### 2. F6_information_architecture

1. **Copiar template fase**
   - `TEMPLATE_FASE_WSLC.md` → `01_fases/F6_information_architecture.md`
   - Dominios PRIMARY: D1_Arquitectura, D2_Percepción

2. **§0 Fundamento F6**
   - Axiomas: **A3_Flujo**, **A5_Evolución** (data as evolving asset)
   - Primitivos: **P3_Información**
   - Invariantes: **I3_Trazabilidad**, **I8_Adaptación**

3. **§1 Interfaz F6**
   - Inputs:
     - Contexto (F1), trayectoria (F3), límites (F8)
     - Jurisdicciones + context patterns
   - Outputs:
     - `data_domain_model.md` (dominios de datos)
     - `critical_datasets.yaml` (datasets clave con fields básicos)
     - `information_governance.md` (roles y principios MGDE/GDPR según aplique)

#### 3. case_instances.yaml

- Definir al menos **6 casos**:
  - 3–4 casos Minimal (scaleups, startups reguladas)
  - 2–3 casos Avanzada (enterprise)
- Cada caso:
  - referencia a:
    - `context_pattern_id`
    - `jurisdiction_ids`
    - `compliance_ids`
    - `critical_datasets` usados
    - `trajectory_selected`

```yaml
- case_id: "scaleup_saas_200p"
  context_pattern_id: "scaleup_saas"
  jurisdiction_ids: ["eu","uk"]
  compliance_ids: ["compliance_gdpr_eu"]
  trajectory_selected: "Minimal"
  critical_datasets:
    - "customer_profile"
    - "transaction_log"
```

#### 4. Checklist FASE 5

- [ ] `F6_information_architecture.md` completado hasta §5
- [ ] `case_instances.yaml` con ≥6 casos representativos
- [ ] Casos coherentes con context_pattern + jurisdiction + compliance
- [ ] Validado con CHECKLIST_VALIDACION.md (fases + schemas)

---

### Resumen Deliverables SPRINT 3 (actualizado)

- ✅ 5 fases documentadas: `F2, F4, F5, F6, F8`  
- ✅ 5 templates funcionales: `T02, T04, T05, T06, T17`  
- ✅ 2 schemas tipo: `compliance_framework_schema.yaml`, `context_pattern_schema.yaml`  
- ✅ Instances:
  - `compliance_framework_instances.yaml` (≥3 frameworks)
  - `jurisdiction_instances.yaml` (≥10 jurisdicciones)
  - `case_instances.yaml` (≥6 casos)
- ✅ F2–F8 alineadas con `DEPENDENCY_GRAPH.yaml` y `VOCABULARIO_CONTROLADO.yaml`  
- ✅ Todas las nuevas piezas pasan `CHECKLIST_VALIDACION.md`

## SPRINT 4: IMPLEMENTATION

### CONTEXTO SPRINT 4

**Objetivo sprint:**  
Pasar del diseño a la **implementación mínima funcional**:

- Ejecutar **quick wins** de alto impacto (F10).
- Definir/ejecutar la **estrategia de despliegue de tejidos** (F11).
- Modelar la **transición de estado** E6_current → E6_target (F12).
- Completar templates de compliance (T16–T18).
- Validar la **trayectoria Minimal** con un caso scaleup 200p.

**FASEs del sprint:**
- **FASE 6:** F10_quick_wins  
- **FASE 7:** F11_fabric_deployment  
- **FASE 8:** F12_state_transition  
- **FASE 9:** Templates T16–T18 compliance + validación  
- **FASE 10:** Caso scaleup_200p + Validation Gate 2

**Dependencias clave (de SPEC / DEPENDENCY_GRAPH):**

```yaml
F10 ← F3,F4,F8
F11 ← F3-F6,F8,F9
F12 ← F9,F11
```

**Pre-requisitos SPRINT 4:**

- Etapa 1 (kernel) completada y validada (VG1 ✅).
- Etapa 2 / SPRINT 3 completado:
  - F2, F4, F5, F6, F8 documentadas (MVO+).
  - Schemas e instances creados:
    - compliance_framework_schema + instances
    - context_pattern_schema + jurisdiction_instances + case_instances
- `DEPENDENCY_GRAPH.yaml` actualizado con F2,F4,F5,F6,F8.
- `dependency_closure_script.py` PASS tras cambios de SPRINT 3.

---

### FASE 6: F10_quick_wins

**Objetivo FASE 6:**  
Identificar y ejecutar un **set acotado de quick wins** que mejoren H_org y flujos críticos en pocas semanas, coherentes con trayectoria Minimal.

#### 1. Preparación FASE 6

```bash
cd 40_implementacion_metodologia/dev_specs
touch 01_fases/F10_quick_wins.md
```

**Inputs obligatorios:**

- `capacity_gaps.yaml` (F4)
- `flow_map_*` + métricas baseline (F5)
- `limit_catalog.yaml` + compliance/context (F8)
- `e6_target.yaml` (F9) – al menos en versión bosquejo
- `h_org_dashboard` (F13, aunque no esté hiper detallado aún)

#### 2. F10_quick_wins (fase)

1. **Crear fase usando TEMPLATE_FASE_WSLC**
   - Copiar `TEMPLATE_FASE_WSLC.md` → `01_fases/F10_quick_wins.md`
   - `wslc_stage: Implementation`
   - Dominios PRIMARY: D4_Operación, SECONDARY: D3_Decisión

2. **§0 Fundamento**
   - Ax: A1 (organización como work system), A3 (flujo), A5 (trayectoria/evolución)
   - Prim: P1_Capacidad, P2_Flujo, P3_Información (quick wins típicamente tocan capacidades y flujos)
   - Invar: I1_Minimalidad (no “mega programas”), I7_Emergencia (impacto emergente de cambios simples)

3. **§1 Interfaz**
   - Inputs:
     - Top N capacidades con gaps críticos (F4)
     - 2–3 flujos con peor `handoff_ratio` / `cycle_time` (F5)
     - Constraints duros (F8, límites de presupuesto/tiempo)
   - Outputs:
     - `quick_wins_backlog.yaml`
     - `quick_wins_execution_log.md`
     - `quick_wins_impact.yaml` (cambios en métricas clave)

4. **Estructura sugerida `quick_wins_backlog.yaml`**

   ```yaml
   - qw_id: "QW_001"
     title: "Eliminar handoff innecesario entre diseño y desarrollo"
     type: "Flow"
     related_flow_id: "feature_delivery_v1"
     estimated_effort: "1-2 semanas"
     expected_impact:
       handoff_ratio_delta: -0.15
       cycle_time_delta_days: -3
       H_org_delta: +2
     dependencies:
       - "F5_flow_design"
       - "F4_capability_mapping"
     status: "Planned"  # Planned | InProgress | Done
   ```

5. **Proceso (MVO)**
   - Actividad 1: selección basada en impacto / esfuerzo
   - Actividad 2: diseño detallado y “definition of done” por quick win
   - Actividad 3: ejecución y logging de resultados
   - Actividad 4: actualización `h_org_dashboard` (impacto observable)

6. **Checklist FASE 6**

- [ ] `F10_quick_wins.md` hasta §5 completo  
- [ ] `quick_wins_backlog.yaml` con 5–10 quick wins priorizados  
- [ ] Al menos 2 quick wins ejecutados **durante el sprint**  
- [ ] Impacto cuantitativo documentado en `quick_wins_impact.yaml`  

---

### FASE 7: F11_fabric_deployment

**Objetivo FASE 7:**  
Definir y/o ejecutar la **estrategia de despliegue** para TF1–TF3, respetando las tres opciones:  
1) TF1–TF3 completos, 2) tool-agnostic, 3) constrained.

#### 1. Preparación FASE 7

```bash
cd 40_implementacion_metodologia/dev_specs
touch 01_fases/F11_fabric_deployment.md
mkdir -p 02_tejidos_plans
touch 02_tejidos_plans/fabric_deployment_plan.yaml
```

**Inputs obligatorios:**

- `trajectory_selected` (F3) – importante: Minimal vs Avanzada
- `e6_target.yaml` (F9), especialmente sección `TF1_TF3_scope`
- Información de contexto técnico:
  - Stack actual, proveedores, restricciones (de F1/F6)
- `limit_catalog.yaml` + compliance/frameworks (F8)

#### 2. F11_fabric_deployment (fase)

1. **Crear fase**
   - `TEMPLATE_FASE_WSLC.md` → `01_fases/F11_fabric_deployment.md`
   - Dominios: D1_Arquitectura, D4_Operación
   - Referenciar explícitamente los 3 modos:
     - `§11.4 TF1-TF3 full`
     - `§11.5 tool-agnostic`
     - `§11.6 constrained`

2. **§0 Fundamento**
   - Ax: A1, A3, A5  
   - Prim: P1, P2, P3 (las telas son instanciación “dura” de primitivos)  
   - Invar: I1 (no sobrediseñar para Minimal), I5 (delegation modes para TFs)

3. **§1 Interfaz**
   - Inputs:
     - `trajectory_selected`:
       - Minimal → foco en **tool-agnostic** / “TF virtuales”
       - Avanzada → posibilidad TF1–TF3 reales
     - `e6_target.TF1_TF3_scope`
     - `compliance_framework_instances` (para restricciones TF3)
   - Outputs:
     - `fabric_deployment_plan.yaml`
     - `tf1_capacity_plan.md` (si aplica)
     - `tf2_flow_plan.md` (si aplica)
     - `tf3_information_plan.md` (si aplica)

4. **Estructura sugerida `fabric_deployment_plan.yaml`**

   ```yaml
   trajectory: "Minimal"
   deployment_mode:
     TF1: "virtual"      # virtual | tool_agnostic | full
     TF2: "tool_agnostic"
     TF3: "tool_agnostic"

   phases:
     - phase_id: "phase_1"
       horizon: "0-3 meses"
       scope:
         - "Establecer inventario capacidades con spreadsheet"
         - "Orquestar flujos con Zapier"
         - "Data lake light con BigQuery"
     - phase_id: "phase_2"
       horizon: "3-12 meses"
       scope:
         - "Prototipo TF2 orchestrator"
         - "Mejorar governance datos"
   ```

5. **Checklist FASE 7**

- [ ] `F11_fabric_deployment.md` documenta los tres modos (full / tool-agnostic / constrained)  
- [ ] `fabric_deployment_plan.yaml` coherente con trayectoria Minimal  
- [ ] Si cliente es Minimal:
  - No se compromete implementación full TF1–TF3 en corto plazo
  - Se describen claramente alternativas low-tech / low-cost  

---

### FASE 8: F12_state_transition

**Objetivo FASE 8:**  
Modelar y planificar la **transición** E6_current → E6_target como una serie de pasos, sin romper invariantes ni límites.

#### 1. Preparación FASE 8

```bash
cd 40_implementacion_metodologia/dev_specs
touch 01_fases/F12_state_transition.md
touch 02_tejidos_plans/state_transition_plan.yaml
```

**Inputs obligatorios:**

- `e6_current` (implícito desde F1/F13, aunque sea estimado)
- `e6_target.yaml` (F9)
- `fabric_deployment_plan.yaml` (F11)
- Resultados quick wins (F10)

#### 2. F12_state_transition (fase)

1. **Crear fase**
   - `TEMPLATE_FASE_WSLC.md` → `01_fases/F12_state_transition.md`
   - Dominios: D1_Arquitectura, D4_Operación
   - Entidad central: **E6_State** + trayectorias **E7**

2. **§1 Interfaz**
   - Inputs:
     - `E6_current`, `E6_target`
     - Lista quick wins ejecutados
     - Plan de fabrics (TF1–TF3)
   - Outputs:
     - `state_transition_plan.yaml`
     - Lista de **milestones** y **releases** intermedios

3. **Estructura sugerida `state_transition_plan.yaml`**

   ```yaml
   current_state:
     H_org: 45
     key_gaps: ["capacidad_X", "flow_Y"]

   target_state:
     H_org: 70
     horizon: "6-12 meses"

   transitions:
     - step_id: "T1"
       description: "Implementar quick wins QW_001-QW_003"
       duration: "1 sprint"
       expected_delta_H_org: +5

     - step_id: "T2"
       description: "Formalizar governance datos mínima"
       duration: "1-2 sprints"
       expected_delta_H_org: +7
   ```

4. **Checklist FASE 8**

- [ ] `F12_state_transition.md` hasta §5  
- [ ] `state_transition_plan.yaml` con ≥3 pasos claros, con deltas H_org esperados  
- [ ] Coherente con `trajectory_selected` (no sobre‑promete)  

---

### FASE 9: Templates finales T16–T18 compliance + validación

**Objetivo FASE 9:**  
Completar los **templates de compliance y validación** que serán reutilizados en Etapa 3–4.

#### 1. Preparación FASE 9

```bash
cd 40_implementacion_metodologia/dev_specs/04_templates
touch T16_compliance_readiness.md
touch T17_compliance_evidence.md
touch T18_validation_report.md
```

#### 2. T16_compliance_readiness

- Checklist para verificar si la organización está lista para un **audit** básico según frameworks relevantes (GDPR, MGDE, etc.).
- Secciones:
  - Alcance (frameworks y jurisdicciones)
  - Control list (técnico + organizacional)
  - Gap summary

#### 3. T17_compliance_evidence

- Template para capturar **evidencias** concretas de cumplimiento:
  - Tipo evidencia, ubicación, fecha, responsable, framework/requirement asociado.

#### 4. T18_validation_report

- Template base para `validation_expansion_report.md`:
  - Resumen técnico (fases completadas, schemas, templates)
  - Resumen empírico (caso scaleup)
  - Riesgos y recomendaciones
  - Decisión: GO / NO-GO Etapa 3

#### 5. Checklist FASE 9

- [ ] T16, T17, T18 creados y alineados con VOCAB + schemas  
- [ ] Cada template tiene ejemplos Minimal / Avanzada cuando aplique  

---

### FASE 10: Caso scaleup_200p + VALIDATION GATE 2

**Objetivo FASE 10:**  
Aplicar F1–F12 en un **caso scaleup 200 personas**, documentar fricción y decidir si se pasa a Etapa 3 (playbooks).

#### 1. Preparación caso scaleup

- Seleccionar o definir caso en `case_instances.yaml`:
  - `case_id: "scaleup_saas_200p"` u otro similar.
- Asegurarse que:
  - Tiene `context_pattern_id` coherente.
  - Jurisdicciones y frameworks relevantes (e.g. GDPR, MGDE).

#### 2. Ejecución resumida F1–F12

- F1–F3: usar kernel existente.
- F2,F4,F5,F6,F8: usar fases nuevas MVO.
- F10–F12: usar planes definidos en este sprint.

Cada fase debe producir los **artefactos clave** para este caso y registrar:

- **Tiempo real** invertido.
- **Fricción / dudas** encontradas.
- **Workarounds** temporales.

#### 3. VALIDATION GATE 2 (ampliado)

```yaml
Criterios_Técnicos:
  fases_completas:
    objetivo: "13/18 fases con §0-§1 completos + MVO §2-§10"
    estado:
      completas: 13
      faltantes: 5
  schemas_tipo:
    objetivo: "≥2 schemas tipo + instances"
    estado:
      compliance_framework: "OK"
      context_pattern: "OK"
  templates:
    objetivo: "≥9 templates ejecutables"
    estado:
      T02,T04,T05,T06,T07,T12,T16,T17,T18: "OK"
  dependency_graph:
    objetivo: "DEPENDENCY_GRAPH.yaml actualizado con F2,F4-F6,F8,F10-F12"
    validacion:
      closure_script: "PASS"

Criterios_Empíricos:
  caso_scaleup_200p:
    F1-F12_end_to_end: "Ejecutado"
    H_org:
      baseline: 50-55      # ejemplo
      target:   70
      delta:    +15
    handoff_ratio:
      baseline: ">0.40"
      post_quick_wins: "<=0.30"
    okr_alignment:
      post_F7: "≥0.70"
  trayectoria_Minimal:
    documentada: "Sí (state_transition_plan.yaml + fabric_deployment_plan.yaml)"
    reproducible: "Sí (puede replicarse en otro caso Minimal)"

Riesgos:
  - id: "VG2_R1"
    descripcion: "Algunas fases pueden seguir MVO (no versión pulida)"
    impacto: "Esfuerzo extra Etapa 3"
    mitigacion: "Refinar durante desarrollo playbooks"

Output:
  validation_expansion_report.md:
    secciones:
      - "Resumen técnico"
      - "Resumen empírico scaleup_200p"
      - "Riesgos y mitigaciones"
      - "Recomendaciones para Etapa 3"

Decision: "✅ GO ETAPA 3 (si todos criterios mínimos cumplidos)"
```

---

### Deliverables SPRINT 4 (actualizado)

- ✅ Fases: `F10_quick_wins`, `F11_fabric_deployment`, `F12_state_transition` (MVO+)  
- ✅ Templates compliance/validación: `T16`, `T17`, `T18`  
- ✅ Caso scaleup_200p aplicado con F1–F12 end‑to‑end  
- ✅ `validation_expansion_report.md` generado  
- ✅ VALIDATION GATE 2 pasado → listo para **PLAN_ETAPA_3_PLAYBOOKS.md**