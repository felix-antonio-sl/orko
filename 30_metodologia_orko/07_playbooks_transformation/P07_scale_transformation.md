
# P07_scale_transformation

**Tipo:** Playbook Transformation  
**ID:** P07  
**Trigger:** Piloto (P06) exitoso con mejora sostenida en `H_org`/`eta_org` y decisión de escalar a más dominios  
**Estimación Ejecución:** `P8W`

---

## §0. FUNDAMENTO

**Layer 0:** `A1`, `A3`, `A5`, `P1`, `P2`, `P5`, `I3`, `I6`  
**Layer 1:** `D1`, `D2`, `D4`, `E6`, `E7`  
**Layer 2:** `TF1`, `TF2`

**Justificación:** Tras un piloto exitoso (P06) que mejora `H_org` y `eta_org` en un dominio acotado, P07 define cómo escalar la transformación a más unidades/dominos sin perder trazabilidad (`I3`) ni capacidad de adaptación (`I6`), manteniendo el alineamiento con propósito (`P5`) y capacidades (`P1`).

---

## §1. INTERFAZ

### Trigger Conditions

```yaml
triggers:
  - condition: "P06 demuestra mejora sostenida en H_org y eta_org en dominio piloto"
    metric: "H_org"
    threshold: "mejora_confirmada"
    source: "F13.h_org_dashboard"
  - condition: "Evaluación F9/F11 recomienda escalar el diseño piloto a más dominios"
    metric: "eta_org"
    threshold: "por_sobre_target_piloto"
    source: "F13.eta_org_dashboard"
```

### Outputs

```yaml
outputs:
  - report: "P07_scale_transformation_report.md"
    consumers: ["F9", "F11", "F12", "F15", "F17", "E4_governance"]
  - artifact: "scale_transformation_plan.yaml"
    consumers: ["F11", "F12", "F15", "trayectorias.Minimal", "trayectorias.Avanzada"]
```

