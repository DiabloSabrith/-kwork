import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';
import { DropdownProps } from './dropdown.interface';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
export const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.selected} onClick={() => setOpen(prev => !prev)}>
        {value || 'Выберите должность'}
        <span className={styles.arrow}>{open ? <ChevronUp />: <ChevronDown />}</span>
      </div>

      {open && (
        <ul className={styles.options}>
          {options.map(opt => (
            <li
              key={opt}
              className={styles.option}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              <span className={styles.check}>
                {value === opt ? '✔' : ''}
              </span>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
