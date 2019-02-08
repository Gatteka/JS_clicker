<?php

/**
 * Class MilkCoffee
 */
class MilkCoffee implements Coffee,Decorator
{
    /**
     * @var Coffee
     */
    private $coffee;

    private static $MILK_COST = 5;

    /**
     * MilkCoffee constructor.
     * @param Coffee $coffee
     */
    public function __construct(Coffee $coffee)
    {
        $this->coffee = $coffee;
    }

    /**
     * @return mixed
     */
    function getCost()
    {
        return $this->coffee->getCost() + self::$MILK_COST;
    }

    /**
     * @return string
     */
    function getDescription()
    {
        return $this->coffee->getDescription() . " with milk";

    }

    /**
     * @return mixed
     */
    function serviceToClient()
    {
        return $this->coffee->serviceToClient();
    }


}