# How to contribute

[Русский](CONTRIBUTING.md)

## What counts as official

The builds and releases the author publishes on the product page and in the
Releases section are the official ones. Everything else — forks, repackaged
builds, patches layered on top — is unofficial, even when it works.

A change does not become official by itself. It becomes official when the
author accepts it: reviews it, merges it, and credits whoever wrote it. In an
official release the author of the change stands next to the author of the
project — on the app's first screen and in the history of changes.

This is not secrecy and not a ban. Changes are welcome and the credit is kept.
What makes a change official is the author's decision, not its existence.

## Signing your commits (DCO)

Every commit must carry a `Signed-off-by` line — that is the Developer
Certificate of Origin. One flag adds it:

```bash
git commit -s -m "A clear message"
```

`-s` appends a line like:

```
Signed-off-by: Name <email>
```

It is a statement: "I wrote this code (or it comes from a signed source), I
have the right to submit it under the project's license, and I do so
voluntarily."

The signature is what lets the author relicense the whole project later
without tracking down every contributor separately.

## How to send a change

1. Make a branch off `main`.
2. Make your changes, signing every commit with `-s`.
3. Open a pull request against `main`.
4. Describe what changed and why.

The `Build and validate workflows` check has to pass: it builds the project and
validates the workflow files. The sign-off check requires a `Signed-off-by`
line on every commit in the pull request.

## What is welcome

- Fixes and small improvements, described as "what was wrong and what it is
  now".
- Translations: the app speaks two languages and the translations sometimes
  fall behind.
- Bug reports with steps to reproduce.

## What is not

- Changes that alter the license or the terms of use.
- Heavy dependencies for one small feature.
- Changes that break the offline mode: the app must not start talking to the
  network.
- Repackaged builds published as if they were the project's own — those are
  unofficial builds, and the author should hear about it rather than find it
  under the project's name.

## License

Contributions are accepted under the project's license — Apache-2.0. See
[LICENSE](LICENSE).
