const date = new Date();

export const dateKoreanFormat = date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일';

export const dateYMDFormat = date.toISOString().split('T')[0];
