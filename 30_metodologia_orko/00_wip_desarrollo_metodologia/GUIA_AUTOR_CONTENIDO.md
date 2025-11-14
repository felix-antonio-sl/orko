# GUÍA AUTOR CONTENIDO - METODOLOGÍA ORKO

**Tipo:** Prescriptiva Ejecución  
**Target:** Autores fases, playbooks, schemas  
**Objetivo:** Producir contenido consistente, trazable, minimal

---

## §0. PRINCIPIOS AUTOR

```yaml
Mindset_MVO:
  "§0-§1 COMPLETOS > Contenido detallado"
  "Funcional > Perfecto"
  "Validar antes expandir"
  "2 ejemplos mínimo (Minimal + Avanzada)"

Trazabilidad_Obligatoria:
  "Todo archivo DEBE trazar a Layer 0-1-2"
  "§0 Fundamento NO es opcional"
  "Justificación 2-3 líneas clara"

Vocabulario_Canónico:
  "Usar VOCABULARIO_CONTROLADO.yaml 100%"
  "Términos prohibidos detectan code review"
  "Glosario: A1-A5, P1-P5, I1-I8, D1-D4, C1-C5, M1-M6"

Dependency_Awareness:
  "Consultar DEPENDENCY_GRAPH.yaml antes escribir"
  "NO inventar prerequisitos"
  "Declarar consumers explícitamente"
```

---

## §1. TEMPLATE FASE WSLC

### Estructura Obligatoria

```markdown
# FN_nombre_fase

**Tipo:** Fase WSLC  
**ID:** FN  
**Prerequisitos:** [Lista IDs]  
**Estimación Lectura:** X minutos

---

## §0. FUNDAMENTO

**Layer 0:** [A{N}, ...] | [P{N}, ...] | [I{N}, ...]  
**Layer 1:** [D{N}_DOMINIO_PRIMARY, ...] | [C{N}, ...] | [E{N}, ...]  
**Layer 2:** [TF{N}, ...] (si aplica)

**Justificación:** [2-3 líneas POR QUÉ estos fundamentos aplican]

**Definiciones:** `../00_fundamentos_teoricos/` | `../10_arquitectura_orko/` | `../20_tejidos/`

---

## §1. INTERFAZ

### Inputs (Prerequisitos)

```yaml
inputs:
  - id: F{N}.artifact_name
    artifact: "Nombre artefacto concreto"
    attributes: [lista atributos necesarios]
    validation: "Criterio validación"
```

### Outputs (Artefactos Producidos)

```yaml
outputs:
  - id: FN_output_artifact
    type: [Document | Dataset | Decision | Metric]
    format: [YAML | Excel | Markdown | Dashboard]
    consumers: [Lista IDs fases/playbooks]
    validation: "Criterio completitud"
```

### Dependencies

```yaml
dependencies:
  reads_from: [Lista IDs prerequisitos]
  writes_to: [Lista IDs que actualiza]
  coordinates_with: [Lista IDs relacionados]
```

---

## §2. PROPÓSITO

[1 párrafo claro: QUÉ hace esta fase y POR QUÉ es necesaria]

---

## §3. INPUTS DETALLADOS

[Descripción inputs §1 expandida: estructura, campos clave, validaciones]

---

## §4. PROCESO EJECUCIÓN

### Step 1: [Nombre]
[Descripción 2-3 líneas]

### Step 2: [Nombre]
[Descripción 2-3 líneas]

[...5-7 steps total]

---

## §5. OUTPUTS DETALLADOS

[Descripción outputs §1 expandida: estructura, campos, formatos]

---

## §6. ARTEFACTOS

**Artefacto Principal:** T{N}_nombre_template  
[Descripción template: campos, uso, ejemplo]

**Artefactos Secundarios:**  
[Lista si aplica]

---

## §7. MÉTRICAS ÉXITO

```yaml
metrics:
  - metric: "Nombre métrica"
    threshold: "Valor esperado"
    validation: "Cómo verificar"
