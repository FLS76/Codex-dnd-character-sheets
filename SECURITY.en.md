# Security policy

[Русский](SECURITY.md)

The app runs on your computer, sends nothing to the network and needs no
account. Anything that breaks that promise is a vulnerability, and it is worth
reporting.

## How to report

Do not open a public issue. Use the **Report a vulnerability** button on the
Security tab:

https://github.com/fworkslab/Codex-dnd-character-sheets/security/advisories/new

GitHub delivers the report to the author directly. The project has no mailbox
of its own, so the GitHub form is the only channel.

## What to include

- the app version (shown on the first screen) and the platform;
- steps to reproduce;
- what you expected and what happened;
- if possible, a screenshot or the character file where the problem shows.

## What counts as a vulnerability

- code running in the app where it should not;
- **any network traffic** — the app promises not to send data out, so an
  unauthorized request breaks both security and the privacy promise in the
  README;
- reading or modifying files outside the app's data folder;
- bypassing the restrictions that keep a character out of a shared table.

## What does not count

- vulnerabilities in Electron, Chromium, Capacitor and their dependencies —
  report those to whoever releases them;
- mistakes in D&D rules, translations or layout.

## Supported versions

| Version | Supported |
| ------- | --------- |
| 1.0.x   | yes       |

Fixes ship in new releases. The app does not update itself, so when a new
version comes out, get it from the product page:

https://fworkslab.github.io/products/codex/

## What happens next

- acknowledgement of the report — within a few days;
- assessment and a plan — within two weeks;
- a fix — in the next release; the author will state the exact date in the
  reply to your report.

## Public disclosure

Details are not published before the fix is out. Once the release is out, the
discussion may become public if you agree to that.
