# AST Inspection AI — Project Gameplan
**Version:** 1.0
**Date:** 2026-03-08
**Status:** Active
**Classification:** Internal — AST Confidential

---

## Vision

A fully local, air-gapped AI inspection intelligence system
built for CANAR Advanced Systems & Technology. Processes
DJI H30T multi-sensor imagery through a dual-LLM architecture
to automate defect detection and inspection report generation
for GCC infrastructure assets.

No cloud dependency. No vendor lock-in. Proprietary model
trained on CANAR's own inspection data. Designed for
eventual integration with LIS inspection reporting platform.

---

## The Problem

- Thousands of H30T inspection images processed manually
- Engineer hours consumed reviewing footage and writing reports
- Generic cloud AI solutions unacceptable for client data
- Previous solution (Scopito) abandoned — cloud-based,
  generic AI, not trained on GCC infrastructure
- Decades of inspection knowledge locked in paper archives
- No system learns from accumulated inspection history

---

## The Solution

A two-component AI system running entirely on local hardware:

**Component 1 — Inspection Intelligence (Qwen2.5)**
Processes H30T imagery, detects defects, cross-references
engineering standards, generates structured inspection reports.

**Component 2 — Operations Intelligence (Qwen2.5-Coder)**
Manages pipeline health, monitors system performance,
handles orchestration and error recovery.

**Vision Layer — YOLOv11**
Fine-tuned on CANAR's own H30T imagery for GCC-specific
defect detection across RGB and thermal sensors.

---

## Architecture

### Hardware
| Environment | CPU | GPU | RAM |
|-------------|-----|-----|-----|
| POC (home) | Ryzen 7 7800X3D | RTX 4080 Super 16GB | 64GB |
| Production | Ryzen 9 Threadripper | RTX 5090 32GB | 256GB |

### Model Configuration
| Role | POC Model | Production Model |
|------|-----------|-----------------|
| Inspection LLM | Qwen2.5:14B | Qwen2.5:32B |
| Operations LLM | Qwen2.5-Coder:7B | Qwen2.5-Coder:14B |
| Vision | YOLOv11m | YOLOv11l |

### Deployment
- Docker containerised — build once, deploy anywhere
- Air-gapped — zero internet dependency at runtime
- Read-only archive — source files cannot be modified
- Append-only logs — immutable audit trail

---

## Security Architecture

- All client data stays on local machine — never transmitted
- Archive folder mounted read-only at OS level
- AI pipeline runs under restricted user account
- No delete permissions anywhere in the system
- Cryptographic hash verification of all source files
- Network isolation verified by packet capture
- Full adversarial test suite documented

---

## Implementation Phases

### Phase 0 — Data Audit & Repository Setup
**Status:** 🔄 Active
**Duration:** 2-3 days
- GitHub account and repository established
- Project site deployed
- Complete inventory of H30T images, reports,
  standards documents, and technical drawings
- Data quality assessment documented

### Phase 1 — Environment Setup & Dual-LLM Foundation
**Status:** ⏳ Upcoming
**Duration:** 3-5 days
- Docker environment with GPU passthrough
- Both LLMs running and verified
- Folder permission structure enforced
- Logging framework operational
- Network isolation configured

### Phase 2 — Data Preparation Pipeline
**Status:** ⏳ Upcoming
**Duration:** 1-2 weeks
- Image preprocessing pipeline
- OCR pipeline for scanned documents
- Report-to-image matching logic
- Standards ingestion into vector database

### Phase 3 — Vision Pipeline
**Status:** ⏳ Upcoming
**Duration:** 1-2 weeks
- Zero-shot baseline measurement
- Defect taxonomy defined
- Label Studio labeling workflow
- Thermal image handling (RJPEG extraction)
- Baseline accuracy documented honestly

### Phase 4 — Dual-LLM Intelligence Layer
**Status:** ⏳ Upcoming
**Duration:** 1-2 weeks
- Inspection report generation pipeline
- Operations monitoring and diagnostics
- Model routing layer
- Hallucination controls implemented
- Evaluation against real reports

### Phase 5 — Integration & UI
**Status:** ⏳ Upcoming
**Duration:** 1 week
- End-to-end pipeline connected
- Streamlit web interface
- System health dashboard
- PDF/Word report export

### Phase 6 — Security Verification
**Status:** ⏳ Upcoming
**Duration:** 3-5 days
- File permission adversarial tests
- Network isolation verification
- Prompt injection attempts documented
- Hash verification report

### Phase 7 — Documentation & Transfer Package
**Status:** ⏳ Upcoming
**Duration:** 1 week
- Full documentation package assembled
- Transfer runbook for work machine
- Container export and verification
- Executive presentation ready

### Phase 8 — LIS Integration
**Status:** ⏳ Future
**Duration:** TBD
- LIS technical audit
- Integration architecture design
- API bridge development
- Pilot integration and testing

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-08 | Dual-LLM architecture | Separation of concerns |
| 2026-03-08 | Docker containerisation | Portability and reproducibility |
| 2026-03-08 | Local-only deployment | Client data confidentiality |
| 2026-03-08 | Qwen2.5 model family | Consistent architecture, strong performance |
| 2026-03-08 | YOLOv11 vision model | Best accuracy/speed balance |
| 2026-03-08 | GitHub: ast-intel | Department-level identity |

---

## Issues Log
*Updated as issues are encountered*

---

## Lessons Learned
*Updated as phases complete*

