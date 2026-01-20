import TableRow from "../TableRows/TableRows";

const users = new Array(2).fill(null);

export default function TableBody() {
  return (
    <tbody>
      {users.map((_, i) => (
        <TableRow key={i} />
      ))}
    </tbody>
  );
}
