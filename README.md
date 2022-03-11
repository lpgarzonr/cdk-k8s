# cdk-k8s
After the awesome k8s training provided by SAP I got curios to try CDK for kubernetes and found [cdk8s](https://cdk8s.io/docs/latest/getting-started/), this is awesome!!

cdk8s is a software development framework for defining Kubernetes applications and reusable abstractions using familiar programming languages and rich object-oriented APIs. cdk8s generates pure Kubernetes YAML - you can use cdk8s to define applications for any Kubernetes cluster running anywhere.

Add imports by running
```
npm run import
```

Generate the k8s manifest by running 
``` sh
npm run compile && cdk8s synth
```
then check the folder dist