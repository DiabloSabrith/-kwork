import { useState } from 'react';
import styles from './SearchInput.module.css';
import { Eye } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Найти пользователя"
        className={styles.input}
      />
      {!value && (
        <span className={styles.icon}>
          <Eye size={16} strokeWidth={2.5} />
        </span>
      )}
    </div>
  );
};