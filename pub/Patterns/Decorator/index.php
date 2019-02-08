<?php

spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});

$coffee1 = new SimpleCoffee;
echo "You need to pay " . $coffee1->getCost();
echo "</br>";
echo $coffee1->getDescription();
echo "</br>";
echo $coffee1->serviceToClient();
echo "</br>";

$coffee1 = new MilkCoffee($coffee1);
echo "You need to pay " . $coffee1->getCost();
echo "</br>";
echo $coffee1->getDescription();
echo "</br>";
echo $coffee1->serviceToClient();
echo "</br>";

$coffee1 = new ChocolateCoffee($coffee1);
echo "You need to pay " . $coffee1->getCost();
echo "</br>";
echo $coffee1->getDescription();
echo "</br>";
echo $coffee1->serviceToClient();
echo "</br>";