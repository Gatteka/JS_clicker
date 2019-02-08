<?php


class SimpleCoffee implements Coffee
{
    private static $COST = 15;

    function getCost()
    {
        return self::$COST;
    }

    function getDescription()
    {
        return 'Vanilla coffee';
    }

    function serviceToClient()
    {
        return 'Take your coffee!';
    }
}