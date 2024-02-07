import * as opentelemetry from '@opentelemetry/sdk-node';
import {Resource} from "@opentelemetry/resources";
import {SemanticResourceAttributes} from "@opentelemetry/semantic-conventions";
import {HttpInstrumentation} from "@opentelemetry/instrumentation-http";
import {ExpressInstrumentation} from "@opentelemetry/instrumentation-express";
import {NestInstrumentation} from "@opentelemetry/instrumentation-nestjs-core";
import {JaegerExporter} from "@opentelemetry/exporter-jaeger";

export const otelSDK = new opentelemetry.NodeSDK({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'lo-service-otel',
    }),
    traceExporter: new JaegerExporter(),
    //spanProcessor: new SimpleSpanProcessor(ct),
    instrumentations: [
        new HttpInstrumentation(),
        new ExpressInstrumentation(),
        new NestInstrumentation(),
    ],
});