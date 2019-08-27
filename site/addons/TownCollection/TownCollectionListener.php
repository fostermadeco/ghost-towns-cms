<?php

namespace Statamic\Addons\TownCollection;

use Statamic\API\Config;
use Statamic\API\Search;
use Statamic\Events\Stache\RepositoryItemInserted;
use Statamic\Events\Stache\RepositoryItemRemoved;
use Statamic\Extend\Listener;
use Statamic\Stache\Stache;

/**
 * Class TownCollectionListener
 * @package Statamic\Addons\TownCollection
 *
 * This is almost an exact copy of \Statamic\Addons\Search\SearchListener,
 * but is specifically updates the collections_towns index
 */
class TownCollectionListener extends Listener
{
    /**
     * @var array
     */
    public $events = [
        RepositoryItemInserted::class => 'insert',
        RepositoryItemRemoved::class => 'remove',
    ];

    /**
     * @var Stache
     */
    private $stache;

    /**
     * @param Stache $stache
     */
    public function __construct(Stache $stache)
    {
        $this->stache = $stache;
    }

    public function insert(RepositoryItemInserted $event)
    {
        if (! Config::get('search.auto_index')) {
            return;
        }

        // If the cache was cleared, all the content will be re-added, triggering this event for each item.
        // Typically, these will be considered 'false positives' since the search index probably has the
        // same content. If using an API driver like Algolia, there would be an API request for each
        // item, which would be nuts. So, while the Stache is warming up, we'll disable indexing.
        if ($this->stache->isCold()) {
            return;
        }

        $content = $event->item;

        if (! is_object($content) || ! method_exists($content, 'toSearchableArray')) {
            return;
        }

        foreach (Config::getLocales() as $locale) {
            try {
                Search::in('collections/towns', $locale)->insert(
                    $event->id,
                    $content->in($locale)->toSearchableArray(Config::get('search.searchable'))
                );
            } catch (\Exception $e) {
                \Log::error("There was an error while updating the search index.");
                \Log::error($e);
            }
        }
    }

    public function remove(RepositoryItemRemoved $event)
    {
        if (! Config::get('search.auto_index')) {
            return;
        }

        $content = $event->item;

        if (! is_object($content) || ! method_exists($content, 'id')) {
            return;
        }

        Search::delete($event->id);
    }
}
