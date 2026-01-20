import { useState } from "react";
import styles from './TableFooter.module.css';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
export default function TableFooter() {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3, 4, 5];

  return (
    <tfoot>
      <tr>
        <td colSpan={3}>
          <div className={styles.footerWrapper}>
           

            <div className={styles.pagination}>
              <button
                className={styles.button}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              >
           <ChevronLeft size={14} />
              </button>

              {pages.map(page => (
                <button
                  key={page}
                  className={`${styles.button} ${
                    page === currentPage ? styles.active : ""
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              <span className={styles.dots}>…</span>

              <button
                className={styles.button}
                onClick={() => setCurrentPage(30000)}
              >
                30000
              </button>

              <button
                className={styles.button}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
             <ChevronRight size={14} />
              </button>
            </div>
          </div>
           <div className={styles.info}>
              Показано 1–20 из 30 000 пользователей
            </div>
        </td>
      </tr>
    </tfoot>
  );
}
