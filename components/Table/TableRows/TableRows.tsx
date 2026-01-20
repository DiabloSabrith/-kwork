import { useState } from 'react';
import { Dropdown } from '../../ui/Dropdown/Dropdown';
import { User, positions } from '../../../config/tableData';
import styles from './TableRowes.module.css';

interface TableRowProps {
  user: User;
}

export default function TableRow({ user }: TableRowProps) {
  const [position, setPosition] = useState(user.position);

  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{user.id}</td>
      <td className={styles.cell}>{user.role}</td>
      <td className={styles.cell}>{user.name}</td>
      <td className={styles.cell}>{user.username}</td>
      <td className={styles.cell}>
        <Dropdown options={positions} value={position} onChange={setPosition} />
      </td>
      <td className={styles.cell}>{user.telegram}</td>
      <td className={styles.cell}>{user.email}</td>
      <td className={styles.cell}>{user.phone}</td>
      <td className={styles.cell}>{user.city}</td>
    </tr>
  );
}
