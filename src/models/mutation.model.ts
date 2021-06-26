import { Column, Model, Table, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table({ tableName: 'mutation' })
export class MutationModel extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column(DataType.JSON)
  dna: any;

  @Column({ defaultValue: false, field: 'has_mutation' })
  hasMutation: boolean;

  @Column({ field: 'created_at' })
  @CreatedAt
  createdAt: Date;

  @Column({ field: 'updated_at' })
  @UpdatedAt
  updatedAt: Date;

  @Column({ field: 'deleted_at' })
  @DeletedAt
  deletedAt: Date;
}