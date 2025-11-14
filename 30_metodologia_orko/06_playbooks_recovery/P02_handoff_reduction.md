# P02_handoff_reduction

**Tipo:** Playbook Recovery  
**ID:** P02  
**Trigger:** Deterioro de `H_org` o `ROI_Habilitacion` atribuido a handoffs  
**Estimación Ejecución:** `P2D`

---

## §0. FUNDAMENTO

**Layer 0:** `A1`, `A3`, `P2`, `I2`, `I3`, `I6`  
**Layer 1:** `D1`, `D4`, `E7`  
**Layer 2:** `TF2`

**Justificación:** Handoffs excesivos elevan el tiempo de ciclo y degradan `H_org`/`ROI_Habilitacion`. Este playbook aplica principios de flujo (`P2`) y ortogonalidad (`I2`) para estabilizar operaciones (`D4`) y recuperar eficiencia, manteniendo trazabilidad (`I3`) y aprendizaje para ajustes de trayectoria (`I6`).

---

## §1. INTERFAZ

### Trigger Conditions

```yaml
triggers:
  - condition: "H_org < 70 con evidencia de handoffs altos en F5/F11"
    metric: "H_org"
    threshold: 70
    source: "F13.h_org_dashboard"
  - condition: "ROI_Habilitacion < 1.0 por ineficiencias de flujo"
    metric: "ROI_Habilitacion"
    threshold: 1.0
    source: "F13.roi_habilitacion"
  - condition: "G1 exige contención adicional tras análisis de F5/F11"
    metric: "H_org"
    threshold: "G1"
    source: "13_metricas_validacion/02_health_gates.md"
```

### Outputs

```yaml
outputs:
  - report: "P02_execution_report.md"
    consumers: ["F13", "F16", "F17", "E4_governance"]
  - artifact: "handoff_reduction_plan.yaml"
    consumers: ["F5", "F11", "F14"]
  - metric_update: "ROI_Habilitacion_post_P02"
    consumers: ["F13", "G1"]
```

