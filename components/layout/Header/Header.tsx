import { useState } from 'react';
import { SearchInput } from '../../ui/SearchInput/SearchInput';
import styles from './Header.module.css';
import FilterButton from '../../ui/FilterButton/FilterButton';
import SettingButton from '../../ui/SettingButton/SettingButton';
import UserAddButton from '../../ui/UserAddButton/UserAddButton';

export default function Header() {
  const [query, setQuery] = useState('');

  return (
    <header>
      <p>
        <span>Данные </span>/ Пользователи
      </p>
      <h1>Пользователи</h1>

      <div className={styles.userToolbar}>
        <div className={styles.userControls}>
          <SearchInput value={query} onChange={setQuery} />
          <div className={styles.controls}>
            | <SettingButton />
            <FilterButton />
          </div>
        </div>
        <div>
          <UserAddButton />
        </div>
      </div>
    </header>
  );
}
