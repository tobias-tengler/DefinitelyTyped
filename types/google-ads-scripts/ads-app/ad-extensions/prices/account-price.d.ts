declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface AccountPrice extends Price {}

        interface AccountPriceIterator extends Base.Iterator<AccountPrice> {}

        interface AccountPriceSelector
            extends
                Base.Selector<AccountPriceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit
        {}
    }
}
