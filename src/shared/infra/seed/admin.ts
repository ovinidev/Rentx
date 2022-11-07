import { hash } from 'bcrypt';
import { v4 } from 'uuid';
import createConnection from '../../../database/index';

async function create() {
  const connection = await createConnection('localhost');

  const id = v4();
  const password = hash('admin', 10);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
      values('${id}, 'isAdmin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXX')
    `,
  );

  await connection.close();
}

create().then(() => console.log('User admin created'));
