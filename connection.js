pool.getConnection()
  .then(async (connection) => {
    const [rows] = await connection.execute('SELECT 1');
    console.log('Query result:', rows);
    connection.release();
  })
  .catch((error) => {
    console.error('Error connecting to MySQL database:', error);
  });