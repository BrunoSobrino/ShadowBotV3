#!bin/bash
pkg update -y
pkg upgrade -y

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"Estas seguro que quieres actualizar ShadowBotV3 orion? [s/n]"
read -p "> " opts

if [ $opts = "s" ]; then

clear
echo $YELLOW"Atualizando o brizas orion, aguarde..."
git clone https://github.com/BrunoSobrino/ShadowBotV3 > /dev/null 2> /dev/null

cd ShadowBotV3
cp -r * ..
cd ..
rm -rf ShadowBotV3
npm i

clear
echo $GREEN"ShadowBotV3 orion atualizado com sucesso!!"

elif [ $opts = "n"]; then
    clear
    echo $RED"Atualização do ShadowBotV3 orion abortada"
    exit
fi
