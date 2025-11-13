# TF2: FLOW FABRIC

**Primitivos:** P2_Flujo + P1_Capacidad(ejecutores) | **Axioma:** A1_Transformación  
**Dominios:** D4_Operación | **Tech:** BPA, OCE, CI/CD

---

## §1. DEFINICIÓN

```yaml
TF2_Flow:
  Scope: Orquestación, automatización, ejecución flujos organizacionales
  Unifica: TF2_Automation + TF5_Orchestration (previo)
  Espectro_Cognitivo:
    - C0: RPA, scheduled tasks (mecánico)
    - C1: ML-based routing, rule engines (decisional)
    - C2: LLM agents, multi-agent orchestration (cognitivo)
    
Trazabilidad:
  A1 (Transformación existe) → P2 (estructura flujo) → TF2 (ejecución)
  
Justificación_Unificación:
  "C0 vs C1-C2 es ESPECTRO continuo, no frontera binaria.
   Workflows pueden mezclar RPA + ML + Agents sin cruzar tejidos artificiales"
```

---

## §2. ACTOR CONTRACT

```yaml
FlowAsset:
  # Core
  id: UUID
  name: String
  description: String
  flow_type: {Process | Pipeline | Orchestration | Workflow}
  cognitive_level: {C0_Mechanical | C1_Decisional | C2_Cognitive | Mixed}
  role: {Producción | Habilitación}
  
  # Steps (DAG)
  steps: List<Step>
    Step:
      id: String
      name: String
      capacity_id: UUID(Capacity)  # TF1 link
      input_schema: JSON_Schema
      output_schema: JSON_Schema
      timeout_seconds: Integer
      retry_policy: {max_attempts, backoff_strategy}
      is_handoff: Boolean  # capacity[i] ≠ capacity[i+1]?
      
  dependencies: DAG<step_id>  # Orden ejecución
  
  # Orchestration (si cognitive_level ≥ C1)
  orchestration:
    pattern: {Sequential | Parallel | Hierarchical | Debate | Custom}
    coordinator_capacity_id: UUID(Capacity.Algorítmico) | null
    
    # Si multi-agent
    agents: List<AgentRole> | null
      AgentRole:
        agent_capacity_id: UUID
        role: {Coordinator | Worker | Critic | Validator}
        interaction_protocol: String
        
  # Bounded Autonomy (I5_HAIC)
  autonomy:
    delegation_mode: {M1|M2|M3|M4|M5|M6}
    
    hitl_checkpoints: List<Checkpoint>
      Checkpoint:
        step_id: String
        condition: String  # Cuándo escalar
        human_capacity_id: UUID(Capacity.Humano)
        timeout_seconds: Integer
        escalation_rule: String
        
    override_mechanism:
      human_can_pause: Boolean
      circuit_breaker_enabled: Boolean
      emergency_stop_capacity_id: UUID(Capacity.Humano)
      
  # Guardrails (I5)
  guardrails:
    operational:
      max_iterations: Integer
      max_cost_usd: Float
      max_execution_time_seconds: Integer
      
    quality:
      min_success_rate: Float[0..1]
      max_error_rate: Float[0..1]
      
    scope:
      allowed_tools: List<String>  # APIs que puede llamar
      forbidden_actions: List<String>
      data_access_scope: List<String>  # Límite acceso TF3
      
  # Compensation (resilience)
  compensation:
    enabled: Boolean
    saga_pattern: Boolean
    compensation_steps: Map<step_id, compensation_step>
    rollback_on_failure: Boolean
    
  # Lifecycle
  lifecycle:
    current_state: {Draft | Testing | Staging | Active | Paused | Deprecated | Retired}
    version: Integer
    change_log: List<Change>
    
  # Execution History (I6_Trajectory + E7 Integration)
  execution_history:
    total_executions: Integer
    successful: Integer
    failed: Integer
    avg_duration_seconds: Float
    last_execution: Timestamp
    
    # E7: FlowExecution instances (detailed tracking)
    executions: List<FlowExecution>
      FlowExecution:  # Entidad E7 completa
        id: UUID
        flow_id: UUID  # Reference to this FlowAsset
        
        # Temporal
        started_at: Timestamp
        ended_at: Timestamp | null
        duration_seconds: Float | null
        
        # Context
        executed_by_capacity_id: UUID(Capacity)
        trigger: {Manual | Scheduled | Event_Driven | Transition}
        trigger_context: JSON  # Event payload, schedule config, etc.
        
        # Runtime tracking
        status: {In_Progress | Completed | Failed | Cancelled}
        current_step_id: UUID | null  # If In_Progress
        steps_completed: Integer
        steps_total: Integer
        
        # Outputs (Lineage)
        outputs_produced: List<{
          info_id: UUID(InformationAsset),
          step_id: UUID,
          produced_at: Timestamp
        }>
        
        # Failure details (if Failed)
        failure: {
          failed_at: Timestamp,
          failed_step_id: UUID,
          error_type: {Timeout | Validation | Infrastructure | Business_Logic},
          error_message: String,
          stack_trace: String | null,
          retry_count: Integer
        } | null
        
        # DORA Metrics (detailed)
        metrics:
          cycle_time: Duration        # ended_at - started_at
          wait_time: Duration         # Time waiting dependencies
          active_time: Duration       # Actual work time
          handoff_count: Integer
          rework: Boolean             # Is retry of previous failure
    
  # Quality Metrics
  quality_metrics:
    success_rate: Float[0..1]
    stp_rate: Float[0..1]  # Straight-Through Processing
    avg_cycle_time_seconds: Float
    handoff_ratio: Float[0..1]  # Target <0.20
    cost_per_execution: Float
    
  # Drift Detection (si cognitive_level ≥ C1)
  drift_monitoring:
    enabled: Boolean
    baseline_success_rate: Float
    current_success_rate: Float
    drift_detected: Boolean
    drift_threshold: Float  # e.g., 0.05 (5% drop)
    
  # Integration
  triggers: List<Trigger>
    Trigger:
      type: {Scheduled | Event | Manual | API}
      config: JSON  # Cron, event_topic, etc.
      
  consumes_information: List<UUID(InformationAsset)>  # TF3 inputs
  produces_information: List<UUID(InformationAsset)>  # TF3 outputs
  
  # Security & Limits (P4)
  security:
    execution_permissions: List<UUID(Capacity)>  # Quién puede ejecutar
    audit_required: Boolean
    compliance_tags: List<String>
    
  # Purpose (P5)
  purpose:
    linked_okrs: List<UUID(OKR)>
    business_value: String
    criticality: {Low | Medium | High | Critical}

Invariantes:
  - ∀ step: step.output_schema compatible con next_step.input_schema
  - delegation_mode=M6 → guardrails comprehensive ∧ hitl_checkpoints defined
  - cognitive_level=C2 ∧ orchestration.pattern=Multi_Agent → agents.length ≥ 2
  - compensation.enabled=true → ∀ step: compensation_step defined
  - handoff_ratio > 0.30 → Warning (Meyer: Minimize Handoffs)
```

