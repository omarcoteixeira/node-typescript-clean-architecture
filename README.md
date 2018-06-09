[![CircleCI](https://circleci.com/gh/omarcoteixeira/node-typescript-clean-architecture/tree/master.svg?style=svg)](https://circleci.com/gh/omarcoteixeira/node-typescript-clean-architecture/tree/master)
[![codecov](https://codecov.io/gh/omarcoteixeira/node-typescript-clean-architecture/branch/master/graph/badge.svg)](https://codecov.io/gh/omarcoteixeira/node-typescript-clean-architecture)
[![sonar](https://sonarcloud.io/api/project_badges/measure?project=node-typescript-clean-architecture&metric=alert_status)](https://sonarcloud.io/api/project_badges/measure?project=node-typescript-clean-architecture&metric=alert_status)

# Node (Typescript) Application Server using Clean Architecture


### Run Sonar Cloud
```sh
docker run -ti -v $(pwd):/root/src omarcoteixeira/docker-sonar-scanner:v1 sonar-scanner \
  -Dsonar.projectBaseDir=/root/src \
  -Dsonar.projectKey=node-typescript-clean-architecture \
  -Dsonar.organization=omarcoteixeira-github \
  -Dsonar.sources=. \
  -Dsonar.host.url=https://sonarcloud.io \
  -Dsonar.login=$SONAR_SCANNER_LOGIN
```