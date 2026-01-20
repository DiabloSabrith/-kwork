import React from 'react'
import styles from "./FilterButton.module.css"
import { Funnel } from 'lucide-react'
export default function FilterButton() {
  return (
    <button className={styles.button}><Funnel  strokeWidth={2.5} size={16} /></button>
  )
}
