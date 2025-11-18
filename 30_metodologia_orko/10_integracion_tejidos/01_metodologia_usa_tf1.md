# METODOLOGÍA USA TF1_CAPACITY

**Versión**: v1.0.0 MVO  
**Estado**: Minimum Viable Operational  
**Propósito**: Documentar cómo fases WSLC F1-F18 y playbooks P01-P15 integran el tejido TF1_Capacity

---

## §0. FUNDAMENTO

**TF1_Capacity** (definido en `/20_tejidos/01_TF1_capacity.md`) es el tejido tecnológico que gestiona el ciclo de vida de **capacidades organizacionales** (humanas, algorítmicas, mecánicas).

**Integración con metodología**:

- Fases WSLC usan TF1 para inventariar, planificar, desplegar y monitorear capacidades
- Playbooks triggerea acciones sobre TF1 cuando H_org indica gaps de capacidad
- Métricas TF1 (quality_metrics, availability) alimentan cálculo de H_org

**Referencia completa**: Ver `/20_tejidos/01_TF1_capacity.md` para contratos, schemas y dominios TF1.

---

## §1. INTEGRACIÓN POR FASE WSLC

### F1: Context Assessment

**Uso de TF1**:

```yaml
objetivo: "Inventariar capacidades existentes para baseline H_org"

actividades_tf1:
  - Identificar capacidades críticas actuales
  - Clasificar por substrate (Humano, Algorítmico, Mecánico)
  - Detectar gaps evidentes (vacantes, skills faltantes)
  - Calcular H1_Humano (componente de H_org)

artefactos:
  input: 
    - context.yaml (org_structure, team_size)
    - Entrevistas con líderes
  
  output:
    - capacity_baseline.yaml (schema TF1.CapacityInventory)
    - h1_humano_score: float [0, 100]

ejemplo:
  caso_startup_50p:
    capacidades_encontradas:
      - C1_Developer: 3 personas, quality=65
      - C2_ProductOwner: 1 persona, quality=70
      - C3_Ops: 0 personas ❌ GAP
    
    h1_humano_baseline: 60
    gaps_críticos: ["Ops inexistente", "DevOps skills bajos"]
```

**Conexión con TF1**:

- F1 NO crea instancias TF1, solo **observa y registra** estado actual
- Output `capacity_baseline.yaml` sigue schema `TF1.CapacityInventory`

---

### F4: Capability Mapping

**Uso de TF1**:

```yaml
objetivo: "Crear inventario formal de capacidades target"

actividades_tf1:
  - Definir capacidades requeridas para vision_statement (de F2)
  - Clasificar cada capacidad: C0_Única/C1_Diferenciadora/C2_Soporte/C3_Commodity
  - Asignar substrate (Humano/Algorítmico/Mecánico)
  - Detectar gaps: required - current
  - Crear plan adquisición/desarrollo

artefactos:
  input:
    - F2.vision_statement
    - F3.trajectory_selected
    - F1.capacity_baseline
  
  output:
    - capacity_inventory.yaml (instancias TF1.CapacityAsset)
    - capacity_gap_analysis.md
    - capacity_acquisition_plan.yaml

ejemplo:
  caso_startup_50p:
    capacidades_target:
      - C0_CoreAlgorithm: Algorítmico, quality_target=90
      - C1_ProductDesign: Humano, quality_target=85
      - C2_DevOps: Humano ❌ NO EXISTE
      - C3_HR: Commodity, tercerizado
    
    gaps:
      - DevOps: contratar 1 persona (cost 80K/año)
      - CoreAlgorithm: desarrollar internamente (6 meses)
    
    plan: "Contratar DevOps en mes 1, desarrollar algoritmo meses 2-7"
```

**Conexión con TF1**:

- F4 **crea instancias formales** de TF1.CapacityAsset
- Cada asset tiene: id, name, substrate, classification (C0-C3), quality_metrics

---

### F7: Purpose Cascade

**Uso de TF1**:

