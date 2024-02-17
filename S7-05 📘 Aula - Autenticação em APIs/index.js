const userData = {
    "username": "Mandiwi",
    "email": "amandard94@gmail.com",
    "avatarUrl": "https://i.pinimg.com/originals/f7/89/69/f78969a7b4d662cf9b7224afe920c1d6.jpg",
    "password": "Mandiwi123"
}

// {
// 	"id": 43,
// 	"email": "amandard94@gmail.com",
// 	"username": "Mandiwi",
// 	"avatarUrl": "https://i.pinimg.com/originals/f7/89/69/f78969a7b4d662cf9b7224afe920c1d6.jpg"
//	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hbmRpd2kiLCJpYXQiOjE2NTcwMzkwMTQsImV4cCI6MTY1NzA0OTgxNH0.4mQ1PqnB6pIAswMtgDgeJerrqFuMizP5yt35tNMCsFM"
// }

const baseUrl = "https://blog-m2.herokuapp.com";
  const login = async (data) => {
    const response = await fetch(baseUrl + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const token = await response.json();

    return token;
};

const data = {
email: "amandard94@gmail.com",
password: "Mandiwi123"
}