```

---

## §8. VALIDACIÓN

### Checklist Completitud

- [ ] Criterio 1
- [ ] Criterio 2
- [ ] [...]

### Validación Coherencia

```yaml
coherence_checks:
  - check: "Términos usan vocabulario canónico"
    method: "Grep VOCABULARIO_CONTROLADO.yaml"
  
  - check: "Referencias IDs válidas"
    method: "Verificar DEPENDENCY_GRAPH"
  
  - check: "Trazabilidad Layer 0-1-2"
    method: "§0 Fundamento populated"
```

---

## §9. EJEMPLOS

### Ejemplo Minimal (Startup 50p)

[Caso concreto aplicando fase en trayectoria Minimal]

### Ejemplo Avanzada (Enterprise 2000p)

[Caso concreto aplicando fase en trayectoria Avanzada]

---

## §10. PLAYBOOKS RELACIONADOS

- **P{N}** - [Relación con fase]
- [...]

---

## §11. NAVEGACIÓN

← **Anterior:** [F{N-1}_nombre]  
→ **Siguiente:** [F{N+1}_nombre]  
↑ **Índice:** [README.md padre]  
⊕ **Relacionados:** [Lista IDs relacionados]

---

## CHANGELOG

- [Fecha]: Creación inicial
- [Fecha]: [Cambios arquitectónicos]
```

---

### Checklist Pre-Commit Fase

```yaml
Estructura:
  ✅ 11 secciones §0-§11 presentes
  ✅ Líneas 200-350L
  ✅ Headers markdown correctos

Trazabilidad:
  ✅ §0 Fundamento completo
  ✅ Layer 0: ≥3 refs (A, P, I)
  ✅ Layer 1: ≥1 dominio PRIMARY
  ✅ Justificación 2-3 líneas clara

Interfaz:
  ✅ Inputs: IDs prerequisitos válidos
  ✅ Outputs: ≥2 artefactos con consumers
  ✅ Dependencies: reads_from/writes_to declarados

Calidad:
  ✅ Vocabulario canónico 100%
  ✅ Sin términos prohibidos
  ✅ Ejemplos: ≥2 (Minimal + Avanzada)
  ✅ Navegación: 4 links válidos

Validación:
  ✅ DEPENDENCY_GRAPH.yaml actualizado
  ✅ dependency_closure_script.py ejecuta sin errores
  ✅ Peer review checklist passed
```

---

## §2. TEMPLATE PLAYBOOK

### Estructura Obligatoria

```markdown
# PN_nombre_playbook

**Tipo:** Playbook [Recovery | Transformation | Operational]  
**ID:** PN  
**Trigger:** [Condiciones con thresholds numéricos]  
**Estimación Ejecución:** [ISO_8601 duration]

---

## §0. FUNDAMENTO

**Layer 0:** [A{N}, P{N}, I{N}]  
**Layer 1:** [D{N}, C{N}]  
**Layer 2:** [TF{N}] (si aplica)

**Justificación:** [POR QUÉ este playbook es necesario]

---

## §1. INTERFAZ

### Trigger Conditions

```yaml
triggers:
  - condition: "Metric < threshold"
    threshold: VALUE
    source: "F{N}.metric"
  - [...]
```

### Outputs

```yaml
outputs:
  - report: "Playbook execution report"
    consumers: [F{N}, ...]
```

---

## §2. PHASES

### Phase 1: Triage/Assessment (Duration: X hours)

**Objetivo:** [Diagnóstico inicial]

**Steps:**
1. [Step 1]
2. [Step 2]

**Outputs:**
- [Output 1]

---

### Phase 2: Stabilization/Execution (Duration: X hours/days)

**Objetivo:** [Estabilización/Ejecución acciones]

**Steps:**
1. [Step 1]
2. [Step 2]

**Outputs:**
- [Output 1]

---

### Phase 3: Recovery/Validation (Duration: X hours)

**Objetivo:** [Recuperación/Validación]

**Steps:**
1. [Step 1]
2. [Step 2]

**Outputs:**
- [Output 1]

---

## §3. ACCOUNTABILITY (I5)

```yaml
human_accountable: "Role name"
delegation_mode: M{N}
escalation_path: [Chain roles]
```

---

## §4. INTEGRATION

### Fases que activan playbook:
- **F{N}:** [Cómo/cuándo activa]

### Fases que consumen outputs:
- **F{N}:** [Qué consume]

---

## §5. EJEMPLO CONTEXTUAL

[Caso concreto ejecución playbook: startup/enterprise/crisis]

---

## §6. ANTIPATRÓN

**Antipatrón:** [QUÉ NO hacer]  
**Consecuencia:** [Riesgo]  
**Mitigación:** [Cómo evitar]

---

## §7. NAVEGACIÓN

← **Anterior:** [P{N-1}]  
→ **Siguiente:** [P{N+1}]  
↑ **Índice:** [README.md padre]

---

## CHANGELOG

- [Fecha]: Creación inicial
```

