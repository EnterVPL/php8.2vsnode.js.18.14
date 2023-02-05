# /bin/sh
docker-compose up -d --build --force-recreate
echo ""

echo "Test silnia(20):"
docker-compose run php php -f /home/php/code/test1.php
docker-compose run node /home/node/code/test1.js
echo ""

echo "Znajdź największą liczbę z przedziału 1-100000:"
docker-compose run php php -f /home/php/code/test2.php
docker-compose run node /home/node/code/test2.js
echo ""

echo "Losowy ciąg znaków i przekształcenie go na duże litery:"
docker-compose run php php -f /home/php/code/test2.php
docker-compose run node /home/node/code/test2.js
echo ""