export type IErrorResponse = {
  message: string;
  status: number;
} | {
  message: {
    [key: string]: string[];
  };
  status: 422;
}

