export const database = {
  users: [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
  ],
};

export function miPromesa(idSend) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (database.users.id == idSend) {
        resolve(`${database.users[idSend - 1]}`);
      } else {
        reject("User not found.");
      }
    }, "2000");
  });
}

miPromesa(2).then((result) => {
  console.log(result)});