---

### Checklist Pre-Commit Playbook

```yaml
Estructura:
  ✅ 7 secciones §0-§7 presentes
  ✅ Líneas 150-250L

Trazabilidad:
  ✅ §0 Fundamento completo
  ✅ Layer 0: ≥2 refs

Interfaz:
  ✅ Triggers: ≥2 con thresholds numéricos
  ✅ Outputs: Consumers declarados

Phases:
  ✅ 3 phases (Triage, Stabilization, Recovery/Validation)
  ✅ Duración ISO_8601 por phase

Calidad:
  ✅ Accountability I5 explícito
  ✅ Integration: ≥2 fases consumidoras
  ✅ Ejemplo contextual presente
  ✅ Antipatrón documentado
```

---

## §3. TEMPLATE SCHEMA YAML

### Estructura Obligatoria

```yaml
# Purpose: [Descripción propósito schema]
# Type: Schema Tipo
# Consumers: [F{N}, P{N}, ...]
# Instances: [archivo_instances.yaml]

# §0 FUNDAMENTO
# Layer 0: [P{N}, I{N}]
# Justificación: [Por qué este schema]

# §1 DIMENSIONES
dimensions:
  dimension_1:
    type: enum
    values: [val1, val2, val3]
    description: "Descripción dimensión"
  
  dimension_2:
    type: String
    pattern: "^[A-Z]{2}$"
    description: "ISO country code"
  
  dimension_3:
    type: Float
    range: [0, 100]
    description: "Score 0-100"

# §2 SCHEMA DEFINITION
schema_type:
  field_1:
    type: enum
    values: [...]
    required: true
  
  field_2:
    type: String
    required: false
    default: "value"
  
  [...]

# §3 EXAMPLES (inline)
examples:
  - instance_1:
      field_1: value1
      field_2: value2
      # ...
  
  - instance_2:
      field_1: value3
      field_2: value4
      # ...

# §4 INTEGRATION
integration:
  fases: [F{N}, ...]
  playbooks: [P{N}, ...]
  templates: [T{N}, ...]
  usage: "Cómo se usa en metodología"

# §5 VALIDATION
validation:
  - check: "Field X required"
  - check: "Dimension Y orthogonal"
  - [...]
```

---

### Checklist Pre-Commit Schema

```yaml
Estructura:
  ✅ 5 secciones comentadas
  ✅ YAML syntax válido (yamllint)

Trazabilidad:
  ✅ §0 Fundamento en comentarios
  ✅ Layer 0: ≥1 ref (P, I)

Calidad:
  ✅ Dimensiones: ≥3 (schemas complejos)
  ✅ Tipos explícitos: 100% (no any)
  ✅ Ejemplos: ≥2 inline
  ✅ Comentarios: ≥30% líneas

Integration:
  ✅ Consumers declarados
  ✅ Usage explicado
```

---

## §4. FLUJO TRABAJO AUTOR

### Antes Escribir

```yaml
1. Consultar_Spec_Arquitectura:
   - SPEC_ARQUITECTURA_DEFINITIVA.md
   - Verificar ADRs aplicables
   - Confirmar estructura aprobada

2. Consultar_Dependency_Graph:
   - DEPENDENCY_GRAPH.yaml
   - Identificar prerequisitos
   - Confirmar no ciclos

3. Consultar_Vocabulario:
   - VOCABULARIO_CONTROLADO.yaml
   - Identificar términos canónicos
   - Evitar términos prohibidos

4. Leer_Templates:
   - TEMPLATE_FASE_WSLC.md
   - TEMPLATE_PLAYBOOK.md
   - TEMPLATE_SCHEMA.yaml
```

### Durante Escritura

