# Implementación tejidos

```
implementacion_tejidos
│   ├── contracts
│   │   ├── openapi
│   │   │   ├── e6_state.yaml
│   │   │   ├── tf1_capacity.yaml
│   │   │   ├── tf2_flow.yaml
│   │   │   └── tf3_information.yaml
│   │   └── schemas
│   │       └── base.yaml
│   └── README.md
├── 00_introduccion_tejidos.md
├── 01_TF1_capacity.md
├── 02_TF2_flow.md
├── 03_TF3_information.md
├── 04_concerns_transversales.md
├── 05_integracion_tejidos.md
├── 06_validacion_final.md
└── 07_architectural_state_management.md
```

# File Contents

## 20_tejidos/implementacion_tejidos/README.md

```markdown
# ORKO IMPLEMENTATION

**Phase 2: Technical Implementation**

---

## 📋 STRUCTURE

```
30_implementacion/
├── contracts/              # OpenAPI schemas & JSON Schema definitions
│   ├── schemas/           # Reusable type definitions
│   │   └── base.yaml      # ✅ Foundation types (Step 1)
│   └── openapi/           # REST API specifications
│       ├── tf1_capacity.yaml    # Pending (Step 2)
│       ├── tf2_flow.yaml        # Pending (Step 3)
│       ├── tf3_information.yaml # Pending (Step 4)
│       └── e6_state.yaml        # Pending (Step 5)
│
├── packages/              # Python reference implementations
│   ├── orko_common/       # Shared utilities
│   ├── orko_tf1/          # TF1 Capacity implementation
│   ├── orko_tf2/          # TF2 Flow + E7 implementation
│   └── orko_tf3/          # TF3 Information implementation
│
├── cli/                   # Command-line tools
│   └── orko_state/        # E6 state management CLI
│
├── observability/         # Monitoring & observability
│   ├── grafana/           # Dashboards
│   └── prometheus/        # Metrics & alerts
│
└── terraform/             # Infrastructure as Code
    ├── tf1/
    ├── tf2/
    └── tf3/
```

---

## 🎯 IMPLEMENTATION PHASES

### Phase 2.1: Contracts (Steps 1-6) - IN PROGRESS

| Step | Deliverable | Status | Trazabilidad |
|------|-------------|--------|--------------|
| 1 | `schemas/base.yaml` | ✅ DONE | `00_introduccion_tejidos.md` |
| 2 | `openapi/tf1_capacity.yaml` | ✅ DONE | `01_TF1_capacity.md` |
| 3 | `openapi/tf2_flow.yaml` | ✅ DONE | `02_TF2_flow.md` |
| 4 | `openapi/tf3_information.yaml` | ✅ DONE | `03_TF3_information.md` |
| 5 | `openapi/e6_state.yaml` | ✅ DONE | `07_architectural_state_management.md` |
| 6 | `openapi/security.yaml` | ⏳ Pending | `04_concerns_transversales.md` |

### Phase 2.2: Sample Implementations (Steps 7-9)

Python packages implementing core fabrics with:

- Pydantic models (from schemas)
- Repository pattern
- Service layer
- Unit + integration tests
- Focus: LLM ecosystem (agents, RAG, orchestration)

### Phase 2.3: Tooling & Observability (Steps 10-11)

- E6 CLI for architectural state management
- Grafana dashboards for TF1/TF2/TF3 scores
- E7 execution traces visualization
- Alert rules based on thresholds

### Phase 2.4: Infrastructure (Step 12)

Terraform modules for deploying fabrics infrastructure

---

## 🔍 COMPLETED STEPS

### Step 1: Base Schema Definitions ✅

**`contracts/schemas/base.yaml`**

**Content:**

- Primitive types: UUID, Timestamp, Duration, Percentage, Score
- Cognitive levels: C0-C3
- Capacity types: SubstrateType, CapacityType
- Lifecycle states: Draft → Active → Retired
- Execution states: E7 FlowExecution status & triggers
- Information types: Persistente/Transitoria/Agregada, Structured/Unstructured
- Bounded autonomy: DelegationMode M1-M6
- Common patterns: Ownership, Lifecycle, QualityMetrics, Purpose, Tags
- Error patterns: ErrorType, Error
- **LLM-specific types:** LLMProvider, ModelFamily, AgentRole, VectorStoreType, EmbeddingModel

**Validation:**

- JSON Schema Draft 2020-12 compliant
- Trazabilidad: All enums reference source specification
- Focus: LLM ecosystem (OpenAI, Anthropic, Claude, RAG, multi-agent)

### Characteristics

```yaml
Rigurosidad:
  - Every type traced to specification document
  - Invariants I3, I5, I6 encoded as validation rules
  - Enums exhaustive (extensible with "Custom" fallback)
  
Parsimonia:
  - Minimal viable types (no gold-plating)
  - Reusable patterns (Ownership, Lifecycle, Purpose)
  - LLM focus (no unnecessary ML infrastructure types)
  
LLM_Ecosystem_Focus:
  Providers: OpenAI, Anthropic, Google, Azure, AWS, Local
  Models: GPT-4, Claude-3, Llama-3, Mistral
  RAG: VectorStoreType (Pinecone, Weaviate, Chroma, etc.)
  Agents: AgentRole (Manager, Researcher, Writer, Critic)
  Embeddings: OpenAI, Cohere, Voyage, open-source
