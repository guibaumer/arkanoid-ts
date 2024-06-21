import { RowsArray } from '../../interfaces/interfaces';

type BlocksProps = {
  rows: RowsArray;
  didLose: boolean;
}

export default function Blocks({ rows }: BlocksProps) {
  const containerWidth = 500;
  const blockWidth = 32;
  
  return (
    <>
      {rows.map((row, rowIndex) => {
        const totalRowWidth = row.length * blockWidth;
        const startX = (containerWidth - totalRowWidth) / 2;

        return row.map((block, i) => {
          if (!block) {
            return <div
            key={`null-${i}`}
            className="null"
            style={{
              left: `${startX + i * blockWidth}px`,
              top: `${(rowIndex + 1) * (blockWidth + 1)}px`,
              position: 'absolute',
            }}
          />
          }

          return (<div
            key={`${block.id}`}
            id={`b-${block.id}`}
            className="block"
            style={{
              left: `${startX + i * blockWidth}px`,
              top: `${(rowIndex + 1) * (blockWidth + 1)}px`,
              position: 'absolute',
            }}
          />);
      });
      })}
    </>
  )
}