```yaml
1. §0_Fundamento_PRIMERO:
   "Completar trazabilidad antes contenido"
   "Layer 0-1-2 refs + justificación 2-3 líneas"

2. §1_Interfaz_SEGUNDO:
   "Inputs/Outputs/Dependencies claros"
   "IDs válidos (consultar DEPENDENCY_GRAPH)"

3. §2-§N_Contenido_MVO:
   "Funcional > Perfecto"
   "2 ejemplos mínimo"
   "Vocabulario canónico 100%"

4. Navegación_ÚLTIMA:
   "Links anterior/siguiente/índice/relacionados"
```

### Después Escritura

```yaml
1. Self_Review:
   - Ejecutar CHECKLIST_VALIDACION.md
   - Verificar métricas calidad
   - Confirmar ejemplos funcionales

2. Actualizar_Dependencies:
   - DEPENDENCY_GRAPH.yaml
   - Agregar nuevo ID
   - Declarar reads_from/writes_to/consumers

3. Ejecutar_Closure_Script:
   - dependency_closure_script.py
   - Verificar 0 errores
   - Fix referencias rotas

4. Peer_Review:
   - Solicitar review Lead Architecture/Methodology
   - Aplicar feedback
   - Confirmar trazabilidad coherente
```

---

## §5. ANTIPATRONES COMUNES

```yaml
Antipatrón_1_Términos_Prohibidos:
  Error: Usar "sistema", "proceso", "datos", "gente"
  Fix: "work_system", "P2_flow", "P3_information", "P1_capacity substrate=Humano"

Antipatrón_2_§0_Vacío:
  Error: "Layer 0: TBD"
  Fix: Trazabilidad obligatoria, NO opcional

Antipatrón_3_IDs_Inventados:
  Error: "reads_from: [F99_imaginary]"
  Fix: Consultar DEPENDENCY_GRAPH primero

Antipatrón_4_Perfeccionismo:
  Error: 500L detalle sin validación empírica
  Fix: MVO 200-350L, validar, luego expandir

Antipatrón_5_Ejemplos_Abstractos:
  Error: "Ejemplo: Una organización X..."
  Fix: Caso concreto: "Startup 50p, H_org 45→70..."

Antipatrón_6_Sin_Consumers:
  Error: "Outputs: [artifact_X]" sin declarar consumers
  Fix: "consumers: [F{N}, P{N}]" explícito
```

---

## §6. MÉTRICAS CALIDAD AUTOR

```yaml
Fases_WSLC:
  Líneas: 200-350L
  Secciones: 11/11 completas
  Layer_0_refs: ≥3
  Ejemplos: ≥2
  Vocabulario: 100% canónico
  Navegación: 4 links válidos

Playbooks:
  Líneas: 150-250L
  Secciones: 7/7 completas
  Phases: 3/3 presentes
  Triggers: ≥2 numéricos
  Accountability: I5 explícito
  Antipatrón: ≥1 documentado

Schemas:
  YAML: Válido
  Dimensiones: ≥3
  Tipos: 100% explícitos
  Ejemplos: ≥2 inline
  Comentarios: ≥30% líneas
```

---

## §7. RECURSOS DESARROLLO

```yaml
Documentos_Referencia:
  - SPEC_ARQUITECTURA_DEFINITIVA.md
  - PLAN_DESARROLLO_OPERATIVO.md (esta guía)
  - VOCABULARIO_CONTROLADO.yaml
  - DEPENDENCY_GRAPH.yaml
  - CHECKLIST_VALIDACION.md

Templates:
  - TEMPLATE_FASE_WSLC.md
  - TEMPLATE_PLAYBOOK.md
  - TEMPLATE_SCHEMA.yaml

Layers_Fundacionales:
  - out/00_fundamentos_teoricos.md
  - out/10_arquitectura_orko.md
  - out/20_tejidos.md
  - out/90_referencias_fundacionales.md

Tools:
  - dependency_closure_script.py
  - yamllint (schemas)
  - grep (vocabulario)
```

---

## CONCLUSIÓN

**Guía autor completa y prescriptiva.**

**Templates estructurados + Checklists pre-commit.**

**Flujo trabajo claro: consultar → escribir → validar.**

**Antipatrones documentados para evitar.**

**Métricas calidad objetivas por tipo contenido.**

**READY TO AUTHOR.**

