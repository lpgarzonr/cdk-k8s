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
            containers: [
              {
                name: "nginx",
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
