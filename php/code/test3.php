<?
$start = microtime(true);

$length = 100000;
$string = "";
for ($i = 0; $i < $length; $i++) {
    $string .= chr(rand(97, 122));
}

$uppercase = strtoupper($string);

$time = microtime(true) - $start;
echo "PHP 8.2: Czas wykonania: " . number_format($time, 9) . " sekund.\n";