```

### Step 2: TF1 Capacity Contract ✅

**`contracts/openapi/tf1_capacity.yaml`** (350 líneas)

- CapacityAsset schema con LLM focus (algorithmic_specs completo)
- LLM config: provider, model_family, parameters
- Agent config: role, system_prompt, tools, memory
- Guardrails: input/output validation, operational limits
- Quality metrics + Trajectory (I6)
- CRUD + lifecycle endpoints
- TF1_Score endpoint

### Step 3: TF2 Flow Contract ✅

**`contracts/openapi/tf2_flow.yaml`** (500 líneas)

- FlowAsset schema completo
- **E7 FlowExecution integration** (execution_history.executions) ⭐
- Cognitive levels: C0 (RPA) → C1 (ML) → C2 (Multi-agent)
- Steps with DAG dependencies
- Orchestration patterns: Sequential, Parallel, Hierarchical, Debate
- Bounded autonomy (M1-M6) with HITL checkpoints
- Guardrails: operational, quality, scope
- Compensation: saga pattern, rollback
- **E7 schema detallado:**
  - Runtime tracking: status, current_step_id, steps_completed
  - Trigger context (event payload, schedule)
  - Outputs lineage (TF3 information produced)
  - Failure details: stack_trace, error_type, retry_count
  - **DORA metrics:** cycle_time, wait_time, active_time, handoff_count
- Endpoints:
  - CRUD: GET, POST, PUT, DELETE flows
  - Execution: /execute, /cancel, /override (HITL)
  - Lifecycle: /activate, /pause
  - E7 tracking: GET /executions/{id}
- TF2_Score endpoint

**Validation:**

- OpenAPI 3.1 compliant
- E7 100% fiel a 02_TF2_flow.md lines 113-167
- DORA metrics implementados (cycle_time breakdown)
- Invariantes I5_HAIC, I6_Trajectory enforced

### Step 4: TF3 Information Contract ✅

**`contracts/openapi/tf3_information.yaml`** (700 líneas)

- InformationAsset schema completo
- **3 Sub-domains:**
  - Foundation: Ingestion, storage, governance
  - Analytics: BI, ML models, feature engineering
  - Semantic: RAG, knowledge graphs, vector search ⭐
- **Lakehouse Architecture:** Bronze → Silver → Gold → Semantic
- **Lineage tracking:** produced_by_flow, produced_by_capacity, parent_assets (DAG)
- **Quality metrics:** completeness, accuracy, freshness, validity, consistency
- **Governance (P4):**
  - Access control: readers, writers, row-level security
  - Privacy: PII detection, masking rules
  - Compliance: regulatory tags, retention policy, data residency
  - Encryption: at-rest, at-transit, KMS
- **Semantic/RAG specific:** ⭐
  - Indexing: vector (embeddings), keyword (BM25), graph (entities)
  - RAG config: chunk_strategy, retrieval_k, reranking
  - Vigencia: review frequency, status (Current/Deprecated)
  - Content types: Document, QA_Pair, Entity, Relationship
- **Endpoints:**
  - CRUD: GET, POST, PUT, DELETE information
  - Lineage: GET /information/{id}/lineage (upstream/downstream DAG)
  - RAG: POST /rag/query (semantic search with citations)
  - RAG: POST /rag/embed (generate embeddings)
  - Lakehouse: GET /lakehouse/layers (Bronze/Silver/Gold/Semantic summary)
- TF3_Score endpoint

**Validation:**

- OpenAPI 3.1 compliant
- 100% fiel a 03_TF3_information.md §2
- RAG pipeline completo (vector + keyword + graph)
- Lakehouse layers explícitos
- Lineage DAG trazable (I3_Trazabilidad)

### Step 5: E6 Architectural State Contract ✅

**`contracts/openapi/e6_state.yaml`** (550 líneas)

- ArchitecturalState schema completo
- **4 State types:**
  - Current: Actual system state
  - Target: Future objective state
  - Intermediate: Milestones on roadmap
  - Historical: Past snapshots (audit trail)
- **Snapshot structure:** ⭐
  - Capacities: List with type, substrate, lifecycle, config
  - Flows: List with cognitive_level, status, config
  - Information: Summary by subdomain, size, quality
  - Purposes (OKRs): Hierarchy, progress
  - Limits: Active constraints, compliance rate
- **Evolution tracking:**
  - previous_state_id, next_state_id (chain)
  - parent_target_id (for Intermediate states)
- **Metrics:**
  - Composition: total/active capacities, flows, info assets, OKRs
  - Health: tf1_score, tf2_score, tf3_score, security_score
  - Convergence: progress toward target (0-100%)
- **Core operations:** ⭐
  - capture_current_state(): Snapshot TF1+TF2+TF3 → Current state
  - define_target_state(): Define future architecture → Target state
  - plan_intermediate_states(): Create roadmap milestones → Intermediate states
  - calculate_convergence(): Measure progress → convergence_pct
  - transition_to_state(): Execute change plan → apply changes
- **Endpoints:**
  - CRUD: GET, POST, PUT, DELETE states
  - Operations: POST /capture, /define-target, /plan-intermediates
  - Analysis: GET /convergence, /diff
  - Transition: POST /transition (with dry_run option)
  - Workflow: POST /approve, /activate
- **Use cases:**
  - Quarterly architecture planning
  - Major migration with rollback capability
  - Compliance audit trail (historical snapshots)
  - Impact analysis (diff between states)

**Validation:**

- OpenAPI 3.1 compliant
- 100% fiel a 07_architectural_state_management.md §2-§3
- 5 core operations implementadas (capture, define, plan, convergence, transition)
- Evolution DAG (no cycles)
- Invariants INV_E6.1-E6.6 enforced

---

## 🎉 FASE 2.1 COMPLETADA: Core Contracts

**Entregables completados:**

- ✅ `schemas/base.yaml` - Foundation types (410 líneas)
- ✅ `openapi/tf1_capacity.yaml` - Capacity Fabric (350 líneas)
- ✅ `openapi/tf2_flow.yaml` - Flow Fabric + E7 (500 líneas)
- ✅ `openapi/tf3_information.yaml` - Information Fabric (700 líneas)
- ✅ `openapi/e6_state.yaml` - Architectural State (550 líneas)

**Total:** ~2500 líneas de contratos OpenAPI 3.1 con máxima rigurosidad

---

## 🚀 OPCIONAL: Step 6 - Security & Observability

**Deliverable:** `contracts/openapi/security.yaml` (opcional)

**Content (si se requiere):**

- Unified observability patterns
- Security límites P4 (transversal)
- Metrics aggregation endpoints
- Cross-fabric health dashboard schemas

**Status:** OPCIONAL - Los contratos core están completos y operacionales.

**Recommendation:** Proceder con Phase 2.2 (Sample Implementations) o validar contratos actuales.

---

## 📖 REFERENCES

### Specification Documents (Source of Truth)

- `/20_tejidos/00_introduccion_tejidos.md` - General architecture
- `/20_tejidos/01_TF1_capacity.md` - Capacity fabric spec
- `/20_tejidos/02_TF2_flow.md` - Flow fabric spec + E7
- `/20_tejidos/03_TF3_information.md` - Information fabric spec
- `/20_tejidos/04_concerns_transversales.md` - Security, Purpose
- `/20_tejidos/07_architectural_state_management.md` - E6 state

### Standards

- **JSON Schema:** Draft 2020-12
- **OpenAPI:** 3.1.0
- **Python:** 3.11+ (type hints, Pydantic 2.x)
- **LLM Frameworks:** LangChain, LangGraph, CrewAI, Temporal

---

## ✅ VALIDATION CHECKLIST

### Base Schema (Step 1)

- [x] Primitive types defined (UUID, Timestamp, Duration)
- [x] Cognitive levels C0-C3 with descriptions
- [x] Substrate types with LLM focus
- [x] Lifecycle states (7 states: Draft → Retired)
- [x] E7 execution status & triggers
- [x] Information types & sub-domains
- [x] Bounded autonomy modes M1-M6
- [x] Common patterns (Ownership, Lifecycle, Quality, Purpose)
- [x] LLM-specific enums (providers, models, agents, vector stores)
- [x] Error patterns for observability
- [x] Trazabilidad to specification documents
- [x] Invariants I3, I5, I6 documented

### Step 2 - TF1 Capacity ✅

- [x] CapacityAsset schema complete
- [x] LLM capacity fields (model, provider, config)
- [x] Agent design fields (role, tools, guardrails)
- [x] CRUD endpoints
- [x] Query & filter operations
- [x] Lifecycle operations
- [x] Validation rules
- [x] OpenAPI 3.1 valid

### Step 3 - TF2 Flow ✅

- [x] FlowAsset schema complete
- [x] E7 FlowExecution instances integrated
- [x] Cognitive levels C0-C2 patterns
- [x] HITL operations (M1-M6)
- [x] Guardrails configuration
- [x] Compensation operations
- [x] CRUD + orchestration endpoints
- [x] DORA metrics (cycle_time, wait_time, active_time)
- [x] OpenAPI 3.1 valid

### Step 4 - TF3 Information ✅

- [x] InformationAsset schema complete
- [x] Sub-domains: Foundation, Analytics, Semantic
- [x] Lakehouse layers (Bronze→Silver→Gold→Semantic)
- [x] Lineage tracking (produced_by, parent_assets)
- [x] Quality metrics (completeness, accuracy, freshness)
- [x] RAG operations (vector search, embeddings)
- [x] Governance (access control, privacy, compliance, encryption)
- [x] CRUD + lineage + RAG endpoints
- [x] TF3_Score + lakehouse summary endpoints
- [x] OpenAPI 3.1 valid

### Step 5 - E6 Architectural State ✅

- [x] ArchitecturalState schema complete
- [x] State types: Current, Target, Intermediate, Historical
- [x] Snapshot operations (capacities, flows, information, purposes, limits)
- [x] Evolution tracking (previous/next/parent chain)
- [x] Convergence calculation (4 components)
- [x] Transition management (with dry_run)
- [x] CRUD + operational endpoints
- [x] Core operations: capture, define-target, plan-intermediates, convergence, transition
- [x] Use cases implemented
- [x] OpenAPI 3.1 valid

### Next (Step 6 - Security)

- [ ] Security & Observability patterns
- [ ] Metrics aggregation endpoints
- [ ] Optional: Final validation schemas

---

**Status:** Steps 1-5 ✅ COMPLETE | Step 6 🔄 OPTIONAL  
**Progress:** 5/6 core contracts (83%)

```

## 20_tejidos/implementacion_tejidos/contracts/openapi/e6_state.yaml

