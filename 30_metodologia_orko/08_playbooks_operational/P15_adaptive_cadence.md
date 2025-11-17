
# P15_adaptive_cadence

**Tipo:** Playbook Transformation  
**ID:** P15  
**Trigger:** Cambio abrupto de contexto (crisis/hypergrowth) que pone en riesgo `H_org` y obliga a ajustar cadencias (`F15`)  
**Estimación Ejecución:** `P2W`

---

## §0. FUNDAMENTO

**Layer 0:** `A1`, `A3`, `A5`, `P2`, `P5`, `I3`, `I6`, `I8`  
**Layer 1:** `D1`, `D2`, `D4`, `E6`  
**Layer 2:** `TF1`, `TF2`

**Justificación:** P15 ajusta cadencias de trabajo (ritmo de ciclos, ceremonias, despliegues) cuando el contexto cambia bruscamente (crisis, hypergrowth, cambios regulatorios), de modo que se preserve `H_org` mientras se responde al nuevo contexto. Trabaja en conjunto con P01/P02 (crisis) y P05–P08 (transformación) para evitar tanto la parálisis como el burnout.

---

## §1. INTERFAZ

### Trigger Conditions

```yaml
triggers:
  - condition: "Activación de G1 (crisis) o cambios de contexto que disparan escenarios Survival/Minimal/Avanzada extremos"
    metric: "H_org"
    threshold: "G1_activo_o_contexto_extremo"
    source: "02_health_gates.md"
  - condition: "Entradas desde context_pattern_schema/case_instances con señales de hypergrowth o shock externo"
    metric: "H_org"
    threshold: "riesgo_contextual"
    source: "context_pattern_schema/case_instances"
```

### Outputs

```yaml
outputs:
  - report: "P15_adaptive_cadence_report.md"
    consumers: ["F3", "F13", "F15", "F17", "E4_governance"]
  - artifact: "adaptive_cadence_plan.yaml"
    consumers: ["F15", "F17", "P01", "P02", "P08", "trayectorias.Survival", "trayectorias.Minimal", "trayectorias.Avanzada"]
