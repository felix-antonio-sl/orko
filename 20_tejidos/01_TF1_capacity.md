# TF1: CAPACITY FABRIC

**Primitivo:** P1_Capacidad | **Axioma:** A2_Existencia_Capacidad  
**Dominios:** D1_Arquitectura, D4_Operación | **Tech:** BAD, OCE, Infrastructure

---

## §1. DEFINICIÓN

```yaml
TF1_Capacity:
  Scope: Diseño, desarrollo, despliegue, gestión capacidades organizacionales
  Substratos: [Humano, Algorítmico, Mecánico, Mixto]
  Niveles_Cognitivos: [C0_Ejecutar, C1_Decidir, C2_Reflexionar, C3_Meta_Reflexionar]
  
Trazabilidad:
  A2 (Capacidad existe) → P1 (estructura capacidad) → TF1 (operacionalización)
```

---

## §2. ACTOR CONTRACT

```yaml
CapacityAsset:
  # Core
  id: UUID
  name: String
  capacity_type: {C0|C1|C2|C3}
  substrate: {Humano|Algorítmico|Mecánico|Mixto}
  role: {Producción|Habilitación}
  
  # Ownership (I5_HAIC)
  ownership:
    accountable_id: UUID(Humano|Mixto)
    delegated_from: UUID(Humano) | null  # Si algorítmico
    delegation_mode: {M1|M2|M3|M4|M5|M6} | null
    override_enabled: Boolean
    
  # Lifecycle
  lifecycle:
    current_state: {Planning|Development|Active|Idle|Deprecated|Retired}
    state_history: List<Transition>
    utilization_avg: Float[0..1]
    
  # Tech Specs (por sustrato)
  human_specs:
    skills: List<{name, level, certified}>
    availability: Float[0..1]
    cost_per_hour: Float
    
  algorithmic_specs:
    model_id: String  # e.g., "gpt-4"
    endpoint_url: String
    cost_per_token: Float
    guardrails:
      input_validation: {pii_detection, injection_detection, max_length}
      output_validation: {schema, toxicity, faithfulness}
      limits: {max_cost, max_time, rate_limit}
      
  mechanical_specs:
    hardware_type: String
    throughput: Float
    maintenance_schedule: String
    
  # Quality & Trajectory (I6)
  quality_metrics:
    success_rate: Float[0..1]
    avg_latency_ms: Float
    availability: Float[0..1]
    cost_per_execution: Float
    
  trajectory:  # Si algorítmico
    total_executions: Integer
    drift_detected: Boolean
    last_retrain_date: Date
    performance_trend: {Improving|Stable|Degrading}
    
  # Integration
  used_by_flows: List<UUID(Flow)>
  purpose: List<UUID(OKR)>

Invariantes:
  - accountable_id.substrate ∈ {Humano, Mixto}
  - substrate=Algorítmico → delegated_from NOT NULL
  - delegation_mode=M6 → guardrails comprehensive
  - substrate=Algorítmico ∧ capacity_type≥C1 → trajectory.enabled=true
```

---

## §3. PATTERNS DE DESARROLLO

### Humano

```yaml
Steps: Define_Role → Hire/Upskill → Onboard → Monitor_Performance → Optimize
Tools: HR platforms, LMS, performance management
Métricas: Utilization, skill_coverage, retention_rate
```

### Algorítmico (ML Model)

```yaml
Steps: Define_Problem → Data_Prep → Train → Evaluate → Serve → Monitor/Retrain
Tools: MLflow, Kubeflow, SageMaker
Métricas: Accuracy, latency_p99, drift_incidents, cost_per_execution
```

### Algorítmico (LLM Agent)

```yaml
Steps: Define_Role → Prompt_Engineering → Tool_Integration → Guardrails → HITL → Deploy → Improve
Tools: LangChain, vLLM, LangGraph
Métricas: Success_rate, human_override_rate, guardrail_violations
```

### Mecánico

```yaml
Steps: Hardware_Selection → Procurement → Configuration → Maintenance → Monitoring
Tools: CMMS, IoT platforms
Métricas: MTBF, MTTR, availability, calibration_drift
```

---

## §4. MÉTRICAS TF1

```yaml
TF1_Score = weighted_avg(
  TF1_Coverage      × 25%,  # % capacidades disponibles
  TF1_Quality       × 30%,  # AVG(success_rate)
  TF1_Availability  × 25%,  # % tiempo disponible
  TF1_Governance    × 10%,  # % con contracts completos
  TF1_Efficiency    × 10%   # Valor/Costo
)

Threshold: ≥ 70
Alerts: Critical(<60), Warning(<70)
```

---

## §5. INTEGRACIÓN

```yaml
TF1 → TF2: Capacidades ejecutan flujos
  Pattern: Flow.steps[i].capacity_id → CapacityAsset.id
  
TF1 ← TF3: Información alimenta capacidades
  Pattern: ML models consumen TF3.Foundation (training data)
          LLM agents consumen TF3.Semantic (RAG context)
          
TF1 ↔ P4: Security limits aplicados
  IAM: Access control capacidades
  Guardrails: Operational limits algorítmicos
  Budget: Economic limits
  
TF1 ↔ P5: Purpose alignment
  CapacityAsset.purpose → List<OKR>
  Contribución H_org via TF1_Score
```

---

## §6. EJEMPLOS

### Developer (Humano, C2)

```yaml
id: "cap-001-senior-dev"
capacity_type: C2_Reflexionar
substrate: Humano
skills: [{Python, Expert}, {AWS, Advanced}]
success_rate: 0.92
cost_per_hour: 75.0
```

### Code Review Agent (Algorítmico, C1)

```yaml
id: "cap-002-code-review-ai"
capacity_type: C1_Decidir
substrate: Algorítmico
model_id: "gpt-4-turbo"
delegation_mode: M4_Controlar
guardrails: {max_cost: 1.0, schema_validation: true}
success_rate: 0.948
human_override_rate: 0.052
```

### IoT Sensor (Mecánico, C0)

```yaml
id: "cap-003-temp-sensor"
capacity_type: C0_Ejecutar
substrate: Mecánico
hardware_type: "DHT22 Temperature Sensor"
availability: 0.998
mtbf_hours: 8760
```

---

**Status:** ✅ Especificación completa con trazabilidad A2→P1→TF1
