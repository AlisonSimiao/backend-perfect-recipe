import { NotFoundException } from '@nestjs/common';

export const generateRandomString = (
  N: number = 40,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
): string => {
  let result = '';

  for (let i = 0; i < N; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

export const handlePaginateQuery = (query: Record<string, any>) => {
  const offset = +query['offset'] || 5;
  const page = +query['page'] || 1;

  return {
    ...query,
    offset,
    page,
  };
};

export const paginateResponse = (
  dados: any[],
  totalRegistros: number,
  registros?: number,
  pagina?: number,
) => {
  if (!dados.length) throw new NotFoundException('nenhum dado encontrado');

  return {
    dados,
    totalPaginas: Math.ceil(totalRegistros / (registros || 1)),
    pagina,
    registros,
  };
};