```yaml
objetivo: "Asignar propósito y OKRs a capacidades clave"

actividades_tf1:
  - Mapear capacidades C0/C1 a OKRs L4→L1
  - Definir ownership por capacidad (Role_CapacityOwner)
  - Establecer quality_metrics targets

artefactos:
  input:
    - F4.capacity_inventory
    - F2.okr_L4
  
  output:
    - capacity_okr_mapping.yaml
    - capacity_ownership_raci.csv

ejemplo:
  caso_startup_50p:
    okr_capacity_mapping:
      - OKR_O1_H_org_recovery:
          capacidades: [C1_Developer, C2_DevOps]
          owner: Tech_Lead
          kr1: "Developer quality 65→80"
      
      - OKR_O2_Product:
          capacidades: [C1_ProductDesign, C0_CoreAlgorithm]
          owner: Product_Owner
          kr1: "Algoritmo accuracy 70→90%"
```

**Conexión con TF1**:

- F7 enriquece metadatos TF1 con purpose/okrs
- Prepara para deployment en F10-F12

---

### F10: Quick Wins

**Uso de TF1**:

```yaml
objetivo: "Activar capacidades subutilizadas o adquirir quick wins"

actividades_tf1:
  - Identificar capacidades existentes subutilizadas
  - Priorizar activación vs adquisición nueva
  - Ejecutar quick wins de capacidad (ej: upskilling rápido)

artefactos:
  input:
    - F4.capacity_gap_analysis
    - F1.capacity_baseline
    - TF1.availability (capacidades idle)
  
  output:
    - quick_wins_capacity.yaml
    - capacity_activation_plan.md

ejemplo:
  caso_startup_50p:
    quick_wins_detectados:
      - Developer_2: "50% idle time → asignar a DevOps upskilling"
      - ProductOwner: "Puede asumir UX temporalmente (80h training)"
    
    quick_win_execution:
      - Mes 1: Developer_2 estudia DevOps (20h/sem) → cubre gap parcial
      - Evita contratar DevOps inmediatamente → ahorro 30K USD
```

**Conexión con TF1**:

- F10 activa lifecycle TF1: deploy, activate, monitor
- Actualiza TF1.availability y TF1.assignment

---

### F14: Incident Response

**Uso de TF1**:

```yaml
objetivo: "Restaurar capacidades degradadas post-incidente"

actividades_tf1:
  - Detectar capacidades críticas afectadas (via H1_Humano drop)
  - Activar capacidad de respaldo o temporal
  - Documentar impacto en TF1.quality_metrics

artefactos:
  input:
    - F13.h_org_current (H1_Humano component)
    - TF1.quality_metrics (degraded)
    - incident_report.md
  
  output:
    - capacity_restoration_plan.yaml
    - tf1_impact_report.md

ejemplo:
  incidente_developer_quit:
    problema: "Developer_1 renuncia inesperadamente"
    impacto_tf1:
      - C1_Developer: 3→2 personas (-33% capacity)
      - H1_Humano: 60→52 (drop 8 puntos)
    
    respuesta_f14:
      - Activar contractor temporal (TF1.temporary_capacity)
      - Redistribuir carga Developer_2 y Developer_3
      - Trigger P10_capacity_gap_resolution
```

**Conexión con TF1**:

- F14 lee estado degradado de TF1
- Triggerea playbooks de recovery que operan sobre TF1

---

## §2. INTEGRACIÓN CON PLAYBOOKS

### P01: Low H_org Recovery

**Uso de TF1**:

```yaml
trigger: "H_org < 60 (H1_Humano likely < 55)"

acciones_tf1:
  1. Auditar TF1.quality_metrics de capacidades críticas
  2. Identificar capacidades degradadas (quality < threshold)
  3. Priorizar restauración top-3 capacidades
  4. Ejecutar recovery actions: hire, train, activate backup

artefactos:
  - tf1_audit_report.yaml
  - h1_recovery_plan.yaml (target: H1 > 70 en X semanas)

ejemplo:
  caso_startup_50p_P01:
    h1_inicial: 54
    capacidades_degradadas:
      - C1_Developer: quality 65→80 (training + hiring)
      - C2_ProductOwner: overload 120% → reduce a 90%
    
    recovery_plan:
      - Semana 1-2: Contratar Developer_4 (temporal)
      - Semana 3-4: Training Developer_2 en DevOps
      - Semana 5-6: Redistribuir carga ProductOwner
    
    h1_post_recovery: 68 ✅
```

---

### P10: Capacity Gap Resolution

