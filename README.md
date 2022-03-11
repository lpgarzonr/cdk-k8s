# cdk-k8s
After the awesome k8s training provided by SAP I got curios to try CDK for kubernetes

Add imports by running
```
npm run import
```

Generate the k8s manifest by running 
``` sh
npm run compile && cdk8s synth
```
then check the folder dist