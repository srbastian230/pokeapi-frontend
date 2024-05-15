export interface ResponseData<D> {
  count: number;
  next: string;
  previous: string;
  results: D[];
}
