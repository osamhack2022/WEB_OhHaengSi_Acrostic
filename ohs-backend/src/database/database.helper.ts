import { DataSource, EntityTarget } from "typeorm";

export function genProvider<ObjectLiteral>(repoName: string, modelClass: EntityTarget<ObjectLiteral>) {
  return [
    {
      provide: repoName,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(modelClass),
      inject: ['DATA_SOURCE'],
    },
  ];
}
