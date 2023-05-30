@echo off

echo Logando no Git
git config --global user.name "gabrielmg7"
git config --global user.email "gabrielmouraguimaraes@gmail.com"

echo Clonando Projeto Git
cd "C:\Users\202302332137"
git clone "https://github.com/gabrielmg7/taponto-app"
cd "C:\Users\202302332137\taponto-app"

echo Atualizando o NPM
npm install -g npm@9.6.7

echo Instalando o Expo
npm install expo-cli --global

echo Instalando npm-check
npm install -g npm-check

echo Clonando Projeto Git
cd "C:\Users\202302332137"
git clone "https://github.com/gabrielmg7/taponto-app"

echo Instalando Depend^ncias
cd "C:\Users\202302332137\taponto-app"
npm install

echo Abrindo VSCode
code .