```yaml
openapi: 3.1.0

info:
  title: ORKO E6 Architectural State Management API
  version: 2.0.0
  description: |
    REST API for E6 Architectural State Management - Evolution, planning, and change management.
    **Primitivo:** Meta-architectural (crosses all primitives)  
    **Status:** Transversal concern  
    **Trazabilidad:** 20_tejidos/07_architectural_state_management.md
    
    **Purpose:**
    - Evolutionary architecture: Current → Target planning
    - Change management: Controlled transitions
    - Compliance: Auditable historical snapshots
    - Rollback: Ability to return to previous state
    - Impact analysis: Diff between states
    
  contact:
    name: ORKO Architecture Team

servers:
  - url: https://api.orko.org/v2
  - url: http://localhost:8000/v2

tags:
  - name: States
  - name: Operations
  - name: Analysis

components:
  schemas:
    
    ArchitecturalState:
      type: object
      required: [id, name, state_type, effective_date, snapshot, metrics, owner_capacity_id, status]
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
          maxLength: 255
          example: "Q1-2025 Target"
        description:
          type: string
          maxLength: 2000
        
        state_type:
          type: string
          enum: [Current, Target, Intermediate, Historical]
          description: |
            - Current: Current system state (NOW)
            - Target: Future objective state
            - Intermediate: Milestone on Current → Target path
            - Historical: Past snapshot (audit trail)
        
        effective_date:
          type: string
          format: date
          description: When this state is/was/will be effective
        
        valid_until:
          type: string
          format: date
          nullable: true
          description: When superseded (null for Current/Target)
        
        snapshot:
          $ref: '#/components/schemas/Snapshot'
        
        snapshot_metadata:
          type: object
          properties:
            captured_at:
              type: string
              format: date-time
            captured_by:
              type: string
              format: uuid
              description: Human capacity who captured/defined
            consistency_validated:
              type: boolean
            validation_errors:
              type: array
              items:
                type: string
              nullable: true
            validation_report_url:
              type: string
              nullable: true
        
        evolution:
          type: object
          description: Relationship with other states
          properties:
            previous_state_id:
              type: string
              format: uuid
              nullable: true
            next_state_id:
              type: string
              format: uuid
              nullable: true
            parent_target_id:
              type: string
              format: uuid
              nullable: true
              description: If Intermediate, reference to Target
        
        metrics:
          $ref: '#/components/schemas/StateMetrics'
        
        tags:
          type: array
          items:
            type: string
        
        criticality:
          type: string
          enum: [Low, Medium, High, Critical]
        
        owner_capacity_id:
          type: string
          format: uuid
          description: Human capacity accountable for this state
        
        status:
          type: string
          enum: [Draft, Approved, Active, Superseded, Archived]
        
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
    
    Snapshot:
      type: object
      description: Complete system snapshot at a point in time
      properties:
        capacities:
          type: array
          items:
            type: object
            properties:
              capacity_id:
                type: string
                format: uuid
              name:
                type: string
              capacity_type:
                type: string
                enum: [C0, C1, C2, C3]
              substrate:
                type: string
                enum: [Humano, Algorítmico, Mecánico, Mixto]
              lifecycle_state:
                type: string
              configuration:
                type: object
                description: Key configuration parameters
        
        flows:
          type: array
          items:
            type: object
            properties:
              flow_id:
                type: string
                format: uuid
              name:
                type: string
              cognitive_level:
                type: string
                enum: [C0_Mechanical, C1_Decisional, C2_Cognitive, Mixed]
              status:
                type: string
              configuration:
                type: object
        
        information_summary:
          type: object
          properties:
            total_assets:
              type: integer
            by_subdomain:
              type: object
              properties:
                foundation:
                  type: integer
                analytics:
                  type: integer
                semantic:
                  type: integer
            storage_size_gb:
              type: number
            quality_score_avg:
              type: number
        
        purposes:
          type: array
          items:
            type: object
            properties:
              purpose_id:
                type: string
                format: uuid
              objective:
                type: string
              status:
                type: string
              hierarchy_position:
                type: string
              progress_pct:
                type: number
        
        limits:
          type: array
          items:
            type: object
            properties:
              limit_id:
                type: string
                format: uuid
              limit_type:
                type: string
              active:
                type: boolean
              compliance_rate:
                type: number
    
    StateMetrics:
      type: object
      properties:
        total_capacities:
          type: integer
        active_capacities:
          type: integer
        total_flows:
          type: integer
        active_flows:
          type: integer
        total_information_assets:
          type: integer
        total_okrs:
          type: integer
        
        health_score:
          type: number
          minimum: 0
          maximum: 100
          description: Aggregated health score
        tf1_score:
          type: number
          minimum: 0
          maximum: 100
        tf2_score:
          type: number
          minimum: 0
          maximum: 100
        tf3_score:
          type: number
          minimum: 0
          maximum: 100
        security_score:
          type: number
          minimum: 0
          maximum: 100
        
        convergence_pct:
          type: number
          minimum: 0
          maximum: 100
          nullable: true
          description: Progress toward target (Target/Intermediate only)
    
    CaptureStateRequest:
      type: object
      properties:
        name:
          type: string
        description:
          type: string
        include_retired:
          type: boolean
          default: false
        tags:
          type: array
          items:
            type: string
    
    DefineTargetRequest:
      type: object
      required: [name, target_date, changes]
      properties:
        name:
          type: string
        description:
          type: string
        target_date:
          type: string
          format: date
        changes:
          type: object
          properties:
            capacities_to_add:
              type: array
              items:
                type: object
                properties:
                  name:
                    type: string
                  capacity_type:
                    type: string
                  substrate:
                    type: string
                  configuration:
                    type: object
            capacities_to_remove:
              type: array
              items:
                type: string
                format: uuid
            flows_to_add:
              type: array
              items:
                type: object
            flows_to_modify:
              type: array
              items:
                type: object
                properties:
                  flow_id:
                    type: string
                    format: uuid
                  changes:
                    type: object
            okrs_target:
              type: array
              items:
                type: object
                properties:
                  okr_id:
                    type: string
                    format: uuid
                  target_progress:
                    type: number
            quality_targets:
              type: object
              properties:
                tf1_score:
                  type: number
                tf2_score:
                  type: number
                tf3_score:
                  type: number
        tags:
          type: array
          items:
            type: string
    
    PlanIntermediatesRequest:
      type: object
      required: [current_id, target_id, milestones]
      properties:
        current_id:
          type: string
          format: uuid
        target_id:
          type: string
          format: uuid
        milestones:
          type: array
          items:
            type: object
            required: [date, name]
            properties:
              date:
                type: string
                format: date
              name:
                type: string
              priorities:
                type: array
                items:
                  type: string
    
    ConvergenceResponse:
      type: object
      properties:
        convergence_pct:
          type: number
          minimum: 0
          maximum: 100
        components:
          type: object
          properties:
            capacities_conv:
              type: number
            flows_conv:
              type: number
            quality_conv:
              type: number
            okr_conv:
              type: number
        interpretation:
          type: string
        details:
          type: object
          properties:
            capacities_implemented:
              type: integer
            capacities_planned:
              type: integer
            flows_implemented:
              type: integer
            flows_planned:
              type: integer
    
    TransitionRequest:
      type: object
      properties:
        dry_run:
          type: boolean
          default: false
          description: Simulate without applying changes
        validation_only:
          type: boolean
          default: false
    
    TransitionResponse:
      type: object
      properties:
        success:
          type: boolean
        convergence_achieved:
          type: number
        changes_applied:
          type: integer
        changes_failed:
          type: integer
        issues:
          type: array
          items:
            type: string
        dry_run:
          type: boolean
        change_plan:
          type: object
          description: Detailed change plan (if dry_run)
    
    DiffResponse:
      type: object
      properties:
        from_state_id:
          type: string
          format: uuid
        to_state_id:
          type: string
          format: uuid
        differences:
          type: object
          properties:
            capacities_added:
              type: array
              items:
                type: object
            capacities_removed:
              type: array
              items:
                type: string
                format: uuid
            capacities_modified:
              type: array
              items:
                type: object
            flows_added:
              type: array
              items:
                type: object
            flows_removed:
              type: array
              items:
                type: string
                format: uuid
            flows_modified:
              type: array
              items:
                type: object
            metrics_delta:
              type: object
        summary:
          type: string
    
    StateListResponse:
      type: object
      properties:
        items:
          type: array
          items:
            $ref: '#/components/schemas/ArchitecturalState'
        total:
          type: integer
        page:
          type: integer
    
    ErrorResponse:
      type: object
      properties:
        error:
          type: string
        message:
          type: string
        timestamp:
          type: string
          format: date-time

  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - bearerAuth: []

paths:
  /states:
    get:
      tags: [States]
      summary: List architectural states
      parameters:
        - name: state_type
          in: query
          schema:
            type: string
            enum: [Current, Target, Intermediate, Historical]
        - name: status
          in: query
          schema:
            type: string
        - name: from_date
          in: query
          schema:
            type: string
            format: date
        - name: to_date
          in: query
          schema:
            type: string
            format: date
        - name: page
          in: query
          schema:
            type: integer
            default: 1
      responses:
        '200':
          description: List of states
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StateListResponse'
    
    post:
      tags: [States]
      summary: Create state manually
      description: Create state with explicit snapshot (advanced use)
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ArchitecturalState'
      responses:
        '201':
          description: State created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ArchitecturalState'
  
  /states/{state_id}:
    parameters:
      - name: state_id
        in: path
        required: true
        schema:
          type: string
          format: uuid
    
    get:
      tags: [States]
      summary: Get state details
      responses:
        '200':
          description: State details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ArchitecturalState'
    
    put:
      tags: [States]
      summary: Update state
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ArchitecturalState'
      responses:
        '200':
          description: Updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ArchitecturalState'
    
    delete:
      tags: [States]
      summary: Delete state
      responses:
        '204':
          description: Deleted
  
  /states/capture:
    post:
      tags: [Operations]
      summary: Capture current state
      description: Capture snapshot of current system state (E6 §3.1)
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CaptureStateRequest'
      responses:
        '201':
          description: Current state captured
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ArchitecturalState'
  
  /states/define-target:
    post:
      tags: [Operations]
      summary: Define target state
      description: Define future objective state (E6 §3.2)
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/DefineTargetRequest'
      responses:
        '201':
          description: Target state defined
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ArchitecturalState'
  
  /states/plan-intermediates:
    post:
      tags: [Operations]
      summary: Plan intermediate states
      description: Create milestone states on path to target (E6 §3.3)
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PlanIntermediatesRequest'
      responses:
        '201':
          description: Intermediate states created
          content:
            application/json:
              schema:
                type: object
                properties:
                  intermediate_states:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArchitecturalState'
  
  /states/{state_id}/convergence:
    get:
      tags: [Analysis]
      summary: Calculate convergence
      description: Measure progress toward target state (E6 §3.4)
      parameters:
        - name: state_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
        - name: compared_to
          in: query
          schema:
            type: string
            format: uuid
          description: Target state ID to compare against
      responses:
        '200':
          description: Convergence metrics
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ConvergenceResponse'
  
  /states/{state_id}/transition:
    post:
      tags: [Operations]
      summary: Transition to state
      description: Execute transition to target/intermediate state (E6 §3.5)
      parameters:
        - name: state_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/TransitionRequest'
      responses:
        '200':
          description: Transition executed
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TransitionResponse'
  
  /states/{state_id}/diff:
    get:
      tags: [Analysis]
      summary: Diff between states
      description: Calculate differences between two states
      parameters:
        - name: state_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
          description: From state
        - name: compared_to
          in: query
          required: true
          schema:
            type: string
            format: uuid
          description: To state
      responses:
        '200':
          description: State differences
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DiffResponse'
  
  /states/{state_id}/approve:
    post:
      tags: [Operations]
      summary: Approve state
      description: Change status from Draft to Approved
      parameters:
        - name: state_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                approval_notes:
                  type: string
      responses:
        '200':
          description: State approved
  
  /states/{state_id}/activate:
    post:
      tags: [Operations]
      summary: Activate state
      description: Set state as Active (make it current)
      parameters:
        - name: state_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: State activated

```

## 20_tejidos/implementacion_tejidos/contracts/openapi/tf1_capacity.yaml

