# P01_low_h_org_recovery

**Tipo:** Playbook Recovery  
**ID:** P01  
**Trigger:** `H_org` en zona crítica (G1/G2)  
**Estimación Ejecución:** `P1D`

---

## §0. FUNDAMENTO

**Layer 0:** `A1`, `A5`, `P1`, `P4`, `I3`, `I6`  
**Layer 1:** `D2`, `D4`, `E6`  
**Layer 2:** `TF1`, `TF2`

**Justificación:** Cuando `H_org` cae por debajo de los umbrales definidos en G1/G2, la organización entra en riesgo operativo. Este playbook articula capacidades (`P1`) y límites (`P4`) para ejecutar una respuesta rápida (F14) basada en las señales de `F13` y asegurar trazabilidad (`I3`) y adaptación controlada (`I6`).

---

## §1. INTERFAZ

### Trigger Conditions

```yaml
triggers:
  - condition: "H_org < 60"
    metric: "H_org"
    threshold: 60
    source: "F13.h_org_dashboard"
  - condition: "H_org cayendo 2 cortes consecutivos"
    metric: "H_org"
    threshold: "tendencia negativa"
    source: "F13.trend_analysis"
  - condition: "G1 o G2 activados"
    metric: "H_org"
    threshold: "G1/G2"
    source: "13_metricas_validacion/02_health_gates.md"
```

### Outputs

```yaml
outputs:
  - report: "P01_execution_report.md"
    consumers: ["F13", "F16", "F17", "E4_governance"]
  - artifact: "h_org_recovery_plan.yaml"
    consumers: ["F14", "F16", "trayectorias.Minimal"]
  - metric_update: "H_org_post_recovery"
    consumers: ["F13", "G1", "G2"]
```

