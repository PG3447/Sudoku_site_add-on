<link rel="stylesheet" href="style.css">
<div class="form-group">
<form method="post">
<input id="inp" type="number" min="1" max="10" name="trudnosc" placeholder="Poziom trudnosc: 1 - 10">
<input id="wyslii" type="submit" name="ok" value="nowy">
</form>
</div>
<?php
session_start();
@$nowy = $_POST['ok'];
@$spraw = $_POST['spra'];
@$sudoku = $_POST['wartosc'];

$wygrana = true;


if ($spraw == "Sprawdz") {
	$wynik = $_SESSION["wynik"];
	$zle = 0;
	for ($i = 0; $i < 81; $i++) {
		if ($sudoku[$i] != $wynik[$i]) {
			$wygrana = false;
			$zle++;
		}
	}
	if ($wygrana) {
		echo "<h1>Brawo<h1>";
	} else {
		echo "<h1>Ilosc bledow: ".$zle."<h1>";
	}
}

if ($nowy == "nowy") {
	$zmienne = ' ';
	$poziomtrudnosc = 5;
	@$poziomtrudnosc = $_POST['trudnosc'];
	$key = rand(1,200);
	$zmienne = $zmienne.$poziomtrudnosc.' '.$key;
	$handle = popen('przekazywanie'.$zmienne, 'r');
	$wynik = [];
	$i = 0;
	$start = false;
	$wczytywanie = false;
	while(!feof($handle)) {
		$line = fgets($handle);
		if ($line == $key."sudoku\n") {
			$start = true;
		}
		if ($line == $key."wyswietlone\n") {
			$wczytywanie = false;
		}
		if ($wczytywanie) {
			echo $line;
		}
		if ($line == $key."koniec\n") {
			$start = false;
			$wczytywanie = true;
		}
		if ($start) {
			$wynik[$i] =  substr($line, 0, -1);
			$i++;
		}
		
	}
	pclose($handle);
	array_splice($wynik, 0, 1);
	$_SESSION["wynik"] = $wynik;
}

?>
<script type="text/javascript" src="sudoku.js"></script>