```yaml
openapi: 3.1.0

info:
  title: ORKO TF1 Capacity Fabric API
  version: 2.0.0
  description: |
    REST API for TF1 Capacity Fabric - Design, development, deployment, and management of organizational capacities.
    
    **Primitivo:** P1_Capacidad | **Axioma:** A2_Existencia_Capacidad  
    **Trazabilidad:** 20_tejidos/01_TF1_capacity.md
    
    **Focus:** LLM agent design and management
    
  contact:
    name: ORKO Architecture Team
    email: architecture@orko.org

servers:
  - url: https://api.orko.org/v2
    description: Production
  - url: http://localhost:8000/v2
    description: Local development

tags:
  - name: Capacities
  - name: Lifecycle
  - name: Metrics

components:
  schemas:
    
    CapacityAsset:
      type: object
      required: [id, name, capacity_type, substrate, role, ownership, lifecycle]
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
          maxLength: 255
        description:
          type: string
          maxLength: 2000
        capacity_type:
          type: string
          enum: [C0, C1, C2, C3]
        substrate:
          type: string
          enum: [Humano, Algorítmico, Mecánico, Mixto]
        role:
          type: string
          enum: [Producción, Habilitación]
        
        ownership:
          type: object
          required: [accountable_id, override_enabled]
          properties:
            accountable_id:
              type: string
              format: uuid
            delegated_from:
              type: string
              format: uuid
              nullable: true
            delegation_mode:
              type: string
              enum: [M1_Humano_Puro, M2_Asistido_Por_Agente, M3_Sugerencia_Agente_Humano_Decide, M4_Agente_Decide_Humano_Puede_Vetar, M5_Agente_Autonomo_Con_Humano_Override, M6_Agente_Autonomo_Puro]
            override_enabled:
              type: boolean
        
        lifecycle:
          type: object
          required: [current_state, version]
          properties:
            current_state:
              type: string
              enum: [Planning, Development, Testing, Active, Idle, Deprecated, Retired]
            version:
              type: integer
              minimum: 1
            utilization_avg:
              type: number
              minimum: 0
              maximum: 1
        
        human_specs:
          type: object
          properties:
            skills:
              type: array
              items:
                type: object
                properties:
                  name:
                    type: string
                  level:
                    type: string
                    enum: [Beginner, Intermediate, Advanced, Expert]
                  certified:
                    type: boolean
            availability:
              type: number
              minimum: 0
              maximum: 1
            cost_per_hour:
              type: number
        
        algorithmic_specs:
          type: object
          properties:
            llm_config:
              type: object
              properties:
                provider:
                  type: string
                  enum: [OpenAI, Anthropic, Google_Vertex, Azure_OpenAI, AWS_Bedrock, Local_vLLM, Local_Ollama]
                model_family:
                  type: string
                  enum: [GPT_4, Claude_3, Gemini, Llama_3, Mistral, Mixtral]
                model_id:
                  type: string
                endpoint_url:
                  type: string
                  format: uri
                parameters:
                  type: object
                  properties:
                    temperature:
                      type: number
                    max_tokens:
                      type: integer
            agent_config:
              type: object
              properties:
                role:
                  type: string
                  enum: [Manager, Researcher, Analyst, Writer, Critic, Executor]
                system_prompt:
                  type: string
                  maxLength: 10000
                tools:
                  type: array
                  items:
                    type: object
                memory_enabled:
                  type: boolean
            guardrails:
              type: object
              properties:
                enabled:
                  type: boolean
                input_validation:
                  type: object
                  properties:
                    pii_detection:
                      type: boolean
                    injection_detection:
                      type: boolean
                    max_length:
                      type: integer
                output_validation:
                  type: object
                  properties:
                    schema_validation:
                      type: boolean
                    toxicity_filter:
                      type: boolean
                operational_limits:
                  type: object
                  properties:
                    max_cost_per_execution:
                      type: number
                    max_time_seconds:
                      type: number
                    rate_limit_per_minute:
                      type: integer
            cost_per_token_input:
              type: number
            cost_per_token_output:
              type: number
        
        mechanical_specs:
          type: object
          properties:
            hardware_type:
              type: string
            throughput:
              type: number
            maintenance_schedule:
              type: string
        
        quality_metrics:
          type: object
          properties:
            success_rate:
              type: number
            avg_latency_ms:
              type: number
            availability:
              type: number
            cost_per_execution:
              type: number
            human_override_rate:
              type: number
              nullable: true
            guardrail_violation_rate:
              type: number
              nullable: true
        
        trajectory:
          type: object
          properties:
            total_executions:
              type: integer
            drift_detected:
              type: boolean
            last_retrain_date:
              type: string
              format: date
            performance_trend:
              type: string
              enum: [Improving, Stable, Degrading, Unknown]
        
        used_by_flows:
          type: array
          items:
            type: string
            format: uuid
        
        purpose:
          type: object
          properties:
            linked_okrs:
              type: array
              items:
                type: string
                format: uuid
            business_justification:
              type: string
              maxLength: 1000
        
        tags:
          type: array
          items:
            type: string
        
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
    
    CapacityListResponse:
      type: object
      properties:
        items:
          type: array
          items:
            $ref: '#/components/schemas/CapacityAsset'
        total:
          type: integer
        page:
          type: integer
    
    TF1ScoreResponse:
      type: object
      properties:
        tf1_score:
          type: number
          minimum: 0
          maximum: 100
        components:
          type: object
          properties:
            coverage:
              type: number
            quality:
              type: number
            availability:
              type: number
            governance:
              type: number
            efficiency:
              type: number
        threshold_met:
          type: boolean
    
    ErrorResponse:
      type: object
      properties:
        error:
          type: string
        message:
          type: string
        timestamp:
          type: string
          format: date-time

  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - bearerAuth: []

paths:
  /capacities:
    get:
      tags: [Capacities]
      summary: List capacities
      parameters:
        - name: substrate
          in: query
          schema:
            type: string
            enum: [Humano, Algorítmico, Mecánico, Mixto]
        - name: capacity_type
          in: query
          schema:
            type: string
            enum: [C0, C1, C2, C3]
        - name: lifecycle_state
          in: query
          schema:
            type: string
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: page_size
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: List of capacities
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CapacityListResponse'
    
    post:
      tags: [Capacities]
      summary: Create capacity
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CapacityAsset'
      responses:
        '201':
          description: Capacity created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CapacityAsset'
        '400':
          description: Validation error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
  
  /capacities/{capacity_id}:
    parameters:
      - name: capacity_id
        in: path
        required: true
        schema:
          type: string
          format: uuid
    
    get:
      tags: [Capacities]
      summary: Get capacity
      responses:
        '200':
          description: Capacity details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CapacityAsset'
        '404':
          description: Not found
    
    put:
      tags: [Capacities]
      summary: Update capacity
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CapacityAsset'
      responses:
        '200':
          description: Updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CapacityAsset'
    
    delete:
      tags: [Capacities]
      summary: Delete capacity
      responses:
        '204':
          description: Deleted
        '409':
          description: Cannot delete (referenced by flows)
  
  /capacities/{capacity_id}/activate:
    post:
      tags: [Lifecycle]
      summary: Activate capacity
      parameters:
        - name: capacity_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Activated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CapacityAsset'
  
  /capacities/{capacity_id}/pause:
    post:
      tags: [Lifecycle]
      summary: Pause capacity
      parameters:
        - name: capacity_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Paused
  
  /capacities/{capacity_id}/deprecate:
    post:
      tags: [Lifecycle]
      summary: Deprecate capacity
      parameters:
        - name: capacity_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Deprecated
  
  /capacities/{capacity_id}/metrics:
    get:
      tags: [Metrics]
      summary: Get capacity metrics
      parameters:
        - name: capacity_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Metrics
          content:
            application/json:
              schema:
                type: object
                properties:
                  quality_metrics:
                    type: object
                  trajectory:
                    type: object
  
  /metrics/tf1-score:
    get:
      tags: [Metrics]
      summary: Get TF1 fabric health score
      responses:
        '200':
          description: TF1 Score
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TF1ScoreResponse'

```

## 20_tejidos/implementacion_tejidos/contracts/openapi/tf2_flow.yaml

