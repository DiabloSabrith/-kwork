import { useState } from 'react';
import { Dropdown } from '../../ui/Dropdown/Dropdown';
import styles from './TableRowes.module.css';
const positions = ['Дизайнер', 'Front end разработчик', 'Back end разработчик'];

export default function TableRow() {
  const [position, setPosition] = useState('Дизайнер');

  return (
   <tr className={styles.row}>
  <td className={styles.cell}>13619</td>
  <td className={styles.cell}>Админ</td>
  <td className={styles.cell}>Александр</td>
  <td className={styles.cell}>someDesigner</td>
  <td className={styles.cell}>
    <Dropdown
      options={positions}
      value={position}
      onChange={setPosition}
    />
  </td>
  <td className={styles.cell}>@test</td>
  <td className={styles.cell}>test@test.ru</td>
  <td className={styles.cell}>+7 999 999 99 99</td>
  <td className={styles.cell}>Нижний Новгород</td>
</tr>

  );
}
