# Fantastic Prayers (1995)
### Restoration prototype

A web reconstruction and archival recovery project for the CD-ROM work  
**Fantastic Prayers** by Tony Oursler, Constance DeJong, and Stephen Vitiello.

This repository contains a working web prototype of **Fantastic Prayers** (1995), originally created by Tony Oursler, Constance DeJong, and Stephen Vitiello.

The goal of this project is to reconstruct the original interactive experience from the CD-ROM while also supporting the recovery of original media assets that may exist in collaborators' archives.

The prototype currently focuses on rebuilding the **Walls** section of the work.

---

## Live prototype

Prototype environment  
https://fantasticprayers.org

Asset catalog  
https://fantasticprayers.org/catalog

---

# Project structure

fantastic-prayers/
│
├─ index.html
│   Entry page for the prototype (password protected).
│
├─ catalog/
│   Internal asset catalog used to review and reconcile media files.
│
├─ data/
│   JSON files describing audio and video assets used in the prototype.
│
├─ assets/
│   Extracted media from the original CD-ROM.
│
│   ├─ audio/
│   └─ video/
│
├─ frames/
│   Image frames used for the Walls interface.
│
└─ README.md

---

# Running the project locally

Because the catalog loads JSON files, the project must be served from a local web server.

From the project directory:

cd fantastic-prayers
python3 -m http.server 8000

Then open:

Prototype:

http://localhost:8000

Asset catalog:

http://localhost:8000/catalog

Stop the server with:

Ctrl + C

---

# Asset reconciliation workflow

The catalog page is used to help collaborators identify and recover original media assets.

/catalog/index.html

For each asset the catalog provides:

- filename from the CD-ROM
- description of how it appears in the work
- audio/video preview
- loop information (for audio)
- upload tool for matching source files

Collaborators can upload higher-quality or original source files directly from the catalog interface.

Uploads are stored in Google Drive:

Fantastic Prayers Restoration
/incoming
/raw-uploads

Uploaded files are automatically renamed to associate them with the catalog asset.

Example:

door-creak__2026-03-11_18-22-10__original.aiff

This helps track multiple candidate source files.

---

# Asset metadata

The catalog is driven by JSON files located in:

/data

Current schemas:

walls-audio.json
walls-video.json

These files define:

- asset title
- filename
- path to CD-ROM media
- description
- loop behavior (audio)

The catalog UI reads these files to generate the review interface.

---

# Current scope

The repository currently reconstructs:

- the **Walls** environment
- associated audio triggers
- associated video interactions
- a catalog system for asset recovery

Future work may include reconstruction of additional sections of the original CD-ROM.

---

# Authors of the original work

Tony Oursler  
Constance DeJong  
Stephen Vitiello  

Fantastic Prayers was originally released as a CD-ROM in 1995.

---

# Project status

This repository is an experimental reconstruction and archival effort intended to:

- recover original media assets
- preserve the structure of the work
- explore how the project can live again in modern web technology