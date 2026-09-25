# Fantastic Prayers
### Working proposal and browser reassembly prototype

A web reconstruction and archival recovery project for the CD-ROM work  
**Fantastic Prayers** by Constance DeJong, Tony Oursler, and Stephen Vitiello.

This repository contains the working project website and the first browser
reassembly prototype for **Fantastic Prayers**, originally created by Constance
DeJong, Tony Oursler, and Stephen Vitiello.

The website shares the preservation, emulation, and non-destructive disassembly
work already accomplished; introduces the ten designed sections; and opens a
conversation about faithful reconstruction, representative browser excerpts, and
possible future forms. The interactive prototype currently focuses on rebuilding
**Walls That Speak**.

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
├─ index.html          Password-gated working-site entry
├─ project/            Artist-facing project update
├─ environments/       Index of the ten designed sections
├─ site-assets/        Shared presentation CSS and entry behavior
├─ world/              Transition into the Walls prototype
├─ walls/              Walls That Speak browser reassembly
├─ catalog/            Internal Walls asset-reference interface
├─ data/               Walls audio/video metadata
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

The repository currently presents:

- a working project update for artist review
- an initial index of all ten designed sections
- the **Walls That Speak** browser prototype
- associated audio triggers
- associated video interactions
- a catalog system for asset recovery

Current next steps include emulator recordings, interactive browser excerpts,
deeper project history, and reconstruction of additional sections of the original
CD-ROM.

---

# Authors of the original work

- Constance DeJong
- Tony Oursler
- Stephen Vitiello

Fantastic Prayers was originally released as a CD-ROM in 1995.

---

# Project status

This repository is a working artist-review site and experimental reconstruction
effort intended to:

- communicate the preservation and disassembly work clearly;
- recover and reconcile original media assets;
- preserve the structure and behavior of the work;
- explore how the project can live again in modern web technology.
