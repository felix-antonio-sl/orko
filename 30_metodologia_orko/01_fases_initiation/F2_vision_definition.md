# F2 – Vision Definition

## §0 FUNDAMENTO

```yaml
fase_id: F2
nombre_canonico: "Vision Definition"
vocabulos_referencia:
  wslc_phase: "VOCABULARIO_CONTROLADO.layer_3.wslc_phases.F2"
  axiomas:
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A2_Proposito"
  primitivos:
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P5_Proposito"
  invariantes:
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I3_Trazabilidad"
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I5_HAIC"
  dominios:
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D1_Arquitectura"
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D3_Decision"
relacion_kernel:
  depende_de:
    - "F1"
    - "F3"
  prepara_a:
    - "F7"
    - "F9"
trayectorias_soportadas:
  - "Minimal"
  - "Avanzada"
  - "Survival"
```

## §1 INTERFAZ

```yaml
inputs:
  - id: "F1.context_profile_36_params"
    fuente: "F1"
  - id: "F1.h_org_baseline"
    fuente: "F1"
  - id: "F3.trajectory_selected"
    fuente: "F3"
  - id: "F3.timeline_commitment"
    fuente: "F3"
  - id: "F3.budget_allocation"
    fuente: "F3"
  - id: "F7.okr_L4"
    fuente: "F7"
outputs:
  - id: "vision_statement"
    archivo: "vision_statement.md"
    descripcion: "Narrativa de vision ligada a F2 (Vision Definition)"
  - id: "vision_constraints"
    archivo: "vision_constraints.yaml"
    descripcion: "Conjunto de limites macro modelados con P4_Limite"
  - id: "okr_L4"
    descripcion: "OKR de nivel organizacional consumidos por F7 y F9"
  - id: "okr_L4_refined"
    descripcion: "Version refinada de okr_L4 cuando aplique"
  - id: "north_star"
    descripcion: "Declaracion North Star alineada a F2 y F9"
  - id: "north_star_metrics"
    descripcion: "Conjunto de metricas asociadas a north_star"
dependencies:
  reads_from:
    - "F1"
    - "F3"
    - "F7"
  writes_to:
    - "F3"
    - "F7"
    - "F9"
```

