# Sistemas Inteligentes y Agencia

**ID**: ORKO-REF-SIA-01  
**Fuentes**: TSTI Axiomática, AIHC (Human-Centered AI)  

---

## §1. CICLO SADE (Situation Awareness-Decision-Execution)

### Estructura Tripartita
```
SADE := ⟨SENSE, DECIDE, EXECUTE⟩

SENSE := {L1_Detect, L2_Comprehend, L3_Project}
DECIDE := {M1_DirectControl, M2_RuleBased, M3_Associative, M4_KnowledgeBased}
EXECUTE := {E1_Action, E2_Specification, E3_Planning, E4_Orchestration}
```

### Fase 1: Situation Awareness (Endsley)

**L1. Detect**: Identificar/detectar nuevo fact o event

**L2. Comprehend**: Entender, interpretar, sintetizar (reconocer patterns/anomalies)

**L3. Project**: Predecir, forecast events futuros

### Fase 2: Decision-making (Rasmussen levels)

**M1. Direct Control Loops**: Información → acción directa (feedback loop algorítmico)
- Ex: Mantener temperatura en rango

**M2. Rule-Based**: Reconocer condiciones → mapear a acciones predefinidas
- Ex: IF temp > threshold THEN activate cooling

**M3. Associative Mapping**: Heurística experta, fuzzy similarity con patrones pasados
- Naturalística (NDM), instintiva, basada en experiencia

**M4. Knowledge-Based**: Análisis iterativo, investigación, planning, simulation
- Causal analysis, generación decision options, comparación outcomes

### Fase 3: Execution

**E1. Action**: Implementación directa

**E2. Specification**: Detalle de acciones a nivel operacional

**E3. Planning**: Secuencia, recursos, timing

**E4. Orchestration**: Coordinación multi-agente

---

## §2. SMARTNESS Y CAPACIDADES

### Capacidades (23 subcapacidades)

**C1. Procesamiento Información** (7 subcaps)

**C2. Acción en Mundo** (6 subcaps)

**C3. Regulación Interna** (5 subcaps)

**C4. Adquisición Conocimiento** (5 subcaps)

### Grados de Smartness
```
Grade: Cap → {0, 1, 2, 3, 4}

0: No_Inteligente
1: Ejecución_Scripted
2: Adaptación_Formulaica
3: Adaptación_Creativa
4: Invención_NoScripted
```

### Función de Smartness
```
Smartness(ws) := Σᵢ₌₁²³ wᵢ × Grade(capᵢ)

wᵢ = peso contextual de capacidad i
Σwᵢ = 1
```

**Teorema Anti-Binaridad**: Smartness es función continua en [0, 92]

**Corolario**: `∀gap: ∃cap_i: Incrementar(Grade(cap_i)) → Reducir(gap)`

---

## §3. MARCO AR (Agente-Responsabilidad)

### Tensor AR
```
AR: R × F → {NR, Bajo, Medio, Alto, Crítico}

R = 6 roles
F = 18 facetas
Dimensionalidad = 108 decisiones
```

### Mapeo Roles-SADE
```
ρ: R → 2^{SENSE,DECIDE,EXECUTE}

ρ(R1_Monitor) = {SENSE}
ρ(R2_ProveerInfo) = {SENSE, DECIDE}
ρ(R3_ProveerCapac) = {DECIDE, EXECUTE}
ρ(R4_Controlar) = {EXECUTE}
ρ(R5_Coproducir) = {SENSE, DECIDE, EXECUTE}
ρ(R6_Ejecutar) = {EXECUTE}
```

### Teorema Composición
```
∀CHS: Configuración ≡ Distribución_SADE ⊗ Tensor_AR
```

---

## §4. HCAI SOLUTION MAP

### Dimensión 1: Human-Centered AI Purpose

**AI Assistants**: Support users (natural language, recommendations, triggering)

**AI Augmentation Tools**: Packaged functionality augments abilities/capacity (interactive)

**AI Orchestration Agents**: Coordinate/supervise AI systems, set intervention points

**AI Automation Agents**: Run decoupled, provide cognitive functions (SADE completo)

### Dimensión 2: Human-Centered AI Cognition

**Sense**: Perceptual capabilities, monitor task-relevant state
- Ex: Fraud detection, churn risk recognition

**Decide**: Make decisions, rule-engines, problem solvers
- Ex: Complex problem-solving, decision options generation

**Act**: Trigger/execute actions, integrated with other systems
- Ex: Block transactions, generate personalized emails

---

## §5. CARACTERÍSTICAS HCAI

### Context Awareness
```
Kinds of Awareness:
- User awareness
- Task awareness
- Agent awareness
- Situational awareness
- Mission awareness
```

Representación: User history, time series, behavioral graphs, digital twins

### Human-Centeredness (Qualities)

**Design Objectives**: Empathy, Trust, Explainability, Transparency, Intervenability, Goal alignment

**Prominence by AI Type**:
- Assistants: Empathy, explainability
- Tools: Transparency, usability
- Orchestration: Control, intervention
- Automation: Trust, accountability

### Human Control (Levels)

