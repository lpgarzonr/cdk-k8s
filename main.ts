import { Construct } from "constructs";
import { App, Chart, ChartProps } from "cdk8s";
import { KubeDeployment, KubeService, IntOrString } from "./imports/k8s";

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);

    // define resources here
    const label = { app: "cdk-nginx-label" };

    new KubeService(this, "leidy-service", {
      metadata: {
        name: "cdk-nginx-service",
        labels: {
          run: "nada",
        },
      },
      spec: {
        type: "LoadBalancer",
        ports: [{ port: 80, targetPort: IntOrString.fromNumber(80) }],
        selector: label,
      },
    });

    new KubeDeployment(this, "leidy-deployment", {
      metadata: {
        name: "cdk-nginx-deployment",
      },
      spec: {
        replicas: 1,
        selector: {
          matchLabels: label,
        },
        template: {
          metadata: { labels: label },
          spec: {
            initContainers: [
              {
                name: "init-container",
                image: "alpine",
                command: [
                  "/bin/sh",
                  "-c",
                  "echo Dale a tu cuerpo alegria macarena..... He macarena ay >> /usr/share/nginx/html/index.html",
                ],
              },
            ],
            containers: [
              {
                name: "cdk-nginx",
                image: "nginx:mainline",
                ports: [{ containerPort: 80 }],
              },
            ],
          },
        },
      },
    });
  }
}

const app = new App();
new MyChart(app, "cdk-k8s");
app.synth();
