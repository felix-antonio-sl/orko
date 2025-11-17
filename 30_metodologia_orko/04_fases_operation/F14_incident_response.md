# F14 – Incident Response

## §0 FUNDAMENTO

```yaml
fase_id: F14
nombre_canonico: "Incident Response"
vocabulos_referencia:
  wslc_phase: "VOCABULARIO_CONTROLADO.layer_3.wslc_phases.F14"
  axiomas:
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A3_Flujo"
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A4_Contexto"
  primitivos:
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P2_Flujo"
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P3_Informacion"
  invariantes:
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I5_HAIC"
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I3_Trazabilidad"
  dominios:
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D4_Operacion"
  metricas_canonicas:
    - "VOCABULARIO_CONTROLADO.layer_1.metricas_canonicas.H_org"
relacion_kernel:
  depende_de:
    - "F13"
    - "F11"
    - "TF2_Flow"
  prepara_a:
    - "F15"
trayectorias_soportadas:
  - "Survival"
  - "Minimal"
estado_fundamento: "STABLE"
notas_fundamento: |
  F14 define el proceso responsable por incidentes que afectan H_org o la integridad de E7.
  Outputs: incident_report.md, incident_RCA.md, recovery_plan.yaml.
  Integración: playbooks P01/P04/P09 previstos. Se usan T10_incident_report.md y TEMPLATE_PLAYBOOK.md.
referencias_formales:
  - "30_metodologia_orko/04_fases_operation/F13_Health_Monitoring.md"
```
