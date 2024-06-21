export type Directions = 'RT' | 'RB' | 'LT' | 'LB';

export type BlockProps = {id: string, l: number, b: number};

export type RowsArray = Row[];
export type Row = Block[];
export type Block = { id: string };
