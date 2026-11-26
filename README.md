[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/sosissausage35-collab/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/sosissausage35-collab/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# news-image-20261126

One image summing up the world news of **Thursday 26 November 2026** — a
one-page front page generated fresh in this session from that day's reporting.
`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`); no network, no
randomness, identical bytes on every run.

## Stories depicted

1. **OIL SPIKE — Houthis claim Ras Tanura refinery strike; Brent $94.61.**
   Yemen's Houthis said on Wednesday they had attacked Saudi Arabia's Ras
   Tanura refinery, the kingdom's largest, and Riyadh's financial district;
   the Saudi-led coalition said air defences destroyed four drones over Ras
   Tanura and reported no injuries. Brent crude settled $3.21 (+3.5%) higher
   at $94.61 a barrel; WTI rose 2% to $83.68.
   — Reuters, 25–26 Nov 2026
2. **TARIFFS — US proposes new duties on 14 partners; Nasdaq slides.**
   The US proposed new tariffs on 14 trading partners under a Section 301
   excess-capacity probe (China, the EU and others); the Nasdaq fell about 4%
   early in Wednesday's session and closed down 0.62% at 23,585.80, while the
   Dow rose, on the eve of the Thanksgiving holiday.
   — Reuters / The Hindu BusinessLine, 26 Nov 2026
3. **CAIRO — 31 killed in tanker fire on Ring Road.**
   A fuel tanker carrying petroleum products crashed and caught fire on the
   Ring Road in the Warraq district of Giza, near Cairo, on Wednesday evening,
   killing at least 31 people and injuring at least 21; more than two dozen
   cars and motorcycles were left charred. Egypt's health ministry called the
   toll preliminary.
   — CNN / The Guardian / The Times, 26 Nov 2026
4. **ALSO — Ukraine hits Russian air base; Duran Duran guitarist Andy Taylor
   dies, 65.**
   Ukraine said it struck a major Russian air base, damaging five planes.
   Andy Taylor, original guitarist of Duran Duran, died peacefully at home
   aged 65 after stage-four prostate cancer; his family and bandmates
   announced it on 25 November.
   — Reuters world news summary / CNN / AP, 25–26 Nov 2026

## Files

- `entry.png` — the entry image, 1024×1024 PNG, 1,009,706 bytes (under the
  1 MiB gate)
- `main.ts` — the entry program
- `source-1600.png` — the 1600×1600 master render the entry image was
  resized from (kept for reference; the program only reads `entry.png`)

## Local test

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
