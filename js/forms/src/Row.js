export function Row({ children }) {
  return (
    <div className="overflow-hidden mb3">
      <div className="flex-l nl2 nr2">{children}</div>
    </div>
  );
}

export default Row;
