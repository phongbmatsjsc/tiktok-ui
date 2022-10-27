import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

function SearchResult({ seachResult }) {
    return (
        <>
            {seachResult.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
        </>
    );
}

export default memo(SearchResult);
