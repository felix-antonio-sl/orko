# F7 – Purpose Cascade

## §0 FUNDAMENTO

```yaml
fase_id: F7
nombre_canonico: "Purpose Cascade"
vocabulos_referencia:
  wslc_phase: "VOCABULARIO_CONTROLADO.layer_3.wslc_phases.F7"
  axiomas:
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A2_Proposito"
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A5_Cambio"
  primitivos:
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P5_Proposito"
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P1_Capacidad"
  invariantes:
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I3_Trazabilidad"
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I5_HAIC"
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I7_Coherencia"
  dominios:
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D1_Arquitectura"
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D3_Decision"
  metricas_canonicas:
    - "VOCABULARIO_CONTROLADO.layer_1.metricas_canonicas.H_org"
relacion_kernel:
  depende_de:
    - "F2"
    - "F3"
  prepara_a:
    - "F9"
    - "F11"
trayectorias_soportadas:
  - "Minimal"
  - "Avanzada"
estado_fundamento: "STABLE"
notas_fundamento: |
  F7 define la cascada de propósito (OKR L4→L3→L2) y su mecanismo de verificación.
  Entregables: okr_L4_refined, purpose_policy.yaml, okr_alignment_report.
  Requiere: TEMPLATE_PLAYBOOK.md y T07_okr_cascade.xlsx.
referencias_formales:
  - "SPEC_ARQUITECTURA_DEFINITIVA.§1.3.Purpose_Cascade"
```

Implementación: usar T07_okr_cascade.xlsx (templates) y el RACI: Sponsor L1 (humano), Architect, PMO.
