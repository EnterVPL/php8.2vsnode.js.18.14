<?
$array = range(1, 100000);

$start = microtime(true);

$max = $array[0];
foreach ($array as $value) {
  if ($value > $max) {
    $max = $value;
  }
}

$time = microtime(true) - $start;
echo "PHP 8.2: Czas wykonania:\t" . number_format($time, 9) . " sekund.\n";