**In-the-loop**: Human directly involved, uses AI for consultation

**On-the-loop**: Human provides supervision, monitors ongoing, can override

**Out-of-the-loop**: Human detached, meta-level management only

---

## §6. PATRONES DE INTERACCIÓN H-AA

### Modos de Engagement
```
Engagement := Balance(Iniciativa_H, Iniciativa_AA)

Patterns := {P1_Inform, P2_Command, P3_Guide, P4_Query,
             P5_Recommend, P6_Converse, P7_Negotiate,
             ..., P16_Accidental}
```

### Selección de Patrones
```
σ: (Fase_SADE, Rol_AA, Modo_Engagement) → 2^Patterns

σ(SENSE, R1_Monitor, _) ⊇ {P1_Inform}
σ(DECIDE, _, Mixed_Initiative) ⊇ {P6_Converse, P7_Negotiate}
σ(EXECUTE, R6_Ejecutar, _) ⊇ {P2_Command}
```

**Teorema Completitud**: Los 16 patrones cubren espacio completo interacciones H-AA

---

## §7. OBJETOS DE CONOCIMIENTO (KO)

### Taxonomía
```
KO := Conceptos ∪ Datos ∪ Interpretaciones ∪
      Generalizaciones ∪ Métodos

Conceptos := {Cosas, Actividades, Características, Métricas, Fenómenos}
Datos := {Facts, Datasets, Textos, Imágenes, Videos}
Interpretaciones := {Stories, Metáforas, Explicaciones, Modelos_Situacionales}
Generalizaciones := {Principios, Frameworks, Teorías, Axiomas}
Métodos := {Técnicas, Herramientas, Prácticas}
```

### Uso de KO
```
Uso_KO: (H ∪ AA) × KO → {Puede_Usar, No_Puede_Usar}

Uso_KO(H, Generalizaciones) = Puede_Usar
Uso_KO(AA_actual, Generalizaciones) = No_Puede_Usar
Uso_KO(AA_actual, Datos) = Puede_Usar
```

**Teorema Asimetría Cognitiva H-AA**: `∃ko: Uso_KO(H, ko) ≠ Uso_KO(AA, ko)`

**Oportunidad Smartness**: Incrementar `Uso_KO(AA, Generalizaciones)` → incrementa smartness en C4

---

## §8. EVALUACIÓN DE SISTEMAS INTELIGENTES

### Criterios Operacionales
```
E_op := {E1_Efficiency, E2_Effectiveness,
         E3_Reliability, E4_Resilience}
```

### Criterios Sociotécnicos
```
E_st := {E5_Equity, E6_Engagement, E7_Empathy,
         E8_Explainability, E9_Externalities}
```

### Función de Valor
```
Valor(ws) := f(e₁, e₂, ..., e₉ | Pesos, Constraints)

eᵢ: WS → [0, 1] (normalizado)
```

**Teorema Imposibilidad**: `∀ws: ∄configuración: ∀i: eᵢ(ws) = 1`

**Corolario**: Diseño efectivo requiere especificar pesos y constraints explícitos

---

## §9. INTEGRACIÓN SADE-SMARTNESS-AR

### Teorema Mapeo
```
∀fase ∈ SADE: ∃Cap_dominante ⊆ Cap:
  Performance(fase) ≈ f(Smartness(Cap_dominante))
```

**Construcción**:
- SENSE → C1 (Procesamiento Info) dominante
- DECIDE → C4 (Adquisición Conocimiento) + C3 (Regulación) dominante
- EXECUTE → C2 (Acción Mundo) dominante

### Ecuación Configuración CHS
```
Configuración(CHS) = Distribución_SADE(H, AA) ⊗
                     Tensor_AR(R × F) ⊗
                     Vector_Smartness(Cap)
```

---

## §10. DISEÑO PARA AUTONOMÍA

### Espectros Integrados

**Autonomía**:
```
Aumentación (RAG) → Agente ReAct → Plan-and-Execute
```

**Responsabilidad** (Marco AR):
```
Monitorear → Proveer → Controlar → Coproducir → Ejecutar
```

**Interacción**:
```
Máquina-en-bucle → Mixta → Humano-en-bucle → Autónomo supervisado
```

### Regla de Selección (SIGMA)
```
Modo_Interacción = f(Impacto, Irreversibilidad, Riesgo)

Alto riesgo → HITL obligatorio
Medio riesgo → On-the-loop + checkpoints
Bajo riesgo → Autónomo supervisado
```

---

## §11. BOUNDED AUTONOMY

### Definición
Autonomía siempre bounded:
- Human siempre puede engage/disengage
- Configuración/intervention interfaces obligatorias
- Meta-level control preservado

### Transiciones de Modo
```
Sistema debe ser flexible para soportar:
- Autonomous → Interactive (escalation)
- Interactive → Autonomous (delegation)

Triggered by:
- Complejidad situación
- Trust del humano
- Impacto decisión
```

---

**Aplicación en ORKO**: Fundamenta TF5 (Orchestration Fabric - agentes IA) en Layer 2, contratos de agente en Layer 1, y evaluation criteria en principios de diseño.