**Uso de TF1**:

```yaml
trigger: "TF1.gap_detected OR F4.capacity_gap_critical"

acciones_tf1:
  1. Analizar gap: hire, buy (outsource), build (train), borrow (temporary)
  2. Evaluar cost/time/risk por opción
  3. Ejecutar lifecycle TF1: acquire → onboard → deploy → monitor
  4. Validar gap cerrado (quality_metrics >= target)

artefactos:
  - gap_resolution_decision.yaml
  - tf1_acquisition_log.md

ejemplo:
  gap_devops_startup:
    gap: "C2_DevOps: 0 → 1 persona needed"
    opciones:
      hire: "3 meses, 80K/año, risk=medium"
      outsource: "immediate, 120K/año, risk=low"
      train: "6 meses, 20K cost, risk=high"
    
    decision: "Hire (mejor balance cost/time/risk)"
    
    ejecución:
      - Mes 1: Publicar job opening
      - Mes 2: Entrevistar 5 candidatos
      - Mes 3: Onboard DevOps_1
      - Mes 4: C2_DevOps.quality = 75 ✅ gap cerrado
```

---

## §3. MÉTRICAS TF1 → H_org

### H1_Humano (Componente de H_org)

```yaml
formula_h1:
  H1_Humano = weighted_avg(
    TF1_quality_avg × 0.50,
    (1 - turnover_normalized) × 0.30,
    engagement_normalized × 0.20
  )

tf1_quality_avg:
  formula: "AVG(TF1.quality_metrics de todas las capacidades Humanas)"
  ejemplo:
    Developer_1: 80
    Developer_2: 70
    ProductOwner: 75
    avg: 75

impacto_en_h_org:
  H1_Humano es 30% de H_org
  
  si_H1_degrada_10_puntos:
    H_org_drop: 10 × 0.30 = 3 puntos
    puede_trigger: "G1 (H_org < 60) si ya estaba bajo"
```

**Observabilidad**:

- F13 monitorea TF1.quality_metrics continuamente
- Drift en TF1 → alerta en F13 → puede triggerar playbooks

---

## §4. CASOS END-TO-END

### Caso Startup 50p: Capacity Lifecycle Completo

```yaml
timeline:
  
  Mes_0_F1:
    acción: "Context Assessment con TF1 baseline"
    tf1_state:
      - Developer: 3 personas, quality=65
      - ProductOwner: 1 persona, quality=70
      - DevOps: 0 ❌
    h1_baseline: 60
  
  Mes_1_F4:
    acción: "Capability Mapping, detectar gaps"
    gaps:
      - DevOps: critical (needed para trajectory Survival)
    plan: "Contratar DevOps en 3 meses"
  
  Mes_2_F10:
    acción: "Quick Win - Developer_2 upskilling DevOps"
    tf1_change:
      - Developer_2: +skill_DevOps_basic (quality 60)
      - Cubre gap temporalmente
    h1_current: 62 (+2)
  
  Mes_3_P10:
    acción: "Capacity Gap Resolution - Hire DevOps"
    tf1_change:
      - DevOps_1: onboarded, quality=75
    h1_current: 68 (+6)
  
  Mes_6_F13:
    acción: "Health Monitoring continuo"
    tf1_state:
      - Developer: 3 personas, quality_avg=78 (mejoró)
      - ProductOwner: 1 persona, quality=75
      - DevOps: 1 persona, quality=80
    h1_current: 72 ✅
    
    H_org_evolution: 60 → 72 (+12 puntos en 6 meses)
```

---

## §5. BACKLOG v1.1.0

```yaml
mejoras_pendientes:
  - Documentar integración TF1 en F5/F6/F11/F12 (no solo F1/F4/F7/F10/F14)
  - Expandir playbooks P02-P07 con acciones TF1 específicas
  - Crear decision trees: hire vs buy vs build vs borrow
  - Integrar TF1.cost_model con ROI_Habilitacion
  - Calibrar thresholds quality_metrics con casos reales
  - Automatizar drift detection TF1 → F13 alerts
```

---

**NOTA MVO**: Este documento cubre los flujos críticos TF1 en v1.0.0. Integración completa de TF1 con todas las fases está en backlog post-v1.0.0.
