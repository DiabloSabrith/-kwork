import TableRow from '../TableRows/TableRow';
import { users } from '../../../config/tableData';

export default function TableBody() {
  return (
    <tbody>
      {users.map((user) => (
        <TableRow key={user.id} user={user} />
      ))}
    </tbody>
  );
}
