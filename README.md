# THE WORLD — Wednesday, 18 November 2026

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/fahroz1/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/fahroz1/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

My entry for the [news-image-20261118](https://make.fun/bounty/news-image-20261118)
bounty on [make.fun](https://make.fun): sum up the world's news of Wednesday
18 November 2026 in one image.

## The front page

A one-page newspaper, **THE WORLD**, drawn for the day's news:

- **Lead:** Ukraine brings down the Crimea Bridge road arch — the 227-metre
  arch falls into the Kerch Strait after two days of strikes; two killed,
  road traffic shut, trains running again on the rail span.
- **Gulf:** U.S. jets hit an Iranian missile site on Qeshm Island; Iran fires
  drones at U.S. bases in Bahrain and Kuwait.
- **APEC:** the Shenzhen summit opens; the first-ever Trump–Xi–Putin meeting
  is set for Thursday.
- **U.S. politics:** Mary Peltola flips the Alaska Senate seat; Democrats
  finish the midterms with a 56–44 majority.
- **Health:** the U.S. loses its measles-free status after 26 years; Ebola in
  DR Congo passes 11,000 cases.
- **Weather:** Category 5 Cyclone Xavier batters the Northern Cook Islands.

## How it works

`main.ts` (Node 22, standard library only, no network) copies the finished
front page, `entry.png` (1024×1024, PNG), to `/output/entry.png`. The run is
fully deterministic: the same bytes are written on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
