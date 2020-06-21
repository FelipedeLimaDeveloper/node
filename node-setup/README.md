# Node-setup using TS

## 1 - Install typescript as devDependencie

## 2 - Install express

## 3 - Install @types/express as devDependencie, this package contains type definitions for Express.

## 4 - Install ts-node-dev as devDependencie, it restarts target node process when any of required files changes (as standard node-dev) but shares Typescript compilation process between restarts. This significantly increases speed of restarting comparing to node-dev -r ts-node/register ..., nodemon -x ts-node ... variations because there is no need to instantiate ts-node compilation each time.

## 5 - Add a script using the ts-node-dev to execute the \*.ts file