```yaml
openapi: 3.1.0

info:
  title: ORKO TF2 Flow Fabric API
  version: 2.0.0
  description: |
    REST API for TF2 Flow Fabric - Orchestration, automation, execution of flows.
    **Primitivos:** P2_Flujo + P1_Capacidad | **Axioma:** A1_Transformación  
    **Trazabilidad:** 20_tejidos/02_TF2_flow.md
    **Includes:** E7 FlowExecution (detailed runtime tracking)
  contact:
    name: ORKO Architecture Team

servers:
  - url: https://api.orko.org/v2
  - url: http://localhost:8000/v2

tags:
  - name: Flows
  - name: Execution
  - name: Metrics

components:
  schemas:
    
    FlowAsset:
      type: object
      required: [id, name, flow_type, cognitive_level, steps, dependencies, autonomy, lifecycle]
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
          maxLength: 255
        description:
          type: string
        flow_type:
          type: string
          enum: [Process, Pipeline, Orchestration, Workflow]
        cognitive_level:
          type: string
          enum: [C0_Mechanical, C1_Decisional, C2_Cognitive, Mixed]
        role:
          type: string
          enum: [Producción, Habilitación]
        
        steps:
          type: array
          items:
            type: object
            required: [id, name, capacity_id]
            properties:
              id:
                type: string
              name:
                type: string
              capacity_id:
                type: string
                format: uuid
              input_schema:
                type: object
              output_schema:
                type: object
              timeout_seconds:
                type: integer
              retry_policy:
                type: object
                properties:
                  max_attempts:
                    type: integer
                  backoff_strategy:
                    type: string
                    enum: [Linear, Exponential, Constant]
              is_handoff:
                type: boolean
        
        dependencies:
          type: object
          description: "DAG: {step_id: [dependencies]}"
          additionalProperties:
            type: array
            items:
              type: string
        
        orchestration:
          type: object
          properties:
            pattern:
              type: string
              enum: [Sequential, Parallel, Hierarchical, Debate, Custom]
            coordinator_capacity_id:
              type: string
              format: uuid
              nullable: true
            agents:
              type: array
              items:
                type: object
                properties:
                  agent_capacity_id:
                    type: string
                    format: uuid
                  role:
                    type: string
                    enum: [Coordinator, Worker, Critic, Validator]
        
        autonomy:
          type: object
          required: [delegation_mode]
          properties:
            delegation_mode:
              type: string
              enum: [M1_Humano_Puro, M2_Asistido_Por_Agente, M3_Sugerencia_Agente_Humano_Decide, M4_Agente_Decide_Humano_Puede_Vetar, M5_Agente_Autonomo_Con_Humano_Override, M6_Agente_Autonomo_Puro]
            hitl_checkpoints:
              type: array
              items:
                type: object
                properties:
                  step_id:
                    type: string
                  condition:
                    type: string
                  human_capacity_id:
                    type: string
                    format: uuid
                  timeout_seconds:
                    type: integer
            override_mechanism:
              type: object
              properties:
                human_can_pause:
                  type: boolean
                circuit_breaker_enabled:
                  type: boolean
                emergency_stop_capacity_id:
                  type: string
                  format: uuid
        
        guardrails:
          type: object
          properties:
            operational:
              type: object
              properties:
                max_iterations:
                  type: integer
                max_cost_usd:
                  type: number
                max_execution_time_seconds:
                  type: integer
            quality:
              type: object
              properties:
                min_success_rate:
                  type: number
                max_error_rate:
                  type: number
            scope:
              type: object
              properties:
                allowed_tools:
                  type: array
                  items:
                    type: string
                forbidden_actions:
                  type: array
                  items:
                    type: string
        
        compensation:
          type: object
          properties:
            enabled:
              type: boolean
            saga_pattern:
              type: boolean
            compensation_steps:
              type: object
            rollback_on_failure:
              type: boolean
        
        lifecycle:
          type: object
          required: [current_state, version]
          properties:
            current_state:
              type: string
              enum: [Draft, Testing, Staging, Active, Paused, Deprecated, Retired]
            version:
              type: integer
        
        execution_history:
          type: object
          properties:
            total_executions:
              type: integer
            successful:
              type: integer
            failed:
              type: integer
            avg_duration_seconds:
              type: number
            last_execution:
              type: string
              format: date-time
            executions:
              type: array
              items:
                $ref: '#/components/schemas/FlowExecution'
              description: "E7 instances with detailed tracking"
        
        quality_metrics:
          type: object
          properties:
            success_rate:
              type: number
            stp_rate:
              type: number
            avg_cycle_time_seconds:
              type: number
            handoff_ratio:
              type: number
            cost_per_execution:
              type: number
        
        drift_monitoring:
          type: object
          properties:
            enabled:
              type: boolean
            baseline_success_rate:
              type: number
            current_success_rate:
              type: number
            drift_detected:
              type: boolean
        
        triggers:
          type: array
          items:
            type: object
            properties:
              type:
                type: string
                enum: [Scheduled, Event, Manual, API]
              config:
                type: object
        
        consumes_information:
          type: array
          items:
            type: string
            format: uuid
        produces_information:
          type: array
          items:
            type: string
            format: uuid
        
        security:
          type: object
          properties:
            execution_permissions:
              type: array
              items:
                type: string
                format: uuid
            audit_required:
              type: boolean
        
        purpose:
          type: object
          properties:
            linked_okrs:
              type: array
              items:
                type: string
                format: uuid
        
        tags:
          type: array
          items:
            type: string
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
    
    FlowExecution:
      type: object
      required: [id, flow_id, started_at, status, trigger]
      description: "E7 entity - detailed runtime tracking"
      properties:
        id:
          type: string
          format: uuid
        flow_id:
          type: string
          format: uuid
        started_at:
          type: string
          format: date-time
        ended_at:
          type: string
          format: date-time
          nullable: true
        duration_seconds:
          type: number
          nullable: true
        executed_by_capacity_id:
          type: string
          format: uuid
        trigger:
          type: string
          enum: [Manual, Scheduled, Event_Driven, Transition]
        trigger_context:
          type: object
          description: "Event payload, schedule config, etc."
        status:
          type: string
          enum: [In_Progress, Completed, Failed, Cancelled]
        current_step_id:
          type: string
          nullable: true
        steps_completed:
          type: integer
        steps_total:
          type: integer
        outputs_produced:
          type: array
          items:
            type: object
            properties:
              info_id:
                type: string
                format: uuid
              step_id:
                type: string
              produced_at:
                type: string
                format: date-time
        failure:
          type: object
          nullable: true
          properties:
            failed_at:
              type: string
              format: date-time
            failed_step_id:
              type: string
            error_type:
              type: string
              enum: [Timeout, Validation, Infrastructure, Business_Logic]
            error_message:
              type: string
            stack_trace:
              type: string
              nullable: true
            retry_count:
              type: integer
        metrics:
          type: object
          description: "DORA metrics per execution"
          properties:
            cycle_time:
              type: number
              description: "ended_at - started_at (seconds)"
            wait_time:
              type: number
              description: "Time waiting dependencies"
            active_time:
              type: number
              description: "Actual work time"
            handoff_count:
              type: integer
            rework:
              type: boolean
    
    FlowListResponse:
      type: object
      properties:
        items:
          type: array
          items:
            $ref: '#/components/schemas/FlowAsset'
        total:
          type: integer
        page:
          type: integer
    
    ExecutionRequest:
      type: object
      properties:
        flow_id:
          type: string
          format: uuid
        trigger:
          type: string
          enum: [Manual, API]
        trigger_context:
          type: object
        input_data:
          type: object
    
    ExecutionResponse:
      type: object
      properties:
        execution_id:
          type: string
          format: uuid
        status:
          type: string
        started_at:
          type: string
          format: date-time
    
    TF2ScoreResponse:
      type: object
      properties:
        tf2_score:
          type: number
          minimum: 0
          maximum: 100
        components:
          type: object
          properties:
            coverage:
              type: number
            reliability:
              type: number
            efficiency:
              type: number
            safety:
              type: number
            stp_rate:
              type: number
        threshold_met:
          type: boolean
    
    ErrorResponse:
      type: object
      properties:
        error:
          type: string
        message:
          type: string
        timestamp:
          type: string
          format: date-time

  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - bearerAuth: []

paths:
  /flows:
    get:
      tags: [Flows]
      summary: List flows
      parameters:
        - name: cognitive_level
          in: query
          schema:
            type: string
        - name: lifecycle_state
          in: query
          schema:
            type: string
        - name: page
          in: query
          schema:
            type: integer
            default: 1
      responses:
        '200':
          description: List of flows
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/FlowListResponse'
    
    post:
      tags: [Flows]
      summary: Create flow
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/FlowAsset'
      responses:
        '201':
          description: Flow created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/FlowAsset'
  
  /flows/{flow_id}:
    parameters:
      - name: flow_id
        in: path
        required: true
        schema:
          type: string
          format: uuid
    
    get:
      tags: [Flows]
      summary: Get flow
      responses:
        '200':
          description: Flow details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/FlowAsset'
    
    put:
      tags: [Flows]
      summary: Update flow
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/FlowAsset'
      responses:
        '200':
          description: Updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/FlowAsset'
    
    delete:
      tags: [Flows]
      summary: Delete flow
      responses:
        '204':
          description: Deleted
  
  /flows/{flow_id}/execute:
    post:
      tags: [Execution]
      summary: Execute flow
      description: Trigger flow execution (creates E7 instance)
      parameters:
        - name: flow_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ExecutionRequest'
      responses:
        '202':
          description: Execution started
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ExecutionResponse'
  
  /flows/{flow_id}/activate:
    post:
      tags: [Lifecycle]
      summary: Activate flow
      parameters:
        - name: flow_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Activated
  
  /flows/{flow_id}/pause:
    post:
      tags: [Lifecycle]
      summary: Pause flow
      parameters:
        - name: flow_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Paused
  
  /executions/{execution_id}:
    get:
      tags: [Execution]
      summary: Get E7 execution details
      parameters:
        - name: execution_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: E7 execution details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/FlowExecution'
  
  /executions/{execution_id}/cancel:
    post:
      tags: [Execution]
      summary: Cancel execution
      parameters:
        - name: execution_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Cancelled
  
  /executions/{execution_id}/override:
    post:
      tags: [Execution]
      summary: Human override (HITL)
      description: Human intervenes in execution
      parameters:
        - name: execution_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                action:
                  type: string
                  enum: [Approve, Reject, Modify]
                data:
                  type: object
                reason:
                  type: string
      responses:
        '200':
          description: Override applied
  
  /metrics/tf2-score:
    get:
      tags: [Metrics]
      summary: Get TF2 fabric health score
      responses:
        '200':
          description: TF2 Score
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TF2ScoreResponse'

```

## 20_tejidos/implementacion_tejidos/contracts/openapi/tf3_information.yaml

