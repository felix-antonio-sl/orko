# ORKO: Organizational Knowledge Ontology

> **v1.0.0 - "Complexity, Tamed."**

## 🚀 ¿Eres un Usuario Final?
Si buscas usar ORKO para transformar tu organización **AHORA MISMO**, ignora el resto de este repositorio y ve directo a:

👉 **[ORKO_Toolkit_v1.0.0/](ORKO_Toolkit_v1.0.0/)**

Allí encontrarás:
1.  **Guía de Inicio:** `00_COMIENCE_AQUI.md`
2.  **Herramientas:** Calculadoras y Excel listos para usar.
3.  **Kits:** Paquetes de acción según tu nivel de salud (`Survival`, `Minimal`, `Advanced`).

---

## 🏗️ Estructura del Repositorio (Para Desarrolladores/Arquitectos)

Este repositorio contiene el **código fuente** y la **definición teórica** del sistema ORKO.

### `00_fundamentos_teoricos/` (Layer 0)
El "Genoma" de ORKO. Definiciones axiomáticas de Primitivos (P1-P5), Invariantes (I1-I8) y Teoremas.
*   *Estado:* ✅ Estable y auditado.

### `10_arquitectura_orko/` (Layer 1)
Diseño del sistema. Contratos, relaciones y principios de diseño (PD1-PD76).
*   *Estado:* ✅ Estable.

### `20_tejidos/` (Layer 2)
Especificación de los Tejidos Tecnológicos (TF1-TF3) que instancian los primitivos.
*   *Estado:* ✅ Definido.

### `30_metodologia_orko/` (Layer 3)
La "receta" de transformación. Fases, Playbooks y Templates.
*   *Nota:* Contiene los archivos fuente (Markdown/Excel) que luego se empaquetan en el Toolkit.
*   *Estado:* ✅ Completo (algunos archivos secundarios son stubs "Work in Progress").

### `40_implementacion_metodologia/` (Layer 4)
Código y scripts para generar las herramientas.
*   *Contenido:* Scripts Python (`generate_calculadoras.py`), especificaciones de dev y ejemplos.
*   *Estado:* ✅ Funcional.

### `ORKO_Toolkit_v1.0.0/` (Layer 5 - Producto)
El entregable final compilado para el usuario. **Este es el "binario" de la metodología.**

---

## 🛠️ Desarrollo y Contribución

### Generación de Artefactos
Para regenerar las calculadoras y el inventario desde el código fuente:
```bash
cd 40_implementacion_metodologia/dev_specs
source .venv_cap22/bin/activate
python scripts/generate_calculadoras_cap22.py
```

### Principios de Contribución
1.  **Minimalidad:** No agregues nada que no sea estrictamente necesario.
2.  **Trazabilidad:** Todo cambio en el Toolkit debe tener un origen en el Genoma.
3.  **Honestidad:** Si algo es un borrador, márcalo como "WIP".

---
*© 2025 ORKO Project. Licensed under MIT.*
