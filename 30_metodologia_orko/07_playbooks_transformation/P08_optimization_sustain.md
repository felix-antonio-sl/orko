
# P08_optimization_sustain

**Tipo:** Playbook Transformation  
**ID:** P08  
**Trigger:** Transformación ya escalada; necesidad de sostener/optimizar `H_org`/`eta_org` evitando drift operativo  
**Estimación Ejecución:** `P4W`

---

## §0. FUNDAMENTO

**Layer 0:** `A1`, `A3`, `A5`, `P1`, `P2`, `P5`, `I3`, `I6`, `I8`  
**Layer 1:** `D1`, `D2`, `D4`, `E6`, `E7`  
**Layer 2:** `TF1`, `TF2`

**Justificación:** Una vez escalada la transformación (P07), el riesgo principal es el drift entre estado objetivo y ejecución real. P08 establece cómo sostener y optimizar `H_org`, `eta_org` y `ROI_Habilitacion` en el tiempo, apoyándose en monitoreo (`F13`), ejecución continua (`F15`) y ciclos de aprendizaje (`F16`), preservando consistencia temporal (`I8`).

---

## §1. INTERFAZ

### Trigger Conditions

```yaml
triggers:
  - condition: "Transformación escalada completada (P07 cerrado) y H_org/eta_org en rango aceptable"
    metric: "H_org"
    threshold: ">= 70"
    source: "F13.h_org_dashboard"
  - condition: "Riesgo de drift detectado en tendencias de H_org/eta_org/ROI_Habilitacion tras la escala"
    metric: "eta_org"
    threshold: "tendencia_negativa"
    source: "F13.eta_org_dashboard"
```

### Outputs

```yaml
outputs:
  - report: "P08_optimization_sustain_report.md"
    consumers: ["F13", "F15", "F16", "F18", "E4_governance"]
  - artifact: "optimization_sustain_plan.yaml"
    consumers: ["F15", "F16", "trayectorias.Minimal", "trayectorias.Avanzada"]
```

