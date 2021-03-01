import fire from "../../firebase/firebaseConfig"

export const fetchChocos = () => {
    const res = new Promise((resolve) => {
      let arr = [];
      const db = fire.database().ref("AllChoco");
      db.on("value", (snapshot) => {
        snapshot.forEach((choco) => {
          let item = choco.val();
          item.key = choco.key;
          arr.push(item);
        });
        resolve(arr);
      });
    });
    return res
  };