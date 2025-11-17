# F15 – Continuous Execution

## §0 FUNDAMENTO

```yaml
fase_id: F15
nombre_canonico: "Continuous Execution"
vocabulos_referencia:
  wslc_phase: "VOCABULARIO_CONTROLADO.layer_3.wslc_phases.F15"
  axiomas:
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A1_Organizacion"
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A2_Capacidad"
  primitivos:
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P1_Capacidad"
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P2_Flujo"
  invariantes:
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I6_Trajectory_Awareness"
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I5_HAIC"
  dominios:
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D4_Operacion"
  metricas_canonicas:
    - "VOCABULARIO_CONTROLADO.layer_1.metricas_canonicas.eta_org"
relacion_kernel:
  depende_de:
    - "F13"
    - "F14"
    - "F11"
  prepara_a:
    - "F16"
trayectorias_soportadas:
  - "Minimal"
  - "Avanzada"
estado_fundamento: "STABLE"
notas_fundamento: |
  F15 regula la operación continua (runbooks, SLOs, cadence). Entregables: runbook_catalog.md, SLO_definitions.yaml, cadence_policy.md.
  Trazabilidad: cada runbook ligado a E7 y a playbooks con ADRs.
referencias_formales:
  - "SPEC_ARQUITECTURA_DEFINITIVA.§1.4.Continuous_Execution"
```
