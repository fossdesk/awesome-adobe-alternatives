# Awesome Adobe Alternatives

Maintained for [FOSS Desk](https://fossdesk.com/) — a guide to free, open-source alternatives to paid creative software.

## Initial verified list

This initial list covers six projects. It is not a complete replacement map for every Adobe app. Versions are a recorded metadata snapshot, checked on 2026-11-12; see the official sites for current releases. These are metadata checks, not hands-on software reviews.

| Software | Recorded version | Release date | Official download page | Version evidence |
| --- | --- | --- | --- | --- |
| darktable | 5.6.2 | 2026-10-04 | [Official website](https://www.darktable.org/install/) | [Source](https://github.com/darktable-org/darktable/releases/tag/release-5.6.2) |
| RawTherapee | 5.13 | 2026-07-26 | [Official website](https://rawtherapee.com/downloads/) | [Source](https://github.com/RawTherapee/RawTherapee/releases/tag/5.13) |
| Shotcut | 26.9.27 | 2026-09-28 | [Official website](https://shotcut.org/download/) | [Source](https://github.com/mltframework/shotcut/releases/tag/v26.9.27) |
| GIMP | 3.2.8 | 2026-11-02 | [Official website](https://www.gimp.org/downloads/) | [Source](https://www.gimp.org/downloads/) |
| Krita | 5.3.4.1 | 2026-10-07 | [Official website](https://krita.org/en/download/) | [Source](https://krita.org/en/download/) |
| Inkscape | 1.4.4 | 2026-05-06 | [Official website](https://inkscape.org/release/) | [Source](https://lists.inkscape.org/hyperkitty/list/inkscape-docs@lists.inkscape.org/message/OCEYDBJCKK2ZF65O3FNKZOSTL7JBTZND/) |

This is an independent, unofficial list, unaffiliated with Adobe or the listed projects. All links point to official websites or project releases. No installers are hosted or mirrored here.

## Read-only release check

Requires Node.js 22 or newer. No packages or private repository files are required:

```sh
node fetch-releases.mjs --list
node fetch-releases.mjs
```

The script only sends GET requests to the official GitHub release API and prints JSON to stdout. It does not create repositories, change GitHub data, download installers, or write files. An optional GITHUB_TOKEN environment variable can increase API rate limits; never commit a token.

GitHub-hosted release metadata is checked automatically for configured auto projects. Manual projects report their official website only; the script does not invent a current version for them. Errors are isolated per project and produce a nonzero exit code. Raw release assets can include source or auxiliary files and are not all installers.

This README and the standalone script are generated from the FOSS Desk source data. Edit the canonical data there and regenerate, rather than maintaining a second software list here.
