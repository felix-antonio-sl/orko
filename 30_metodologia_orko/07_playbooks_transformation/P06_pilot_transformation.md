
# P06_pilot_transformation

**Tipo:** Playbook Transformation  
**ID:** P06  
**Trigger:** Decisión de ejecutar piloto de transformación para mejorar `H_org`/`eta_org` en dominio acotado  
**Estimación Ejecución:** `P4W`

---

## §0. FUNDAMENTO

**Layer 0:** `A1`, `A3`, `A5`, `P1`, `P2`, `P5`, `I3`, `I6`  
**Layer 1:** `D1`, `D2`, `D4`, `E6`, `E7`  
**Layer 2:** `TF1`, `TF2`

**Justificación:** Cuando la organización necesita mejorar `H_org` y `eta_org` pero aún no es seguro escalar cambios a todo el sistema, P06 define cómo ejecutar un piloto controlado en dominios acotados, orquestando capacidades (`P1`) y flujos (`P2`) alineados al propósito (`P5`) y preservando trazabilidad (`I3`) y aprendizaje adaptativo (`I6`).

---

## §1. INTERFAZ

### Trigger Conditions

```yaml
triggers:
  - condition: "Trayectoria Minimal/Avanzada decide ejecutar piloto en dominio específico"
    metric: "H_org"
    threshold: "mejora_objetivo"
    source: "F3.trayectoria_decision"
  - condition: "Gap de eficiencia identificado en F9/F11 con H_org aceptable"
    metric: "eta_org"
    threshold: "por_debajo_target"
    source: "F13.eta_org_dashboard"
```

### Outputs

```yaml
outputs:
  - report: "P06_pilot_transformation_report.md"
    consumers: ["F9", "F11", "F15", "F16", "F17", "E4_governance"]
  - artifact: "pilot_transformation_plan.yaml"
    consumers: ["F11", "F15", "P07", "trayectorias.Minimal", "trayectorias.Avanzada"]
```

