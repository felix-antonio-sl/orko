# CAP-22 Implementation Guide

## Objetivo
Transformar placeholders → calculadoras operativas y validar el método en 6 casos.

## Contexto
CAP-22 cierra los gaps identificados en VG4 (Validation Gate 4) y completa la implementación de calculadoras, schemas y playbooks necesarios para operacionalizar ORKO en terreno.

## Artefactos a producir

### Calculadoras (Excel)
1. **health_score_calculator.xlsx**
   - Hojas: Inputs, Formulas, Defaults, Lineage, Examples
   - Métricas: H_A, H_B, H_C, H_D, H_E → H_org
   
2. **context_decision_matrix.xlsx**
   - Reglas DM1..DM8
   - Estructura: priority, condition, applies (boolean), result, rationale

3. **convergence_tracker.xlsx**
   - Fórmulas E6_current/E6_target
   - Ejemplos por trayectoria (Survival, Minimal, Avanzada)

### Scripts
4. **impl_cap22_run.py**
   - Script de validación E2E
   - Casos de prueba: 01_startup y 06_gore_nuble

### Documentación
5. **CAP22_CHECKLIST.md**
   - Criterios DoD (Definition of Done)
   - Checklist de validación

## Pasos de implementación

### 1. Preparación
```bash
git checkout -b feat/CAP-22-complete
```

### 2. Implementar calculadoras XLSX
- Crear workbooks según blueprints en `calculadoras/`
- Añadir hojas: Inputs, Formulas, Defaults, Lineage, Examples
- Implementar fórmulas según especificaciones

### 3. Añadir lineage y defaults
- Documentar provenance en hoja Lineage
- Calibrar defaults por maturity_level en hoja Defaults

### 4. Ejecutar validación
```bash
cd 40_implementacion_metodologia/dev_specs/scripts
python3 impl_cap22_run.py
```

### 5. Ajustar defaults
- Iterar hasta reproducir resultados de `artefactos.md`
- Casos: 01_startup_50p y 06_gore_nuble

### 6. Commit y PR
```bash
git add .
git commit -m "CAP-22: harden calculadoras, completar FUNDAMENTOS y playbooks P14/P15"
git push origin feat/CAP-22-complete
```

## Criterios de éxito

### Health Score Calculator
- [ ] H_org calculado coincide con valores simulados (±2 puntos)
- [ ] Fórmulas H_A..H_E implementadas correctamente
- [ ] Defaults calibrados para 3 niveles de madurez

### Context Decision Matrix
- [ ] 8 reglas DM1..DM8 implementadas
- [ ] Prioridad correcta (10, 20, ..., 80)
- [ ] Casos de prueba pasan validación

### Convergence Tracker
- [ ] E6_current calculado correctamente
- [ ] E6_target por trayectoria implementado
- [ ] Gap y convergence_score funcionan

### Scripts
- [ ] `impl_cap22_run.py` ejecuta sin errores
- [ ] Resultados coinciden con artefactos.md

## Pruebas automáticas

Ver `CAP22_CHECKLIST.md` para lista completa de verificaciones.

## Referencias
- `artefactos.md` casos 01 y 06 (valores simulados)
- `F13_health_monitoring.md` (inputs/outputs)
- `playbook_schema.yaml` v0.2
- `DEPENDENCY_GRAPH.yaml`

## Notas
- Blueprints en modo texto facilitan revisión
- Conversión a .xlsx puede hacerse manualmente o con script
- Validar visualmente en Excel/LibreOffice