---

## §3. PATTERNS DE ORQUESTACIÓN

### C0: Mecánico (RPA, Scheduled)

```yaml
Pattern: RPA_UI_Automation
  Steps:
    1. Open_Application (bot navegador)
    2. Fill_Form (data entry)
    3. Submit (click button)
    4. Extract_Result (screen scraping)
  
  Capacity_Type: C0 (sin decisión)
  Tools: UiPath, Automation Anywhere
  Delegation: M3-M4 (human invokes, bot executes)
  Guardrails: Timeout, whitelisted URLs, error screenshots
  Métricas: stp_rate, execution_time, error_rate

Pattern: Scheduled_Job
  Steps:
    1. Trigger_Cron
    2. Extract_Data (DB query)
    3. Transform (aggregations)
    4. Load (destination DB)
  
  Capacity_Type: C0
  Tools: Airflow, Cron, dbt
  Delegation: M6 (fully automated)
  Compensation: Rollback if load fails
```

### C1: Decisional (ML-based, Rules)

```yaml
Pattern: ML_Based_Routing
  Steps:
    1. Receive_Request
    2. Feature_Extraction
    3. ML_Classification (capacity: trained model)
    4. Route_to_Queue (based on prediction)
  
  Capacity_Type: C1 (decide routing)
  Tools: Scikit-learn, TensorFlow Serving
  Delegation: M4 (auto-route, human escalation if confidence < 0.80)
  Guardrails: Min_confidence_threshold, max_processing_time
  Drift_Detection: Monitor prediction_accuracy vs baseline

Pattern: Business_Rules_Engine
  Steps:
    1. Evaluate_Conditions (capacity: rule engine)
    2. Apply_Actions (if conditions met)
    3. Log_Decision
  
  Capacity_Type: C1
  Tools: Drools, Decision Tables
  Delegation: M4-M5 (auto for routine, human for exceptions)
```

