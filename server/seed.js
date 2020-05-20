const fs = require('fs');
const path = require('path');

function main() {
  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
  );
}

main();