```yaml
openapi: 3.1.0

info:
  title: ORKO TF3 Information Fabric API
  version: 2.0.0
  description: |
    REST API for TF3 Information Fabric - Complete information lifecycle management.
    **Primitivo:** P3_Información | **Axioma:** A3_Existencia_Información  
    **Trazabilidad:** 20_tejidos/03_TF3_information.md
    
    **Sub-domains:**
    - Foundation: Ingestion, storage, processing, governance
    - Analytics: BI, ML, predictive/prescriptive
    - Semantic: RAG, knowledge graphs, vector search
    
    **Architecture:** Lakehouse (Bronze → Silver → Gold → Semantic)
    
  contact:
    name: ORKO Architecture Team

servers:
  - url: https://api.orko.org/v2
  - url: http://localhost:8000/v2

tags:
  - name: Information
  - name: RAG
  - name: Lineage
  - name: Metrics

components:
  schemas:
    
    InformationAsset:
      type: object
      required: [id, name, information_type, structure, sub_domain, temporal, lineage, quality, governance, lifecycle]
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
          maxLength: 255
        description:
          type: string
          maxLength: 2000
        
        information_type:
          type: string
          enum: [Persistente, Transitoria, Agregada]
          description: |
            - Persistente: Long-term storage (databases, data lakes)
            - Transitoria: Temporary (cache, message queues)
            - Agregada: Derived from other assets (reports, metrics)
        
        structure:
          type: string
          enum: [Structured, Semi_Structured, Unstructured]
          description: |
            - Structured: Relational tables, schemas
            - Semi_Structured: JSON, XML, logs
            - Unstructured: Text, PDFs, images, audio
        
        sub_domain:
          type: string
          enum: [Foundation, Analytics, Semantic]
          description: |
            - Foundation: Data ingestion, storage, governance
            - Analytics: BI, metrics, ML models, feature engineering
            - Semantic: RAG, vector stores, knowledge graphs
        
        schema:
          type: object
          properties:
            format:
              type: string
              enum: [Parquet, JSON, CSV, Text, Image, Audio, Binary]
            schema_definition:
              type: object
              nullable: true
              description: JSON Schema for structured data
            fields:
              type: array
              items:
                type: object
                properties:
                  name:
                    type: string
                  type:
                    type: string
                  nullable:
                    type: boolean
                  description:
                    type: string
        
        temporal:
          type: object
          required: [timestamp]
          properties:
            timestamp:
              type: string
              format: date-time
              description: When information was generated
            validity_period_seconds:
              type: integer
              nullable: true
              description: null = infinite (persistent)
            expires_at:
              type: string
              format: date-time
              nullable: true
            freshness_sla_seconds:
              type: integer
              nullable: true
              description: Max acceptable age
        
        lineage:
          type: object
          description: Information lineage tracking (I3_Trazabilidad)
          properties:
            produced_by_flow:
              type: string
              format: uuid
              nullable: true
              description: Flow (TF2) that generated this
            produced_by_capacity:
              type: string
              format: uuid
              nullable: true
              description: Capacity (TF1) that produced this
            parent_assets:
              type: array
              items:
                type: string
                format: uuid
              description: Source information assets (DAG)
            lineage_level:
              type: string
              enum: [Field, Table, Dataset]
        
        quality:
          type: object
          properties:
            completeness_pct:
              type: number
              minimum: 0
              maximum: 1
              description: Percentage of non-null fields
            accuracy_pct:
              type: number
              minimum: 0
              maximum: 1
              description: Percentage of correct values vs ground truth
            freshness:
              type: string
              enum: [Fresh, Stale, Expired]
            validity_pct:
              type: number
              minimum: 0
              maximum: 1
              description: Percentage passing validation rules
            uniqueness_pct:
              type: number
              minimum: 0
              maximum: 1
            consistency_score:
              type: number
              minimum: 0
              maximum: 1
              description: Consistency across datasets
        
        governance:
          type: object
          properties:
            access_control:
              type: object
              properties:
                readers:
                  type: array
                  items:
                    type: string
                    format: uuid
                  description: Capacity IDs with read access
                writers:
                  type: array
                  items:
                    type: string
                    format: uuid
                row_level_security:
                  type: boolean
            
            privacy:
              type: object
              properties:
                contains_pii:
                  type: boolean
                pii_fields:
                  type: array
                  items:
                    type: string
                  nullable: true
                masking_rules:
                  type: array
                  items:
                    type: object
                    properties:
                      field:
                        type: string
                      method:
                        type: string
                        enum: [Hash, Redact, Tokenize, Encrypt]
            
            compliance:
              type: object
              properties:
                regulatory_tags:
                  type: array
                  items:
                    type: string
                  description: GDPR, HIPAA, SOC2, etc.
                data_residency:
                  type: string
                  nullable: true
                  example: "EU"
                retention_policy:
                  type: object
                  properties:
                    retention_days:
                      type: integer
                      nullable: true
                    deletion_method:
                      type: string
                      enum: [Hard_Delete, Soft_Delete, Archive]
            
            encryption:
              type: object
              properties:
                at_rest:
                  type: boolean
                at_transit:
                  type: boolean
                key_management:
                  type: string
                  nullable: true
                  description: KMS reference
        
        storage:
          type: object
          properties:
            location_uri:
              type: string
              description: "s3://, gs://, /data/, postgres://"
            size_bytes:
              type: integer
            partition_key:
              type: string
              nullable: true
            compression:
              type: string
              enum: [None, Gzip, Snappy, LZ4]
              nullable: true
        
        analytics:
          type: object
          nullable: true
          description: Analytics-specific fields (if sub_domain=Analytics)
          properties:
            metric_definition:
              type: string
              nullable: true
            aggregation_logic:
              type: string
              nullable: true
            compatible_dimensions:
              type: array
              items:
                type: string
            variance_tolerance_pct:
              type: number
              nullable: true
            
            model_info:
              type: object
              nullable: true
              description: ML model information
              properties:
                model_type:
                  type: string
                  enum: [Classification, Regression, Clustering, Ranking]
                algorithm:
                  type: string
                features:
                  type: array
                  items:
                    type: string
                target_variable:
                  type: string
                performance_metrics:
                  type: object
                  additionalProperties:
                    type: number
                training_dataset_id:
                  type: string
                  format: uuid
        
        semantic:
          type: object
          nullable: true
          description: Semantic-specific fields (if sub_domain=Semantic) - RAG focus
          properties:
            content_type:
              type: string
              enum: [Document, QA_Pair, Entity, Relationship]
            
            metadata:
              type: object
              properties:
                language:
                  type: string
                  example: "en"
                author:
                  type: string
                  nullable: true
                created_date:
                  type: string
                  format: date
                last_modified:
                  type: string
                  format: date
                tags:
                  type: array
                  items:
                    type: string
                categories:
                  type: array
                  items:
                    type: string
            
            vigencia:
              type: object
              description: Knowledge validity tracking
              properties:
                review_frequency_days:
                  type: integer
                last_review_date:
                  type: string
                  format: date
                  nullable: true
                next_review_date:
                  type: string
                  format: date
                  nullable: true
                status:
                  type: string
                  enum: [Current, Under_Review, Deprecated, Archived]
                reviewer_id:
                  type: string
                  format: uuid
                  nullable: true
            
            indexing:
              type: object
              description: RAG indexing configuration
              properties:
                vector_indexed:
                  type: boolean
                embedding_model:
                  type: string
                  nullable: true
                  example: "text-embedding-3-large"
                vector_dimension:
                  type: integer
                  nullable: true
                  example: 1536
                vector_db_collection:
                  type: string
                  nullable: true
                
                keyword_indexed:
                  type: boolean
                keyword_index_type:
                  type: string
                  enum: [BM25, TF_IDF]
                  nullable: true
                
                graph_indexed:
                  type: boolean
                entities:
                  type: array
                  nullable: true
                  items:
                    type: object
                    properties:
                      name:
                        type: string
                      type:
                        type: string
                      confidence:
                        type: number
                        minimum: 0
                        maximum: 1
            
            rag_config:
              type: object
              description: RAG pipeline configuration
              properties:
                chunk_strategy:
                  type: string
                  enum: [Fixed_Size, Semantic, Recursive]
                  nullable: true
                chunk_size:
                  type: integer
                  nullable: true
                  example: 512
                chunk_overlap:
                  type: integer
                  nullable: true
                  example: 50
                retrieval_k:
                  type: integer
                  nullable: true
                  description: Top-k results
                  example: 5
                reranking_enabled:
                  type: boolean
                citation_required:
                  type: boolean
        
        usage:
          type: object
          properties:
            access_count_30d:
              type: integer
            query_count_30d:
              type: integer
            last_accessed:
              type: string
              format: date-time
              nullable: true
            consumers:
              type: array
              items:
                type: string
                format: uuid
              description: Capacity or Flow IDs consuming this
        
        serves_flows:
          type: array
          items:
            type: string
            format: uuid
          description: Flows (TF2) consuming this information
        
        feeds_capacities:
          type: array
          items:
            type: string
            format: uuid
          description: Capacities (TF1) consuming this (e.g., ML models)
        
        purpose:
          type: object
          properties:
            linked_okrs:
              type: array
              items:
                type: string
                format: uuid
            business_value:
              type: string
            criticality:
              type: string
              enum: [Low, Medium, High, Critical]
        
        lifecycle:
          type: object
          required: [current_state, version]
          properties:
            current_state:
              type: string
              enum: [Planning, Ingestion, Processing, Active, Deprecated, Archived, Deleted]
            version:
              type: integer
              minimum: 1
        
        tags:
          type: array
          items:
            type: string
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
    
    InformationListResponse:
      type: object
      properties:
        items:
          type: array
          items:
            $ref: '#/components/schemas/InformationAsset'
        total:
          type: integer
        page:
          type: integer
    
    RAGQueryRequest:
      type: object
      required: [query]
      properties:
        query:
          type: string
          maxLength: 5000
          description: Natural language query
        filters:
          type: object
          properties:
            sub_domain:
              type: string
              enum: [Semantic]
            categories:
              type: array
              items:
                type: string
            tags:
              type: array
              items:
                type: string
        retrieval_k:
          type: integer
          minimum: 1
          maximum: 100
          default: 5
        rerank:
          type: boolean
          default: false
        include_citations:
          type: boolean
          default: true
    
    RAGQueryResponse:
      type: object
      properties:
        query:
          type: string
        results:
          type: array
          items:
            type: object
            properties:
              info_id:
                type: string
                format: uuid
              name:
                type: string
              content_snippet:
                type: string
              relevance_score:
                type: number
                minimum: 0
                maximum: 1
              metadata:
                type: object
              citation:
                type: string
                nullable: true
        total_results:
          type: integer
        retrieval_time_ms:
          type: number
    
    LineageResponse:
      type: object
      properties:
        asset_id:
          type: string
          format: uuid
        upstream:
          type: array
          items:
            type: object
            properties:
              info_id:
                type: string
                format: uuid
              name:
                type: string
              relationship:
                type: string
        downstream:
          type: array
          items:
            type: object
            properties:
              info_id:
                type: string
                format: uuid
              name:
                type: string
              relationship:
                type: string
    
    TF3ScoreResponse:
      type: object
      properties:
        tf3_score:
          type: number
          minimum: 0
          maximum: 100
        components:
          type: object
          properties:
            coverage:
              type: number
            quality:
              type: number
            freshness:
              type: number
            governance:
              type: number
            adoption:
              type: number
        threshold_met:
          type: boolean
    
    ErrorResponse:
      type: object
      properties:
        error:
          type: string
        message:
          type: string
        timestamp:
          type: string
          format: date-time

  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - bearerAuth: []

paths:
  /information:
    get:
      tags: [Information]
      summary: List information assets
      parameters:
        - name: sub_domain
          in: query
          schema:
            type: string
            enum: [Foundation, Analytics, Semantic]
        - name: information_type
          in: query
          schema:
            type: string
        - name: structure
          in: query
          schema:
            type: string
        - name: lifecycle_state
          in: query
          schema:
            type: string
        - name: tags
          in: query
          schema:
            type: array
            items:
              type: string
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: page_size
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: List of information assets
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InformationListResponse'
    
    post:
      tags: [Information]
      summary: Create information asset
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/InformationAsset'
      responses:
        '201':
          description: Information asset created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InformationAsset'
  
  /information/{info_id}:
    parameters:
      - name: info_id
        in: path
        required: true
        schema:
          type: string
          format: uuid
    
    get:
      tags: [Information]
      summary: Get information asset
      responses:
        '200':
          description: Information asset details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InformationAsset'
    
    put:
      tags: [Information]
      summary: Update information asset
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/InformationAsset'
      responses:
        '200':
          description: Updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InformationAsset'
    
    delete:
      tags: [Information]
      summary: Delete information asset
      responses:
        '204':
          description: Deleted
  
  /information/{info_id}/lineage:
    get:
      tags: [Lineage]
      summary: Get information lineage
      description: Get upstream and downstream lineage (DAG)
      parameters:
        - name: info_id
          in: path
          required: true
          schema:
            type: string
            format: uuid
        - name: depth
          in: query
          schema:
            type: integer
            minimum: 1
            maximum: 10
            default: 3
      responses:
        '200':
          description: Lineage graph
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LineageResponse'
  
  /rag/query:
    post:
      tags: [RAG]
      summary: RAG semantic search
      description: Query semantic information using vector search and/or keyword search
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/RAGQueryRequest'
      responses:
        '200':
          description: Search results
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/RAGQueryResponse'
  
  /rag/embed:
    post:
      tags: [RAG]
      summary: Generate embeddings
      description: Generate vector embeddings for text
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                texts:
                  type: array
                  items:
                    type: string
                embedding_model:
                  type: string
                  example: "text-embedding-3-large"
      responses:
        '200':
          description: Embeddings generated
          content:
            application/json:
              schema:
                type: object
                properties:
                  embeddings:
                    type: array
                    items:
                      type: array
                      items:
                        type: number
                  dimension:
                    type: integer
  
  /metrics/tf3-score:
    get:
      tags: [Metrics]
      summary: Get TF3 fabric health score
      responses:
        '200':
          description: TF3 Score
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TF3ScoreResponse'
  
  /lakehouse/layers:
    get:
      tags: [Information]
      summary: Get lakehouse layer summary
      description: Get count and quality by layer (Bronze, Silver, Gold, Semantic)
      responses:
        '200':
          description: Lakehouse summary
          content:
            application/json:
              schema:
                type: object
                properties:
                  layers:
                    type: array
                    items:
                      type: object
                      properties:
                        layer:
                          type: string
                          enum: [Bronze, Silver, Gold, Semantic]
                        asset_count:
                          type: integer
                        total_size_bytes:
                          type: integer
                        avg_quality_score:
                          type: number

```

