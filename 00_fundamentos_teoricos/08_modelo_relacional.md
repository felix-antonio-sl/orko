# PARTE VIII: MODELO RELACIONAL

- [PARTE VIII: MODELO RELACIONAL](#parte-viii-modelo-relacional)
  - [§1. FUNDAMENTOS MODELO](#1-fundamentos-modelo)
  - [§2. ENTIDADES CORE](#2-entidades-core)
  - [§3. RELACIONES FUNDAMENTALES](#3-relaciones-fundamentales)
  - [§4. TABLA RESUMEN RELACIONES](#4-tabla-resumen-relaciones)
  - [§5. CONSTRAINTS INTEGRIDAD](#5-constraints-integridad)
  - [§6. DIAGRAMA ER CONCEPTUAL](#6-diagrama-er-conceptual)
  - [§7. PROPIEDADES DERIVABLES](#7-propiedades-derivables)

## §1. FUNDAMENTOS MODELO

```YAML
Naturaleza_Modelo:
  "Modelo relacional define estructura datos y relaciones entre primitivos.
   Es LÓGICO (independiente implementación física DB/código)."

Propósito:
  1. Especificar relaciones permitidas entre entidades
  2. Definir multiplicidades (1:1, 1:N, N:M)
  3. Establecer constraints integridad referencial
  4. Base para implementación (SQL schema, graph DB, código)

Notación:
  Entidad [min..max] ←relación→ [min..max] Entidad
  
  Ejemplos:
    [1] = exactamente uno
    [0..1] = opcional (cero o uno)
    [1..*] = uno o más
    [0..*] = cero o más
```

## §2. ENTIDADES CORE

```YAML
Listado_Entidades:

  E1_Capacidad:
    Schema: Contrato C1 (§2 Parte I)
    PK: id (UUID)
    Derivación: Primitivo P1, Axioma A2
    
  E2_Flujo:
    Schema: Contrato C2 (§3 Parte I)
    PK: id (UUID)
    Derivación: Primitivo P2, Axioma A1
    
  E3_Información:
    Schema: Contrato C3 (§4 Parte I)
    PK: id (UUID)
    Derivación: Primitivo P3, Axioma A3
    
  E4_Límite:
    Schema: Contrato C4 (§5 Parte I)
    PK: id (UUID)
    Derivación: Primitivo P4, Axioma A4
    
  E5_Propósito:
    Schema: Contrato C5 (§6 Parte I)
    PK: id (UUID)
    Derivación: Primitivo P5, Axioma A5

Total_Entidades_Primitivas: 5 (minimal y suficiente por I1)

Nota_Arquitectural:
  "Este modelo relacional define ÚNICAMENTE primitivos teóricos (E1-E5).
   
   La arquitectura ORKO extiende este modelo base con entidades COMPUESTAS
   derivadas formalmente de primitivos para soportar capacidades operacionales:
   
   • E6_Estado_Arquitectónico: Snapshot(E1+E2+E4+E5) para coherencia temporal
   • E7_Ejecución_Flujo: Instance(E2) para tracking operacional y DORA metrics
   
   Ver arquitectura_orko/03_relaciones.md §2 para especificación completa
   de entidades compuestas y su derivación formal desde primitivos."
```

## §3. RELACIONES FUNDAMENTALES

R1_Capacidad_Ejecuta_Flujo:

```YAML  
  Definición:
    "Capacidad ejecuta steps en flujo. Flujo requiere capacidades para ejecutarse."
    
  Estructura:
    Capacidad [0..*] ←ejecuta→ [1..*] Flujo
    
  Multiplicidad:
    - Una capacidad ejecuta 0+ flujos (puede estar idle)
    - Un flujo requiere 1+ capacidades (al menos 1 step)
    
  Implementación:
    Via Flujo.steps[].capacity_required.capacity_id → Capacidad.id
    
  Derivación_Teórica:
    A1 (Transformación) + A2 (Capacidad efectúa transformación)
    → Flujo = secuencia transformaciones requiere capacidades
    
  Constraints:
    - ∀ step ∈ Flujo.steps: step.capacity_id ∈ Capacidad (FK)
    - ∀ step: Capacidad.capacity_type ≥ step.capacity_type_min
    
  Propiedad_Direccional:
    Flujo → Capacidad (dependency)
    Capacidad ↛ Flujo (independencia)

R2_Flujo_Produce_Información:
  
  Definición:
    "Flujo transforma inputs en outputs. Outputs son información."
    
  Estructura:
    Flujo [1] ←produce→ [1..*] Información
    
  Multiplicidad:
    - Un flujo produce 1+ informaciones (al menos output)
    - Una información es producida por 1 flujo (single producer)
    
  Implementación:
    Información.lineage.produced_by_flow_id → Flujo.id
    
  Derivación_Teórica:
    A1 (Transformación S₁→S₂) + A3 (Información coordina)
    → Transformación observable vía información producida
    
  Constraints:
    - ∀ I ∈ Información: I.lineage.produced_by_flow_id → Flujo | null
    - IF Información.information_type ≠ external THEN produced_by_flow NOT NULL
    
  Excepción:
    Información externa (imported) puede tener produced_by_flow = null

R3_Capacidad_Produce_Información:
  
  Definición:
    "Capacidad genera información como parte ejecución."
    
  Estructura:
    Capacidad [1] ←produce→ [0..*] Información
    
  Multiplicidad:
    - Una capacidad produce 0+ informaciones
    - Una información producida por 1 capacidad específica
    
  Implementación:
    Información.lineage.produced_by_capacity_id → Capacidad.id
    
  Derivación_Teórica:
    A2 (Capacidad efectúa) + A3 (Información estructura significado)
    → Capacidad al actuar genera información
    
  Relación_Con_R2:
    R2 + R3 juntos forman lineage completo:
    Información producida por (Flujo, Capacidad específica en step)

R4_Capacidad_Consume_Información:
  
  Definición:
    "Capacidad decisional (C1+) requiere información para decidir."
    
  Estructura:
    Capacidad [0..*] ←consume→ [0..*] Información
    
  Multiplicidad:
    - Capacidad C0 consume 0 información (mecánica)
    - Capacidad C1+ consume 1+ información (para decidir)
    - Información consumida por 0+ capacidades
    
  Implementación:
    Via Flujo.steps[].input_information → Información.id
    (consumo implícito cuando capacidad ejecuta step)
    
  Derivación_Teórica:
    Capacidad C1+ requiere input para decisión (A3)
    
  Constraint:
    ∀ C ∈ Capacidad WHERE capacity_type = C0:
      consumed_information.count = 0

R5_Información_Deriva_Información:
  
  Definición:
    "Información agregada deriva de información padres (DAG)."
    
  Estructura:
    Información [0..*] ←parent_of→ [0..*] Información
    
  Multiplicidad:
    - Información puede tener 0+ padres
    - Información puede ser padre de 0+ hijos
    
  Implementación:
    Información.lineage.parent_info_ids → List<Información.id>
    
  Derivación_Teórica:
    A3 (Información coordina) + Propiedad agregación
    → Información compuesta deriva de fuentes
    
  Constraints:
    - DAG (no cycles): topological_sort(parent_ids) succeeds
    - IF information_type = Agregada THEN parent_info_ids.length > 1
    - IF information_type = Transitoria THEN parent_info_ids.length = 0
    
  Propiedad_Recursiva:
    lineage_depth(I) = 1 + max(lineage_depth(parent) for parent in parents)

R6_Límite_Restringe_Capacidad:
  
  Definición:
    "Límite acota qué puede hacer capacidad."
    
  Estructura:
    Límite [0..*] ←restringe→ [0..*] Capacidad
    
  Multiplicidad:
    - Límite aplica a 0+ capacidades (puede ser global)
    - Capacidad restringida por 0+ límites
    
  Implementación:
    Límite.constraint.target_entity_ids → List<Capacidad.id>
    WHERE Límite.constraint.target_entity_type = Capacidad
    
  Derivación_Teórica:
    A4 (Restricción acota posibilidades)
    → Capacidad opera dentro límites
    
  Ejemplos:
    - Límite_Budget → [Capacidad_TeamA, Capacidad_TeamB]
    - Límite_GDPR → [Capacidad_All WHERE processes_PII]

R7_Límite_Restringe_Flujo:
  
  Definición:
    "Límite acota cómo/cuándo flujo puede ejecutarse."
    
  Estructura:
    Límite [0..*] ←restringe→ [0..*] Flujo
    
  Multiplicidad:
    - Límite aplica a 0+ flujos
    - Flujo restringido por 0+ límites
    
  Implementación:
    Límite.constraint.target_entity_ids → List<Flujo.id>
    WHERE Límite.constraint.target_entity_type = Flujo
    
  Derivación_Teórica:
    A4 (Restricción) + A1 (Transformación)
    → Flujo ejecuta dentro límites
    
  Ejemplos:
    - Límite_ApprovalRequired → [Flujo_Deployment, Flujo_Budget_Spend]
    - Límite_Horario_Laboral → [Flujo_Producción (no 24/7)]

R8_Límite_Restringe_Información:
  
  Definición:
    "Límite acota qué información puede crearse/accederse."
    
  Estructura:
    Límite [0..*] ←restringe→ [0..*] Información
    
  Multiplicidad:
    - Límite aplica a 0+ informaciones
    - Información restringida por 0+ límites
    
  Implementación:
    Límite.constraint.target_entity_ids → List<Información.id>
    WHERE Límite.constraint.target_entity_type = Información
    
  Derivación_Teórica:
    A4 + A3 → Información sujeta a límites (privacy, retention)
    
  Ejemplos:
    - Límite_GDPR_Retention → [Información WHERE contains_PII]
    - Límite_Classification_Secret → [Información WHERE sensitivity=Secret]

R9_Propósito_Direcciona_Flujo:
  
  Definición:
    "Flujo existe para servir propósito. Todo flujo tiene outcome deseado."
    
  Estructura:
    Propósito [1] ←direcciona→ [1..*] Flujo
    
  Multiplicidad:
    - Un propósito es servido por 1+ flujos
    - Un flujo sirve exactamente 1 propósito
    
  Implementación:
    Flujo.purpose_id → Propósito.id (FK NOT NULL)
    
  Derivación_Teórica:
    A5 (Intencionalidad) + A1 (Transformación)
    → Transformación tiene propósito
    
  Constraint_Crítico:
    ∀ F ∈ Flujo: F.purpose_id NOT NULL
    Violación imposible (schema enforced)
    
  Interpretación:
    Flujo sin propósito = waste (violates A5)

R10_Propósito_Asigna_Capacidad:
  
  Definición:
    "Propósito tiene capacidad owner accountable."
    
  Estructura:
    Propósito [0..*] ←asigna→ [1] Capacidad
    
  Multiplicidad:
    - Un propósito tiene exactamente 1 owner (accountability única)
    - Una capacidad puede ser owner de 0+ propósitos
    
  Implementación:
    Propósito.ownership.owner_capacity_id → Capacidad.id (FK NOT NULL)
    
  Derivación_Teórica:
    A5 (Intencionalidad) + I5 (Primacía Humana)
    → Propósito requiere humano accountable
    
  Constraint:
    ∀ P ∈ Propósito: 
      P.owner_capacity.substrate ∈ {Humano, Mixto}

R11_Propósito_Jerarquía:
  
  Definición:
    "Propósitos forman árbol jerárquico (cascada org → individual)."
    
  Estructura:
    Propósito [0..1] ←parent→ [0..*] Propósito
    
  Multiplicidad:
    - Propósito tiene 0 o 1 padre (0 = root org)
    - Propósito tiene 0+ hijos (0 = leaf individual)
    
  Implementación:
    Propósito.hierarchy.parent_purpose_id → Propósito.id | null
    
  Derivación_Teórica:
    A5 (Intencionalidad) + Propiedad alineación
    → Propósitos individuales contribuyen a org
    
  Constraints:
    - Tree structure (no cycles)
    - Root propósitos: scope=Organization AND parent_id=null
    - Leaf propósitos: child_purpose_ids.length=0
    - ∀ child: child.end_date ≤ parent.end_date
    
  Propiedad_Path:
    path_to_root(P) = [P, parent(P), parent(parent(P)), ..., root]
    Representa alignment chain

R12_Capacidad_Composición:
  
  Definición:
    "Capacidad Mixta compuesta de otras capacidades (recursive)."
    
  Estructura:
    Capacidad [0..1] ←compuesta_de→ [2..*] Capacidad
    
  Multiplicidad:
    - Capacidad Mixta tiene 2+ componentes
    - Capacidad puede ser componente de 0 o 1 mixta
    
  Implementación:
    Capacidad.composition.component_ids → List<Capacidad.id>
    WHERE Capacidad.substrate = Mixto
    
  Derivación_Teórica:
    A2 (Capacidad) + Propiedad composición
    → Capacidades combinables
    
  Constraints:
    - IF substrate = Mixto THEN composition NOT NULL
    - composition.component_ids.length ≥ 2
    - ∃ component: component.substrate = Humano
    - Recursive pero acíclico (no self-reference chain)
    
  Operadores:
    ⊕ (Paralelo): Team = C1 ⊕ C2 ⊕ ... ⊕ Cn
    ⊗ (Secuencial): Pipeline = C1 ⊗ C2 ⊗ C3
```

R13_Delegación_HAIC:

```YAML
  Definición:
    "Capacidad Algorítmica DEBE ser delegada por Capacidad Humana.
     Enforcement de I5: HAIC/Primacía humana."
    
  Estructura:
    Capacidad(Algorítmica) [1] ←delegada_por→ [1] Capacidad(Humana)
    
  Multiplicidad:
    - Toda capacidad algorítmica tiene EXACTAMENTE 1 humano responsable (mandatory)
    - Un humano puede delegar a 0+ capacidades algorítmicas
    
  Implementación:
    Capacidad.accountable_capacity_id → Capacidad.id
    WHERE source.substrate = Algorítmico
    AND target.substrate ∈ {Humano, Mixto}
    
  Derivación_Teórica:
    I5 (HAIC/Primacía humana): "Capacidad algorítmica opera bajo supervisión
     y responsabilidad humana explícita. Delegación progresiva M1→M6."
    
  Constraints:
    - IF substrate = Algorítmico THEN accountable_capacity_id NOT NULL (mandatory)
    - accountable_capacity.substrate ∈ {Humano, Mixto}
    - accountable_capacity.substrate ≠ Algorítmico (no delegation loop)
    - Si accountable es Mixto, ∃ humano en composition (transitivo)
    
  Modos_Delegación (I5):
    M1_Monitor: Humano observa, algoritmo informa
    M2_Informar: Humano ratifica decisiones algoritmo
    M3_Sugerir: Algoritmo propone, humano decide
    M4_Decidir_Bajo_Excepción: Algoritmo decide, humano interviene excepciones
    M5_Coproducir: Algoritmo + humano colaboran simétricamente
    M6_Delegar_Monitorizado: Algoritmo decide, humano audita periódicamente
    
  Propiedad_Trazabilidad:
    ∀ output algorítmico: audit_trail registra humano accountable
    + modo delegación aplicado + timestamp
    
  Anti-Pattern:
    Capacidad algorítmica sin accountable_capacity_id → INVALID STATE
    (Viola I5, bloquea validación sistema)
```

## §4. TABLA RESUMEN RELACIONES

Matriz_Relaciones:

  |              | Capacidad      | Flujo | Información | Límite | Propósito |
  |--------------|----------------|-------|-------------|--------|-----------|
  | Capacidad    | R12 (⊕⊗), R13 | R1    | R3, R4      | R6     | R10       |
  | Flujo        | R1             | -     | R2          | R7     | R9        |
  | Información  | R3, R4         | R2    | R5 (DAG)    | R8     | -         |
  | Límite       | R6             | R7    | R8          | -      | -         |
  | Propósito    | R10            | R9    | -           | -      | R11       |

Total_Relaciones_Primitivas: 13 fundamentales

- R1-R11: Relaciones entre primitivos P1-P5
- R12: Capacidad ⊕⊗ Capacidad (composición)
- R13: Capacidad(Algorítmica) ← Capacidad(Humana) (delegación HAIC)

Nota_Arquitectural:
  "La arquitectura ORKO extiende este modelo con relaciones DERIVADAS:

   • R14_Estado_Transitions: Estado → Transition → Estado (DAG evolutivo)
   • R15_Transition_Flow: Transition → Flujo (planning-execution link)

   Estas relaciones operan sobre entidades compuestas (E6-E7) y son
   formalmente derivables desde primitivos.
   Ver arquitectura_orko/03_relaciones.md §3 para especificación completa."

Propiedad_Completitud:
  ✓ Todas combinaciones primitivos cubiertas (E1-E5)
  ✓ Relaciones derivadas de axiomas (no inventadas)
  ✓ Multiplicidades consistentes con invariantes
  ✓ Extensiones arquitectónicas trazables a primitivos

## §5. CONSTRAINTS INTEGRIDAD

Constraints_Globales:

```YAML
  C1_Referential_Integrity:
    "Toda FK apunta a entidad existente."
    
    ∀ relación R con FK:
      ∀ entity.fk_field:
        entity.fk_field ∈ target_entity.id OR fk_field = null (if optional)
        
  C2_Acyclicity:
    "Relaciones recursivas forman DAG (no cycles)."
    
    Aplicable a:
      - R5: Información.parent_info_ids (DAG lineage)
      - R11: Propósito.parent_purpose_id (tree)
      - R12: Capacidad.component_ids (composición)
      
    Test: topological_sort succeeds
    
  C3_Type_Consistency:
    "Relaciones respetan tipos compatibles."
    
    Ejemplos:
      - R1: Capacidad.capacity_type ≥ Flujo.step.capacity_type_min
      - R10: Propósito.owner_capacity.substrate ∈ {Humano, Mixto}
      - R12: Mixto.composition tiene ≥1 Humano
      
  C4_Mandatory_Relations:
    "Relaciones obligatorias siempre presentes."

  C9_Minimum_Steps:
    "Todo `Flujo` tiene **al menos un** `step` (capacidad requerida)."
    Formal:
      ∀ Flujo f: |f.steps| ≥ 1
    Implementación:
      CHECK (json_array_length(steps) ≥ 1)
      AND FK: ∀ step.capacity_id ∈ Capacidad.id
    Relación:
      R1 (Capacidad ↔ Flujo)

    
    - R9: ∀ Flujo: purpose_id NOT NULL
    Nota (semántica vs política): I2 establece independencia conceptual Flujo⊥Propósito;
    el modelo **exige** propósito explícito por A5/P5 → `purpose_id NOT NULL`.
    - R10: ∀ Propósito: owner_capacity_id NOT NULL
    - R13: ∀ Capacidad(substrate=Algorítmico): accountable_capacity_id NOT NULL
    - R2: ∀ Información (no externa): produced_by_flow_id NOT NULL

Constraints_Por_Invariante:

  I1_Minimalidad → C5_Justification:
    Toda entidad tiene campo justification documentado
    (meta-constraint, verificado vía PD1)
    
  I3_Trazabilidad → C6_Audit_Trail:
    Toda entidad tiene (created_by, created_at, version)
    I5_HAIC → C7_Human_Accountability:
    ∀ Capacidad(substrate=Algorítmico):
      accountable_capacity_id → Capacidad(substrate ∈ {Humano, Mixto})
      + delegation_mode ∈ {M1, M2, M3, M4, M5, M6}
      + audit_trail registra humano responsable + timestamp
    (Enforcement vía R13_Delegación_HAIC)
    (schema enforced)
    
  I5_HAIC → C7_Human_Accountability:
    ∀ Capacidad(substrate=Algorítmico):
      accountable_capacity_id → Capacidad(substrate ∈ {Humano, Mixto})
      + delegation_mode ∈ {M1, M2, M3, M4, M5, M6}
      + audit_trail registra humano responsible + timestamp
    ∀ Propósito: owner_capacity.substrate ∈ {Humano, Mixto}
    ∀ Límite(crítico): owner_capacity.substrate = Humano
    (Enforcement vía R13_Delegación_HAIC)
    
  I7_Emergencia → C8_Level_Appropriateness:
    No validable en schema (validado en metodología)
    Org nivel N no usa prácticas nivel N+2
```

## §6. DIAGRAMA ER CONCEPTUAL

Representación_Textual:

```
┌─────────────┐
│  PROPÓSITO  │ (E5)
│  [P5]       │
└──────┬──────┘
       │ R11 (parent_of)
       │ [0..1] ↔ [0..*]
       ├─────────┐
       │         │
       │ R10 (owner)    R9 (direcciona)
       │ [1]            [1] ↔ [1..*]
       ↓                ↓
┌─────────────┐    ┌─────────────┐
│  CAPACIDAD  │    │    FLUJO    │ (E2)
│  [P1]       │←───│    [P2]     │
└──────┬──────┘ R1 └──────┬──────┘
       │ ejecuta         │
       │ [1..*]↔[0..*]   │ R2 (produce)
       │                 │ [1] → [1..*]
       │ R3 (produce)    │
       │ [1]→[0..*]      ↓
       │            ┌─────────────┐
       │            │ INFORMACIÓN │ (E3)
       │            │    [P3]     │
       │            └──────┬──────┘
       │                   │ R5 (deriva)
       │ R4 (consume)      │ [0..*]↔[0..*]
       │ [0..*]↔[0..*]     │ (DAG)
       └───────────────────┘
       
       R12 (composición)
       [0..1] ↔ [2..*]
       Capacidad ←→ Capacidad
       (recursive)

┌─────────────┐
│   LÍMITE    │ (E4)
│    [P4]     │
└──────┬──────┘
       │ R6, R7, R8
       │ restringe
       │ [0..*] ↔ [0..*]
       └──→ [Capacidad, Flujo, Información]
```

Lectura_Diagrama:

- Rectángulos = Entidades (E1-E5)
- Flechas = Relaciones (R1-R13)
- [X..Y] = Multiplicidad
- (DAG) = Constraint acyclicity
- ↔ = Bidireccional
- → = Unidireccional

## §7. PROPIEDADES DERIVABLES

Queries_Típicas:

```SQL
  Q1_Capacidades_de_Flujo:
    INPUT: flujo_id
    OUTPUT: List<Capacidad>
    
    SELECT DISTINCT c.*
    FROM Flujo f
    JOIN Flujo.steps s ON s.flow_id = f.id
    JOIN Capacidad c ON c.id = s.capacity_id
    WHERE f.id = :flujo_id
    
  Q2_Flujos_Serviendo_Propósito:
    INPUT: propósito_id
    OUTPUT: List<Flujo>
    
    SELECT f.*
    FROM Flujo f
    WHERE f.purpose_id = :propósito_id
    
  Q3_Lineage_Información:
    INPUT: info_id
    OUTPUT: DAG<Información>
    
    WITH RECURSIVE lineage AS (
      SELECT * FROM Información WHERE id = :info_id
      UNION ALL
      SELECT i.* FROM Información i
      JOIN lineage l ON i.id IN (SELECT unnest(l.parent_info_ids))
    )
    SELECT * FROM lineage
    
  Q4_Path_Propósito_Root:
    INPUT: propósito_id
    OUTPUT: List<Propósito> (leaf → root)
    
    WITH RECURSIVE path AS (
      SELECT * FROM Propósito WHERE id = :propósito_id
      UNION ALL
      SELECT p.* FROM Propósito p
      JOIN path pt ON p.id = pt.parent_purpose_id
    )
    SELECT * FROM path
    
  Q5_Límites_Aplicables_Capacidad:
    INPUT: capacidad_id
    OUTPUT: List<Límite>
    
    SELECT l.*
    FROM Límite l
    WHERE l.constraint.target_entity_type = 'Capacidad'
      AND :capacidad_id = ANY(l.constraint.target_entity_ids)
    
  Q6_Componentes_Capacidad_Mixta:
    INPUT: capacidad_mixta_id
    OUTPUT: List<Capacidad>
    
    WITH RECURSIVE components AS (
      SELECT * FROM Capacidad WHERE id = :capacidad_mixta_id
      UNION ALL
      SELECT c.* FROM Capacidad c
      JOIN components cmp ON c.id IN (SELECT unnest(cmp.composition.component_ids))
    )
    SELECT * FROM components WHERE id != :capacidad_mixta_id
```

Métricas_Derivables:

```SQL
  M1_Utilización_Capacidad:
    = COUNT(DISTINCT flujo_id ejecutando capacidad) / capacidad.throughput_max
    
  M2_Complejidad_Flujo:
    = Flujo.steps.length + Flujo.dependencies.length
    
  M3_Freshness_Información:
    = NOW() - Información.temporal.created_at
    
  M4_Cobertura_Límites:
    = COUNT(entidades con límites) / COUNT(entidades totales)
    
  M5_Alignment_Propósito:
    = AVG(progreso propósitos hijos) para propósito padre
```

**R3 — Excepción para información externa:** Si `source_kind = external`, `produced_by_capacity_id` puede ser `null` con `source_system/source_org` obligatorios.

**Linaje:** se garantiza **DAG por ejecución**; la recursión se modela como nuevas ejecuciones/versiones.