### C2: Cognitive (LLM Agents, Multi-Agent)

```yaml
Pattern: Single_Agent_Task
  Steps:
    1. Receive_Task
    2. Plan (LLM genera plan)
    3. Execute_Tools (API calls, searches)
    4. Reflect (verifica resultado)
    5. Respond
  
  Capacity_Type: C2 (reflexiona sobre ejecución)
  Tools: LangChain, LlamaIndex, function calling
  Delegation: M3-M5 (human oversight, agent autonomous dentro scope)
  Guardrails:
    - Max_iterations: 10
    - Max_cost: $2 per task
    - Allowed_tools: [search, calculator, database_query]
    - HITL: Escalate if confidence < 0.70
  Observability: Full trace (reasoning, tool_calls, outputs)

Pattern: Multi_Agent_Orchestration
  Orchestration:
    Pattern: Hierarchical
    Coordinator: Manager_Agent (C2)
    Workers: [Researcher_Agent, Writer_Agent, Critic_Agent]
  
  Steps:
    1. Coordinator_Decompose_Task
    2. Parallel_Execution:
       - Researcher → gather info (TF3 RAG)
       - Writer → draft document
    3. Critic_Review (quality check)
    4. Coordinator_Synthesize
    5. HITL_Approval (human final review)
  
  Capacity_Type: C2 (múltiples agentes reflexivos)
  Tools: CrewAI, AutoGen, LangGraph
  Delegation: M5 (human + agents co-produce)
  Guardrails:
    - Budget_per_agent: {Researcher: $5, Writer: $10, Critic: $3}
    - Max_rounds: 3 (iterations feedback loop)
    - HITL: Always before final output
  Compensation: Rollback to previous draft if critic rejects

Pattern: Debate_Multi_Agent
  Orchestration:
    Pattern: Debate
    Agents: [Agent_Pro, Agent_Con, Judge_Agent]
  
  Steps:
    1. Present_Problem
    2. Round_1:
       - Agent_Pro: Argument favor
       - Agent_Con: Argument contra
    3. Round_2:
       - Agent_Pro: Counter-argument
       - Agent_Con: Counter-argument
    4. Judge_Agent: Synthesize, decide
    5. HITL_Override: Human can override judge
  
  Use_Case: Complex decisions, evaluations, strategic choices
  Delegation: M4-M5 (agents debate, human supervises/overrides)
```

---

## §4. MÉTRICAS TF2

```yaml
TF2_Score = weighted_avg(
  TF2_Coverage      × 20%,  # % flujos automatizados
  TF2_Reliability   × 30%,  # AVG(success_rate)
  TF2_Efficiency    × 25%,  # Time_saved / total_time
  TF2_Safety        × 15%,  # No_incidents / executions
  TF2_stp_rate      × 10%   # Straight-Through Processing
)

Threshold: ≥ 70

Components:
  TF2_Coverage: (Flujos_Automatizados / Flujos_Críticos) × 100
  TF2_Reliability: AVG(flow.success_rate) × 100
  TF2_Efficiency: (Time_Manual - Time_Auto) / Time_Manual × 100
  TF2_Safety: (1 - Incidents / Total_Executions) × 100
  TF2_stp_rate: (Auto_Completions / Total_Attempts) × 100

Métricas_Específicas:
  C0_Flows: stp_rate, error_rate, execution_time
  C1_Flows: Prediction_accuracy, confidence_distribution, drift_incidents
  C2_Flows: Success_rate, human_override_rate, cost_per_task, reasoning_quality
  
Alerts:
  - Drift_Detected: Success_rate drop > 5%
  - High_Override_Rate: > 20% (revise delegation_mode)
  - Budget_Exceeded: Actual_cost > planned_budget
  - HITL_Timeout: Human no responde en SLA
```

---

## §5. INTEGRACIÓN

```yaml
TF2 ← TF1: Capacidades ejecutan steps
  Pattern: Flow.steps[i].capacity_id → TF1.CapacityAsset
  Vinculación: Cada step requiere capacidad disponible
  
TF2 ↔ TF3: Flujos transforman información
  Pattern: 
    - Flow.consumes_information → TF3.InformationAsset (inputs)
    - Flow.produces_information → TF3.InformationAsset (outputs)
  Ejemplos:
    - ETL flow: Consume TF3.Bronze → Produce TF3.Silver
    - RAG flow: Consume TF3.Semantic → Produce responses
    - ML pipeline: Consume TF3.Foundation → Produce models (TF1)
    
TF2 ↔ P4: Guardrails, limits
  Security: execution_permissions, audit_trails
  Operational: max_cost, max_time, rate_limits
  Scope: allowed_tools, data_access_scope
  
TF2 ↔ P5: Purpose alignment
  Flow.linked_okrs → Business objectives
  Criticality determines: HITL frequency, guardrail strictness
```

