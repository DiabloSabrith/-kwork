import { Settings } from 'lucide-react';
import styles from './SettingButton.module.css';
export default function SettingButton() {
  return (
    <button className={styles.button}><Settings size={16}   strokeWidth={2.5}/></button>
  )
}
