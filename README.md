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

Compile:
    npm run compile     Compile typescript code to javascript (or "yarn watch")
    npm run watch       Watch for changes and compile typescript in the background
    npm run build       Compile + synth

Synthesize:
    npm run synth       Synthesize k8s manifests from charts to dist/ (ready for 'kubectl apply -f')

Deploy:
    kubectl apply -f dist/

Upgrades:
    npm run import        Import/update k8s apis (you should check-in this directory)
    npm run upgrade       Upgrade cdk8s modules to latest version
    npm run upgrade:next  Upgrade cdk8s modules to latest "@next" version (last commit)