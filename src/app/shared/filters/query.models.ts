export interface Query<TModel> {
  name: string;
  predicate: (model: TModel) => boolean;
}

export interface QueryModel extends Query<any> {
  name: string;
  predicate: (model: any) => boolean;
}
