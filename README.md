# Reproducer for https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1925

## How to use

- `npm ci`
- `npm run build`
- `docker compose up` (starts Jaeger)
- `npm run start:dev`
- open http://localhost:3000/cats`
- go to http://localhost:16686/ (Jaeger) and inspect the traces