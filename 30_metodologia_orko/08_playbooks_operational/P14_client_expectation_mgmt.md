
# P14_client_expectation_mgmt

**Tipo:** Playbook Recovery  
**ID:** P14  
**Trigger:** Brecha relevante entre expectativas de clientes y resultados percibidos reflejada en `H_org`/`eta_org`/`ROI_Habilitacion`  
**Estimación Ejecución:** `P2W`

---

## §0. FUNDAMENTO

**Layer 0:** `A1`, `A3`, `A5`, `P2`, `P5`, `I3`, `I6`, `I8`  
**Layer 1:** `D1`, `D2`, `E6`  
**Layer 2:** `TF1`, `TF2`

**Justificación:** P14 aborda situaciones donde existe un gap entre lo que clientes esperan y lo que la organización entrega, manifestado en métricas como `H_org`, `eta_org` o `ROI_Habilitacion`. Su objetivo es alinear expectativas, compromisos y capacidades, apoyándose en casos (`14_casos_uso`) y trayectorias para evitar decisiones reactivas que degraden aún más `H_org`.

---

## §1. INTERFAZ

### Trigger Conditions

```yaml
triggers:
  - condition: "Feedback sistemático de clientes indica insatisfacción a pesar de métricas internas razonables"
    metric: "H_org"
    threshold: "satisfaccion_baja"
    source: "F13.h_org_dashboard"
  - condition: "Casos de uso muestran brechas entre promesas comerciales y ejecución real"
    metric: "eta_org"
    threshold: "brecha_expectativas"
    source: "case_instances.yaml"
```

### Outputs

```yaml
outputs:
  - report: "P14_client_expectation_mgmt_report.md"
    consumers: ["F1", "F3", "F13", "F16", "E4_governance"]
  - artifact: "client_expectation_alignment_plan.yaml"
    consumers: ["F1", "F3", "trayectorias.Survival", "trayectorias.Minimal", "trayectorias.Avanzada"]
```