---

## §6. NIVELES MADUREZ

```yaml
L0_Manual:
  - Procesos manuales, scripts ad-hoc
  - Delegation: M1-M2
  
L1_Basic_Automation:
  - RPA básico, scheduled jobs
  - Delegation: M3
  - Quality: Success_rate > 70%
  
L2_Orchestrated:
  - Workflows BPMN, compensations, HITL
  - Delegation: M3-M4
  - Quality: Success_rate > 85%, STP > 60%
  
L3_Intelligent:
  - ML-based routing, rule engines
  - Delegation: M4
  - Drift detection active
  - Quality: Success_rate > 90%, STP > 75%
  
L4_Cognitive:
  - LLM agents, multi-agent orchestration
  - Delegation: M4-M5
  - Bounded autonomy strict
  - Quality: Success_rate > 85%, human_override < 15%
  
L5_Autonomous:
  - M6 delegation (bounded, audited)
  - Self-optimizing workflows
  - Continuous learning
  - Quality: Success_rate > 95%, incidents near-zero
```

---

## §7. ANTI-PATTERNS

```yaml
AP_TF2_01_RPA_Hammer:
  "Usar RPA para todo (hasta cosas que tienen API)"
  Fix: Evaluar API-first, RPA solo si no hay alternativa
  
AP_TF2_02_Automate_Broken:
  "Automatizar proceso roto (garbage in, automation out)"
  Fix: Rediseñar proceso ANTES de automatizar
  
AP_TF2_03_No_Circuit_Breakers:
  "Automation sin fail-safe → cascading failures"
  Fix: Circuit breakers, timeouts, compensations obligatorios
  
AP_TF2_04_No_HITL:
  "M6 sin checkpoints → riesgo catastrófico"
  Fix: HITL para decisiones críticas, incluso en M6
  
AP_TF2_05_Cognitive_Without_Guardrails:
  "LLM agents sin límites → costos explosivos o unsafe actions"
  Fix: Guardrails comprehensive (cost, time, scope, quality)
  
AP_TF2_06_High_Handoff_Ratio:
  "Workflow con >30% handoffs → fricción, delays"
  Fix: Consolidar capacidades, reducir handoffs (Meyer principle)
```

---

## §8. EJEMPLOS

### ETL Pipeline (C0)

```yaml
id: "flow-001-etl-daily"
cognitive_level: C0_Mechanical
steps:
  - {Extract, capacity: "cap-db-connector", timeout: 300}
  - {Transform, capacity: "cap-dbt-runner", timeout: 600}
  - {Load, capacity: "cap-warehouse-writer", timeout: 300}
delegation_mode: M6
compensation: Rollback on load failure
success_rate: 0.98
stp_rate: 0.95
```

### ML Inference Flow (C1)

```yaml
id: "flow-002-churn-prediction"
cognitive_level: C1_Decisional
steps:
  - {Feature_Prep, capacity: "cap-feature-eng"}
  - {Predict, capacity: "cap-ml-churn-model"}
  - {Route, capacity: "cap-decision-engine"}
delegation_mode: M4
hitl_checkpoints: [{condition: "confidence < 0.80", human: "cap-analyst"}]
drift_monitoring: {enabled: true, threshold: 0.05}
success_rate: 0.93
```

### Multi-Agent Research (C2)

```yaml
id: "flow-003-research-synthesis"
cognitive_level: C2_Cognitive
orchestration:
  pattern: Hierarchical
  coordinator: "cap-manager-agent"
  agents:
    - {Researcher, capacity: "cap-research-agent"}
    - {Writer, capacity: "cap-writer-agent"}
    - {Critic, capacity: "cap-critic-agent"}
delegation_mode: M5
guardrails:
  max_cost_usd: 15.0
  max_iterations: 3
  allowed_tools: [search_web, query_rag, calculator]
hitl_checkpoints: [{step: "final_output", human: "cap-domain-expert"}]
success_rate: 0.87
human_override_rate: 0.13
cost_per_execution: 8.50
```

---

**Status:** ✅ Especificación completa con espectro C0→C2 unificado
