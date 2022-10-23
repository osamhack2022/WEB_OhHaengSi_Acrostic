export type RankName =
  | ''
  | '이등병'
  | '일병'
  | '상병'
  | '병장'
  | '하사'
  | '중사'
  | '상사'
  | '원사'
  | '준위'
  | '소위'
  | '중위'
  | '대위'
  | '소령'
  | '중령'
  | '대장'
  | '준장'
  | '소장'
  | '중장'
  | '대장';

export const RankNames: RankName[] = [
  '',
  '이등병',
  '일병',
  '상병',
  '병장',
  '하사',
  '중사',
  '상사',
  '원사',
  '준위',
  '소위',
  '중위',
  '대위',
  '소령',
  '중령',
  '대장',
  '준장',
  '소장',
  '중장',
  '대장',
];

export default function rankToString(rank: number) {
  return RankNames[rank];
}
