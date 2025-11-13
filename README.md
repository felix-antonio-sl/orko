# ORKO Framework

**Fundamento Riguroso para la Transformación Digital Organizacional**

[![Licencia](https://img.shields.io/badge/Licencia-Propietaria-red.svg)]()
[![Estado](https://img.shields.io/badge/Estado-En%20Desarrollo-blue.svg)]()
[![Origen](https://img.shields.io/badge/Origen-GORE%20Ñuble-lightgrey.svg)]()

---

## 🎯 ¿Qué es ORKO?

ORKO es un **marco arquitectónico** para la transformación digital, nacido de la necesidad de gestionar y modernizar sistemas complejos en el **Gobierno Regional de Ñuble, Chile**. Desde este origen práctico, el proyecto pivota ambiciosamente para ofrecer un sistema formal y adaptable a cualquier organización.

A diferencia de metodologías ad-hoc, ORKO propone:

- **Fundamento teórico formal** (Axiomas, Primitivos, Invariantes).
- **Arquitectura operacional** (Contratos, Principios, Relaciones).
- **Metodología ejecutable** (Fases, Playbooks, Trayectorias).

**Innovación Clave:** ORKO busca unificar Arquitectura Empresarial y Diseño de Transformación en un sistema único, coherente y con trazabilidad bidireccional, desde los axiomas hasta la implementación.

---

## 🏗️ Arquitectura: Sistema de 5 Capas

```
┌─────────────────────────────────────────────────────────────┐
│ Capa 4: PLATAFORMA                                          │
│ Implementación software, artefactos desplegables            │
│ └─ Estado: Contratos completos (OpenAPI 3.1)               │
├─────────────────────────────────────────────────────────────┤
│ Capa 3: METODOLOGÍA                                         │
│ 18 fases WSLC, playbooks, trayectorias, governance         │
│ └─ 40_implementacion_metodologia/, 30_metodologia_orko/    │
├─────────────────────────────────────────────────────────────┤
│ Capa 2: TEJIDOS TECNOLÓGICOS (Opcional - Trayectoria Avanzada)│
│ TF1-TF7: Capacidad, Flujo, Información, Analítica, etc.    │
│ └─ 20_tejidos/                                             │
├─────────────────────────────────────────────────────────────┤
│ Capa 1: ARQUITECTURA                                        │
│ Contratos C1-C5, Principios PD1-PD75, Relaciones R1-R15    │
│ └─ 10_arquitectura_orko/                                   │
├─────────────────────────────────────────────────────────────┤
│ Capa 0: FUNDAMENTOS TEÓRICOS                                │
│ Axiomas A1-A5, Primitivos P1-P5, Invariantes I1-I8         │
│ └─ 00_fundamentos_teoricos/                                │
└─────────────────────────────────────────────────────────────┘
```

**Propiedad de Trazabilidad (I3):** El diseño aspira a que cada elemento trace bidireccionalmente a los fundamentos formales.

---

## 📂 Estructura del Repositorio

```
orko/
├── 00_fundamentos_teoricos/           # Capa 0: Teoría Pura
├── 10_arquitectura_orko/              # Capa 1: Arquitectura Lógica
├── 20_tejidos/                        # Capa 2: Tejidos Tecnológicos (Opcional)
├── 30_metodologia_orko/               # Capa 3: Metodología Ejecutable
├── 40_implementacion_metodologia/     # Capa 4: Plataforma (En Progreso)
└── 90_referencias_fundacionales/      # Fuentes Académicas y Teóricas
```

---

## 🚀 Inicio Rápido

### Para Ejecutivos (30 min lectura)

1. **[00_fundamentos_teoricos/01_axiomas.md](00_fundamentos_teoricos/01_axiomas.md)** — Los 5 axiomas irreducibles.
2. **[00_fundamentos_teoricos/02_primitivos.md](00_fundamentos_teoricos/02_primitivos.md)** — Los 5 primitivos mínimos.
3. **[10_arquitectura_orko/00_introduccion.md](10_arquitectura_orko/00_introduccion.md)** — Resumen de la arquitectura.
4. **[30_metodologia_orko/09_trayectorias/](30_metodologia_orko/09_trayectorias/)** — Las 3 trayectorias de adopción.

### Para Arquitectos (4-6 horas)

1. Leer **Capa 0** (00_fundamentos_teoricos/) en secuencia.
2. Estudiar **Capa 1** (10_arquitectura_orko/) para entender contratos y principios.
3. Explorar **Capa 3** (30_metodologia_orko/) para aplicar las fases.

---

## 🎯 Roadmap y Desafíos Abiertos

ORKO es un proyecto ambicioso en desarrollo. La siguiente lista representa nuestra hoja de ruta y los desafíos que estamos abordando activamente para fortalecer el framework.

1. **Validación Formal y Empírica:**
    - **Desafío:** Las afirmaciones sobre la preservación de invariantes (ej. "100%") y los resultados empíricos (ej. `H_org` 35→72) requieren evidencia robusta.
    - **Roadmap:** Publicar artefactos de prueba formales (TLA+/Alloy), junto con los datasets y protocolos de las validaciones empíricas para garantizar la reproducibilidad y la revisión por pares.

2. **Definición de un "ORKO Mínimo Viable" (MVO):**
    - **Desafío:** El framework completo (75 principios, 5 capas) puede ser abrumador y costoso de adoptar.
    - **Roadmap:** Definir un subconjunto priorizado de contratos, principios y artefactos para las trayectorias "Mínima" y "Survival", enfocado en entregar valor rápido con una carga burocrática mínima.

3. **Escalabilidad y Coste de Estados (E6/E7):**
    - **Desafío:** La captura de snapshots arquitectónicos (E6) y trazas de ejecución (E7) puede generar un volumen de datos masivo.
    - **Roadmap:** Desarrollar una arquitectura técnica de referencia que aborde la estimación de tamaño, RPO/RTO, políticas de retención (GDPR), y estrategias de compresión para asegurar la viabilidad económica y operativa.

4. **Gobernanza de la Delegación Humano-IA (M1-M6):**
    - **Desafío:** La especificación actual de los modos de delegación (TF1) no detalla la responsabilidad legal ni los procesos de auditoría para decisiones algorítmicas.
    - **Roadmap:** Crear políticas ejecutables que definan la responsabilidad legal por modo, criterios auditables para "guardrails integrales" y playbooks de incidentes para fallos de agentes autónomos.

5. **Catálogo de Controles Regulatorios:**
    - **Desafío:** Las menciones a MGDE, GDPR e HIPAA son aspiracionales sin un mapeo técnico concreto.
    - **Roadmap:** Construir una "Matriz de Controles Regulatorios" que mapee requisitos legales a controles técnicos y organizacionales de ORKO, con evidencia de cumplimiento.

6. **Especificación Operativa de Contratos OpenAPI:**
    - **Desafío:** Los contratos actuales carecen de detalles operativos como autenticación, manejo de errores y versionado.
    - **Roadmap:** Enriquecer los contratos OpenAPI con un modelo de errores estándar (4xx/5xx), scopes de seguridad (OAuth/OIDC), y una estrategia de versionado clara.

7. **Definiciones Operacionales de Métricas:**
    - **Desafío:** Métricas como `H_org` y `V_org` necesitan definiciones matemáticas precisas y algoritmos de cálculo transparentes.
    - **Roadmap:** Publicar la formulación exacta de las métricas clave, incluyendo tratamiento de datos ausentes, ventanas de tiempo y análisis de sensibilidad.

8. **Estrategia de Migración de Esquemas (PD74):**
    - **Desafío:** El principio de "Ruta de Migración Documentada" es teórico y necesita ser probado.
    - **Roadmap:** Desarrollar y probar una estrategia de versionado por entidad, con scripts de migración idempotentes y planes de rollback con SLAs definidos.

---

## 🤝 Contribuciones

ORKO es un proyecto en desarrollo activo. Las contribuciones son bienvenidas, especialmente en las áreas de:

- **Verificación Formal:** Ayuda para mecanizar pruebas de teoremas (Coq, Isabelle, TLA+).
- **Casos de Uso:** Aplicación del framework en nuevos contextos y publicación de resultados.
- **Implementación de Tejidos:** Desarrollo de los paquetes de Python para los tejidos tecnológicos.

---

## 📄 Licencia

**Propietaria** — © 2024-2025 Felix Sanhueza. Todos los derechos reservados.

Se planea un futuro release bajo una licencia open-source permisiva (Apache 2.0 o MIT).

---

**ORKO** — *Desde Primeros Principios hasta Producción, Rigurosamente.*
