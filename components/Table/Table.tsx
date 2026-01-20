
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import TableFooter from './TableFooter/TableFooter'
import styles from './Table.module.css';
export default function Table() {
  return (
    <section className={styles.tableWrapper}>
      <table  className={styles.table}>
       <TableHeader/>
       <TableBody/>
       <TableFooter/>
      </table>
    </section>
  )
}
