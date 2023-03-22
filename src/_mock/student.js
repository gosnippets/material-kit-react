import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const students = [...Array(40)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  email: faker.internet.email(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned'])
}));

export default students;