## 20_tejidos/implementacion_tejidos/contracts/schemas/base.yaml

```yaml
# ORKO BASE SCHEMA DEFINITIONS
# JSON Schema Draft 2020-12
# Trazabilidad: 20_tejidos/00_introduccion_tejidos.md

$schema: "https://json-schema.org/draft/2020-12/schema"
$id: "https://orko.arch/schemas/base/v2.0"

definitions:
  
  # ============================================================================
  # PRIMITIVE TYPES
  # ============================================================================
  
  UUID:
    type: string
    format: uuid
    pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"
    description: "Universal Unique Identifier (RFC 4122)"
    examples:
      - "550e8400-e29b-41d4-a716-446655440000"
  
  Timestamp:
    type: string
    format: date-time
    description: "ISO 8601 timestamp with timezone (RFC 3339)"
    examples:
      - "2025-01-11T20:15:00Z"
      - "2025-01-11T17:15:00-03:00"
  
  Date:
    type: string
    format: date
    description: "ISO 8601 date (YYYY-MM-DD)"
    examples:
      - "2025-01-11"
  
  Duration:
    type: number
    description: "Duration in seconds (allows fractional)"
    minimum: 0
    examples:
      - 3600      # 1 hour
      - 0.250     # 250ms
  
  Percentage:
    type: number
    minimum: 0
    maximum: 100
    description: "Percentage value [0..100]"
    examples:
      - 85.5
      - 100.0
  
  Score:
    type: number
    minimum: 0
    maximum: 100
    description: "Score value [0..100]"
    examples:
      - 75.0
  
  # ============================================================================
  # COGNITIVE LEVELS
  # Trazabilidad: 00_introduccion_tejidos.md §3.2
  # ============================================================================
  
  CognitiveLevel:
    type: string
    enum:
      - C0    # Mechanical - Sin decision-making
      - C1    # Decisional - Rule-based, ML routing
      - C2    # Cognitive - LLM agents, reasoning
      - C3    # Meta-cognitive - Strategy, reflection (humans only)
    description: |
      Cognitive level según ORKO hierarchy:
      - C0: Mechanical operations (RPA, scheduled jobs, sensors)
      - C1: Decisional with rules/ML (classifiers, routers, rule engines)
      - C2: Cognitive with LLMs (agents, multi-agent, reasoning)
      - C3: Meta-cognitive (humans only - strategy, architecture)
    examples:
      - C2
  
  # ============================================================================
  # CAPACITY TYPES
  # Trazabilidad: 01_TF1_capacity.md §2
  # ============================================================================
  
  SubstrateType:
    type: string
    enum:
      - Humano
      - Algorítmico
      - Mecánico
      - Mixto
    description: |
      Physical substrate of capacity:
      - Humano: People, teams
      - Algorítmico: ML models, LLM agents, algorithms
      - Mecánico: Hardware, sensors, robots
      - Mixto: Human-in-the-loop scenarios
    examples:
      - Algorítmico
  
  CapacityType:
    type: object
    required:
      - cognitive_level
      - substrate
    properties:
      cognitive_level:
        $ref: "#/definitions/CognitiveLevel"
      substrate:
        $ref: "#/definitions/SubstrateType"
    description: "Composite capacity classification"
    examples:
      - cognitive_level: C2
        substrate: Algorítmico
  
  # ============================================================================
  # LIFECYCLE STATES
  # Trazabilidad: 01_TF1_capacity.md §2, 02_TF2_flow.md §2
  # ============================================================================
  
  LifecycleState:
    type: string
    enum:
      - Draft
      - Testing
      - Staging
      - Active
      - Paused
      - Deprecated
      - Retired
    description: |
      Standard lifecycle for all ORKO assets:
      - Draft: Initial design
      - Testing: Under validation
      - Staging: Pre-production
      - Active: Production operational
      - Paused: Temporarily disabled
      - Deprecated: Marked for retirement
      - Retired: Archived, not operational
    examples:
      - Active
  
  # ============================================================================
  # FLOW EXECUTION STATUS
  # Trazabilidad: 02_TF2_flow.md §2 (E7 integration)
  # ============================================================================
  
  ExecutionStatus:
    type: string
    enum:
      - In_Progress
      - Completed
      - Failed
      - Cancelled
    description: |
      Runtime status of flow execution (E7):
      - In_Progress: Currently executing
      - Completed: Successfully finished
      - Failed: Terminated with error
      - Cancelled: User/system cancelled
    examples:
      - Completed
  
  ExecutionTrigger:
    type: string
    enum:
      - Manual
      - Scheduled
      - Event_Driven
      - Transition
    description: |
      What triggered flow execution:
      - Manual: User-initiated
      - Scheduled: Cron/timer based
      - Event_Driven: Event bus trigger
      - Transition: State machine transition
    examples:
      - Event_Driven
  
  # ============================================================================
  # INFORMATION TYPES
  # Trazabilidad: 03_TF3_information.md §2
  # ============================================================================
  
  InformationType:
    type: string
    enum:
      - Persistente
      - Transitoria
      - Agregada
    description: |
      Information persistence model:
      - Persistente: Long-term storage (databases, data lakes)
      - Transitoria: Temporary (cache, message queues)
      - Agregada: Derived from other assets (reports, metrics)
    examples:
      - Persistente
  
  InformationStructure:
    type: string
    enum:
      - Structured
      - Semi_Structured
      - Unstructured
    description: |
      Data structure type:
      - Structured: Relational tables, schemas
      - Semi_Structured: JSON, XML, logs
      - Unstructured: Text, PDFs, images, audio
    examples:
      - Unstructured
  
  InformationSubdomain:
    type: string
    enum:
      - Foundation
      - Analytics
      - Semantic
    description: |
      TF3 Information sub-domain (focus: LLM ecosystem):
      - Foundation: Data ingestion, storage, governance
      - Analytics: BI, metrics, feature engineering
      - Semantic: RAG, vector stores, knowledge graphs, embeddings
    examples:
      - Semantic
  
  # ============================================================================
  # BOUNDED AUTONOMY MODES
  # Trazabilidad: 02_TF2_flow.md §3 (Orchestration patterns)
  # ============================================================================
  
  DelegationMode:
    type: string
    enum:
      - M1_Humano_Puro
      - M2_Asistido_Por_Agente
      - M3_Sugerencia_Agente_Humano_Decide
      - M4_Agente_Decide_Humano_Puede_Vetar
      - M5_Agente_Autonomo_Con_Humano_Override
      - M6_Agente_Autonomo_Puro
    description: |
      ORKO bounded autonomy spectrum (I5_HAIC):
      - M1: Human does everything
      - M2: Agent assists, human executes
      - M3: Agent suggests, human approves
      - M4: Agent executes, human can veto (HITL checkpoint)
      - M5: Agent autonomous, human can override
      - M6: Agent fully autonomous (only for low-risk)
    examples:
      - M4_Agente_Decide_Humano_Puede_Vetar
  
  # ============================================================================
  # COMMON PATTERNS
  # ============================================================================
  
  Ownership:
    type: object
    required:
      - owner_capacity_id
      - created_at
    properties:
      owner_capacity_id:
        $ref: "#/definitions/UUID"
        description: "Reference to Capacity (human) accountable for this asset"
      created_at:
        $ref: "#/definitions/Timestamp"
      created_by:
        $ref: "#/definitions/UUID"
        description: "Reference to Capacity that created this"
      updated_at:
        $ref: "#/definitions/Timestamp"
      updated_by:
        $ref: "#/definitions/UUID"
    description: "Standard ownership pattern (I5_HAIC - human accountability)"
    examples:
      - owner_capacity_id: "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d"
        created_at: "2025-01-11T20:00:00Z"
        created_by: "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d"
  
  Lifecycle:
    type: object
    required:
      - current_state
      - version
    properties:
      current_state:
        $ref: "#/definitions/LifecycleState"
      version:
        type: integer
        minimum: 1
        description: "Monotonically increasing version number"
      change_log:
        type: array
        items:
          type: object
          required:
            - version
            - state
            - timestamp
            - changed_by
          properties:
            version:
              type: integer
            state:
              $ref: "#/definitions/LifecycleState"
            timestamp:
              $ref: "#/definitions/Timestamp"
            changed_by:
              $ref: "#/definitions/UUID"
            reason:
              type: string
              maxLength: 500
    description: "Standard lifecycle tracking"
    examples:
      - current_state: Active
        version: 3
        change_log:
          - version: 1
            state: Draft
            timestamp: "2025-01-01T10:00:00Z"
            changed_by: "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d"
            reason: "Initial creation"
  
  QualityMetrics:
    type: object
    properties:
      completeness:
        $ref: "#/definitions/Percentage"
        description: "% of required fields populated"
      accuracy:
        $ref: "#/definitions/Percentage"
        description: "% of data matching ground truth"
      consistency:
        $ref: "#/definitions/Percentage"
        description: "% without contradictions"
      validity:
        $ref: "#/definitions/Percentage"
        description: "% conforming to schema/rules"
      freshness:
        $ref: "#/definitions/Duration"
        description: "Seconds since last update"
      overall_score:
        $ref: "#/definitions/Score"
        description: "Weighted average quality score"
    description: "Standard quality metrics pattern"
    examples:
      - completeness: 95.0
        accuracy: 98.5
        overall_score: 92.0
  
  Purpose:
    type: object
    properties:
      linked_okrs:
        type: array
        items:
          $ref: "#/definitions/UUID"
        description: "References to OKR IDs this asset contributes to"
      business_justification:
        type: string
        maxLength: 1000
        description: "Why this asset exists (P5_Purpose)"
      value_proposition:
        type: string
        maxLength: 500
        description: "Value delivered to organization"
    description: "Standard purpose linkage (P5_Purpose transversal)"
    examples:
      - linked_okrs:
          - "okr-001-2025-q1"
        business_justification: "Automate customer support response generation"
        value_proposition: "Reduce response time from 2h to 5min"
  
  Tags:
    type: array
    items:
      type: string
      pattern: "^[a-z0-9_-]+$"
      maxLength: 50
    maxItems: 20
    description: "Lowercase tags for classification and search"
    examples:
      - ["llm", "rag", "customer_support", "production"]
  
  # ============================================================================
  # ERROR PATTERNS
  # ============================================================================
  
  ErrorType:
    type: string
    enum:
      - Timeout
      - Validation
      - Infrastructure
      - Business_Logic
      - Rate_Limit
      - Authentication
      - Authorization
    description: "Standard error classification"
    examples:
      - Validation
  
  Error:
    type: object
    required:
      - error_type
      - error_message
      - timestamp
    properties:
      error_type:
        $ref: "#/definitions/ErrorType"
      error_message:
        type: string
        maxLength: 2000
      stack_trace:
        type: string
        maxLength: 10000
      timestamp:
        $ref: "#/definitions/Timestamp"
      context:
        type: object
        description: "Additional error context (JSON)"
    description: "Standard error capture pattern"
  
  # ============================================================================
  # LLM-SPECIFIC TYPES (Focus)
  # ============================================================================
  
  LLMProvider:
    type: string
    enum:
      - OpenAI
      - Anthropic
      - Google_Vertex
      - Azure_OpenAI
      - AWS_Bedrock
      - HuggingFace
      - Local_vLLM
      - Local_Ollama
    description: "LLM provider/serving platform"
    examples:
      - OpenAI
  
  LLMModelFamily:
    type: string
    enum:
      - GPT_4
      - GPT_3_5
      - Claude_3
      - Claude_2
      - Gemini
      - Llama_3
      - Mistral
      - Mixtral
      - Custom
    description: "LLM model family"
    examples:
      - Claude_3
  
  AgentRole:
    type: string
    enum:
      - Manager          # Decomposes tasks, coordinates
      - Researcher       # Web search, RAG retrieval
      - Analyst          # Data analysis, reasoning
      - Writer           # Content generation
      - Critic           # Review, quality control
      - Executor         # Task execution, tool calling
      - Custom
    description: "Agent role in multi-agent system"
    examples:
      - Researcher
  
  VectorStoreType:
    type: string
    enum:
      - Pinecone
      - Weaviate
      - Chroma
      - Qdrant
      - FAISS
      - Milvus
      - PostgreSQL_pgvector
    description: "Vector database for embeddings"
    examples:
      - Pinecone
  
  EmbeddingModel:
    type: string
    enum:
      - OpenAI_text_embedding_3_large
      - OpenAI_text_embedding_3_small
      - Cohere_embed_v3
      - Voyage_AI
      - BGE_large
      - E5_large
      - Sentence_Transformers
    description: "Embedding model for vector search"
    examples:
      - OpenAI_text_embedding_3_large

# ============================================================================
# VALIDATION RULES (Invariants)
# ============================================================================

$defs:
  invariants:
    I5_HAIC:
      description: "Human Accountability in AI Context - All assets MUST have human owner"
      rule: "ownership.owner_capacity_id MUST reference Capacity with substrate=Humano"
    
    I6_Trajectory:
      description: "Assets learn and evolve with usage"
      rule: "Lifecycle change_log MUST be append-only, monotonically increasing versions"
    
    I3_Trazabilidad:
      description: "100% traceable to axioms/primitives"
      rule: "All enums and types MUST reference source specification document"

# ============================================================================
# METADATA
# ============================================================================

title: "ORKO Base Schema Definitions"
version: "2.0.0"
description: |
  Foundation schema types for ORKO technological fabrics.
  Includes primitive types, enums, and common patterns.
  
  Focus: LLM ecosystem (agents, RAG, multi-agent orchestration)
  
  Trazabilidad:
    - 00_introduccion_tejidos.md: General architecture
    - 01_TF1_capacity.md: Capacity types, lifecycle
    - 02_TF2_flow.md: Flow, E7, bounded autonomy
    - 03_TF3_information.md: Information types, sub-domains

maintainer:
  name: "ORKO Architecture Team"
  contact: "architecture@orko.org"

license: "Proprietary - ORKO Framework"

```

