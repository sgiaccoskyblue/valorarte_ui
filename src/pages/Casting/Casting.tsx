import { FC } from 'react';
import Filters from './Filters';
import Header from './Header';
import List from './List';

const Casting: FC = () => {
    return (
        <div>
            <Header />
            <Filters />
            <List />
        </div>
    );
};

export default Casting;
