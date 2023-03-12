import { ClassField } from '../../../core/entity/class';

type dto = {
  [ClassField.Capacity]: number;
  [ClassField.Classroom]: number;
  [ClassField.Initials]: string;
  [ClassField.MaxAge]: number;
  [ClassField.StudentQuantity]: number;
};

export type ICreateClass = {
  handle(data: dto): Promise<void>;
};
