<?php

/**
 * Class Humans
 */
class Humans implements Observer
{

    /**
     * @param News $news
     * @return mixed|void
     */
    public function update(News $news)
    {
        $information = $news->getNews();
        $this->readNews($information);
    }

    /**
     * @param $information
     */
    public function readNews($information)
    {
        echo "Humans reading $information";
    }
}