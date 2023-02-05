<?
$start = microtime(true);

function factorial($n)
{
    if ($n === 0) {
        return 1;
    }
    return $n * factorial($n - 1);
}

$result = factorial(20);

$time = microtime(true) - $start;
echo "PHP 8.2: Czas wykonania:\t" . number_format($time, 9) . " sekund.\n";